import React from "react";
const Pagination = ({ pagination }) => {
  return (
    <div className="lg:mt-12 my-8">
      <button
        className="
    mx-auto
    flex
    h-[58px]
    w-[158px]
    items-center
    justify-center
    border
    border-[#A5744A]
    bg-white
    text-base
    font-semibold
    text-[#A5744A]
    transition-all
    duration-300
    hover:bg-[#A5744A]
    hover:text-white
    hover:cursor-pointer
  "
      >
        Load More
      </button>
    </div>
  );
};

export default Pagination;
