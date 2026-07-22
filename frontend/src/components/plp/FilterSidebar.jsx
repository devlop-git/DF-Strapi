"use client";

import { useEffect, useState } from "react";
import { FiSliders } from "react-icons/fi";

import FilterGroup from "./FilterGroup";
import SelectedTags from "./SelectedTags";

export default function FilterSidebar({ filters }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  if(!filters)  return null;

  useEffect(() => {
    const initial = {};

    filters?.forEach((filter) => {
      const selected = filter.values?.filter(
        (item) => item.isSelected
      );

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
    <div className="w-[320px] p-6 bg-white">

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
  );
}