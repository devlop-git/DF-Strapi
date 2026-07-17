import { getHomepage } from "@/services/cms";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomePage from "@/components/homePage/HomePage";

export default async function Page({ params }) {
  const { locale } = await params;
  const homepage = await getHomepage(locale); 

  return (
    <main className="p-2">
        <Header params={params} />
         <HomePage sections={homepage?.Sections || []} />;
        {/* <Banner homepage={homepage} heroImage={heroImage} /> */}
      <Footer params={params} />
    </main>
  );
}