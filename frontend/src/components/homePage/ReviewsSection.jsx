import Image from "next/image";
import { getStrapiMedia } from "@/utils/strapi";

export default function ReviewsSection({ data }) {
  if (!data) return null;

  const trustpilot = data?.trustpilotImage?.[0] ?? null;
  const google = data?.googleImage?.[0] ?? null;

  const renderReviewImage = (image, fallbackAlt, widthClass) => {
    if (!image) return null;

    return (
      <div className="transition-transform duration-300 hover:scale-105 flex justify-center">
        <Image
          src={getStrapiMedia(image)}
          alt={image.alternativeText || fallbackAlt}
          width={image.width}
          height={image.height}
          className={`h-auto ${widthClass} object-contain`}
        />
      </div>
    );
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        {data?.heading && (
          <h2 className="text-center font-serif text-[28px] font-light leading-tight text-[#111]  lg:text-[36px]">
            {data.heading}
          </h2>
        )}

        {/* Review Images */}
        <div className="mt-10 grid grid-cols-2 lg:flex items-center justify-center  sm:mt-12  md:gap-16 lg:gap-24">
          {renderReviewImage(trustpilot, "Trustpilot", "")}

          {renderReviewImage(google, "Google Reviews", "")}
        </div>
      </div>
    </section>
  );
}
