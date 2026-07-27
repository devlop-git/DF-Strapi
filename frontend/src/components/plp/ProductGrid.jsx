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
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-3",
  4: "gap-x-4",
  5: "gap-x-5",
  6: "gap-x-6",
  7: "gap-x-7",
  8: "gap-x-8",
  9: "gap-x-9",
  10: "gap-x-10",
};

const mdGaps = {
  0: "md:gap-x-0",
  1: "md:gap-x-1",
  2: "md:gap-x-2",
  3: "md:gap-x-3",
  4: "md:gap-x-4",
  5: "md:gap-x-5",
  6: "md:gap-x-6",
  7: "md:gap-x-7",
  8: "md:gap-x-8",
  9: "md:gap-x-9",
  10: "md:gap-x-10",
};

const lgGaps = {
  0: "lg:gap-x-0",
  1: "lg:gap-x-1",
  2: "lg:gap-x-2",
  3: "lg:gap-x-3",
  4: "lg:gap-x-4",
  5: "lg:gap-x-5",
  6: "lg:gap-x-6",
  7: "lg:gap-x-7",
  8: "lg:gap-x-8",
  9: "lg:gap-x-9",
  10: "lg:gap-x-10",
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
        {products.map((product) => (
          <ProductCard
            key={product.ornamentId}
            product={product}
            filters={filters}
          />
        ))}
      </div>
      <Pagination pagination={pagination} />
    </div>
  );
}
