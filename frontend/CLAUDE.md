@AGENTS.md
# CLAUDE.md

## Project Overview

This is a production-oriented Diamond Factory e-commerce frontend built with:

- Next.js 15
- App Router
- JavaScript (NOT TypeScript)
- React
- Tailwind CSS
- Strapi v5
- Redux Toolkit planned for global business state
- Commerce APIs for product/catalog/business data

The website is for Diamond Factory and needs to support multiple markets/regions and multiple languages.

The current work includes Homepage, PLP (Product Listing Page), and now PDP (Product Detail Page).

---

# 1. Core Architecture Rules

These rules are critical.

## Commerce API owns business/catalog data

All product/catalog/business information must come from Commerce/PIM APIs.

Examples:

- Products
- Product details
- Product IDs
- Product names
- Product images
- Product pricing
- Sale pricing
- Promotions
- Ratings
- Product variants
- Metal options
- Stone options
- Shape options
- Carat
- Availability
- Product specifications
- Breadcrumb/category data
- Filters
- Sorting
- Pagination
- Product configuration
- PDP product data

Do NOT create hardcoded product/business data in React components.

---

## Strapi owns experience/content/layout

Strapi should be used for CMS/experience content.

Examples:

- Promotional banners
- Marketing sections
- SEO content
- FAQs
- Editorial content
- Trust/marketing widgets
- Page layout configuration
- Component visibility
- CMS-controlled content
- Market configuration
- Localization/content translation

Do NOT put Commerce product information into Strapi just to make rendering easier.

---

# 2. Technology Rules

Use:

- Next.js 15 App Router
- JavaScript
- React
- Tailwind CSS
- Functional components
- React hooks where required

Do NOT:

- Introduce TypeScript
- Introduce MUI
- Introduce another UI framework
- Convert the project to TypeScript
- Use unnecessary server-side architecture
- Add unnecessary dependencies

Use existing project dependencies whenever possible.

Before installing a new package, check whether an existing package already provides the functionality.

---

# 3. Next.js Routing

The project uses App Router.

Current structure includes:

```text
src/
  app/
    page.js
    layout.js
