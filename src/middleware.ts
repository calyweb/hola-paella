import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /livraison-paella-arcachon → /livraison-paella/arcachon
  const cityMatch = pathname.match(/^\/livraison-paella-(.+)$/);
  if (cityMatch) {
    return NextResponse.rewrite(
      new URL(`/livraison-paella/${cityMatch[1]}`, request.url)
    );
  }

  // /paella-mariage → /paella/mariage
  const eventMatch = pathname.match(/^\/paella-(.+)$/);
  if (eventMatch) {
    return NextResponse.rewrite(
      new URL(`/paella/${eventMatch[1]}`, request.url)
    );
  }
}
