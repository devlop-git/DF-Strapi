import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <Link href={`/en/pdp/${product.productId}`} className="group block">
      <article className="bg-white">
        {/* Image Section */}
        <div className="relative overflow-hidden bg-[#FAF8F6]">
          {/* Action Badge */}
          {product.discount && (
            <span className="absolute left-4 top-4 z-10 bg-[#A06F4F] px-4 py-2 text-xs md:text-sm font-medium uppercase text-white">
              ACTION
            </span>
          )}

          {/* Wishlist */}
          <button className="absolute right-4 top-0.5  z-10">
            <FaRegHeart className="text-[18px] md:text-[36px] text-[#9C6D4B] transition group-hover:fill-[#9C6D4B]" />
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
              From <span className="font-medium">€{product.price}</span>
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
