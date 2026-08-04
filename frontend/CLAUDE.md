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

The project uses Next.js 15 App Router.
## Current Route Structure

```text
src/
└── app/
    ├── page.js
    ├── layout.js
    ├── loading.js
    ├── globals.css
    │
    ├── api/
    │   ├── categories/
    │   │   └── route.js
    │   │
    │   └── commerce/
    │       └── plp/
    │           └── route.js
    │
    ├── [category]/
    │   └── [subCategory]/
    │       ├── page.js
    │       └── loading.js
    │
    └── design/
        └── [slug]/
            └── [sku]/
                ├── page.js
                └── loading.js
```

## PLP Routing

The Product Listing Page (PLP) is routed using dynamic category and subcategory segments.

Example:
```
/engagement-rings/trilogy
```
Where:
```
params.category = "engagement-rings"

params.subCategory = "trilogy"
```
The Commerce API or backend should use these URL segments to fetch the appropriate category data.
Do not hardcode category IDs into the route.
Use SEO-friendly URLs.
Example:
```
/engagement-rings/side-stone-rings
```
instead of
```
/plp/CATEGORY-0002
```
---
## PDP Routing

The Product Detail Page (PDP) uses the following structure:
```
/design/[slug]/[sku]
```
Example:
```
/design/prong-setting-trilogy-diamond-engagement-ring/CLRN04546
```
Where:
```
params.slug = "prong-setting-trilogy-diamond-engagement-ring"
params.sku = "CLRN04546"
```
The SKU (or equivalent unique identifier) should be used to fetch the product from the Commerce API.

The slug is primarily for SEO and should not be considered the unique identifier unless the Commerce API specifically supports it.
---

## Routing Guidelines

- Keep URLs SEO-friendly.
- Do not expose internal category IDs in URLs.
- Do not expose database IDs.
- Prefer meaningful slugs.
- Preserve URL compatibility with the existing Diamond Factory website where possible.
- Use Next.js dynamic routes.
- Handle invalid category, subcategory, or SKU using the appropriate Next.js `notFound()` pattern.
- Add `loading.js` where required for route-level loading states.
