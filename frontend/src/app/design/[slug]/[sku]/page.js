import { getPDPExperience } from "@/services/cms";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import PdpGallery from "@/components/pdp/PdpGallery";
import PdpDetails from "@/components/pdp/PdpDetails";
import { slugify } from "@/utils/slugify";

// Route shape: /design/{slug}/{designRef}_{sku}
//   e.g. /design/clrn349_01/CLRN349_MS03MT1600MFCT00ST0300SF0102000302
// `slug` identifies the design, `sku` identifies the exact selected
// configuration. Every option click in <PdpDetails /> navigates here again
// with a freshly built `sku`, so each click re-runs this Server Component
// and re-fetches the PDP data for that configuration.
export default async function PDPPage({ params }) {
  const { slug, sku } = await params;
  const { data, meta } = await getPDPExperience(slug,sku);
  const {
    basicDetails,
    options,
    priceInformation,
    imagesInformation,
    bomDetails,
    inStockProducts,
  } = data;

  // The category crumb has no page of its own (only subcategories are real
  // PLP routes), so it's left without a `url` and renders as plain text.
  const categorySlug = basicDetails?.category && slugify(basicDetails.category);
  const subCategorySlug =
    basicDetails?.subCategory && slugify(basicDetails.subCategory);

  const breadcrumbItems = [
    { label: "Home", url: "/" },
    basicDetails?.category && { label: basicDetails.category },
    basicDetails?.subCategory &&
      categorySlug && {
        label: basicDetails.subCategory,
        url: `/${categorySlug}/${subCategorySlug}`,
      },
    {
      label:
        basicDetails?.name ||
        `${basicDetails?.subCategory ?? ""} ${basicDetails?.category ?? ""}`.trim(),
    },
  ].filter(Boolean);

  const caption = bomDetails?.totalStoneWeightCt
    ? `Image displayed to approx. ${bomDetails.totalStoneWeightCt.toFixed(2)}ct diamond.`
    : null;

  return (
    <main>
      <Header params={params} />

      <Breadcrumb items={breadcrumbItems} />

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <PdpGallery
            galleryGroups={imagesInformation?.galleryGroups}
            caption={caption}
          />
          <PdpDetails
            basicDetails={basicDetails}
            priceInformation={priceInformation}
            options={options}
            meta={{ ...meta, slug }}
            bomDetails={bomDetails}
            inStockProducts={inStockProducts}
            currentSku={sku}
          />
        </div>
      </section>

      <Footer params={params} />
    </main>
  );
}
