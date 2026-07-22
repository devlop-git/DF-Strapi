import PlpSectionRenderer from "./PlpectionRenderer";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlpApiMockData from "../../mock/cms/plpApiData";

export default function PlpLayout({ commerce, cms }) {
  return (
    <main className="max-w-10xl mx-auto   text-black">
      <Breadcrumb items={PlpApiMockData?.breadcrumb} />
      {cms.plp_section?.map((section) => {
        return (
          <PlpSectionRenderer
            key={section.id}
            section={section}
            commerce={commerce}
          />
        );
      })}
    </main>
  );
}
