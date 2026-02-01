import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.AUTH_SECRET;
const key = new TextEncoder().encode(secretKey);

/** Session duration: 7 days */
export const SESSION_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

export async function encrypt(payload: unknown): Promise<string> {
  return await new SignJWT(payload as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SECONDS}s`)
    .sign(key);
}

export async function decrypt(input: string): Promise<unknown> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function updateSession(request: NextRequest): Promise<NextResponse | null> {
  const session = request.cookies.get("session")?.value;
  if (!session) return null;

  try {
    const parsed = await decrypt(session) as { user?: unknown; expires?: Date };
    const expires = new Date(Date.now() + SESSION_MAX_AGE_SECONDS * 1000);
    parsed.expires = expires;
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      expires,
    });
    return res;
  } catch {
    return null;
  }
}
