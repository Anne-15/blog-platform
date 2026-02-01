import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const saltRounds = 10;

/**
 * Reset admin password. Call with:
 *   POST /api/users/reset-password
 *   Body: { "email": "your@email.com", "newPassword": "new-secure-password", "secret": "your-ADMIN_RESET_SECRET" }
 *
 * Set ADMIN_RESET_SECRET in .env.local and use the same value in the request.
 * After resetting, remove or rotate the secret.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.ADMIN_RESET_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "Password reset not configured (missing ADMIN_RESET_SECRET)." },
      { status: 503 }
    );
  }

  let body: { email?: string; newPassword?: string; secret?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const { email, newPassword, secret: bodySecret } = body;

  if (bodySecret !== secret) {
    return NextResponse.json(
      { message: "Invalid or missing secret." },
      { status: 401 }
    );
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    return NextResponse.json(
      { message: "Email is required." },
      { status: 400 }
    );
  }

  if (!newPassword || typeof newPassword !== "string" || newPassword.length < 6) {
    return NextResponse.json(
      { message: "newPassword is required and must be at least 6 characters." },
      { status: 400 }
    );
  }

  try {
    const users = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.email, email.trim()))
      .execute();

    if (users.length === 0) {
      return NextResponse.json(
        { message: "No user found with that email." },
        { status: 404 }
      );
    }

    const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);

    await db
      .update(UserTable)
      .set({ password: hashedPassword })
      .where(eq(UserTable.id, users[0].id))
      .execute();

    return NextResponse.json(
      { message: "Password updated. You can now log in with the new password." }
    );
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
