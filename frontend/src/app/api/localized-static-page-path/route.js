import { NextResponse } from "next/server";
import { resolveStaticPage, getStaticPageLocalizedPath } from "@/services/cms";
import { getCurrentMarket } from "@/lib/market";

// Called by the language switcher before it navigates: the current URL's
// slug is locale-specific business content, not a stable identifier, so
// switching locale can't just re-render the same path -- it has to look up
// what that same logical page's slug is in the target locale.
// `isStaticPage: false` tells the caller the current route isn't a
// Strapi-managed static page at all (home, PLP, PDP, ...), so it should
// just refresh in place; `path: null` with `isStaticPage: true` means the
// page exists but has no published translation in the target locale.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "";
  const currentLocale = searchParams.get("currentLocale");
  const targetLocale = searchParams.get("targetLocale");

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0 || !currentLocale || !targetLocale) {
    return NextResponse.json({ path: null, isStaticPage: false });
  }

  const market = await getCurrentMarket();
  const page = await resolveStaticPage(segments, currentLocale, market);
  if (!page) {
    return NextResponse.json({ path: null, isStaticPage: false });
  }

  const localizedPath = await getStaticPageLocalizedPath(page.documentId, targetLocale);
  return NextResponse.json({ path: localizedPath, isStaticPage: true });
}
