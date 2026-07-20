import ProductListing from "./ProductListing";
import FeatureHighlights from "../homePage/FeatureHighlights";
import GuideSection from "./GuideSection";
import ReadMoreContent from "./ReadMoreContent";
import FAQSection from "./FAQSection";
import BannerInfo from "./BannerInfo";

const componentMap = {
  "plp.product-listing": ProductListing,
  "sections.feature-highlights": FeatureHighlights,
  "plp.guide-section": GuideSection,
  "plp.read-more-content": ReadMoreContent,
  "plp.faq": FAQSection,
  "plp.banner-info": BannerInfo
};

export default function PlpSectionRenderer({
  section,
  commerce,
}) {
  const Component = componentMap[section.__component];

  if (!Component) {
    console.log("No component found:", section.__component);
    return null;
  }

  console.log('rendrere-',section, commerce);

  return (
    <Component
      data={section}
      commerce={commerce}
    />
  );
}