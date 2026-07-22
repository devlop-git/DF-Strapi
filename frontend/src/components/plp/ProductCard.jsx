import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <Link href={`/en/pdp/${product.productId}`} className="group">
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

          {/* Product Image */}
          <div className="flex h-[180px] sm:h-[240px] lg:h-[360px] items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="
                max-h-[130px]
                sm:max-h-[180px]
                lg:max-h-[260px]
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="pt-4">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
            <h3 className="flex-1 text-[15px] md:text-[18px] leading-[1.35] font-normal text-[#1E1E1E] line-clamp-2">
              {product.name}
            </h3>

            <p className="shrink-0 text-[16px] md:text-[18px] font-normal text-[#1E1E1E]">
              From{" "}
              <span className="font-medium">
                £{product.priceFrom.salePrice}
              </span>
            </p>
          </div>

          {/* Metal Colours */}

          <div className="mt-5 flex items-center gap-3">
            <span className="lg:h-5 lg:w-5 h-4 w-4 rounded-full bg-[#D9D9D9]" />

            <span className="lg:h-5 lg:w-5 h-4 w-4 rounded-full bg-[#ECECEC]" />

            <span className="flex lg:h-8 lg:w-8 h-5 w-5 items-center justify-center rounded-full border-[3px] border-[#9C6D4B]">
              <span className="lg:h-5 lg:w-5 h-4 w-4 rounded-full bg-[#F8E8C2]" />
            </span>

            <span className="lg:h-5 lg:w-5 h-4 w-4 rounded-full bg-[#F4D0AF]" />
          </div>
        </div>
      </article>
    </Link>
  );
}
