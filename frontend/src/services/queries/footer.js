import qs from "qs";

// Only active columns, in the order the Footer singleType curates them --
// this is what makes column set/order/heading fully Strapi-managed with no
// hardcoded list in the frontend.
const footerPopulate = qs.stringify(
  {
    populate: {
      logo: true,
      columns: {
        filters: { active: { $eq: true } },
        sort: ["order:asc"],
        fields: ["key", "heading", "order"],
      },
    },
  },
  { encodeValuesOnly: true },
);

export default footerPopulate;
