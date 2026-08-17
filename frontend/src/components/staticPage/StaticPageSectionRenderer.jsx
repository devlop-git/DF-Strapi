import HeroCarousel from "@/components/homePage/HeroCarousel";
import FeaturedCategory from "@/components/homePage/FeaturedCategory";
import ImageTextSection from "@/components/homePage/ImageTextSection";
import FeatureHighlights from "@/components/homePage/FeatureHighlights";
import PromotionBanner from "@/components/homePage/PromotionBanner";
import ReviewsSection from "@/components/homePage/ReviewsSection";
import InstagramFeed from "@/components/homePage/InstagramFeed";
import NewsletterSignup from "@/components/common/SharedComponents/NewsletterSignup";
import GuideSection from "@/components/plp/GuideSection";
import ReadMoreContent from "@/components/plp/ReadMoreContent";
import FAQSection from "@/components/plp/FAQSection";
import BannerInfo from "@/components/plp/BannerInfo";

// Reuses the exact same block components already used by home-pages
// (SectionRenderer.jsx) and plp-pages (PlpectionRenderer.jsx) -- one shared
// map here rather than a third copy, until those get pulled into a common
// folder. `plp.product-listing` is intentionally not included; see
// queries/staticPage.js for why.
const componentMap = {
  "sections.new-home-page": HeroCarousel,
  "sections.featured-categories": FeaturedCategory,
  "sections.image-text-section": ImageTextSection,
  "sections.feature-highlights": FeatureHighlights,
  "sections.promotion-banner": PromotionBanner,
  "sections.reviews": ReviewsSection,
  "sections.instagram-feed": InstagramFeed,
  "sections.newsletter": NewsletterSignup,
  "plp.guide-section": GuideSection,
  "plp.read-more-content": ReadMoreContent,
  "plp.faq": FAQSection,
  "plp.banner-info": BannerInfo,
};

export default function StaticPageSectionRenderer({ section }) {
  const Component = componentMap[section.__component];
  if (!Component) return null;
  return <Component data={section} />;
}
