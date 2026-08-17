import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Header/Footer live here, not in page.js -- same reasoning as the PDP
// route (see app/design/[slug]/[sku]/layout.js): loading.js in this segment
// wraps only page.js, so a remount there can't blank the header/footer.
export default function StaticPageLayout({ children, params }) {
  return (
    <main>
      <Header params={params} />
      {children}
      <Footer params={params} />
    </main>
  );
}
