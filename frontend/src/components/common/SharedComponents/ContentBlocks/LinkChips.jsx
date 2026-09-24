import Link from "next/link";

export default function LinkChips({ data }) {
  const chips = data?.chips || [];

  if (!chips.length) return null;

  return (
    <section className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6">
        {data?.title && (
          <h2 className="mb-6 text-center font-serif text-[28px] lg:text-[36px] font-light text-[#171717] leading-tight">
            {data.title}
          </h2>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((chip, index) => (
            <Link
              key={chip?.id ?? index}
              href={chip?.url || "#"}
              className="rounded-full bg-[#F5F3F0] px-4 py-2 text-sm text-[#171717] transition-colors hover:bg-[#E8DDCF]"
            >
              {chip?.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
