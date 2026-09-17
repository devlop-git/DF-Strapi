import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/strapi";

function FeatureMedia({ item, className }) {
  const desktop = item?.desktopIcon?.[0];
  const tablet = item?.tabIcon;
  const mobile = item?.mobileIcon;
  const altFallback = item?.lines?.[0]?.text || "";

  if (!desktop && !tablet && !mobile) return null;

  return (
    <>
      {desktop && (
        <Image
          src={getStrapiMedia(desktop)}
          alt={desktop.alternativeText || altFallback}
          width={400}
          height={240}
          className={`hidden object-cover lg:block ${className}`}
        />
      )}

      {tablet && (
        <Image
          src={getStrapiMedia(tablet)}
          alt={tablet.alternativeText || altFallback}
          width={400}
          height={240}
          className={`hidden object-cover md:block lg:hidden ${className}`}
        />
      )}

      {mobile && (
        <Image
          src={getStrapiMedia(mobile)}
          alt={mobile.alternativeText || altFallback}
          width={400}
          height={240}
          className={`block object-cover md:hidden ${className}`}
        />
      )}
    </>
  );
}

function FeatureLines({ lines, textAlignClass, className }) {
  if (!lines?.length) return null;

  return (
    <div className={`flex flex-col ${className}`}>
      {lines.map((line, index) => {
        if (!line?.text) return null;

        const isHeading = line.variant === "heading";
        const isLink = Boolean(line.url);
        const sizeWeightClass = isHeading ? "text-[28px] font-medium" : "text-sm font-medium";
        const linkStyleClass = isLink && !isHeading ? "uppercase tracking-wide" : "";
        const defaultColorClass = line.fontColor
          ? ""
          : isHeading
          ? "text-[#171714]"
          : isLink
          ? "text-[#A0704F]"
          : "text-[#4B4B4B]";

        const lineClassName = `${sizeWeightClass} ${textAlignClass} ${defaultColorClass} ${linkStyleClass} ${
          isLink ? "hover:underline" : ""
        }`;
        const style = {
          ...(line.fontColor && { color: line.fontColor }),
          ...(line.fontFamily && { fontFamily: line.fontFamily }),
        };

        return isLink ? (
          <Link key={line.id ?? index} href={line?.url} className={lineClassName} style={style}>
            {line.text}
          </Link>
        ) : (
          <span key={line.id ?? index} className={lineClassName} style={style}>
            {line.text}
          </span>
        );
      })}
    </div>
  );
}

function ImageFeatureCard({ item }) {
  return (
    <div className="flex flex-col items-center text-center">
      <FeatureMedia item={item} className="h-48 w-full lg:h-56" />

      <FeatureLines
        lines={item.lines}
        textAlignClass="text-center"
        className="mt-4 items-center gap-1"
      />
    </div>
  );
}

function IconFeatureCard({ item }) {
  const iconPosition = item?.iconPosition || "top";
  const isSideIcon = iconPosition === "left" || iconPosition === "right";
  const textAlignClass = isSideIcon ? "text-left" : "text-center";

  const wrapperClass = isSideIcon
    ? `flex items-center justify-center gap-5 ${
        iconPosition === "right" ? "flex-row-reverse" : "flex-row"
      }`
    : `flex items-center justify-center gap-5 ${
        iconPosition === "bottom" ? "flex-col-reverse" : "flex-col"
      }`;

  return (
    <div className={wrapperClass}>
      <FeatureMedia item={item} className="h-15 w-15" />

      <FeatureLines
        lines={item.lines}
        textAlignClass={textAlignClass}
        className={`gap-1 ${isSideIcon ? "items-start" : "items-center"}`}
      />
    </div>
  );
}

export default function FeatureHighlights({ data }) {
  const columns = Number.isFinite(data?.gap) && data.gap > 0 ? data.gap : 4;
  const tabletColumns = Math.min(columns, 2);

  return (
    <section
      className="w-full"
      style={data.bgColor ? { backgroundColor: data.bgColor } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[28px] lg:text-[36px] text-center font-light text-[#171717] leading-tight">
            {data.title}
          </h2>

          <p className="mt-6 text-base leading-6 text-[#4B4B4B] text-center">
            {data.description}
          </p>
        </div>

        {/* Features */}
        <div
          className="grid grid-cols-1 mt-8 gap-4 md:grid-cols-[repeat(var(--tablet-cols),minmax(0,1fr))] lg:gap-12 lg:grid-cols-[repeat(var(--desktop-cols),minmax(0,1fr))]"
          style={{
            "--tablet-cols": tabletColumns,
            "--desktop-cols": columns,
          }}
        >
          {data.items?.map((item) =>
            item.mediaType === "image" ? (
              <ImageFeatureCard key={item?.id} item={item} />
            ) : (
              <IconFeatureCard key={item?.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
