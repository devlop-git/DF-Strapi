import PdpSectionRenderer from "./PdpSectionRenderer";

export default function PdpCmsSections({ sections }) {
  return (
    <>
      {sections?.map((section) => (
        <PdpSectionRenderer
          key={`${section.__component}-${section.id}`}
          section={section}
        />
      ))}
    </>
  );
}
