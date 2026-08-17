import qs from "qs";
import { nestedParentPopulateWithFields, MAX_ANCESTOR_DEPTH } from "@/utils/staticPagePath";

// Deliberately narrow: only the fields needed to render a footer link
// (title + slug chain for the path), not full page content/SEO -- keeps
// this lightweight regardless of how many pages exist in total, since it's
// filtered to just the ones flagged `show_in_footer`.
const footerPagesPopulate = qs.stringify(
  {
    fields: ["title", "slug", "footer_column", "footer_order"],
    populate: {
      parent_page: nestedParentPopulateWithFields(MAX_ANCESTOR_DEPTH),
    },
    sort: ["footer_order:asc", "title:asc"],
  },
  { encodeValuesOnly: true },
);

export default footerPagesPopulate;
