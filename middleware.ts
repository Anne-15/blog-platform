'use server'
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession(request);
  const protectedRoutes = ["/Riishi/AddProject", "/Riishi/AddDesign"];

  // Check if the requested route is protected and there is no session
  if (protectedRoutes.includes(request.nextUrl.pathname) && !session) {
    // Redirect to login page
    const loginUrl = new URL("/Login", request.url);
    loginUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/Riishi/AddProject", "/Riishi/AddDesign"],
};
