"use client";
import React, { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const expandedContentBlocks = {
  heading: ({ children, level }) => {
    const Tag = `h${level}`;
    const className =
      level <= 2
        ? "text-center font-serif text-[24px] lg:my-2 my-4 leading-tight text-[#1D1D1D] lg:text-[28px] lg:leading-15"
        : "text-center font-serif text-[20px] my-3 leading-tight text-[#1D1D1D] lg:text-[22px]";
    return <Tag className={className}>{children}</Tag>;
  },
  paragraph: ({ children }) => (
    <p className="text-center text-[16px] my-3 lg:leading-8 text-[#262626]">
      {children}
    </p>
  ),
  quote: ({ children }) => (
    <p className="text-center italic text-[16px] my-3 lg:leading-8 text-[#262626]">
      {children}
    </p>
  ),
  list: ({ children, format }) => {
    const Tag = format === "ordered" ? "ol" : "ul";
    return (
      <Tag className="my-3 flex flex-col items-center text-[16px] lg:leading-8 text-[#262626]">
        {children}
      </Tag>
    );
  },
  "list-item": ({ children }) => <li>{children}</li>,
};

const ReadMoreContent = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className={` transition-all duration-500 `}>
      <div
        className={`mx-auto  flex max-w-7xl flex-col justify-center px-5   md:px-8 lg:px-12 transition-all duration-500`}
      >
        {/* Heading */}
        <h2 className="text-center font-serif text-2xl md:text-3xl leading-tight text-[#1D1D1D] lg:text-4xl lg:leading-15">
          {data?.title}
        </h2>

        {/* Description */}
        <div className="mx-auto mt-8 max-w-5xl">
          <p className="text-center line-clamp-3  text-[16px] lg:leading-6 text-[#262626] ">
            {data?.previewContent}
          </p>

          {expanded && (
            <div>

              {data?.expandedContent && (
                <BlocksRenderer
                  content={data.expandedContent}
                  blocks={expandedContentBlocks}
                />
              )}
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
