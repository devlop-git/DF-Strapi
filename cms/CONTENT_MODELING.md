# Diamond Factory CMS
# CONTENT_MODELING.md

Version: 1.0

Platform: Strapi v5

Project: Diamond Factory Multi-Market CMS

---

# 1. Purpose

This document defines the content model used by the Diamond Factory CMS.

It serves as the single source of truth for:

- Collection Types
- Components
- Dynamic Zones
- Relations
- Localization
- Content ownership
- Modeling standards
- Naming conventions

The purpose of this document is to ensure consistency between the CMS, frontend application, and Commerce platform.

---

# 2. Content Modeling Philosophy

The CMS is designed around one core principle:

> Strapi manages content and experience.

Commerce manages business data.

This separation must always be maintained.

## Commerce owns

Examples

- Products
- Categories
- Product Variants
- Pricing
- Promotions
- Filters
- Sorting
- Availability
- Inventory
- Orders
- Cart
- Checkout
- Customer Data

These entities must never be duplicated inside Strapi unless specifically required for marketing purposes.

---

## Strapi owns

Examples

- Homepage
- Landing Pages
- PLP Content
- PDP Editorial Content
- Promotional Banners
- SEO
- FAQs
- Buying Guides
- Trustpilot Widgets
- Marketing Campaigns
- Rich Text Content
- Images
- Newsletter Sections

---

# 3. Design Principles

The CMS follows these design principles.

## Reusable Components

Content should be created using reusable components.

Avoid creating multiple components that solve the same problem.

---

## Dynamic Pages

Marketing teams should be able to:

- Add sections
- Remove sections
- Reorder sections

without requiring frontend code changes.

Dynamic Zones are preferred wherever page layouts need flexibility.

---

## Separation of Responsibilities

Business data belongs to Commerce.

Editorial content belongs to Strapi.

Presentation belongs to Next.js.

---

## Future Scalability

Models should support:

- New markets
- New languages
- Additional landing pages
- New homepage sections
- New marketing campaigns

without requiring structural redesign.

---

# 4. Current Content Architecture

The CMS currently consists of the following major areas.

Collection Types

↓

Components

↓

Dynamic Zones

↓

Media

↓

Localization

↓

Relations

This layered approach keeps content modular and reusable.

---

# 5. Collection Types

The current CMS contains the following primary Collection Types.

## Home Page

Purpose

Stores homepage configuration and page layout.

Responsibilities

- Homepage content
- Dynamic sections
- Market-specific content
- Localized content

Key Features

- Draft & Publish
- Localization
- Dynamic Zone
- Market relation

Relationship

Home Page

↓

belongs to

↓

Market

Only one homepage should exist for a Market + Locale combination.

---

## PLP Page

Purpose

Stores CMS-managed Product Listing Page content.

The PLP does NOT store product catalog data.

It stores marketing and editorial content displayed alongside Commerce product data.

Responsibilities

- SEO Banner
- Buying Guide
- FAQ
- Feature Highlights
- Newsletter
- Read More Content
- Layout Configuration

Key Features

- Draft & Publish
- Localization
- Dynamic Zone
- Market relation

Relationship

PLP Page

↓

belongs to

↓

Market

One Market can contain multiple PLP pages.

---

## Market

Purpose

Represents a website or regional market.

Examples

- Germany
- United Kingdom
- Switzerland
- Belgium
- Australia

The Market Collection is the central configuration model for the CMS.

Responsibilities

- Domain
- Slug
- Currency
- Default Locale
- Supported Locales
- Theme
- Active Status

Relationships

Market

↓

Home Page

(one homepage)

↓

PLP Pages

(multiple)

The Market model allows a single CMS instance to power multiple regional websites.

---

## User

Purpose

Built-in Strapi administration users.

Responsibilities

- Authentication
- Content Editing
- Publishing
- Administration

No custom modifications should be made unless business requirements require additional profile information.

---

