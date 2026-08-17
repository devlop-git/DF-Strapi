import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Breadcrumb from "@/components/common/Breadcrumb";
import StaticPageSectionRenderer from "./StaticPageSectionRenderer";

// Shared render for a resolved static-page (from resolveStaticPage()),
// used by both the [...slug] catch-all and the [category]/[subCategory]
// fallback (a 2-segment static page, e.g. /customer-care/valuations, would
// otherwise collide with the PLP route -- see that page.js for why).
export default function StaticPageContent({ page }) {
  return (
    <>
      {page.breadcrumbItems && <Breadcrumb items={page.breadcrumbItems} />}

      <section className="mx-auto max-w-4xl space-y-10 px-4 py-8 lg:px-10">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-[#1F1F1F]">{page.title}</h1>
          {page.content && (
            <div className="prose max-w-none">
              {/* remark-gfm: strikethrough/tables (Strapi's editor toolbar
                  exposes strikethrough as GFM `~~text~~`). rehype-raw:
                  Markdown has no native underline syntax, so Strapi's editor
                  emits raw `<u>` HTML for it -- react-markdown strips
                  embedded HTML by default, this opts back in. Safe here
                  since `content` only ever comes from trusted Strapi
                  authors, never public user input. */}
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {page.content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {page.componentContent.map((section) => (
          <StaticPageSectionRenderer key={section.id} section={section} />
        ))}
      </section>
    </>
  );
}
