import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

export default function InstagramFeed({ data }) {
  const title = data?.title ?? "";
  const [prefix, handle] = title.split("@");
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          {title && (
            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-4">
              <h2 className="font-serif text-3xl font-light text-[#111] sm:text-4xl lg:text-[36px]">
                {prefix}
              </h2>
              {handle && (
                <span className="text-[#A5744A] text-[28px] lg:text-[36px]">
                  @{handle}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Instagram Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data?.posts?.map((post) => {
            const imageForDesktop = post?.desktopInstaImage?.[0];
            const imageForMobile = post?.mobileInstaImage?.[0];
            const imageForTablet = post?.tabInstaImage?.[0];

            return (
              <Link
                key={post.id}
                href={post.instaURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-square overflow-hidden bg-[#F8F8F8]">
                  {imageForDesktop && (
                    <Image
                      src={getStrapiMedia(imageForDesktop)}
                      alt={imageForDesktop.alternativeText || "Instagram Post"}
                      fill
                      priority={false}
                      className="hidden object-cover transition-transform duration-500 group-hover:scale-105 lg:block"
                    />
                  )}

                  {imageForTablet && (
                    <Image
                      src={getStrapiMedia(imageForTablet)}
                      alt={imageForTablet.alternativeText || "Instagram Post"}
                      fill
                      priority={false}
                      className="hidden object-cover transition-transform duration-500 group-hover:scale-105 md:block lg:hidden"
                    />
                  )}

                  {imageForMobile && (
                    <Image
                      src={getStrapiMedia(imageForMobile)}
                      alt={imageForMobile.alternativeText || "Instagram Post"}
                      fill
                      priority={false}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 md:hidden"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
