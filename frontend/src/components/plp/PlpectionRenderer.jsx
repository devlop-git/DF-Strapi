import FeatureHighlights from "../homePage/FeatureHighlights";
import GuideSection from "./GuideSection";
import ReadMoreContent from "./ReadMoreContent";
import FAQSection from "./FAQSection";
import BannerInfo from "./BannerInfo";
import ProductListing from "./ProductListing";

const componentMap = {
  "sections.feature-highlights": FeatureHighlights,
  "plp.guide-section": GuideSection,
  "plp.read-more-content": ReadMoreContent,
  "plp.faq": FAQSection,
  "plp.banner-info": BannerInfo,
  "plp.product-listing": ProductListing,
};

export default function PlpSectionRenderer({ section, commerce }) {
  const Component = componentMap[section.__component];

  if (!Component) {
    return null;
  }

  return <Component data={section} commerce={commerce} />;
}
