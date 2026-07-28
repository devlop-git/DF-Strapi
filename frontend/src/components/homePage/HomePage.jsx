import React from "react";
import SectionRenderer from "./SectionRenderer";

const HomePage = ({ sections }) => {
  return (
    <div className="flex flex-col gap-y-12">
      {sections?.map((section) => (
        <SectionRenderer
          key={`${section.__component}-${section.id}`}
          section={section}
        />
      ))}
    </div>
  );
};

export default HomePage;
