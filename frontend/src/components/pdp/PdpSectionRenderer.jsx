import {
  FeatureHighlights,
  ImageGrid,
  PromotionBannerGrid,
  ReviewsSection,
  InstagramFeed,
  NewsletterSignup,
  ImageCardCarousel,
  ImageTextSection
} from "@/components/common/SharedComponents";

const componentMap = {
  "grids.feature-highlights": FeatureHighlights,
  "sections.image-text-section": ImageTextSection,
  "grids.image-grid": ImageGrid,
  "grids.promotion-banner-grid": PromotionBannerGrid,
  "social-proof.reviews": ReviewsSection,
  "carousels.instagram-feed": InstagramFeed,
  "carousels.image-card-carousel": ImageCardCarousel,
  "forms.newsletter": NewsletterSignup,
};

export default function PdpSectionRenderer({ section }) {
  const Component = componentMap[section.__component];

  if (!Component) {
    return null;
  }

  return <Component data={section} />;
}
