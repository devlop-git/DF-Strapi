"use client";

import { useState } from "react";

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
