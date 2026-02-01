"use server";
import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { encrypt, SESSION_MAX_AGE_SECONDS } from "@/lib/session";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const rows = await db
    .select()
    .from(UserTable)
    .where(eq(UserTable.email, email))
    .execute();

  if (rows.length === 0) {
    throw new Error("Invalid email or password.");
  }

  const user = rows[0];
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid email or password.");
  }

  const expires = new Date(Date.now() + SESSION_MAX_AGE_SECONDS * 1000);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true, path: "/", sameSite: "lax" });
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

import { decrypt } from "@/lib/session";

export async function getSession(request?: NextRequest) {
  const sessionCookie = request?.cookies.get("session")?.value || cookies().get("session")?.value;
  if (!sessionCookie) return null;
  return await decrypt(sessionCookie);
}
