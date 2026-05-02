import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/account", "/orders", "/checkout"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const sessionToken =
    req.cookies.get("better-auth.session_token")?.value ||
    req.cookies.get("__Secure-better-auth.session_token")?.value;

  const isAuth = !!sessionToken;

  // Protected route + not logged in → redirect to home with modal trigger
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAuth) {
      let from = pathname;
      if (req.nextUrl.search) from += req.nextUrl.search;

      const url = new URL("/", req.url);
      url.searchParams.set("auth", "login");
      url.searchParams.set("redirect", from);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.webp$).*)",
  ],
};
