import PlpSectionRenderer from "./PlpectionRenderer";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function PlpLayout({ commerce, cms }) {
  return (
    <main className="max-w-10xl mx-auto lg:p-0 p-3  text-black">
      <Breadcrumb
        items={[
          {
            label: "Homepage",
            href: "/",
          },
          {
            label: "Engagement rings",
            href: "/engagement-rings",
          },
          {
            label: "Solitaire rings",
          },
        ]}
      />
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
