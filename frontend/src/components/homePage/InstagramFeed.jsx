import Image from "next/image"
import Link from "next/link"
import { getStrapiMedia } from "@/utils/strapi"

export default function InstagramFeed({ data }) {
  const title = data?.title ?? ""
  const [prefix, handle] = title.split("@")
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          {title && (
            <h2 className="font-serif text-3xl font-light text-[#111] sm:text-4xl lg:text-5xl">
              {prefix}
              {handle && <span className="text-[#A5744A]">@{handle}</span>}
            </h2>
          )}
        </div>

        {/* Instagram Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data?.posts?.map((post) => {
            const image = post.instaImage?.[0]

            return (
              <Link
                key={post.id}
                href={post.instaURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-square overflow-hidden bg-[#F8F8F8]">
                  {image && (
                    <Image
                      src={getStrapiMedia(image)}
                      alt={image.alternativeText || "Instagram Post"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
