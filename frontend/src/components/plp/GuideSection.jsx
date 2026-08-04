import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

const lgGridCols = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const GuideSection = ({ data }) => {
  if (!data) return null;
  const guideItemsLengthIs = data?.guideItem?.length;

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-serif text-[28px] lg:text-[36px] text-[#1E1E1E]">
              {data.title}
            </h2>

            {data.description && (
              <p className="mt-3 text-base  text-[#1E1E1E]">
                {data.description}
              </p>
            )}
          </div>

          {/* Guide Items */}
          <div
            className={`mt-14 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:gap-y-0 lg:mx-40 ${
              lgGridCols[guideItemsLengthIs] || "lg:grid-cols-4"
            }`}
          >
            {data?.guideItem?.map((item) => {
              const icon = item.desktopIcon || item.mobileIcon || item.tabIcon;

              return (
                <Link
                  key={`${item.id}-${item.title}`}
                  href={item.CTAUrl || "#"}
                  className="group flex flex-col lg:flex-row items-center  lg:justify-center gap-6"
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
                    <h3 className="text-base font-normal text-[#222]">
                      {item.title}
                    </h3>

                    <p className="mt-1 lg:mt-3 text-sm  font-medium text-[#A0704F] group-hover:underline">
                      {item.CTALabel}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default GuideSection;
