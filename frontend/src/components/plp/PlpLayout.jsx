import PlpSectionRenderer from "./PlpectionRenderer";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function PlpLayout({ commerce, cms }) {
  return (
    <main className="max-w-10xl mx-auto flex flex-col gap-y-6   text-black">
      <Breadcrumb items={commerce?.breadcrumb} />
      {cms?.plp_section?.map((section) => {
        return (
          <PlpSectionRenderer
            key={`${section.__component}-${section.id}`}
            section={section}
            commerce={commerce}
          />
        );
      })}
    </main>
  );
}
