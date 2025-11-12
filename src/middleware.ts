import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  console.log("Middleware is running...");

  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/my/new-landing", request.url));
  }

  if (pathname === "/my" || pathname === "/sg") {
    return NextResponse.redirect(new URL(`${pathname}/new-landing`, request.url));
  }

  const response = intlMiddleware(request);

  if (
    !pathname.startsWith("/my") &&
    !pathname.startsWith("/sg")
  ) {

    const url = new URL(
      `/${routing.defaultLocale}${pathname}`,
      request.url
    );
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/(my|sg)/:path*",
    "/brands",
    "/creators",
    "/about",
    "/faq",
    "/contact",
    "/resources",
    "/newsroom",
    "/privacy-policy",
    "/terms-and-conditions",
  ],
};

