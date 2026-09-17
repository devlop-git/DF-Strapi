import { generateHTML } from "@tiptap/html/server";
import sanitizeHtml from "sanitize-html";
import { tiptapExtensions } from "../RichText/tiptapExtensions";

// The TipTap custom field (plugin::tiptap-editor.RichText) stores content as
// a JSON-stringified ProseMirror doc (its underlying Strapi attribute type is
// "text"), not a parsed object -- so it must be JSON.parse'd before
// generateHTML can turn it into markup. `@tiptap/html`'s default export
// needs a browser `window`; the `/server` entrypoint doesn't, so this whole
// conversion can happen here in a plain Server Component -- no "use client"
// needed, unlike the Strapi-Blocks-based components (e.g. ImageBanner.jsx)
// that build a `blocks` config of functions and must run on the client.
function contentToHtml(content) {
  if (!content) return "";

  let doc;
  try {
    doc = typeof content === "string" ? JSON.parse(content) : content;
  } catch {
    return "";
  }

  // Guards against entries saved before this field switched from Strapi's
  // Blocks editor to TipTap (that old format has no `type: "doc"` wrapper
  // and generateHTML throws on it) -- such entries need re-saving through
  // the new editor in the admin, but must never crash the page in the
  // meantime.
  let html;
  try {
    html = generateHTML(doc, tiptapExtensions);
  } catch {
    return "";
  }

  // Real security boundary now that we render raw HTML instead of Strapi's
  // structured Blocks JSON: only formatting tags/attributes TipTap's
  // configured extensions can actually produce are allowed through.
  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "strong",
      "em",
      "u",
      "s",
      "a",
      "ul",
      "ol",
      "li",
      "blockquote",
      "span",
      "mark",
      "br",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      "*": ["style"],
    },
    allowedStyles: {
      "*": {
        color: [/^.*$/],
        "background-color": [/^.*$/],
        "text-align": [/^left$|^right$|^center$|^justify$/],
      },
    },
  });
}

export default function RichTextSection({ data }) {
  const html = contentToHtml(data?.content);

  return (
    <section
      className="w-full"
      style={data?.bgColor ? { backgroundColor: data.bgColor } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        {data?.heading && (
          <h2 className="font-serif text-2xl uppercase tracking-wide text-[#1F2937]">
            {data.heading}
          </h2>
        )}

        {html && (
          <div
            className="mt-4 [&_h1]:text-[32px] [&_h2]:text-[26px] [&_h3]:text-2xl [&_h4]:text-xl [&_h5]:text-lg [&_h6]:text-base lg:[&_h1]:text-[40px] lg:[&_h2]:text-[32px] [&_h1]:font-serif [&_h2]:font-serif [&_h3]:font-serif [&_h1]:my-2 [&_h2]:my-2 [&_h3]:my-2 [&_h4]:my-2 [&_h5]:my-2 [&_h6]:my-2 [&_h1]:leading-tight [&_h2]:leading-tight [&_h3]:leading-tight [&_p]:text-base [&_p]:leading-7 [&_p]:text-[#4B4B4B] [&_p]:my-2 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:list-outside [&_ol]:pl-5 [&_li]:my-1 [&_li>p]:m-0 [&_blockquote]:italic [&_a]:text-[#A0704F] [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </section>
  );
}
