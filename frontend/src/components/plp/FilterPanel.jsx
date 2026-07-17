import FilterGroup from "./FilterGroup";

export default function FilterPanel({ filters }) {

  return (
    <aside className="w-72">
      <h2 className="font-bold mb-6">
        Filters
      </h2>
      {
        filters.map((filter)=>(
          <FilterGroup
            key={filter.code}
            filter={filter}
          />
        ))
      }
    </aside>
  );
}