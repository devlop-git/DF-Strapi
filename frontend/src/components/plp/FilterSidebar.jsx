"use client";

import { useEffect, useState } from "react";
import { FiSliders } from "react-icons/fi";
import Button from "../common/Button";
import FilterGroup from "./FilterGroup";
import SelectedTags from "./SelectedTags";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import BottomSheet from "./BottomSheet";
import FilterContent from "./FilterContent";

export default function FilterSidebar({
  filters,
  selectedSort,
  sortOptions,
  onSortChange,
  config,
}) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const trigger = 250; // adjust this value

      setIsSticky(window.scrollY >= trigger);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearAll = () => {
    setSelectedFilters({});
  };

  return (
    <div className="">
      <div
        className={`left-0 right-0 z-50 bg-white py-3 transition-all duration-300 lg:hidden ${
          isSticky ? "fixed top-0 shadow-sm " : "relative"
        }`}
      >
        <div className="mx-4">
          <Button
            text="Filter & sort"
            count={1}
            onClick={() => setIsOpen(true)}
            icon={HiOutlineAdjustmentsHorizontal}
            className="h-12 w-full bg-[#A0704F] text-white hover:bg-[#8d6144]"
            iconClassName="h-7 w-7"
            textClassName="text-base font-medium"
            badgeClassName="flex h-5 w-5 items-center justify-center rounded-md bg-white text-[12px] font-semibold text-[#A0704F]"
          />
        </div>

        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <FilterContent
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            clearAll={clearAll}
            className="lg:p-6"
            setIsOpen={setIsOpen}
            selectedSort={selectedSort}
            sortOptions={sortOptions}
            onSortChange={onSortChange}
            config={config}
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
