import { notFound } from "next/navigation";
import { resolveStaticPage } from "@/services/cms";
import { getCurrentLocale } from "@/lib/locale";
import { getCurrentMarket } from "@/lib/market";
import StaticPageContent from "@/components/staticPage/StaticPageContent";

// Catch-all for business-managed Strapi pages at any URL depth (About Us,
// T&C, nested guides, ...). Only matches paths nothing more specific
// claims first -- design/, [category]/[subCategory], and any static route
// folder all take precedence over this in Next's routing.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const locale = await getCurrentLocale();
  const market = await getCurrentMarket();
  const page = await resolveStaticPage(slug, locale, market);

  if (!page) return {};

  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || undefined,
  };
}

export default async function StaticPage({ params }) {
  const { slug } = await params;
  const locale = await getCurrentLocale();
  const market = await getCurrentMarket();

  const page = await resolveStaticPage(slug, locale, market);
  if (!page) notFound();

  return <StaticPageContent page={page} />;
}
