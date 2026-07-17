import Link from "next/link";
import Image from "next/image";
import faHeart from "react-icons/fa";


export default function ProductCard({ product }) {

  return(

<Link
  href={`/en/pdp/${product.productId}`}
  className="group"
>
  <article className="bg-white transition-all duration-300 hover:shadow-lg p-2">

    {/* Image */}
    <div className="relative bg-[#faf8f6] overflow-hidden">

      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-3 left-3 z-10 bg-[#A5744A] text-white text-xs font-semibold px-3 py-1">
          {product.discount}% OFF
        </span>
      )}

      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10">
        <faHeart
          size={22}
          className="stroke-[#9C7A58] hover:fill-[#9C7A58]"
        />
      </button>

      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="
          h-[300px]
          w-full
          object-contain
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </div>

    {/* Details */}
    <div className="pt-4">

      <div className="flex justify-between items-start gap-4">

        <h3 className="text-[15px] text-gray-800 leading-6 font-normal">
          {product.name}
        </h3>

        <span className="text-[15px] text-black font-semibold whitespace-nowrap">
          £{product.price}
        </span>

      </div>

      {/* Metal Options */}
      <div className="flex items-center gap-3 mt-5">

        <span className="w-4 h-4 rounded-full bg-gray-200 border"></span>

        <span className="w-4 h-4 rounded-full bg-gray-300 border"></span>

        <span className="w-4 h-4 rounded-full bg-[#F4E6B5] border"></span>

        <span className="w-4 h-4 rounded-full bg-[#E7C1A0] border"></span>

      </div>

    </div>

  </article>
</Link>

  );
}