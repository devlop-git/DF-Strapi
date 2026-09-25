import { tiptapContentToHtml } from "../RichText/tiptapToHtml";
import ImageCardCarouselClient from "./ImageCardCarouselClient";

// Server-only wrapper: the TipTap->HTML conversion pulls in Node-only deps
// (happy-dom -> child_process) that can't be bundled for the client, so it
// must happen here and get passed down as a plain string, not inside the
// "use client" component that needs Swiper's interactivity.
export default function ImageCardCarousel({ data }) {
  const titleHtml = tiptapContentToHtml(data?.title);

  return <ImageCardCarouselClient data={data} titleHtml={titleHtml} />;
}
