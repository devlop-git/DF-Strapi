import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {

  return(

   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">

      {

        products?.map((product)=>(

          <ProductCard

            key={product.ornamentId}

            product={product}

          />

        ))

      }

    </div>

  );

}