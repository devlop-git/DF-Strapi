import { getPLP } from "@/services/commerce";
import { getPLPExperience } from "@/services/cms";
import PLPLayout from "@/components/plp/PlpLayout";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getCurrentLocale } from "@/lib/locale";

// Route shape: /{category}/{subCategory}, e.g. /engagement-rings/solitaire.
// Only subcategories are real listing pages in this data model (categories
// themselves are `isLastLevel: false` menu groupings), so the PLP route is
// always two segments -- there is no bare /{category} page.
export default async function PLPPage({ params }) {
  const { category, subCategory } = await params;

  const commerce = await getPLP(subCategory);
  const locale = await getCurrentLocale();
  const cms = await getPLPExperience(locale);

  return (
    <main>
      <Header params={params} />
      <PLPLayout commerce={commerce} cms={cms[0]} />

      <Footer params={params} />
    </main>
  );
}