# 6. Relationships

Current relationships within the CMS are centered around the Market entity.

Market

├── Home Page
└── PLP Pages

This ensures every page belongs to a specific regional website.

The frontend determines which content to request based on the current Market.

---

# 7. Localization Strategy

The project uses the Strapi Internationalization plugin.

Localization is implemented at the entry level.

Example

Germany

Locales

- German
- English

Each localized entry shares the same logical content while allowing translated values.

Editors should use localization instead of creating duplicate entries.

---

# 8. Dynamic Zones

Dynamic Zones are used for pages requiring flexible layouts.

Advantages

- Flexible ordering
- Reusable sections
- No frontend code changes
- Marketing-friendly editing experience

Current Dynamic Zones

Home Page

Sections

PLP Page

PLP Sections

Each Dynamic Zone contains reusable Components documented later in this file.

---

# 9. Media Strategy

Images are managed through the Strapi Media Library.

Media should never be stored as plain text URLs unless required by an external integration.

Recommended responsive assets

Desktop Image

Tablet Image

Mobile Image

Every image should include descriptive alternative text for accessibility and SEO.

---

# 10. Draft & Publish

All page-based Collection Types use Draft & Publish.

Workflow

Draft

↓

Review

↓

Publish

Editors should avoid editing published entries directly without verification.

Publishing should remain controlled through the Strapi workflow.

---

# 11. Naming Conventions

Collection Types

Use meaningful singular names.

Examples

Home Page

PLP Page

Market

Components

Use kebab-case.

Examples

hero-banner

promotion-banner

feature-highlights

newsletter

Avoid names such as

Component1

Test

NewComponent

Field Names

Use camelCase.

Examples

desktopImage

mobileImage

buttonText

buttonLink

Avoid abbreviations where possible.

---

# 12. Folder Organization

Components are organized by feature area.

Current organization includes

components/

sections/

plp/

shared/

This organization keeps related components together and avoids duplication.

New components should always be added to the appropriate feature folder instead of creating unrelated top-level folders.

---

# 13. Future Modeling Guidelines

Future Collection Types should only be introduced when the content represents a standalone business entity.

Examples

Good

Landing Page

Blog

Store Locator

Campaign

Avoid creating Collection Types for individual UI blocks.

UI blocks should remain reusable Components inside Dynamic Zones.

---

# 14. Documentation Standards

Whenever a new Collection Type or Component is created, the following should be updated:

- CONTENT_MODELING.md
- API_CONTRACT.md (if API changes)
- Frontend integration documentation (if required)

Keeping documentation synchronized with schema changes ensures consistency across development teams.

---

# Next Section

The following section documents all reusable Homepage Components, their purpose, fields, and usage.
# 15. Homepage Components

The Homepage is built entirely using reusable Components inside a Dynamic Zone.

This allows content editors to build different homepage layouts without requiring frontend code changes.

Current homepage sections include:

- Hero Banner
- Featured Categories
- Image Text Section
- Feature Highlights
- Promotion Banner
- Reviews
- Instagram Feed
- Newsletter
- Custom Banner

Each section is independent and reusable.

---

# 15.1 Hero Banner

Purpose

Displays the primary marketing banner at the top of the homepage.

Supports multiple slides.

Used for

- Seasonal Campaigns
- Sales
- New Collections
- Promotional Events

Structure

Hero Banner

↓

Slides (Repeatable Component)

The Hero Banner itself contains minimal configuration while each slide stores its own content.

---

# 15.2 Hero Slide

Purpose

Represents one slide inside the Hero Banner.

Typical Fields

- Heading
- Sub Heading
- Description
- CTA Text
- CTA Link
- Desktop Image
- Tablet Image
- Mobile Image
- Background Image
- Alignment

Usage

The frontend should iterate through all slides and render them inside a carousel.

Images should switch automatically according to the current breakpoint.

Desktop

↓

Tablet

↓

Mobile

