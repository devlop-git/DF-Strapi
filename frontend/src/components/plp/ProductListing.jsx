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
        <div className="hidden lg:block">
          <Toolbar
            totalProducts={totalProducts}
            selectedSort={sort.selected}
            sortOptions={sort.options}
            onSortChange={setSelectedSort} // later call handlesortChange fn
            config={data.toolbarConfig[0]}
          />
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          {position === "left" && <FilterSidebar filters={filters} />}
          <ProductGrid products={products} filters={filters} />
          {position === "right" && <FilterSidebar filters={filters} />}
          <Pagination pagination={pagination} />
        </div>
      </div>
    </>
  );
}
