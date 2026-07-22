import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";
import FAQSection from "./FAQSection";
import NewsletterSection from "./NewsletterSection";

const GuideSection = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <section className=" py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-[#1E1E1E]">
              {data.title}
            </h2>

            {data.description && (
              <p className="mt-3 text-lg md:text-xl text-[#1E1E1E]">
                {data.description}
              </p>
            )}
          </div>

          {/* Guide Items */}
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {data.guideItem?.map((item) => {
              const icon = item.desktopIcon || item.mobileIcon || item.tabIcon;

              return (
                <Link
                  key={item.id}
                  href={item.CTAUrl || "#"}
                  className="group flex items-center gap-6"
                >
                  {/* Icon */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center">
                    {icon && (
                      <Image
                        src={getStrapiMedia(icon)}
                        alt={item.title}
                        width={90}
                        height={90}
                        className="h-auto w-full object-contain"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-normal text-[#222]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xl font-medium text-[#A0704F] group-hover:underline">
                      {item.CTALabel}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <FAQSection />
      <NewsletterSection />
    </>
  );
};

export default GuideSection;