Each slide should remain completely independent.

---

# 15.3 Featured Categories

Purpose

Highlights important shopping categories.

Examples

- Engagement Rings
- Wedding Rings
- Earrings
- Necklaces

Typical Fields

- Title
- Description
- Category Cards (Repeatable)
- CTA

Usage

The frontend displays these as cards or tiles.

Category links should point to Commerce category pages.

---

# 15.4 Featured Category Item

Purpose

Represents one category card.

Typical Fields

- Title
- Image
- URL
- Alt Text

Each item should be reusable.

Avoid hardcoding category URLs.

---

# 15.5 Image Text Section

Purpose

Displays an editorial content block containing both an image and descriptive content.

Typical Fields

- Heading
- Description
- Rich Text
- Image
- CTA Text
- CTA Link
- Image Position

Supports

Image Left

Image Right

Usage

Used throughout the homepage for storytelling.

---

# 15.6 Feature Highlights

Purpose

Displays multiple business benefits.

Examples

- Free Delivery
- Lifetime Warranty
- Free Resizing
- Ethically Sourced Diamonds

Structure

Feature Highlights

↓

Feature Item (Repeatable)

---

# 15.7 Feature Item

Purpose

Displays one business feature.

Typical Fields

- Icon
- Heading
- Description

Icons should be uploaded using the Media Library.

The frontend should render these as equal-width cards.

---

# 15.8 Promotion Banner

Purpose

Displays a promotional campaign.

Examples

- Summer Sale
- Black Friday
- Valentine's Collection

Typical Fields

- Heading
- Description
- Image
- CTA Text
- CTA Link
- Background Color

Used between homepage sections.

---

# 15.9 Reviews Section

Purpose

Displays customer reviews.

Supports

- Heading
- Review Cards
- Rating
- Customer Name

Structure

Reviews

↓

Review Card (Repeatable)

The frontend should render these as a slider or grid depending on screen size.

---

# 15.10 Review Item

Purpose

Represents a single customer review.

Typical Fields

- Customer Name
- Rating
- Review Text
- Date

Review content is editorial and does not replace Commerce review data.

---

# 15.11 Instagram Feed

Purpose

Displays Instagram-inspired marketing content.

Structure

Instagram Feed

↓

Posts (Repeatable)

Each post represents one image.

---

# 15.12 Instagram Post

Purpose

Stores one Instagram card.

Typical Fields

- Image
- URL
- Caption

The frontend should display these as a responsive image grid.

---

# 15.13 Newsletter Section

Purpose

Encourages newsletter subscriptions.

Typical Fields

- Heading
- Description
- Placeholder
- Button Text
- Success Message
- Background Image

The submission endpoint is handled by the frontend.

The CMS only manages presentation.

---

# 15.14 Custom Banner

Purpose

Displays marketing banners that do not fit existing reusable patterns.

Typical Fields

- Heading
- Description
- Image
- CTA
- Theme

Should only be used when no existing component satisfies the requirement.

Avoid creating multiple Custom Banner variations.

---

# 16. Homepage Dynamic Zone

The Home Page Collection Type contains a Dynamic Zone.

Current supported sections include

Hero Banner

↓

Featured Categories

↓

Image Text Section

↓

Feature Highlights

↓

Promotion Banner

↓

Reviews

↓

Instagram Feed

↓

Newsletter

↓

Custom Banner

Content editors may

- Add sections
- Remove sections
- Reorder sections

The frontend must render sections according to the order returned by the API.

No ordering should be hardcoded.

---

# 17. Homepage Rendering Rules

The frontend should use a Component Registry.

Example

Component UID

↓

React Component

Examples

sections.hero-banner

↓

HeroBanner.jsx

sections.feature-highlights

↓

FeatureHighlights.jsx

sections.newsletter

↓

Newsletter.jsx

Avoid large switch statements where possible.

A registry-based approach improves scalability.

---

