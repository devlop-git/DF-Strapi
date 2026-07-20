import Link from "next/link"
import { getStrapiMedia } from "@/utils/strapi"

export default function FeaturedCategories({ data }) {
  const desktopImage = data?.desktopImage?.[0]
  const tabletImage = data?.tabImage?.[0]
  const mobileImage = data?.mobileImage?.[0]

  const imageUrl = getStrapiMedia(mobileImage || tabletImage || desktopImage)

  return (
    <section className="bg-[#F8F5F2] py-20">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left */}
          <div className="max-w-xl ">
            <h2 className="font-serif text-5xl lg:text-7xl font-light leading-[1.05] text-[#111]">
              {data.title}
            </h2>

            <p className="mt-10 text-xl leading-9 text-[#444]">
              {data.description}
            </p>

           {data.ctaText && <Link
              href={data.ctaURL || '/'}
              className="mt-14 inline-flex w-full justify-center border border-black px-10 py-5 text-center text-lg transition hover:bg-black hover:text-white md:w-auto"
            >
              {data.ctaText}
            </Link>}
          </div>

          {/* Right */}
          <div className="flex justify-center order-first md:order-last">
            <picture>
              {desktopImage && (
                <source
                  media="(min-width:1024px)"
                  srcSet={getStrapiMedia(desktopImage)}
                />
              )}

              {tabletImage && (
                <source
                  media="(min-width:768px)"
                  srcSet={getStrapiMedia(tabletImage)}
                />
              )}

             {(desktopImage || tabletImage || mobileImage) && <img
                src={getStrapiMedia(mobileImage || tabletImage || desktopImage)}
                alt={data.title}
                className="w-full max-w-[650px] object-cover"
              />}
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
