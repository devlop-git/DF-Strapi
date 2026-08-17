import { notFound } from "next/navigation";
import { getPLP, resolveCategoryIds } from "@/services/commerce";
import { getPLPLayout, resolveStaticPage } from "@/services/cms";
import PLPLayout from "@/components/plp/PlpLayout";
import StaticPageContent from "@/components/staticPage/StaticPageContent";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getCurrentLocale } from "@/lib/locale";
import { getCurrentMarket } from "@/lib/market";

// Route shape: /{category}/{subCategory}, e.g. /engagement-rings/solitaire.
// Only subcategories are real listing pages in this data model (categories
// themselves are `isLastLevel: false` menu groupings), so the PLP route is
// always two segments -- there is no bare /{category} page.
//
// The `language` cookie is the source of truth for which locale's data gets
// fetched -- see lib/locale.js. The URL itself carries no locale segment.
//
// Because this is a fixed 2-segment dynamic route, Next.js matches it
// before the [...slug] catch-all for ANY 2-segment path -- including a
// business-managed static page nested exactly 2 levels deep (e.g.
// /customer-care/valuations), which would otherwise never reach the
// catch-all at all. So when this isn't a real commerce category, try
// resolving it as a static page before giving up with notFound(). Real PLP
// categories are resolved exactly as before; this only changes what used
// to be an unconditional 404.
export default async function PLPPage({ params }) {
  const { category, subCategory } = await params;
  const locale = await getCurrentLocale();

  const ids = await resolveCategoryIds(category, subCategory, locale);
  if (!ids) {
    const market = await getCurrentMarket();
    const page = await resolveStaticPage([category, subCategory], locale, market);
    if (!page) notFound();

    return (
      <main>
        <Header params={params} />
        <StaticPageContent page={page} />
        <Footer params={params} />
      </main>
    );
  }

  const commerce = await getPLP(ids.categoryId, ids.subCategoryId, locale);
  const cms = await getPLPLayout(locale);

  return (
    <main>
      <Header params={params} />
      <PLPLayout commerce={commerce} cms={cms[0]} />

      <Footer params={params} />
    </main>
  );
}
