"use client";

import { useEffect, useState } from "react";
import { FiSliders } from "react-icons/fi";
import Button from "../common/Button";
import FilterGroup from "./FilterGroup";
import SelectedTags from "./SelectedTags";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import BottomSheet from "./BottomSheet";
import FilterContent from "./FilterContent";

export default function FilterSidebar({ filters }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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
          onClick={() => setIsOpen(true)}
          icon={HiOutlineAdjustmentsHorizontal}
          className="w-full h-16 bg-[#A0704F] hover:bg-[#8d6144] text-white gap-4"
          iconClassName="w-7 h-7"
          textClassName="text-[18px] font-semibold"
          badgeClassName="w-8 h-8 rounded-md bg-white text-[#A0704F] text-[18px] font-semibold"
        />
        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <FilterContent
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            clearAll={clearAll}
            className="p-6"
          />
        </BottomSheet>
      </div>
      <div className="hidden lg:block lg:min-w-78 ">
        <FilterContent
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          clearAll={clearAll}
        />
      </div>
    </div>
  );
}
