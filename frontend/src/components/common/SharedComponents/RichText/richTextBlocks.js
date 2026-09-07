// Shared factory for Strapi BlocksRenderer configs. Most sections only need
// to change typography/colour per block type, not the block structure
// itself -- so callers pass classNames (or a function of `level` for
// heading, since heading styling often varies by level) instead of
// re-writing the five renderer functions every time.
export function createRichTextBlocks({
  headingClassName = "font-serif text-2xl leading-tight my-2",
  paragraphClassName = "text-[17px] leading-8 my-2",
  quoteClassName = "italic text-[17px] leading-8 my-2",
  listClassName = "text-[17px] leading-8 my-2",
  listItemClassName,
  ...customBlocks
} = {}) {
  const resolveHeadingClassName = (level) =>
    typeof headingClassName === "function" ? headingClassName(level) : headingClassName;

  return {
    heading: ({ children, level }) => {
      const Tag = `h${level}`;
      return <Tag className={resolveHeadingClassName(level)}>{children}</Tag>;
    },
    paragraph: ({ children }) => <p className={paragraphClassName}>{children}</p>,
    quote: ({ children }) => <p className={quoteClassName}>{children}</p>,
    list: ({ children, format }) => {
      const Tag = format === "ordered" ? "ol" : "ul";
      return <Tag className={listClassName}>{children}</Tag>;
    },
    "list-item": ({ children }) => <li className={listItemClassName}>{children}</li>,
    // Escape hatch for a block type that needs structurally different
    // markup rather than just a className swap, e.g. { image: (...) => ... }
    ...customBlocks,
  };
}

export const defaultRichTextBlocks = createRichTextBlocks();
