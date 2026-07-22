import PlpSectionRenderer from "./PlpectionRenderer";

export default function PlpLayout({
  commerce,
  cms,
}) {
  return (
    <main className="max-w-10xl mx-auto p-6 bg-amber-50 text-black">
      {cms.plp_section?.map((section) => (
        <PlpSectionRenderer
          key={`${section.__component}-${section.id}`}
          section={section}
          commerce={commerce}
        />
      ))}
    </main>
  );
}