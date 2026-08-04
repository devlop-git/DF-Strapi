import { notFound } from "next/navigation";
import { getPLP, resolveCategoryIds } from "@/services/commerce";
import { getPLPLayout } from "@/services/cms";
import PLPLayout from "@/components/plp/PlpLayout";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getCurrentLocale } from "@/lib/locale";

// Route shape: /{category}/{subCategory}, e.g. /engagement-rings/solitaire.
// Only subcategories are real listing pages in this data model (categories
// themselves are `isLastLevel: false` menu groupings), so the PLP route is
// always two segments -- there is no bare /{category} page.
//
// The `language` cookie is the source of truth for which locale's data gets
// fetched -- see lib/locale.js. The URL itself carries no locale segment.
export default async function PLPPage({ params }) {
  const { category, subCategory } = await params;
  const locale = await getCurrentLocale();

  const ids = await resolveCategoryIds(category, subCategory, locale);
  if (!ids) notFound();

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
