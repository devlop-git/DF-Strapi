import Link from "next/link";
import Image from "next/image";
import {FaHeart} from "react-icons/fa";


export default function ProductCard({ product }) {
  console.log(product); //ratings, hover image, badge
  const discount =
      Math.round(
      (
      (product.priceFrom.listPrice -
      product.priceFrom.salePrice)
      /
      product.priceFrom.listPrice
      ) * 100
      );

  return(

<Link
  href={`/pdp/${product.ornamentId}`}
  className="group"
>
  <article className="bg-white transition-all duration-300 hover:shadow-lg p-2">

    {/* Image */}
    <div className="relative bg-[#faf8f6] overflow-hidden">

      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-3 left-3 z-10 bg-[#A5744A] text-white text-xs font-semibold px-3 py-1">
          {discount}% OFF
        </span>
      )}

      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10">
        <FaHeart
          size={22}
          className="stroke-[#9C7A58] hover:fill-[#9C7A58]"
        />
      </button>

      <Image
        src={product.image.medium}
        alt={product.image.altText}
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
       {product.image.hover && (
    <Image
      src={product.image.hover}
      alt={product.image.altText}
      fill
      className="
        object-contain
        transition-opacity
        duration-300
        opacity-0
        group-hover:opacity-100
      "
    />
  )}
    </div>

    {/* Details */}
    <div className="pt-4">

      <div className="flex justify-between items-start gap-4">

        <h3 className="text-[15px] text-gray-800 leading-6 font-normal">
          {product.name}
        </h3>

        <span className="text-[15px] text-black font-semibold whitespace-nowrap">
          £{product.priceFrom.salePrice}
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