# 18. Homepage Media Guidelines

Homepage images should support responsive rendering.

Preferred fields

Desktop Image

Tablet Image

Mobile Image

Fallback Order

Desktop

↓

Tablet

↓

Mobile

Always provide descriptive alt text.

Images should be optimized before upload.

Avoid uploading unnecessarily large assets.

---

# 19. Homepage Content Best Practices

Editors should

- Keep headings concise
- Optimize images
- Reuse existing components
- Avoid duplicate promotional sections
- Maintain consistent CTA wording
- Publish only reviewed content

Developers should

- Never hardcode homepage content
- Always render sections dynamically
- Preserve section order
- Support future components without architectural changes

---

# Next Section

The next section documents all PLP Components, their fields, layout configuration, and CMS responsibilities.
# 20. Product Listing Page (PLP) Components

The PLP Collection Type stores only CMS-managed content and layout configuration.

Product catalog information is always provided by the Commerce APIs.

The PLP is responsible for enriching the shopping experience with marketing and informational content.

Current PLP components include:

- Banner Configuration
- Banner Information
- Toolbar Configuration
- Filter Configuration
- Product Grid Configuration
- FAQ
- FAQ Item
- Guide Section
- Guide Item
- Read More Content
- Newsletter Section
- Feature Highlights

---

# 20.1 Banner Configuration

Purpose

Controls the appearance and behaviour of the PLP hero/banner.

Typical Responsibilities

- Banner visibility
- Layout
- Overlay
- Background image
- Alignment

The frontend should use this configuration to determine how the banner is rendered.

---

# 20.2 Banner Information

Purpose

Stores editorial content displayed inside the PLP banner.

Typical Fields

- Heading
- Description
- CTA Text
- CTA Link
- Desktop Image
- Tablet Image
- Mobile Image

This content is completely independent of Commerce.

---

# 20.3 Toolbar Configuration

Purpose

Controls the behaviour of the PLP toolbar.

Current Responsibilities

- Show Product Count
- Show Sorting
- Toolbar Layout

The actual sorting values are supplied by Commerce APIs.

The CMS only controls visibility and presentation.

---

# 20.4 Filter Configuration

Purpose

Controls the visual presentation of filters.

Examples

- Left Sidebar
- Right Sidebar
- Expanded
- Collapsed

Commerce determines

- Filter values
- Available options
- Selected filters

The CMS only configures layout.

---

# 20.5 Product Grid Configuration

Purpose

Controls the appearance of the product grid.

Examples

Desktop Columns

Tablet Columns

Mobile Columns

Spacing

Card Style

This component never stores products.

Products always originate from Commerce.

---

# 20.6 FAQ

Purpose

Displays frequently asked questions relevant to the current PLP.

Structure

FAQ

↓

FAQ Items (Repeatable)

Typical Fields

- Heading
- Description
- FAQ Items

---

# 20.7 FAQ Item

Purpose

Represents one question and answer.

Fields

- Question
- Answer

Answer supports Rich Text.

The frontend renders these inside an accordion.

---

# 20.8 Guide Section

Purpose

Displays educational content related to shopping.

Examples

Buying Guide

Diamond Guide

Ring Size Guide

Structure

Guide Section

↓

Guide Items (Repeatable)

---

# 20.9 Guide Item

Purpose

Represents one educational block.

Typical Fields

- Title
- Description
- Image
- CTA

These are purely editorial.

---

# 20.10 Read More Content

Purpose

Stores long-form SEO content displayed near the bottom of the PLP.

Typical Fields

- Heading
- Rich Text
- CTA

This improves search engine visibility while providing additional buying information.

---

# 20.11 Newsletter Section

Purpose

Encourages newsletter subscriptions.

This component is shared with Homepage.

Avoid creating duplicate newsletter components.

---

# 20.12 Feature Highlights

Purpose

Displays business trust signals.

Examples

- Free Delivery
- Free Resizing
- Lifetime Warranty

