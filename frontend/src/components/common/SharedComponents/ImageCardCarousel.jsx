"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { getStrapiMedia } from "@/utils/strapi";
import DotIndicatorButton from "@/components/common/DotIndicatorButton";

// Generic title + linked-image-card carousel with dot navigation -- reused
// across any dynamic-zone section shaped like this (ring styles, metal
// types, shape guide, etc.), not tied to one specific card set. Strapi
// fields expected on `data`:
//   title: string                    -- e.g. "Ring Styles"
//   cards: repeatable component[]    -- one per card:
//     - label: string                -- e.g. "Solitaire"
//     - link: string                 -- destination URL, required
//     - desktopImage: media (single)
//     - tabImage: media (single)
//     - mobileImage: media (single)

export default function ImageCardCarousel({ data }) {
  const items = data?.cards ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  if (!items.length) return null;

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {data?.title && (
          <h2 className="mb-10 text-center font-serif text-3xl font-light text-[#111] sm:text-4xl">
            {data.title}
          </h2>
        )}

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.4}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {items.map((item, index) => {
            const desktopImage = item?.desktopImage?.[0] ?? item?.desktopImage;
            const tabletImage = item?.tabImage?.[0] ?? item?.tabImage;
            const mobileImage = item?.mobileImage?.[0] ?? item?.mobileImage;

            return (
              <SwiperSlide key={item.id ?? index}>
                <Link href={item.link} className="group">
                  <div className="relative aspect-4/5 overflow-hidden bg-[#F8F8F8]">
                    {desktopImage && (
                      <Image
                        src={getStrapiMedia(desktopImage)}
                        alt={desktopImage.alternativeText || item.label || ""}
                        fill
                        priority={index === 0}
                        className="hidden object-cover transition-transform duration-500 group-hover:scale-105 lg:block"
                      />
                    )}

                    {tabletImage && (
                      <Image
                        src={getStrapiMedia(tabletImage)}
                        alt={tabletImage.alternativeText || item.label || ""}
                        fill
                        priority={index === 0}
                        className="hidden object-cover transition-transform duration-500 group-hover:scale-105 md:block lg:hidden"
                      />
                    )}

                    {mobileImage && (
                      <Image
                        src={getStrapiMedia(mobileImage)}
                        alt={mobileImage.alternativeText || item.label || ""}
                        fill
                        priority={index === 0}
                        className="object-cover transition-transform duration-500 group-hover:scale-105 md:hidden"
                      />
                    )}

                    {item.label && (
                      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-lg text-white">
                        {item.label}
                      </span>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="mt-8 flex justify-center gap-3">
          {items.map((_, index) => (
            <DotIndicatorButton
              key={index}
              active={activeIndex === index}
              onClick={() => swiperRef.current?.slideTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
