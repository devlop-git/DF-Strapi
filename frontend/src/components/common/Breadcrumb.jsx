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
    <section className="lg:border-y lg:border-[#E8DDCF] bg-white">
      <div className="mx-auto lg:max-w-7xl  py-5 px-2 md:px-8 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex  items-center  text-sm md:text-base"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={item.label} className="flex text-sm items-center">
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
                  <FiChevronRight
                    className="lg:mx-3 text-[#4A4A4A]"
                    size={14}
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
