import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const protectedRoutes = ["/Riishi/AddProject", "/Riishi/AddDesign"];

  // Check if the requested route is protected and there is no session
  if (protectedRoutes.includes(request.nextUrl.pathname) && !session) {
    // Redirect to login page
    const loginUrl = new URL("/Login", request.url);
    loginUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // await updateSession(request);
  return NextResponse.next();
}

export const config = {
  matcher: ["/(api|trpc)(.*)", "/Riishi/AddProject", "/Riishi/AddDesign"],
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


