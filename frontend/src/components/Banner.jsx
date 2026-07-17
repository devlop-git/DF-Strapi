import React from 'react'
import Image from "next/image";
import { getStrapiMedia } from "@/utils/strapi";
import Link from "next/link";

const Banner = ({heroImage, homepage}) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[650px] overflow-hidden">
  {/* Background Image */}
  {heroImage && (
    <Image
      src={getStrapiMedia(heroImage)}
      alt={heroImage.alternativeText}
      fill
      priority
      className="object-cover"
    />
  )}

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/25" />

  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
      <div className="max-w-xl">

        <h1 className="text-white font-serif text-5xl lg:text-7xl font-light leading-tight">
          {homepage?.heroTitle}
        </h1>

        <p className="mt-6 text-white/90 text-lg lg:text-2xl leading-relaxed">
          {homepage?.heroDescription}
        </p>

        <Link
          href={homepage?.heroButtonLink}
          className="
            inline-flex
            mt-10
            px-10
            py-4
            bg-[#A5744A]
            text-white
            text-lg
            font-medium
            transition-all
            duration-300
            hover:bg-[#8F633E]
            hover:scale-105
          "
        >
          {homepage?.heroButtonText}
        </Link>

      </div>
    </div>
  </div>
</section>
  )
}

export default Banner