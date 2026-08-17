// Shared between anything that needs a static-page's ancestor chain:
// queries/staticPage.js and queries/footer.js use `nestedParentPopulate` to
// fetch it from Strapi (no arbitrary-depth/recursive self-relation populate
// exists in Strapi v5, so a fixed-depth nested populate is used instead of
// one HTTP round-trip per segment); `buildStaticPagePath` then turns an
// already-populated page object's `parent_page` chain into the actual URL
// a link to it should point at.
export const MAX_ANCESTOR_DEPTH = 6;

export function nestedParentPopulate(depth) {
  if (depth <= 0) return true;
  return { populate: { parent_page: nestedParentPopulate(depth - 1) } };
}

// `page` must have `parent_page` populated (nested, via the above) -- walks
// it root-first and joins with the page's own slug, e.g. a Valuations page
// whose parent is Customer Care becomes "/customer-care/valuations".
export function buildStaticPagePath(page) {
  const slugs = [page.slug];
  let node = page.parent_page;
  let depth = 0;
  while (node) {
    slugs.unshift(node.slug);
    node = node.parent_page;
    depth += 1;
    if (depth > MAX_ANCESTOR_DEPTH) break; // don't trust a truncated chain
  }
  return `/${slugs.join("/")}`;
}
