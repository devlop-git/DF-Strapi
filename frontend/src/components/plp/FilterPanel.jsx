import FilterGroup from "./FilterGroup";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Button from "@/components/common/Button";

export default function FilterPanel({ filters }) {
  return (
    <>
      <Button
        text="Filter & sort"
        count={1}
        icon={HiOutlineAdjustmentsHorizontal}
        className="w-full lg:hidden h-16 bg-[#A0704F] hover:bg-[#8d6144] text-white gap-4"
        iconClassName="w-7 h-7"
        textClassName="text-[18px] font-semibold"
        badgeClassName="w-8 h-8 rounded-md bg-white text-[#A0704F] text-[18px] font-semibold"
      />
      <aside className="hidden lg:inline lg:w-72">
        <h2 className="font-bold mb-6">Filters</h2>
        {filters?.map((filter) => (
          <FilterGroup key={filter.code} filter={filter} />
        ))}
      </aside>
    </>
  );
}
