import Loader from "@/components/common/Loader";

// Shown automatically (via Suspense) while this page's data (getPLP,
// getPLPExperience) is fetching -- e.g. clicking a subcategory in the nav.
export default function Loading() {
  return <Loader />;
}