Reuse the existing Homepage Feature Highlight component whenever possible.

---

# 21. Shared Component Strategy

Components should be reused whenever possible.

Shared examples

- Newsletter
- Feature Highlights
- Buttons
- CTA Blocks
- FAQ

Avoid creating duplicate versions of identical components.

If two pages require the same content model, use a shared component instead.

---

# 22. Dynamic Zone Strategy

Dynamic Zones should be used only when content order needs to be controlled by editors.

Suitable examples

Homepage

PLP

Landing Pages

Avoid using Dynamic Zones for small fixed layouts.

---

# 23. Relations

Current Relationship Strategy

Market

↓

Home Page

↓

PLP Page

Future Collection Types should follow the same relationship pattern.

Avoid unnecessary many-to-many relationships unless required.

---

# 24. Localization Guidelines

Localized fields should contain only translated content.

Do not duplicate

Images

Relations

Configuration

unless market requirements differ.

Editors should use the Localization feature instead of manually recreating entries.

---

# 25. Media Guidelines

Use the Strapi Media Library.

Preferred image strategy

Desktop

Tablet

Mobile

Every uploaded image should include

- Alt Text
- Appropriate dimensions
- Optimized file size

Avoid storing image URLs as plain text.

---

# 26. SEO Modeling

SEO should be managed using reusable components.

Recommended Fields

- Meta Title
- Meta Description
- Canonical URL
- Open Graph Image
- Robots
- Keywords

Future pages should reuse the same SEO component.

---

# 27. Naming Standards

Collection Types

Use meaningful singular names.

Examples

Home Page

PLP Page

Market

Components

Use kebab-case.

Examples

hero-banner

banner-info

guide-section

faq-item

Fields

Use camelCase.

Examples

desktopImage

buttonText

buttonLink

Avoid abbreviations.

---

# 28. API Stability

Changing field names affects the frontend.

When modifying schemas

- Avoid renaming existing fields.
- Prefer extending components.
- Communicate breaking changes.
- Maintain backwards compatibility.

---

# 29. Performance Guidelines

Keep components focused.

Avoid deeply nested repeatable structures.

Reuse existing components.

Prefer Relations over duplicated content.

Optimize uploaded media.

Populate only required relations.

---

# 30. Future Collection Types

Potential future models include

- Landing Page
- PDP Page
- Blog
- Buying Guide
- Store Locator
- Campaign
- Testimonials
- Trustpilot Widget

Each new model should follow the same architecture and naming conventions.

---

# 31. Content Editor Guidelines

Editors should

- Reuse existing components.
- Keep content concise.
- Upload optimized media.
- Translate content using Localization.
- Preview before publishing.
- Avoid duplicate entries.

---

# 32. Developer Guidelines

Developers should

- Never hardcode CMS content.
- Always render Dynamic Zones dynamically.
- Reuse existing components.
- Avoid duplicate schemas.
- Keep APIs backwards compatible.
- Prefer composition over duplication.

---

# 33. Content Ownership Summary

Commerce Platform

- Products
- Categories
- Pricing
- Inventory
- Filters
- Sorting
- Reviews
- Orders
- Cart

Strapi CMS

- Homepage
- PLP Content
- Marketing Sections
- FAQs
- Buying Guides
- SEO
- Banners
- Newsletter
- Feature Highlights
- Media
- Editorial Content

Next.js Frontend

- Rendering
- Routing
- State Management
- User Interaction
- API Integration

---

# 34. Content Modeling Principles

Every new feature should follow these questions before implementation.

1. Is this business data?
   → Commerce

2. Is this editorial content?
   → Strapi

3. Is this presentation logic?
   → Next.js

4. Can an existing component be reused?

5. Can this be added to a Dynamic Zone instead of creating a new page model?

Following these principles ensures the CMS remains scalable, maintainable, and consistent across all Diamond Factory websites.

---

# End of Document