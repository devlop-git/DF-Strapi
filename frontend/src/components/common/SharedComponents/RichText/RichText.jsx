"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { defaultRichTextBlocks } from "./richTextBlocks";

// Custom block renderers are plain functions, which can't cross the
// server/client boundary as props -- so this stays a Client Component, and
// any caller passing a custom `blocks` config (via createRichTextBlocks)
// must be a Client Component too. Callers that only need the defaults can
// be Server Components, since `defaultRichTextBlocks` is resolved here,
// inside the client module, rather than passed in.
export default function RichText({ content, blocks = defaultRichTextBlocks, className }) {
  if (!content) return null;

  return (
    <div className={className}>
      <BlocksRenderer content={content} blocks={blocks} />
    </div>
  );
}
