import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/session";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const path = request.nextUrl.pathname;
  const isProtected =
    path === "/Riishi/AddProject" ||
    path === "/Riishi/AddDesign" ||
    path.startsWith("/Riishi/Admin") ||
    path.startsWith("/Riishi/Projects/Edit/") ||
    path.startsWith("/Riishi/Blogs/Edit/");

  if (isProtected && !session) {
    const loginUrl = new URL("/Login", request.url);
    loginUrl.searchParams.set("redirectTo", path);
    return NextResponse.redirect(loginUrl);
  }

  // Refresh session cookie on each request so you stay logged in
  if (isProtected && session) {
    const res = await updateSession(request);
    if (res) return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/(api|trpc)(.*)",
    "/Riishi/AddProject",
    "/Riishi/AddDesign",
    "/Riishi/Admin",
    "/Riishi/Admin/:path*",
    "/Riishi/Projects/Edit/:path*",
    "/Riishi/Blogs/Edit/:path*",
  ],
};

// const publicroutes = ["/"];

// export const authroutes = ["/Login", "/Signup"];

// const apiAuthPrefix = "/api/auth";

// const DEFAULT_LOGIN_REDIRECT = "/Riishi";

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicroutes.includes(nextUrl.pathname);

//   const isAuthRoute = authroutes.includes(nextUrl.pathname);

//   if (isApiAuthRoute) {
//     return null;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return null;
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     return Response.redirect(new URL("/Login", nextUrl));
//   }

//   return null;
// });


