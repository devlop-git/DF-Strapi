import Toolbar from "./Toolbar";
import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";
import Breadcrumbs from "./Breadcrumbs";
import Pagination from "./Pagination";
import { reorderFilters } from "@/utils/reorderFilters";
import FilterSidebar from "./FilterSidebar";

export default function ProductListing({ data, commerce }) {
  const {
    breadcrumb, //array
    category, //object
    totalProducts, //number
    sort,
    // filters,
    products,
    pagination, //object
  } = commerce;

  const position = data.filterConfig?.[0]?.position || "left";
  const filters = reorderFilters(commerce.filters, data.filterConfig?.order);

  return (
    <>
      <Breadcrumbs items={breadcrumb} />
      <Toolbar
        totalProducts={totalProducts}
        selectedSort={sort.selected}
        sortOptions={sort.options}
        config={data.toolbarConfig[0]} />
      <div className="flex lg:flex-row flex-col gap-8">
        {position === "left" && (
          <FilterSidebar
            filters={filters}
          />
        )}
        <ProductGrid products={products} />
        {position === "right" && <FilterSidebar filters={filters} />}
        <Pagination pagination={pagination} />
      </div>
    </>
  );
}
