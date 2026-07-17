import type { Schema, Struct } from '@strapi/strapi';

export interface PlpBannerConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_plp_banner_configurations';
  info: {
    displayName: 'Banner configuration';
    icon: 'magic';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    showBanner: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface PlpFilterConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_plp_filter_configurations';
  info: {
    displayName: 'Filter configuration';
    icon: 'bulletList';
  };
  attributes: {
    order: Schema.Attribute.JSON;
    position: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    sticky: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<280>;
  };
}

export interface PlpProductGridCofiguration extends Struct.ComponentSchema {
  collectionName: 'components_plp_product_grid_cofigurations';
  info: {
    displayName: 'Product Grid Cofiguration';
    icon: 'grid';
  };
  attributes: {
    columns: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<4>;
    gap: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<24>;
  };
}

export interface PlpToolbarConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_plp_toolbar_configurations';
  info: {
    displayName: 'Toolbar Configuration';
    icon: 'connector';
  };
  attributes: {
    showFilterButton: Schema.Attribute.Boolean;
    showProductCount: Schema.Attribute.Boolean;
    showSort: Schema.Attribute.Boolean;
  };
}

export interface SectionsCustomBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_custom_banners';
  info: {
    displayName: 'Custom Banner';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureHighlights extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_highlights';
  info: {
    displayName: 'Feature Highlights';
  };
  attributes: {
    description: Schema.Attribute.Text;
    gap: Schema.Attribute.Integer;
    items: Schema.Attribute.Component<'sections.feature-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    desktopIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    iconDescription: Schema.Attribute.Text;
    iconPosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'top', 'bottom']
    >;
    mobileIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tabIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsFeaturedCategories extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_categories';
  info: {
    displayName: 'Product Highlight';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaURL: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tabImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_banners';
  info: {
    displayName: 'Hero Slide';
  };
  attributes: {
    altText: Schema.Attribute.Text;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    contentAlignment: Schema.Attribute.Enumeration<['Left', 'Center', 'Right']>;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subTitle: Schema.Attribute.Text;
    tabImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsImageTextSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_text_sections';
  info: {
    displayName: 'Image Text Section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
    contentAlignment: Schema.Attribute.Enumeration<['left', 'right']>;
    description: Schema.Attribute.Blocks;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tabImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsInstagramFeed extends Struct.ComponentSchema {
  collectionName: 'components_sections_instagram_feeds';
  info: {
    displayName: 'Instagram Feed';
  };
  attributes: {
    posts: Schema.Attribute.Component<'sections.posts', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNewHomePage extends Struct.ComponentSchema {
  collectionName: 'components_sections_new_home_pages';
  info: {
    displayName: 'Hero Carousel';
  };
  attributes: {
    heroSlides: Schema.Attribute.Component<'sections.hero-banner', true>;
  };
}

export interface SectionsNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_sections_newsletters';
  info: {
    displayName: 'NewsletterSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsPosts extends Struct.ComponentSchema {
  collectionName: 'components_sections_posts';
  info: {
    displayName: 'Posts';
  };
  attributes: {
    destopInstaImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    instaURL: Schema.Attribute.String;
    mobileInstaImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tabInstaImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SectionsPromotionBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_promotion_banners';
  info: {
    displayName: 'Promotion Banner';
  };
  attributes: {
    btnLink: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    desktopBgImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileBgImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tabBgImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsReviews extends Struct.ComponentSchema {
  collectionName: 'components_sections_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    desktopColumns: Schema.Attribute.Integer;
    gap: Schema.Attribute.Integer;
    googleImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heading: Schema.Attribute.String;
    mobileColumn: Schema.Attribute.Integer;
    tabColumns: Schema.Attribute.Integer;
    trustpilotImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SectionsSlides extends Struct.ComponentSchema {
  collectionName: 'components_sections_slides';
  info: {
    displayName: 'Slides';
  };
  attributes: {
    heroSlides: Schema.Attribute.Component<'sections.hero-banner', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'plp.banner-configuration': PlpBannerConfiguration;
      'plp.filter-configuration': PlpFilterConfiguration;
      'plp.product-grid-cofiguration': PlpProductGridCofiguration;
      'plp.toolbar-configuration': PlpToolbarConfiguration;
      'sections.custom-banner': SectionsCustomBanner;
      'sections.feature-highlights': SectionsFeatureHighlights;
      'sections.feature-item': SectionsFeatureItem;
      'sections.featured-categories': SectionsFeaturedCategories;
      'sections.hero-banner': SectionsHeroBanner;
      'sections.image-text-section': SectionsImageTextSection;
      'sections.instagram-feed': SectionsInstagramFeed;
      'sections.new-home-page': SectionsNewHomePage;
      'sections.newsletter': SectionsNewsletter;
      'sections.posts': SectionsPosts;
      'sections.promotion-banner': SectionsPromotionBanner;
      'sections.reviews': SectionsReviews;
      'sections.slides': SectionsSlides;
    }
  }
}
