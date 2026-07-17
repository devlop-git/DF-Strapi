import Image from "next/image";
import { getStrapiMedia } from "@/utils/strapi";

export default function ReviewsSection({ data }) {
  const trustpilot = data.trustpilotImage?.[0];
  const google = data.googleImage?.[0];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center font-serif text-[38px] lg:text-[54px] font-light leading-tight text-[#111]">
          {data.heading}
        </h2>

        {/* Review Images */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-14 lg:gap-24">

          {/* Trustpilot */}
          {trustpilot && (
            <div className="transition-transform duration-300 hover:scale-105">
              <Image
                src={getStrapiMedia(trustpilot)}
                alt={trustpilot.alternativeText || "Trustpilot"}
                width={trustpilot.width}
                height={trustpilot.height}
                className="h-auto w-[300px] object-contain"
              />
            </div>
          )}

          {/* Google Reviews */}
          {google && (
            <div className="transition-transform duration-300 hover:scale-105">
              <Image
                src={getStrapiMedia(google)}
                alt={google.alternativeText || "Google Reviews"}
                width={google.width}
                height={google.height}
                className="h-auto w-[250px] object-contain"
              />
            </div>
          )}

        </div>

      </div>
    </section>
  );
}