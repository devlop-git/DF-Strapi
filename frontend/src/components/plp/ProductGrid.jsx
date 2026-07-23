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
    <div className="mx-5 lg:mx-0">
      <div className="hidden lg:flex justify-between">
        <h1>
          {config.showProductCount && <span>{totalProducts} Products</span>}
        </h1>

        {config.showSort && (
          <div className="flex items-center gap-3">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className=" px-3 py-2 text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
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
