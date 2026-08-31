import HeroCarousel from "@/components/homePage/HeroCarousel";
import ImageTextSection from "@/components/homePage/ImageTextSection";
import {
  FeatureHighlights,
  ImageGrid,
  PromotionBanner,
  ReviewsSection,
  InstagramFeed,
  NewsletterSignup,
  ImageCardCarousel,
  ReadMoreContent,
  FAQSection,
  BannerInfo,
} from "@/components/common/SharedComponents";

// Reuses the exact same block components already used by home-pages
// (SectionRenderer.jsx) and plp-pages (PlpectionRenderer.jsx) -- all sourced
// from the shared common/SharedComponents barrel rather than duplicated here.
// `plp.product-listing` is intentionally not included; see
// queries/staticPage.js for why.
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
  "content-blocks.read-more-content": ReadMoreContent,
  "content-blocks.faq": FAQSection,
  "banners.banner-info": BannerInfo,
};

export default function StaticPageSectionRenderer({ section }) {
  const Component = componentMap[section.__component];
  if (!Component) return null;
  return <Component data={section} />;
}
