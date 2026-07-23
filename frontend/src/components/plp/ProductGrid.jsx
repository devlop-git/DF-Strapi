import ProductCard from "./ProductCard";
import Toolbar from "./Toolbar";
export default function ProductGrid({
  products,
  filters,
  config,
  totalProducts,
  selectedSort,
  sortOptions,
  onSortChange,
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
      <div className="grid grid-cols-2 gap-x-3 lg:gap-x-4 gap-y-10 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.ornamentId}
            product={product}
            filters={filters}
          />
        ))}
      </div>
    </div>
  );
}
