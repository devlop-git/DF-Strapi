export function getStrapiMedia(media) {
  if (!media) return "";

  const base = process.env.NEXT_PUBLIC_STRAPI_URL;
  return `${base}${media.formats?.large?.url || media.url}`;
}