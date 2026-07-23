import ProductCard from "./ProductCard";

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
    <div>
      <div className="flex justify-between">
        <h1>
          {config.showProductCount && <span>{totalProducts} Products</span>}
        </h1>
        <h1>
          {config.showSort && (
            <div className="flex items-center gap-3">
              <span className="text-sm">Sort By</span>

              <select
                value={selectedSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:gap-x-4 gap-y-10 lg:grid-cols-3">
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
