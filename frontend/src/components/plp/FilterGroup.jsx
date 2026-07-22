"use client";

import { useState, useEffect } from "react";
import {
  FiSquare,
  FiCheckSquare,
  FiCircle,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";
import { Range, getTrackBackground } from "react-range";

import { filterIcons } from "./Icons";

export default function FilterGroup({
  filter,
  selectedFilters,
  setSelectedFilters,
}) {
  // const defaultValues = [filter.range.selectedMin, filter.range.selectedMax];
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState(
    filter.selectionType === "range"
      ? [filter.range.min, filter.range.max]
      : [],
  );

  useEffect(() => {
    if (filter.selectionType !== "range") return;
    const selected = selectedFilters[filter.featureId];

    if (!selected) {
      // Nothing selected -> reset slider
      setValues([filter.range.min, filter.range.max]);
      return;
    }

    setValues([selected.min, selected.max]);
  }, [selectedFilters, filter]);

  const handleSelection = (option) => {
    // Range filters have their own handler
    if (filter.selectionType === "range") return;

    setSelectedFilters((prev) => {
      // Single Select (Radio)
      if (filter.selectionType === "single") {
        return {
          ...prev,
          [filter.featureId]: [option],
        };
      }

      // Multi Select (Checkbox)
      const current = prev[filter.featureId] || [];

      const exists = current.some(
        (item) => item.valueCode === option.valueCode,
      );

      return {
        ...prev,
        [filter.featureId]: exists
          ? current.filter((item) => item.valueCode !== option.valueCode)
          : [...current, option],
      };
    });
  };

  const handleRangeChange = (min, max) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter.featureId]: {
        min,
        max,
      },
    }));
  };

  return (
    <div className="border-b border-[#d7b89c] py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full"
      >
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-wide text-xs font-semibold text-[#8b6b49]">
            {filter.displayName}
          </span>
          {filter.selectionType !== "range" &&
            !!selectedFilters[filter.featureId]?.length && (
              <span className="bg-[#f1e3d2] text-[#8b6b49] text-[10px] px-2 rounded">
                {selectedFilters[filter.featureId].length}
              </span>
            )}
        </div>
        <FiChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="mt-4">
          {/* RANGE FILTER */}
          {filter.selectionType === "range" ? (
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  {values[0]}
                  {filter.range.unit || filter.range.currency}
                </span>
                <span>
                  {values[1]}
                  {filter.range.unit || filter.range.currency}
                </span>
              </div>
              <Range
                values={values}
                step={filter.range.step}
                min={filter.range.min}
                max={filter.range.max}
                onChange={(vals) => setValues(vals)}
                onFinalChange={(vals) => {
                  handleRangeChange(vals[0], vals[1]);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 w-full rounded"
                    style={{
                      background: getTrackBackground({
                        values,
                        colors: ["#ddd", "#8b6b49", "#ddd"],
                        min: filter.range.min,
                        max: filter.range.max,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-5 w-5 rounded-full bg-[#8b6b49] border-2 border-white shadow"
                  />
                )}
              />
            </div>
          ) : (
            /* SINGLE & MULTI */
            <div className="space-y-3">
              {filter.values?.map((option) => {
                const checked =
                  selectedFilters[filter.featureId]?.some(
                    (item) => item.valueCode === option.valueCode,
                  ) || false;
                const Icon = filterIcons[option.displayName];
                return (
                  <button
                    key={option.valueCode}
                    onClick={() => handleSelection(option)}
                    className="flex items-center gap-3 w-full hover:text-[#8b6b49]"
                  >
                    {filter.selectionType === "single" ? (
                      checked ? (
                        <FiCheckCircle size={18} />
                      ) : (
                        <FiCircle size={18} />
                      )
                    ) : checked ? (
                      <FiCheckSquare size={18} />
                    ) : (
                      <FiSquare size={18} />
                    )}
                    {Icon && <Icon size={18} className="text-[#8b6b49]" />}
                    <span className="text-sm">{option.displayName}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
