import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/account", "/orders", "/checkout"];
const authRoutes = ["/login", "/signup", "/verify-otp"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Better Auth stores session in a cookie named "better-auth.session_token"
  const sessionToken =
    req.cookies.get("better-auth.session_token")?.value ||
    req.cookies.get("__Secure-better-auth.session_token")?.value;

  const isAuth = !!sessionToken;

  // Redirect authenticated users away from auth pages
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Redirect unauthenticated users to login for protected routes
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
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.webp$).*)",
  ],
};
