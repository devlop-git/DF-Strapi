// Shown while page.js's async data-fetch (getPDP) is in flight -- landing
// here from a PLP card, or a router.refresh() (language switch) forced to
// remount this segment because the sku changed via shallow history update.
// Header/Footer live in layout.js, outside this Suspense boundary, so only
// this content area swaps out. It's shaped like the real page (breadcrumb
// row, image block, detail lines) so the layout holds its size instead of
// collapsing to a small floating spinner between an otherwise full header
// and footer.
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

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div className="space-y-3">
            <Bar className="aspect-square w-full" />
            <div className="flex gap-3">
              <Bar className="h-16 w-16 shrink-0" />
              <Bar className="h-16 w-16 shrink-0" />
              <Bar className="h-16 w-16 shrink-0" />
              <Bar className="h-16 w-16 shrink-0" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5 p-4">
            <div className="flex items-start justify-between gap-4">
              <Bar className="h-7 w-2/3" />
              <Bar className="h-4 w-24" />
            </div>

            <Bar className="h-6 w-32" />

            <Bar className="h-12 w-full" />

            <div className="space-y-2">
              <Bar className="h-4 w-20" />
              <div className="flex gap-2">
                <Bar className="h-8 w-16" />
                <Bar className="h-8 w-16" />
                <Bar className="h-8 w-16" />
              </div>
            </div>

            <div className="space-y-2">
              <Bar className="h-4 w-20" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Bar key={i} className="h-8 w-8 rounded-full" />
                ))}
              </div>
            </div>

            <Bar className="h-14 w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
