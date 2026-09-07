import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

export default function FeatureHighlights({ data }) {
  return (
    <section
      className="w-full"
      style={data.bgColor ? { backgroundColor: data.bgColor } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[28px] lg:text-[36px] text-center font-light text-[#171717] leading-tight">
            {data.title}
          </h2>

          <p className="mt-6 text-base leading-6 text-[#4B4B4B] text-center">
            {data.description}
          </p>
        </div>

        {/* Features */}
        <div className="   grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
          {data.items?.map((item) => {
            const iconForDesktop = item?.desktopIcon?.[0];
            const iconForMobile = item?.mobileIcon;
            const iconForTablet = item?.tabIcon;
            const iconPosition = item?.iconPosition || "top";

            const icon = (
              <>
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
              </>
            );

            const isSideIcon = iconPosition === "left" || iconPosition === "right";
            const textAlignClass = isSideIcon ? "text-left" : "text-center";

            const text = (
              <>
                {item.title && (
                  <h3
                    className={`text-base font-medium text-[#171714] ${textAlignClass}`}
                  >
                    {item.title}
                  </h3>
                )}

                <h4
                  className={`text-base font-medium text-[#171714] ${textAlignClass}`}
                >
                  {item.iconDescription}
                </h4>

                {item.CTAUrl && (
                  <span className="text-sm font-medium text-[#A0704F] group-hover:underline">
                    {item.CTALabel}
                  </span>
                )}
              </>
            );

            const wrapperClass = isSideIcon
              ? `flex items-center justify-center gap-5 ${
                  iconPosition === "right" ? "flex-row-reverse" : "flex-row"
                }`
              : `flex items-center justify-center gap-5 ${
                  iconPosition === "bottom" ? "flex-col-reverse" : "flex-col"
                }`;

            const content = (
              <>
                {icon}
                <div className={isSideIcon ? "flex flex-col" : "contents"}>
                  {text}
                </div>
              </>
            );

            return item.CTAUrl ? (
              <Link
                key={item?.id}
                href={item.CTAUrl}
                className={`group ${wrapperClass}`}
              >
                {content}
              </Link>
            ) : (
              <div key={item?.id} className={wrapperClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
