"use client";

import { IoClose } from "react-icons/io5";

export default function SelectedTags({
  filters,
  selectedFilters,
  setSelectedFilters,
}) {
  const tags = Object.entries(selectedFilters).flatMap(
    ([featureId, value]) => {
      const filter = filters.find(
        (f) => f.featureId === featureId
      );

      if (!filter) return [];

      // Range Filter
      if (filter.selectionType === "range") {
        return [
          {
            featureId,
            type: "range",
            displayName: `${value.min}${filter.range.unit || filter.range.currency} - ${value.max}${filter.range.unit || filter.range.currency}`,
          },
        ];
      }

      // Single & Multi
      return value.map((item) => ({
        featureId,
        type: filter.selectionType,
        ...item,
      }));
    }
  );

  if (!tags.length) return null;

  const removeTag = (tag) => {
    setSelectedFilters((prev) => {
      // Remove Range Filter
      if (tag.type === "range") {
        const updated = { ...prev };
        delete updated[tag.featureId];
        return updated;
      }

      // Remove Single / Multi
      return {
        ...prev,
        [tag.featureId]: prev[tag.featureId].filter(
          (item) => item.valueCode !== tag.valueCode
        ),
      };
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {tags.map((tag) => (
        <button
          key={
            tag.type === "range"
              ? tag.featureId
              : `${tag.featureId}-${tag.valueCode}`
          }
          onClick={() => removeTag(tag)}
          className="flex items-center gap-2 border border-[#b68b63] text-[#7b5d3c] rounded-full px-3 py-1 text-xs hover:bg-[#f9f5ef]"
        >
          {tag.displayName}
          <IoClose size={14} />
        </button>
      ))}
    </div>
  );
}