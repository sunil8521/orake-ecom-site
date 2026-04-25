import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const protectedRoutes = ["/account", "/orders", "/checkout"];
const authRoutes = ["/login", "/signup", "/verify-otp"];

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const isAuth = !!req.nextauth.token;

    if (authRoutes.some((route) => pathname.startsWith(route))) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
      if (!isAuth) {
        let from = pathname;
        if (req.nextUrl.search) {
          from += req.nextUrl.search;
        }

        return NextResponse.redirect(
          new URL(`/login?callbackUrl=${encodeURIComponent(from)}`, req.url)
        );
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // We handle the redirects manually above
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.webp$).*)",
  ],
};
