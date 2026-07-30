import { getPDPExperience } from "@/services/cms";

// Server-side proxy so the browser can fetch a new PDP configuration
// directly (no full page navigation/remount) without hitting CORS on the
// real backend -- the browser only ever talks to this route, which does the
// same server-side call getPDPExperience already makes from page.js.
export async function GET(request, { params }) {
  const { slug, sku } = await params;
  const result = await getPDPExperience(slug, sku);
  return Response.json(result);
}
