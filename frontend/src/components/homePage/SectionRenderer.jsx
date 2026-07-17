import HeroCarousel from "./HeroCarousel";
import FeaturedCategory from "./FeaturedCategory";
import ImageTextSection from "./ImageTextSection";
import FeatureHighlights from "./FeatureHighlights";
import PromotionBanner from "./PromotionBanner";
import ReviewsSection from "./ReviewsSection";
import InstagramFeed from "./InstagramFeed";
import NewsletterSignup from "./NewsletterSignup";

const componentMap = {
    "sections.new-home-page": HeroCarousel,
    "sections.featured-categories": FeaturedCategory,
    "sections.image-text-section": ImageTextSection,
    "sections.feature-highlights": FeatureHighlights,
    "sections.promotion-banner": PromotionBanner,
    "sections.reviews": ReviewsSection,
    "sections.instagram-feed": InstagramFeed,
    "sections.newsletter": NewsletterSignup,
};

export default function SectionRenderer({ section }) {
    const Component = componentMap[section.__component];
    if (!Component) {
        console.log("No component found");
        return null;
    }
    return <Component data={section} />;
}