"use client";
import React, { useState } from "react";

const ReadMoreContent = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className={` transition-all duration-500 `}>
      <div
        className={`mx-auto  flex max-w-7xl flex-col justify-center px-5  lg:py-12 md:px-8 lg:px-12 transition-all duration-500 ${
          expanded ? "lg:min-h-[338px]" : "lg:min-h-[314px]"
        }`}
      >
        {/* Heading */}
        <h2 className="text-center font-serif text-2xl leading-tight text-[#1D1D1D] lg:text-4xl lg:leading-15">
          {data?.title}
        </h2>

        {/* Description */}
        <div className="mx-auto mt-8 max-w-5xl">
          <p className="text-center line-clamp-3  text-[16px] lg:leading-6 text-[#262626] ">
            {data?.previewContent}
          </p>

          {expanded && (
            <div>
              <h2 className="text-center font-serif text-[38px] leading-tight text-[#1D1D1D] lg:text-[48px] lg:leading-15">
                {data?.expandedTitle}
              </h2>

              <p className="text-center text-[16px] lg:leading-8 text-[#262626] ">
                {data?.expandedContent}
              </p>
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[18px] hover:cursor-pointer font-medium text-[#A0704F] transition "
            >
              {expanded ? data?.readLessLabel : data?.readMoreLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMoreContent;
