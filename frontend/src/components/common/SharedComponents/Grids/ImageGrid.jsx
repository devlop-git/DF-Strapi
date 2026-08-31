import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

const GRID_COLUMNS_BY_COUNT = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
};

export default function ImageGrid({ data }) {
  const items = data.items ?? [];
  const columnsClass = GRID_COLUMNS_BY_COUNT[items.length] || "lg:grid-cols-4";

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        {(data.heading || data.description) && (
          <div className="max-w-4xl mx-auto text-center">
            {data.heading && (
              <h2 className="font-serif text-[28px] lg:text-[36px] text-center font-light text-[#171717] leading-tight">
                {data.heading}
              </h2>
            )}

            {data.description && (
              <p className="mt-6 text-base leading-6 text-[#4B4B4B] text-center">
                {data.description}
              </p>
            )}
          </div>
        )}

        <div
          className={`grid grid-cols-1 mt-8 sm:grid-cols-2 ${columnsClass} gap-8`}
        >
          {items.map((item) => {
            const image = item.image;

            const content = (
              <>
                {image && (
                  <Image
                    src={getStrapiMedia(image)}
                    alt={image.alternativeText || item.title || ""}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                )}

                {item.title && (
                  <h3 className="mt-6 font-serif text-2xl text-center text-[#171717]">
                    {item.title}
                  </h3>
                )}

                {item.description && (
                  <p className="mt-3 text-base leading-6 text-center text-[#4B4B4B]">
                    {item.description}
                  </p>
                )}

                {item.CTAUrl && (
                  <span className="mt-4 text-sm font-medium text-center underline text-[#171717]">
                    {item.CTALabel}
                  </span>
                )}
              </>
            );

            return item.CTAUrl ? (
              <Link
                key={item.id}
                href={item.CTAUrl}
                className="flex flex-col items-center"
              >
                {content}
              </Link>
            ) : (
              <div key={item.id} className="flex flex-col items-center">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
