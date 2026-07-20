import Toolbar from "./Toolbar";
import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";
import { reorderFilters } from "@/utils/reorderFilters";

export default function ProductListing({ data, commerce }) {

  const position = data.filterConfig?.[0]?.position || "left";

  const filters = reorderFilters(
    commerce.filters,
    data.filterConfig?.order
  );

  return (
    <>
      <Toolbar config={data.toolbarConfig} />

      <div className="flex gap-8">

        {position === "left" && (
          <FilterPanel filters={filters} />
        )}

        <ProductGrid products={commerce.products} />

        {position === "right" && (
          <FilterPanel filters={filters} />
        )}

      </div>
    </>
  );
}