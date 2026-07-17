import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

export default function PromotionBanner({ data }) {
  const bgImage = data.backgroundImage?.[0];

  return (
    <section className="bg-[#FCFBF8] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden min-h-[360px] lg:min-h-[430px]">

          {/* Background Image */}
          {bgImage && (
            <Image
              src={getStrapiMedia(bgImage)}
              alt={bgImage.alternativeText || data.title}
              fill
              priority
              className="object-cover"
            />
          )}

          {/* Left Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F2EF] via-[#F4F2EF]/95 via-35% to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-10 lg:px-28">

              <h2 className="font-serif text-[#111] text-5xl lg:text-6xl leading-[1.08] font-light whitespace-pre-line">
                {data.title}
              </h2>

              <p className="mt-6 text-[17px] leading-8 text-[#3B3B3B] whitespace-pre-line">
                {data.description}
              </p>

              <Link
                href={data.btnLink}
                className="
                  inline-flex
                  mt-10
                  px-8
                  py-4
                  bg-[#A5744A]
                  text-white
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300
                  hover:bg-[#8C643F]
                "
              >
                {data.btnText}
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}