import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

const ALIGNMENT_CLASSES = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

export default function PromotionBannerCard({ data }) {
  if (!data) return null;

  const desktopBgImage = data?.desktopBgImage ?? null;
  const tabletBgImage = data?.tabBgImage ?? null;
  const mobileBgImage = data?.mobileBgImage ?? null;
  const alignmentClass =
    ALIGNMENT_CLASSES[data?.contentAlignment] || ALIGNMENT_CLASSES.left;

  return (
    <div className="relative overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-[400px]">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile */}
        {mobileBgImage && (
          <Image
            src={getStrapiMedia(mobileBgImage)}
            alt={
              mobileBgImage.alternativeText || data.title || "Promotion Banner"
            }
            fill
            priority
            className="block object-cover md:hidden"
          />
        )}

        {/* Tablet */}
        {tabletBgImage && (
          <Image
            src={getStrapiMedia(tabletBgImage)}
            alt={
              tabletBgImage.alternativeText || data.title || "Promotion Banner"
            }
            fill
            priority
            className="hidden object-cover md:block lg:hidden"
          />
        )}

        {/* Desktop */}
        {desktopBgImage && (
          <Image
            src={getStrapiMedia(desktopBgImage)}
            alt={
              desktopBgImage.alternativeText ||
              data.title ||
              "Promotion Banner"
            }
            fill
            priority
            className="hidden object-cover lg:block"
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className={`absolute inset-0 flex items-center ${alignmentClass}`}>
        <div className="max-w-xl px-6 sm:px-10 lg:px-28">
          {/* Title */}
          {data?.title && (
            <h2 className="font-serif text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] font-light whitespace-pre-line">
              {data.title}
            </h2>
          )}

          {/* Description */}
          {data?.description && (
            <p className="mt-4 sm:mt-6 text-base sm:text-[17px] leading-7 sm:leading-8 text-white whitespace-pre-line">
              {data.description}
            </p>
          )}

          {/* Button */}
          {data?.btnText && data?.btnLink && (
            <Link
              href={data.btnLink}
              className="
                mt-8
                sm:mt-10
                inline-flex
                w-full
                sm:w-auto
                items-center
                justify-center
                md:px-8
                px-5
                md:py-4
                py-3
                bg-[#A5744A]
                text-white
                text-center
                font-medium
                tracking-wide
                transition-all
                duration-300
                hover:bg-[#8C643F]
              "
            >
              {data.btnText}
            </Link>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      {data?.disclaimer && (
        <p className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 text-xs text-white/80">
          {data.disclaimer}
        </p>
      )}
    </div>
  );
}
