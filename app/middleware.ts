'use server'
import { updateSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const protectedRoutes = ["/Riishi/AddProject", "/Riishi/AddDesign"];

  // Check if the requested route is protected and there is no session
  if (protectedRoutes.includes(request.nextUrl.pathname) && !session) {
    // Redirect to login page
    const res = NextResponse.redirect(new URL("/Login", request.url));
    console.log(res);
    return res;
  }

  return await updateSession(request);
}

export const config = {
  matcher: ["/Riishi/AddProject", "/Riishi/AddDesign"],
};
