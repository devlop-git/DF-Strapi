"use client";

import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";
import RichText from "../RichText/RichText";
import { createRichTextBlocks } from "../RichText/richTextBlocks";

const descriptionBlocks = createRichTextBlocks({
  headingClassName: "font-serif text-[#1F2937] text-xl leading-tight my-2",
  paragraphClassName: "text-base leading-7 text-[#4B4B4B] my-2",
  quoteClassName: "italic text-base leading-7 text-[#4B4B4B] my-2",
  listClassName: "list-inside text-base leading-7 text-[#4B4B4B] my-2",
});

export default function ImageBanner({ data }) {
  const desktopImage = data?.desktopImage;
  const tabletImage = data?.tabImage;
  const mobileImage = data?.mobileImage;

  return (
    <section
      className="w-full"
      style={data?.bgColor ? { backgroundColor: data.bgColor } : { backgroundColor: "#FAF7F2" }}
    >
      <div
        className={`flex flex-col md:flex-row ${
          data?.imagePosition === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
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
                src={getStrapiMedia(mobileImage || tabletImage || desktopImage)}
                alt={
                  (desktopImage || tabletImage || mobileImage)
                    ?.alternativeText || data?.title
                }
                className="block h-auto w-full"
              />
            )}
          </picture>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col justify-center px-6 py-10 md:w-1/2 md:px-12 lg:px-20">
          {data?.title && (
            <h2 className="font-serif text-2xl leading-snug text-[#1F2937] md:text-3xl lg:text-4xl">
              {data.title}
            </h2>
          )}

          <RichText
            content={data?.description}
            blocks={descriptionBlocks}
            className="mt-4"
          />

          {data?.buttonText && (
            <Link
              href={data?.buttonURL || ""}
              className="mt-6 inline-flex w-fit border border-black px-8 py-3 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              {data.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
