// Turns a display name into a URL-safe slug, e.g. "Engagement Rings" -> "engagement-rings".
// Used to build PLP/PDP breadcrumb & nav URLs until Commerce provides real slugs per category.
export function slugify(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
