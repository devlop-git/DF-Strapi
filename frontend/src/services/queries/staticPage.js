import qs from "qs";
import { MAX_ANCESTOR_DEPTH, nestedParentPopulate } from "@/utils/staticPagePath";

export { MAX_ANCESTOR_DEPTH };

// Same block set already used by home-pages (queries/homepage.js) and
// plp-pages (queries/plpPage.js), reused as-is rather than duplicated --
// business can drop any of these blocks into a static page's
// `component_content` dynamic zone. `plp.product-listing` is deliberately
// excluded: it renders live product/commerce data (via a `commerce` prop
// this route never fetches), not general CMS content, per CLAUDE.md's
// Commerce-vs-Strapi split.
const componentContentOn = {
  "sections.new-home-page": {
    populate: {
      heroSlides: {
        populate: {
          desktopImage: true,
          mobileImage: true,
          tabImage: true,
        },
      },
    },
  },
  "sections.featured-categories": {
    populate: "*",
  },
  "sections.image-text-section": {
    populate: {
      desktopImage: true,
      tabImage: true,
      mobileImage: true,
    },
  },
  "sections.feature-highlights": {
    populate: {
      items: {
        populate: {
          desktopIcon: true,
          mobileIcon: true,
          tabIcon: true,
        },
      },
    },
  },
  "sections.promotion-banner": {
    populate: {
      desktopBgImage: true,
      mobileBgImage: true,
      tabBgImage: true,
    },
  },
  "sections.reviews": {
    populate: "*",
  },
  "sections.instagram-feed": {
    populate: {
      posts: {
        populate: {
          desktopInstaImage: true,
          mobileInstaImage: true,
          tabInstaImage: true,
        },
      },
    },
  },
  "sections.newsletter": {
    populate: "*",
  },
  "plp.guide-section": {
    populate: {
      guideItem: {
        populate: {
          desktopIcon: true,
          mobileIcon: true,
          tabIcon: true,
        },
      },
    },
  },
  "plp.read-more-content": {
    populate: "*",
  },
  "plp.banner-info": {
    populate: "*",
  },
  "plp.banner-configuration": {
    populate: "*",
  },
  "plp.faq": {
    populate: {
      faqItem: {
        populate: "*",
      },
    },
  },
};

const staticPagePopulate = qs.stringify(
  {
    populate: {
      parent_page: nestedParentPopulate(MAX_ANCESTOR_DEPTH),
      component_content: { on: componentContentOn },
      market: true,
    },
  },
  { encodeValuesOnly: true },
);

export default staticPagePopulate;
