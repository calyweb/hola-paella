import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Toutes les villes → /paella-X rewrites vers /paella-city/X
const citySlugs = new Set([
  "pyla", "arcachon", "la-teste-de-buch", "cazaux", "la-hume", "gujan-mestras", "le-teich",
  "biganos", "mios", "audenge", "lanton", "andernos", "lege", "cap-ferret", "bordeaux",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /paella-arcachon → /paella-city/arcachon (delivery cities)
  // /paella-mariage → /paella/mariage (events)
  const paellaMatch = pathname.match(/^\/paella-(.+)$/);
  if (paellaMatch) {
    const slug = paellaMatch[1];
    if (citySlugs.has(slug)) {
      return NextResponse.rewrite(
        new URL(`/paella-city/${slug}`, request.url)
      );
    }
    return NextResponse.rewrite(
      new URL(`/paella/${slug}`, request.url)
    );
  }
}
