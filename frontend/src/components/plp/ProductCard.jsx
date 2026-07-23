import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product, filters }) {
  const [hoveredMetal, setHoveredMetal] = useState(null);
  const metalFilter = filters?.find((f) => f.featureId === "FEATURE-METAL");

  const availableMetals = product.availableValues?.["FEATURE-METAL"] || [];

  const selectedMetal = product.defaultSelection?.["FEATURE-METAL"];
  const discount = Math.round(
    ((product.priceFrom.listPrice - product.priceFrom.salePrice) /
      product.priceFrom.listPrice) *
      100,
  );

  return (
    <Link href={`/pdp/${product.ornamentId}`} className="group">
      <article className="bg-white transition-all duration-300 shadow-md hover:shadow-lg ">
        {/* Image */}
        <div className="relative  overflow-hidden">
          {/* Discount Badge */}
          {discount > 0 && (
            <span className="absolute top-3 left-3 z-10 bg-[#A5744A] text-white text-xs font-semibold px-3 ">
              {discount}% OFF
            </span>
          )}
          {/* Wishlist */}
          <button className="absolute top-3 right-3 z-10">
            <FaRegHeart size={22} className="text-[#9C7A58]" />
          </button>
          <Image
            src={product.image.medium}
            alt={product.image.altText}
            width={500}
            height={500}
            unoptimized
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
              unoptimized
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
      </article>
      {/* Details */}
      <div className="pt-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-[12px] text-gray-800 leading-5 font-normal">
            {product.name}
          </h3>

          <p className="text-[12px] font-normal leading-5 text-gray-800">
            From
            <span className="ml-1 whitespace-nowrap text-[13px] font-semibold text-black">
              £{product.priceFrom.salePrice}
            </span>
          </p>
        </div>

        {/* Metal Options */}
        {/* Metal Options */}
        <div className="mt-5 flex items-center gap-3">
          {availableMetals.map((valueCode) => {
            const metal = metalFilter?.values.find(
              (item) => item.valueCode === valueCode,
            );

            if (!metal) return null;

            const selected = selectedMetal === valueCode;

            return (
              <div
                key={valueCode}
                className="relative"
                onMouseEnter={() => setHoveredMetal(valueCode)}
                onMouseLeave={() => setHoveredMetal(null)}
              >
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
                    selected ? "border-2 border-[#9C6D4B]" : ""
                  }`}
                >
                  <span
                    className="h-4 w-4 rounded-full border"
                    style={{ backgroundColor: metal.swatch }}
                  />
                </div>

                <span
                  className={`absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-1 text-xs shadow transition-all duration-200 ${
                    hoveredMetal === valueCode
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  {metal.displayName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
