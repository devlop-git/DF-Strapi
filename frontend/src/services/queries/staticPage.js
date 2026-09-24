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
  "sections.image-text-section": {
    populate: {
      desktopImage: true,
      tabImage: true,
      mobileImage: true,
    },
  },
  "grids.feature-highlights": {
    populate: {
      items: {
        populate: {
          desktopIcon: true,
          mobileIcon: true,
          tabIcon: true,
          lines: true,
        },
      },
    },
  },
  "grids.image-grid": {
    populate: {
      items: {
        populate: {
          image: true,
        },
      },
    },
  },
  "grids.promotion-banner-grid": {
    populate: {
      items: {
        populate: {
          desktopBgImage: true,
          mobileBgImage: true,
          tabBgImage: true,
        },
      },
    },
  },
  "banners.promotion-banner": {
    populate: {
      desktopBgImage: true,
      mobileBgImage: true,
      tabBgImage: true,
    },
  },
  "social-proof.reviews": {
    populate: "*",
  },
  "carousels.instagram-feed": {
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
  "forms.newsletter": {
    populate: "*",
  },
  "forms.cancel-order-form": {
    populate: "*",
  },
  "forms.contact-us-form": {
    populate: "*",
  },
  "content-blocks.link-chips": {
    populate: {
      chips: true,
    },
  },
  "grids.image-overlay-grid": {
    populate: {
      items: {
        populate: "*",
      },
    },
  },
  "content-blocks.read-more-content": {
    populate: "*",
  },
  "banners.banner-info": {
    populate: "*",
  },
  "banners.image-banner": {
    populate: {
      desktopImage: true,
      tabImage: true,
      mobileImage: true,
    },
  },
  "tables.comparison-table": {
    populate: {
      columns: true,
      rows: {
        populate: {
          values: true,
        },
      },
    },
  },
  "plp.banner-configuration": {
    populate: "*",
  },
  "content-blocks.rich-text": {
    populate: "*",
  },
  "content-blocks.faq": {
    populate: {
      faqItem: {
        populate: "*",
      },
      image: true,
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
