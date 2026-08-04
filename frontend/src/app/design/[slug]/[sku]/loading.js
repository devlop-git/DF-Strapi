import Loader from "@/components/common/Loader";

// Next.js shows this automatically (via Suspense) while page.js's async
// data-fetch (getPDP) is in flight -- both when landing here from
// a PLP card and on every option-change navigation, since both are
// navigations into this same dynamic route.
export default function Loading() {
  return <Loader />;
}
