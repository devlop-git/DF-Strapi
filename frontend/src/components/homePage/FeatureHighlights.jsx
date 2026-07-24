import Image from "next/image";
import { getStrapiMedia } from "@/utils/strapi";

export default function FeatureHighlights({ data }) {
  return (
    <section className="w-full bg-[#FCFBF8] py-20 border-y border-[#EFE8DF]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[28px] lg:text-[36px] text-left md:text-center font-light text-[#171717] leading-tight">
            {data.title}
          </h2>

          <p className="mt-6 text-base leading-6 text-[#4B4B4B] text-left md:text-center">
            {data.description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.items?.map((item) => {
            const iconForDesktop = item?.desktopIcon?.[0];
            const iconForMobile = item?.mobileIcon?.[0];
            const iconForTablet = item?.tabIcon?.[0];

            return (
              <div
                key={item?.id}
                className="flex items-center justify-center gap-5"
              >
                {/* Desktop */}
                {iconForDesktop && (
                  <Image
                    src={getStrapiMedia(iconForDesktop)}
                    alt={iconForDesktop.alternativeText || item.iconDescription}
                    width={60}
                    height={60}
                    className="hidden object-contain lg:block"
                  />
                )}

                {/* Tablet */}
                {iconForTablet && (
                  <Image
                    src={getStrapiMedia(iconForTablet)}
                    alt={iconForTablet.alternativeText || item.iconDescription}
                    width={60}
                    height={60}
                    className="hidden object-contain md:block lg:hidden"
                  />
                )}

                {/* Mobile */}
                {iconForMobile && (
                  <Image
                    src={getStrapiMedia(iconForMobile)}
                    alt={iconForMobile.alternativeText || item.iconDescription}
                    width={60}
                    height={60}
                    className="block object-contain md:hidden"
                  />
                )}

                <p className="text-[17px] leading-7 text-[#222] max-w-[180px]">
                  {item.iconDescription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
