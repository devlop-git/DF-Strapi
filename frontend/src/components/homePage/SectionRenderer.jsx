import HeroCarousel from "./HeroCarousel";
import ImageTextSection from "./ImageTextSection";
import {
  FeatureHighlights,
  ImageGrid,
  PromotionBanner,
  ReviewsSection,
  InstagramFeed,
  NewsletterSignup,
  ImageCardCarousel,
} from "@/components/common/SharedComponents";

const componentMap = {
  "sections.new-home-page": HeroCarousel,
  "sections.image-text-section": ImageTextSection,
  "grids.feature-highlights": FeatureHighlights,
  "grids.image-grid": ImageGrid,
  "banners.promotion-banner": PromotionBanner,
  "social-proof.reviews": ReviewsSection,
  "carousels.instagram-feed": InstagramFeed,
  "forms.newsletter": NewsletterSignup,
  "carousels.image-card-carousel": ImageCardCarousel,
};

export default function SectionRenderer({ section }) {
  const Component = componentMap[section.__component];
  if (!Component) {
    console.log("No component found");
    return null;
  }
  return <Component data={section} />;
}
