import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Header/Footer live here, not in page.js. `loading.js` in this segment
// wraps only page.js (per Next.js: loading.js never wraps a sibling
// layout.js), so when a stale-router-state refresh forces page.js to
// remount, the header/footer stay mounted and interactive instead of the
// whole route -- including the language switcher itself -- blanking out.
export default function PDPLayout({ children, params }) {
  return (
    <main>
      <Header params={params} />
      {children}
      <Footer params={params} />
    </main>
  );
}
