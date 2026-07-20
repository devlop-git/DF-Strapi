import { getHomepage } from "@/services/cms";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomePage from "@/components/homePage/HomePage";
import { getCurrentLocale } from "@/lib/locale";
import { getCurrentMarket } from "@/lib/market";

export default async function Page() {
  const locale = await getCurrentLocale();
  const market = await getCurrentMarket();
  const homepage = await getHomepage(locale, market); 

  return (
    <main className="p-2">
        <Header />
         <HomePage sections={homepage?.Sections || []} />
        {/* <Banner homepage={homepage} heroImage={heroImage} /> */}
      <Footer />
    </main>
  );
}