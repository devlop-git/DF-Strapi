"use client";

import { useState } from "react";
import Toolbar from "./Toolbar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import { reorderFilters } from "@/utils/reorderFilters";
import FilterSidebar from "./FilterSidebar";

export default function ProductListing({ data, commerce }) {
  const {
    category, //object
    totalProducts, //number
    sort,
    // filters,
    products,
    pagination, //object
  } = commerce;

  const [selectedSort, setSelectedSort] = useState(sort.selected);

  const position = data.filterConfig?.[0]?.position || "left";
  const filters = reorderFilters(commerce.filters, data.filterConfig?.order);

  const handleSortChange = (sort) => {
    setSelectedSort(sort);

    getProducts({
      sort,
      filters: appliedFilters,
      page: 1,
    });
  };

  return (
    <>
      <div className="lg:mx-18">
        <div className="flex lg:flex-row flex-col gap-8">
          {position === "left" && (
            <FilterSidebar
              filters={filters}
              selectedSort={sort?.selected}
              sortOptions={sort?.options}
              onSortChange={setSelectedSort}
              config={data?.toolbarConfig[0]}
            />
          )}
          <ProductGrid
            products={products}
            filters={filters}
            config={data.toolbarConfig[0]}
            totalProducts={totalProducts}
            selectedSort={sort.selected}
            sortOptions={sort.options}
            onSortChange={setSelectedSort} // later call handlesortChange fn
          />
          {position === "right" && (
            <FilterSidebar
              filters={filters}
              selectedSort={sort?.selected}
              sortOptions={sort?.options}
              onSortChange={setSelectedSort}
              config={data?.toolbarConfig[0]}
            />
          )}
          {/* <Pagination pagination={pagination} /> */}
        </div>
      </div>
    </>
  );
}
