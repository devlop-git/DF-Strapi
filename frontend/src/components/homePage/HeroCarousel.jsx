"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { getStrapiMedia } from "@/utils/strapi";

export default function HeroCarousel({ data }) {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full"
      >
        {data?.heroSlides?.map((slide) => {
          const image = slide?.desktopImage?.[0];

          return (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[75vh] min-h-[700px] w-full">
                {/* Background */}
                {image && (
                  <Image
                    src={getStrapiMedia(image)}
                    alt={image.alternativeText || slide.title}
                    fill
                    priority
                    className="object-cover"
                  />
                )}

                {/* Optional Dark Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content */}
                <div className="absolute inset-0">
                  <div className="max-w-7xl mx-auto h-full px-8 lg:px-10 flex items-center">
                    <div className="max-w-lg ml-8 lg:ml-20">
                      <h2 className="font-serif text-[#111] text-5xl lg:text-7xl font-light leading-tight">
                        {slide.title}
                      </h2>

                      {slide.subTitle && (
                        <p className="mt-5 text-lg lg:text-2xl text-[#222]">
                          {slide.subTitle}
                        </p>
                      )}

                      {slide.buttonText && slide.buttonLink && (
                        <Link
                          href={slide.buttonLink}
                          className="
                            inline-flex
                            mt-10
                            px-10
                            py-4
                            bg-[#A5744A]
                            text-white
                            text-lg
                            hover:bg-[#8E653F]
                            transition-all
                            duration-300
                          "
                        >
                          {slide.buttonText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 35px !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #a5744a;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
