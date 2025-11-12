import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  console.log("Middleware is running...");

  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/my/home", request.url));
  }

  if (pathname === "/my" || pathname === "/sg") {
    const locale = pathname.slice(1);
    request.nextUrl.pathname = `/${locale}/home`;
    return NextResponse.rewrite(request.nextUrl);
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

