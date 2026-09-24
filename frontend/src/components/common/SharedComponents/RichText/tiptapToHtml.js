import { generateHTML } from "@tiptap/html/server";
import sanitizeHtml from "sanitize-html";
import { tiptapExtensions } from "./tiptapExtensions";

// The TipTap custom field (plugin::tiptap-editor.RichText) stores content as
// a JSON-stringified ProseMirror doc (its underlying Strapi attribute type is
// "text"), not a parsed object -- so it must be JSON.parse'd before
// generateHTML can turn it into markup. `@tiptap/html`'s default export
// needs a browser `window`; the `/server` entrypoint doesn't, so this whole
// conversion can happen in a plain Server Component -- no "use client"
// needed, unlike the Strapi-Blocks-based components (e.g. ImageBanner.jsx)
// that build a `blocks` config of functions and must run on the client.
export function tiptapContentToHtml(content) {
  if (!content) return "";

  let doc;
  try {
    doc = typeof content === "string" ? JSON.parse(content) : content;
  } catch {
    return "";
  }

  // Guards against entries saved before a field switched from Strapi's
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

  // Real security boundary now that raw HTML is rendered instead of Strapi's
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
