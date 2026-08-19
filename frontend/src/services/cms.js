import axios from "axios";
import homePopulate from "./queries/homepage";
import plpPopulate from "./queries/plpPage";
import qs from "qs";
import staticPagePopulate, { MAX_ANCESTOR_DEPTH } from "./queries/staticPage";
import footerPagesPopulate from "./queries/footerPages";
import {
  buildStaticPagePath,
  nestedParentPopulateWithFields,
} from "@/utils/staticPagePath";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
});

export async function getHomepage(locale, market) {
  const url = `/home-pages?filters[market][slug][$eq]=${market}&locale=${locale}&${homePopulate}`;
  const res = await api.get(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch homepage");
  }
  return res.data.data[0];
}

export async function getPLPLayout(locale) {
  const url = `/plp-pages?locale=${locale}&${plpPopulate}`;
  const res = await api.get(url);
  return res.data.data;
}

export async function getStaticPages(locale) {
  const url = `/static-pages?locale=${locale}&populate=*`;
  const res = await api.get(url);
  return res.data.data;
}

export async function getMarket() {
  const res = await api.get("/markets");
  return res.data.data;
}

// Resolves a catch-all URL (e.g. ["about-us", "contact-us"]) to a single
// static-page entry. The LAST segment is the page's own slug; every segment
// before it must match, in order, the slugs of its `parent_page` ancestor
// chain -- this also guards against two different pages in different
// branches happening to reuse the same leaf slug (e.g. two unrelated
// "contact-us" pages) resolving to the wrong one.
export async function resolveStaticPage(segments, locale, market) {
  const slug = segments[segments.length - 1];
  const url =
    `/static-pages?filters[slug][$eqi]=${slug}` +
    `&filters[market][slug][$eq]=${market}` +
    `&locale=${locale}` +
    `&${staticPagePopulate}`;

  const res = await api.get(url);
  const page = res.data.data?.[0];
  if (!page || !page.publishedAt) return null;

  // Strapi doesn't cascade the "published only" filter into populated
  // relations -- an unpublished parent's data can still come back attached
  // to a published child, so each ancestor's publish state is checked here,
  // explicitly. An unpublished parent means none of its descendants should
  // resolve either, even if the descendant itself is published.
  const ancestors = [];
  let node = page.parent_page;
  let depth = 0;
  while (node) {
    if (!node.publishedAt) return null;
    ancestors.push({ slug: node.slug, title: node.title });
    node = node.parent_page;
    depth += 1;
    if (depth > MAX_ANCESTOR_DEPTH) return null; // chain longer than expected -- don't trust a truncated match
  }

  const expectedParentSlugs = segments.slice(0, -1).map((s) => s.toLowerCase());
  const actualParentSlugs = [...ancestors].reverse().map((a) => a.slug.toLowerCase());
  const sameLength = expectedParentSlugs.length === actualParentSlugs.length;
  const sameSlugs =
    sameLength && expectedParentSlugs.every((seg, i) => seg === actualParentSlugs[i]);
  if (!sameSlugs) return null;

  let breadcrumbItems = null;
  if (page.show_breadcrumb !== false) {
    breadcrumbItems = [{ label: "Home", url: "/" }];
    let path = "";
    for (const ancestor of [...ancestors].reverse()) {
      path += `/${ancestor.slug}`;
      breadcrumbItems.push({ label: ancestor.title, url: path });
    }
    breadcrumbItems.push({ label: page.title });
  }

  return {
    documentId: page.documentId,
    title: page.title,
    content: page.content,
    seoTitle: page.seo_title,
    seoDescription: page.seo_description,
    breadcrumbItems,
    componentContent: page.component_content || [],
  };
}

// A static page's `slug` (and its ancestors') is itself a localized field --
// the same logical page has a different slug per locale (e.g. "about-us" vs
// "uber-uns"), sharing only its `documentId` across locales. Given the page
// (and its ancestor chain) already resolved in one locale, this looks up
// the same document in another locale and rebuilds the URL that locale's
// slug chain maps to -- returns null if that locale has no published
// version of the page (caller should fall back to that locale's homepage).
export async function getStaticPageLocalizedPath(documentId, locale) {
  // Uses the collection `find` route filtered by documentId rather than
  // the single-item `findOne` route (`/static-pages/:documentId`) --
  // Strapi's public role only has `find` enabled for static-page, so
  // `findOne` 403s.
  const query = qs.stringify(
    {
      filters: { documentId: { $eq: documentId } },
      locale,
      populate: { parent_page: nestedParentPopulateWithFields(MAX_ANCESTOR_DEPTH) },
    },
    { encodeValuesOnly: true },
  );
  const res = await api.get(`/static-pages?${query}`);
  const page = res.data.data?.[0];

  if (!page || !page.publishedAt) return null;
  return buildStaticPagePath(page);
}

// Pages "push" themselves into a footer column (a `show_in_footer` flag +
// `footer_column` relation on the page itself) rather than the footer
// "pulling" via a separate list -- one place to edit per page, and a page
// disappears from its column the moment it's unpublished or unflagged, with
// no second list to fall out of sync. Which columns exist, their heading,
// and their order are entirely Strapi-managed (`footer.columns`, see
// `getFooter`) -- this only groups pages by their column's documentId.
// Returns `{ [columnDocumentId]: [{ title, path }] }`.
export async function getFooterPages(locale, market) {
  const grouped = {};

  try {
    const url =
      `/static-pages?filters[show_in_footer][$eq]=true` +
      `&filters[locale][$eq]=${locale}` +
      `&filters[market][slug][$eq]=${market}` +
      `&${footerPagesPopulate}`;
    const res = await api.get(url);

    for (const page of res.data.data || []) {
      const columnId = page.footer_column?.documentId;
      if (!columnId) continue;
      (grouped[columnId] ??= []).push({
        title: page.title,
        path: buildStaticPagePath(page),
      });
    }
  } catch (err) {
    // `show_in_footer`/`footer_column` may not exist in Strapi yet --
    // degrade to empty columns rather than taking the whole footer (and
    // therefore every page on the site) down.
    if (err.response?.status !== 400) throw err;
  }

  return grouped;
}
