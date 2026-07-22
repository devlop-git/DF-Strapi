"use client";

import { FiSliders } from "react-icons/fi";
import FilterGroup from "./FilterGroup";
import SelectedTags from "./SelectedTags";

export default function FilterContent({
  filters,
  selectedFilters,
  setSelectedFilters,
  clearAll,
  className = "",
}) {
  return (
    <div className={className}>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-medium text-[#8b6b49]">
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
