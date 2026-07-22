"use client";

import { useEffect, useState } from "react";
import { FiSliders } from "react-icons/fi";
import Button from "../common/Button";
import FilterGroup from "./FilterGroup";
import SelectedTags from "./SelectedTags";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export default function FilterSidebar({ filters }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  if (!filters) return null;

  useEffect(() => {
    const initial = {};

    filters?.forEach((filter) => {
      const selected = filter.values?.filter((item) => item.isSelected);

      if (selected?.length) {
        initial[filter.featureId] = selected;
      }
    });

    setSelectedFilters(initial);
  }, [filters]);

  const clearAll = () => {
    setSelectedFilters({});
  };

  return (
    <div className="">
      <div className="lg:hidden">
        <Button
          text="Filter & sort"
          count={1}
          icon={HiOutlineAdjustmentsHorizontal}
          className="w-full h-16 bg-[#A0704F] hover:bg-[#8d6144] text-white gap-4"
          iconClassName="w-7 h-7"
          textClassName="text-[18px] font-semibold"
          badgeClassName="w-8 h-8 rounded-md bg-white text-[#A0704F] text-[18px] font-semibold"
        />
      </div>
      <div className="w-[320px] p-6 bg-white hidden lg:block">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[#8b6b49] font-medium">
            <FiSliders />
            Filters
          </div>

          <button
            onClick={clearAll}
            className="text-xs uppercase underline text-[#8b6b49]"
          >
            Clear All
          </button>
        </div>

        <SelectedTags
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        {filters.map((filter) => (
          <FilterGroup
            key={filter.featureId}
            filter={filter}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        ))}
      </div>
    </div>
  );
}
