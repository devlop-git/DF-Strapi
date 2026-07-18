import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

export default function FeaturedCategories({ data }) {
  const image = data?.image?.[0];
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-[52px] leading-[1.1] font-light text-[#111827]">
              {data.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700 max-w-md">
              {data.description}
            </p>
          </div>

          {/* Product Card */}
          {data.ctaURL && (
            <div className="flex justify-center lg:justify-start">
              <Link href={data.ctaURL} className="group">
                <div className="w-[290px] bg-white rounded shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Product Image */}
                  <div className="bg-[#faf9f8] flex items-center justify-center h-[340px]">
                    <Image
                      src={getStrapiMedia(image)} // <-- Add image URL here later
                      alt={data.ctaText}
                      width={260}
                      height={260}
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="px-6 py-7 text-center">
                    <h3 className="text-2xl font-normal text-[#111827] leading-8">
                      {data.ctaText}
                    </h3>

                    {/* Replace this with actual product price later */}
                    <p className="mt-4 text-3xl font-medium text-black">
                      From €559
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
