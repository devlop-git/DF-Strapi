import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

export default function ImageTextSection({ data }) {
  if (!data?.length) {
    return null;
  }
  const description = data.description?.[0]?.children?.[0]?.text || "";
  const image = data.desktopImage[0];

  return (
    <section className="w-full bg-[#FAF7F2] border-y border-gray-100 py-12 my-6">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center ${
          data.imagePosition === "left" ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Content */}
        <div
          className={`max-w-lg ${
            data.imagePosition === "right"
              ? "lg:order-1"
              : "lg:order-2"
          }`}
        >
          <h2 className="font-serif text-[#171717] text-5xl lg:text-7xl leading-[1.05] font-light">
            {data.title}
          </h2>

          <p className="mt-8 text-[17px] leading-8 text-gray-700">
            {description}
          </p>

          <Link
            href={data?.buttonURL || ""}
            target="_blank"
            className="inline-flex mt-10 border border-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-black hover:text-white text-black transition-all duration-300"
          >
            {data?.buttonText}
          </Link>
        </div>

        {/* Image */}
        <div
          className={`flex justify-center ${
            data.imagePosition === "right"
              ? "lg:order-2"
              : "lg:order-1"
          }`}
        >
         {image && <div className="relative w-[520px] h-[420px] bg-[#F6F3EF] overflow-hidden">
            <Image
              src={getStrapiMedia(image)} // <-- Add your image URL here later
              alt={data.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>}
        </div>
      </div>
    </section>
  );
}