import type { Schema, Struct } from '@strapi/strapi';

export interface BannersBannerInfo extends Struct.ComponentSchema {
  collectionName: 'components_banners_banner_infos';
  info: {
    displayName: 'SEO Banner Info';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface BannersImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_banners_image_banners';
  info: {
    displayName: 'Image Banner';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
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

export interface BannersPromotionBanner extends Struct.ComponentSchema {
  collectionName: 'components_banners_promotion_banners';
  info: {
    displayName: 'Promotion Banner';
  };
  attributes: {
    btnLink: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    contentAlignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    description: Schema.Attribute.Text;
    desktopBgImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    disclaimer: Schema.Attribute.String;
    mobileBgImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tabBgImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface CarouselsIconLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_carousels_icon_link_cards';
  info: {
    displayName: 'Icon Link Card';
    icon: 'image';
  };
  attributes: {
    CTALabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Read More'>;
    CTAUrl: Schema.Attribute.String;
    desktopMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tabMedia: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CarouselsImageCardCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousels_image_card_carousels';
  info: {
    displayName: 'Image Card Carousel';
    icon: 'images';
  };
  attributes: {
    guideItem: Schema.Attribute.Component<'carousels.icon-link-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarouselsInstagramFeed extends Struct.ComponentSchema {
  collectionName: 'components_carousels_instagram_feeds';
  info: {
    displayName: 'Instagram Feed';
  };
  attributes: {
    posts: Schema.Attribute.Component<'carousels.posts', true>;
    title: Schema.Attribute.String;
  };
}

export interface CarouselsPosts extends Struct.ComponentSchema {
  collectionName: 'components_carousels_posts';
  info: {
    displayName: 'Posts';
  };
  attributes: {
    desktopInstaImage: Schema.Attribute.Media<
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

export interface ContentBlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqItem: Schema.Attribute.Component<'content-blocks.faq-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_faq_items';
  info: {
    displayName: 'FAQ Items';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ContentBlocksReadMoreContent extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_read_more_contents';
  info: {
    displayName: 'ReadMoreContent';
    icon: 'quote';
  };
  attributes: {
    expandedContent: Schema.Attribute.Blocks;
    previewContent: Schema.Attribute.Text;
    readLessLabel: Schema.Attribute.String;
    readMoreLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'code';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    content: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::tiptap-editor.RichText',
        {
          preset: 'richTextSection';
        }
      >;
    heading: Schema.Attribute.String;
  };
}

export interface FormsCancelOrderForm extends Struct.ComponentSchema {
  collectionName: 'components_forms_cancel_order_forms';
  info: {
    displayName: 'Cancel Order Form';
  };
  attributes: {
    btnLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Submit'>;
    heading: Schema.Attribute.String;
  };
}

export interface FormsNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_forms_newsletters';
  info: {
    displayName: 'NewsletterSection';
  };
  attributes: {
    btnLabel: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface GridsFeatureHighlights extends Struct.ComponentSchema {
  collectionName: 'components_grids_feature_highlights';
  info: {
    displayName: 'Feature Highlights';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    gap: Schema.Attribute.Integer;
    items: Schema.Attribute.Component<'grids.feature-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface GridsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    desktopIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    iconPosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'top', 'bottom']
    >;
    lines: Schema.Attribute.Component<'grids.feature-line', true>;
    mediaType: Schema.Attribute.Enumeration<['icon', 'image']> &
      Schema.Attribute.DefaultTo<'icon'>;
    mobileIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tabIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GridsFeatureLine extends Struct.ComponentSchema {
  collectionName: 'components_grids_feature_lines';
  info: {
    displayName: 'Feature Line';
  };
  attributes: {
    fontColor: Schema.Attribute.String;
    fontFamily: Schema.Attribute.String;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['heading', 'body']> &
      Schema.Attribute.DefaultTo<'body'>;
  };
}

export interface GridsImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_grids';
  info: {
    displayName: 'Image Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    imageHeight: Schema.Attribute.Integer;
    imageWidth: Schema.Attribute.Integer;
    items: Schema.Attribute.Component<'grids.image-grid-card', true>;
  };
}

export interface GridsImageGridCard extends Struct.ComponentSchema {
  collectionName: 'components_grids_image_grid_cards';
  info: {
    displayName: 'Image Grid Card';
  };
  attributes: {
    CTALabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Learn More'>;
    CTAUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface GridsPromotionBannerGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_promotion_banner_grids';
  info: {
    displayName: 'Promotion Banner Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'banners.promotion-banner', true>;
  };
}

export interface PlpBannerConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_plp_banner_configurations';
  info: {
    displayName: 'Banner configuration';
    icon: 'magic';
  };
  attributes: {
    desktopBannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileBannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    showBanner: Schema.Attribute.Boolean;
    tabBannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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
    desktopColumns: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<4>;
    mobileColumns: Schema.Attribute.Integer;
    tabColumns: Schema.Attribute.Integer;
  };
}

export interface PlpProductListing extends Struct.ComponentSchema {
  collectionName: 'components_plp_product_listings';
  info: {
    displayName: 'Product Listing';
  };
  attributes: {
    filterConfig: Schema.Attribute.Component<'plp.filter-configuration', true>;
    gridConfig: Schema.Attribute.Component<
      'plp.product-grid-cofiguration',
      true
    >;
    toolbarConfig: Schema.Attribute.Component<
      'plp.toolbar-configuration',
      true
    >;
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

export interface SectionsNewHomePage extends Struct.ComponentSchema {
  collectionName: 'components_sections_new_home_pages';
  info: {
    displayName: 'Hero Carousel';
  };
  attributes: {
    heroSlides: Schema.Attribute.Component<'sections.hero-banner', true>;
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

export interface SocialProofReviews extends Struct.ComponentSchema {
  collectionName: 'components_social_proof_reviews';
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

export interface TablesComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_tables_comparison_tables';
  info: {
    displayName: 'Comparison Table';
  };
  attributes: {
    columns: Schema.Attribute.Component<'tables.table-column', true>;
    groupsCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    heading: Schema.Attribute.String;
    highlightFirstColumn: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    rows: Schema.Attribute.Component<'tables.table-row', true>;
  };
}

export interface TablesTableCell extends Struct.ComponentSchema {
  collectionName: 'components_tables_table_cells';
  info: {
    displayName: 'Table Cell';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface TablesTableColumn extends Struct.ComponentSchema {
  collectionName: 'components_tables_table_columns';
  info: {
    displayName: 'Table Column';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface TablesTableRow extends Struct.ComponentSchema {
  collectionName: 'components_tables_table_rows';
  info: {
    displayName: 'Table Row';
  };
  attributes: {
    values: Schema.Attribute.Component<'tables.table-cell', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banners.banner-info': BannersBannerInfo;
      'banners.image-banner': BannersImageBanner;
      'banners.promotion-banner': BannersPromotionBanner;
      'carousels.icon-link-card': CarouselsIconLinkCard;
      'carousels.image-card-carousel': CarouselsImageCardCarousel;
      'carousels.instagram-feed': CarouselsInstagramFeed;
      'carousels.posts': CarouselsPosts;
      'content-blocks.faq': ContentBlocksFaq;
      'content-blocks.faq-items': ContentBlocksFaqItems;
      'content-blocks.read-more-content': ContentBlocksReadMoreContent;
      'content-blocks.rich-text': ContentBlocksRichText;
      'forms.cancel-order-form': FormsCancelOrderForm;
      'forms.newsletter': FormsNewsletter;
      'grids.feature-highlights': GridsFeatureHighlights;
      'grids.feature-item': GridsFeatureItem;
      'grids.feature-line': GridsFeatureLine;
      'grids.image-grid': GridsImageGrid;
      'grids.image-grid-card': GridsImageGridCard;
      'grids.promotion-banner-grid': GridsPromotionBannerGrid;
      'plp.banner-configuration': PlpBannerConfiguration;
      'plp.filter-configuration': PlpFilterConfiguration;
      'plp.product-grid-cofiguration': PlpProductGridCofiguration;
      'plp.product-listing': PlpProductListing;
      'plp.toolbar-configuration': PlpToolbarConfiguration;
      'sections.hero-banner': SectionsHeroBanner;
      'sections.image-text-section': SectionsImageTextSection;
      'sections.new-home-page': SectionsNewHomePage;
      'sections.slides': SectionsSlides;
      'social-proof.reviews': SocialProofReviews;
      'tables.comparison-table': TablesComparisonTable;
      'tables.table-cell': TablesTableCell;
      'tables.table-column': TablesTableColumn;
      'tables.table-row': TablesTableRow;
    }
  }
}
