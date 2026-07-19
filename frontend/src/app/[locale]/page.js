import { getHomepage } from "@/services/cms"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import HomePage from "@/components/homePage/HomePage"

export default async function Page({ params }) {
  const { locale } = await params
  const homepage = await getHomepage(locale)

  return (
    <main className="p-2 md:p-0">
      <Header params={params} />
      <div className="mb-2">
        <HomePage sections={homepage?.Sections || []} />
      </div>
      {/* <Banner homepage={homepage} heroImage={heroImage} /> */}
      <Footer params={params} />
    </main>
  )
}
