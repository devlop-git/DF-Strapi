import FilterSidebar from "./FilterSidebar";

export default function FilterPanel({ filters }) {
  return (
    <aside className="w-72">
      {
        filters?.map((filter)=>(
          <FilterSidebar
            key={filter?.featureId}
            filters={filters}
          />
        ))
      }
    </aside>
  );
}