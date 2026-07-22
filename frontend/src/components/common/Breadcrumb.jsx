import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function Breadcrumb({
  items = [
    { label: "Homepage", href: "/" },
    { label: "Engagement rings", href: "/engagement-rings" },
    { label: "Solitaire rings", href: null },
  ],
}) {
  return (
    <section className="border-y border-[#E8DDCF] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm md:text-base"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={item.label} className="flex items-center">
                {isLast ? (
                  <span className="font-medium text-[#1F1F1F]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#1F1F1F] transition hover:text-[#A0704F]"
                  >
                    {item.label}
                  </Link>
                )}

                {!isLast && (
                  <FiChevronRight className="mx-3 text-[#4A4A4A]" size={18} />
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
