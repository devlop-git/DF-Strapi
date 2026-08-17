// Header/Footer live in the sibling layout.js, outside this Suspense
// boundary, so this only needs to hold the content area's shape.
function Bar({ className = "" }) {
  return <div className={`animate-pulse rounded bg-[#EDE6D9] ${className}`} />;
}

export default function Loading() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto lg:max-w-7xl py-5 px-2 md:px-8 lg:px-10">
          <Bar className="h-4 w-64" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-4 px-4 py-8 lg:px-10">
        <Bar className="h-8 w-2/3" />
        <Bar className="h-4 w-full" />
        <Bar className="h-4 w-full" />
        <Bar className="h-4 w-5/6" />
        <Bar className="h-4 w-full" />
        <Bar className="h-4 w-3/4" />
      </section>
    </>
  );
}
