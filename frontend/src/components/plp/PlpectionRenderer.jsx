import ProductListing from "./ProductListing";
import {
  FeatureHighlights,
  ImageGrid,
  PromotionBannerGrid,
  ReadMoreContent,
  FAQSection,
  BannerInfo,
  NewsletterSignup,
  ImageBanner,
  RichTextSection,
  ContactUsForm,
} from "@/components/common/SharedComponents";

const componentMap = {
  "grids.feature-highlights": FeatureHighlights,
  "grids.image-grid": ImageGrid,
  "grids.promotion-banner-grid": PromotionBannerGrid,
  "content-blocks.read-more-content": ReadMoreContent,
  "content-blocks.faq": FAQSection,
  "banners.banner-info": BannerInfo,
  "plp.product-listing": ProductListing,
  "forms.newsletter": NewsletterSignup,
  "banners.image-banner": ImageBanner,
  "content-blocks.rich-text": RichTextSection,
  "forms.contact-us-form": ContactUsForm,
};

export default function PlpSectionRenderer({ section, commerce }) {
  const Component = componentMap[section.__component];

  if (!Component) {
    return null;
  }

  return <Component data={section} commerce={commerce} />;
}
