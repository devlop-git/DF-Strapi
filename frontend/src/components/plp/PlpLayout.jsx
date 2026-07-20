import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";
import Toolbar from "./Toolbar";
import { reorderFilters } from "@/utils/reorderFilters";

export default function PlpLayout({ commerce, cms }) {
  const filterConfig = cms.filterConfig;  
  const position = filterConfig[0]?.position;

  const filters = reorderFilters(
    commerce.filters,
    filterConfig[0].order
);

  const layouts = {
    left: (
      <>
        <FilterPanel filters={filters} />
        <ProductGrid products={commerce.products} />
      </>
    ),
    right: (
      <>
        <ProductGrid products={commerce.products} />
        <FilterPanel filters={filters} />
      </>
    ),
};

  return (
    <main className="max-w-10xl mx-auto p-6 bg-amber-50 text-black">
      <Toolbar />
      <div className="flex gap-8">
       {layouts[position] || layouts.left}
        </div>
    </main>
  );
}