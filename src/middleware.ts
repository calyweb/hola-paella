import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Slugs des villes de livraison (pages /paella-[city])
const deliveryCitySlugs = new Set([
  "arcachon", "pyla", "la-teste-de-buch", "gujan-mestras", "le-teich", "la-hume",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /livraison-paella-arcachon → /livraison-paella/arcachon
  const cityMatch = pathname.match(/^\/livraison-paella-(.+)$/);
  if (cityMatch) {
    return NextResponse.rewrite(
      new URL(`/livraison-paella/${cityMatch[1]}`, request.url)
    );
  }

  // /paella-arcachon → /paella-city/arcachon (delivery cities)
  // /paella-mariage → /paella/mariage (events)
  const paellaMatch = pathname.match(/^\/paella-(.+)$/);
  if (paellaMatch) {
    const slug = paellaMatch[1];
    if (deliveryCitySlugs.has(slug)) {
      return NextResponse.rewrite(
        new URL(`/paella-city/${slug}`, request.url)
      );
    }
    return NextResponse.rewrite(
      new URL(`/paella/${slug}`, request.url)
    );
  }
}
