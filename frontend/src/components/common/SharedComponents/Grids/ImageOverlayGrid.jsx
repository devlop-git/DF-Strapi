import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";
import { tiptapContentToHtml } from "../RichText/tiptapToHtml";

function OverlayCard({ item }) {
  const image = item?.image;
  const html = tiptapContentToHtml(item?.description);

  const content = (
    <>
      {item?.label && (
        <span className="absolute top-0 left-0 right-0 z-10 bg-[#F5F3F0] pt-6 pb-2 text-center text-xs font-semibold uppercase tracking-widest text-[#8A6D4E]">
          {item.label}
        </span>
      )}

      {image ? (
        <img
          src={getStrapiMedia(image)}
          alt={image?.alternativeText || item?.label || ""}
          className="absolute inset-x-0 bottom-0 top-10 h-[calc(100%-2.5rem)] w-full object-cover"
        />
      ) : (
        html && (
          <div
            className="mx-auto mt-16 max-w-xs px-4 text-center text-xs leading-6 text-[#4B4B4B] [&_a]:text-[#A0704F] [&_a]:underline [&_strong]:text-[#171717]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      )}

      {item?.CTAUrl && item?.CTALabel && (
        <span className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-black bg-white px-6 py-2 text-xs font-medium tracking-wide text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
          {item.CTALabel}
        </span>
      )}
    </>
  );

  const wrapperClassName =
    "group relative h-[220px] w-full overflow-hidden bg-[#F5F3F0]";

  return item?.CTAUrl ? (
    <Link href={item.CTAUrl} className={wrapperClassName}>
      {content}
    </Link>
  ) : (
    <div className={wrapperClassName}>{content}</div>
  );
}

export default function ImageOverlayGrid({ data }) {
  const items = data?.items || [];

  if (!items.length) return null;

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        {data?.heading && (
          <h2 className="mb-8 text-center font-serif text-[28px] lg:text-[36px] font-light text-[#171717] leading-tight">
            {data.heading}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <OverlayCard key={item?.id ?? index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
