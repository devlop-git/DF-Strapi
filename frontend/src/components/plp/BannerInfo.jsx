"use client";

import { useState } from "react";

const DATA = {
  title: "Solitaire engagement ring",
  shortDescription: `A solitaire engagement ring showcases the pure essence of a diamond: a single, radiant treasure set in a simple, masterfully crafted setting. This timeless icon symbolizes enduring love and has captivated generations with its elegant restraint and exceptional brilliance.

Our curated selection of engagement rings includes delicate 1-carat solitaires as well as striking 2-carat designs. From the diamond shape and prong style to the precious metal, every detail can be tailored to create your perfect ring.`,
  fullDescription: `Whether you prefer a classic round brilliant or a modern princess cut, our solitaire rings are designed to highlight the beauty of the center stone. Available in yellow gold, white gold, rose gold and platinum, each ring is handcrafted with exceptional attention to detail. Discover timeless elegance and create a ring that will last a lifetime.`,
};

export default function BannerInfo({ data }) {
  const descriptionText = data.description[0].children[0].text;
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className={`lg:bg-[#faf7f2] transition-all duration-500 ${
        expanded ? "lg:min-h-[338px]" : "lg:min-h-[314px]"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col justify-center px-5 py-4 lg:py-12 md:px-8 lg:px-12 transition-all duration-500 ${
          expanded ? "lg:min-h-[338px]" : "lg:min-h-[314px]"
        }`}
      >
        {/* Heading */}
        <h2 className="text-center font-serif text-[38px] leading-tight text-[#1D1D1D] lg:text-[48px] lg:leading-15">
          {data?.title}
        </h2>

        {/* Description */}
        <div className="mx-auto mt-8 max-w-5xl">
          <p className="text-center text-[16px] lg:leading-8 text-[#262626] ">
            {descriptionText}
          </p>

          {expanded && (
            <p className="text-center text-[16px] lg:leading-8 text-[#262626] ">
              {descriptionText}
            </p>
          )}

          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[18px] font-medium text-[#A0704F] transition hover:underline"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
