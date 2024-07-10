'use server'
import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/auth";

export async function middleware(request: NextRequest) {
  // const session = request.cookies.get("session")?.value;
  const protectedRoutes = ["/Riishi/AddProject", "/Riishi/AddDesign"];

  console.log(request);
  // Check if the requested route is protected and there is no session
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    // Redirect to login page
    const res = NextResponse.redirect(new URL("/Login", request.url));
    console.log(res);
    return res;
  }

  // await updateSession(request);
  return request.nextUrl
}

export const config = {
  matcher: ["/Riishi/AddProject", "/Riishi/AddDesign"],
};
