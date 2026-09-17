import { StarterKit } from "@tiptap/starter-kit";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";

// Mirrors the `richTextSection` preset configured for the CMS's TipTap
// editor (cms/config/plugins.js) -- used only to convert the stored
// ProseMirror JSON to HTML via `generateHTML`, never mounted as an
// interactive editor, so this stays plain JS with no client runtime cost.
export const tiptapExtensions = [
  StarterKit,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  TextStyle,
  Color,
  Highlight.configure({ multicolor: true }),
];
