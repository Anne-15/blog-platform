'use server'
import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.AUTH_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  // Extract credentials from form data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Verify credentials && get the user
  const user = await db
    .select()
    .from(UserTable)
    .where(eq(UserTable.email, email))
    .execute();

  //create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  //save the session in a cookie
  cookies().set("ssession", session, { expires, httpOnly: true });
}

export async function logout(){
  cookies().set("session", "", {expires: new Date(0)})
}

export async function getSession(request?: NextRequest) {
  const sessionCookie = request?.cookies.get("session")?.value || cookies().get("session")?.value;
  if (!sessionCookie) return null;
  return await decrypt(sessionCookie);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}