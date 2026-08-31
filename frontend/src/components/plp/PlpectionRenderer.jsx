import ProductListing from "./ProductListing";
import {
  FeatureHighlights,
  ReadMoreContent,
  FAQSection,
  BannerInfo,
  NewsletterSignup,
} from "@/components/common/SharedComponents";

const componentMap = {
  "grids.feature-highlights": FeatureHighlights,
  "content-blocks.read-more-content": ReadMoreContent,
  "content-blocks.faq": FAQSection,
  "banners.banner-info": BannerInfo,
  "plp.product-listing": ProductListing,
  "forms.newsletter": NewsletterSignup,
};

export default function PlpSectionRenderer({ section, commerce }) {
  const Component = componentMap[section.__component];

  if (!Component) {
    return null;
  }

  return <Component data={section} commerce={commerce} />;
}
