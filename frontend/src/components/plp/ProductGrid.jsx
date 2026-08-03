import ProductCard from "./ProductCard";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const mdGridCols = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const lgGridCols = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const gaps = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
};

const mdGaps = {
  0: "md:gap-0",
  1: "md:gap-1",
  2: "md:gap-2",
  3: "md:gap-3",
  4: "md:gap-4",
  5: "md:gap-5",
  6: "md:gap-6",
  7: "md:gap-7",
  8: "md:gap-8",
  9: "md:gap-9",
  10: "md:gap-10",
};

const lgGaps = {
  0: "lg:gap-0",
  1: "lg:gap-1",
  2: "lg:gap-2",
  3: "lg:gap-3",
  4: "lg:gap-4",
  5: "lg:gap-5",
  6: "lg:gap-6",
  7: "lg:gap-7",
  8: "lg:gap-8",
  9: "lg:gap-9",
  10: "lg:gap-10",
};

export default function ProductGrid({
  products,
  filters,
  config,
  totalProducts,
  selectedSort,
  sortOptions,
  onSortChange,
  pagination,
  gridColumnsIs,
}) {
  return (
    <div className="mx-5 lg:mx-0">
      <div className="flex justify-between">
        <h1 className="text-sm my-2 lg:my-0">
          {config.showProductCount && <span>{totalProducts} Products</span>}
        </h1>

        <div className="hidden lg:block">
          <Toolbar
            selectedSort={selectedSort}
            sortOptions={sortOptions}
            onSortChange={onSortChange}
            config={config}
          />
        </div>
      </div>

      <div
        className={` grid
    ${gridCols[gridColumnsIs?.mobileColumns]}
    ${mdGridCols[gridColumnsIs?.tabColumns]}
    ${lgGridCols[gridColumnsIs?.desktopColumns]}
    ${gaps[gridColumnsIs?.mobileGap]}
    ${mdGaps[gridColumnsIs?.tabGap]}
    ${lgGaps[gridColumnsIs?.desktopGap]}
          `}
      >
        {products?.map((product) => (
          <ProductCard
            key={product.sku || product.designRef}
            product={product}
            filters={filters}
          />
        ))}
      </div>
      <Pagination pagination={pagination} />
    </div>
  );
}
