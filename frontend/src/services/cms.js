import axios from "axios";
import homePopulate from "./queries/homepage";
import plpPopulate from "./queries/plpPage";
import staticPagePopulate, { MAX_ANCESTOR_DEPTH } from "./queries/staticPage";

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
    title: page.title,
    content: page.content,
    seoTitle: page.seo_title,
    seoDescription: page.seo_description,
    breadcrumbItems,
    componentContent: page.component_content || [],
  };
}
