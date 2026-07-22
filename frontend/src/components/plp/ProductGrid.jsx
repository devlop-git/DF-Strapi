import ProductCard from "./ProductCard";

export default function ProductGrid({ products, filters }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.ornamentId}
          product={product}
          filters={filters}
        />
      ))}
    </div>
  );
}
