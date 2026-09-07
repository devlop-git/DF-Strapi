"use client";

import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";
import RichText from "../RichText/RichText";
import { createRichTextBlocks } from "../RichText/richTextBlocks";

const descriptionBlocks = createRichTextBlocks({
  headingClassName: "font-serif text-[#171717] text-2xl leading-tight my-2",
  paragraphClassName: "text-[17px] leading-8 text-gray-700 my-2",
  quoteClassName: "italic text-[17px] leading-8 text-gray-700 my-2",
  listClassName: "list-inside text-[17px] leading-8 text-gray-700 my-2",
});

export default function ImageTextSection({ data }) {
  const desktopImage = data?.desktopImage;
  const tabletImage = data?.tabImage;
  const mobileImage = data?.mobileImage;

  return (
    <section className="w-full bg-[#FAF7F2] border-y border-gray-100 ">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center ${
          data.imagePosition === "left" ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Content */}
        <div
          className={`max-w-lg ${
            data.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <h2 className="font-serif text-[#171717] text-5xl lg:text-7xl leading-[1.05] font-light">
            {data.title}
          </h2>

          <RichText
            content={data?.description}
            blocks={descriptionBlocks}
            className="mt-8"
          />

          {data?.buttonText && <Link
            href={data?.buttonURL || ""}
            target="_blank"
            className="inline-flex mt-10 border border-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-black hover:text-white text-black transition-all duration-300"
          >
            {data?.buttonText}
          </Link>}
        </div>

        {/* Image */}
        <div
          className={`flex justify-center ${
            data.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <picture>
              {desktopImage && (
                <source
                  media="(min-width:1024px)"
                  srcSet={getStrapiMedia(desktopImage)}
                />
              )}

              {tabletImage && (
                <source
                  media="(min-width:768px)"
                  srcSet={getStrapiMedia(tabletImage)}
                />
              )}

              {(desktopImage || tabletImage || mobileImage) && (
                <img
                  src={getStrapiMedia(
                    mobileImage || tabletImage || desktopImage,
                  )}
                  alt={data.title}
                  className="w-full max-w-[650px] object-cover"
                />
              )}
            </picture>
        </div>
      </div>
    </section>
  );
}
