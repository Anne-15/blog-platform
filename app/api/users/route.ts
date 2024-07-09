import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require('bcrypt');

let saltRounds = 10;

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  // Validate request body
  if (!email || !password) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  try {
    const user = await db
      .insert(UserTable)
      .values({
        email,
        password: hashedPassword,
      })
      .returning()
      .execute();
    return NextResponse.json(
      { message: "User created successfully", usertId: user[0].id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// Handler for GET requests
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      // Get a single project by ID
      const user = await db
        .select()
        .from(UserTable)
        .where(eq(UserTable.id, Number(id)))
        .execute();

      if (user.length === 0) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      } else {
        return NextResponse.json({ user: user[0] }, { status: 200 });
      }
    } else {
      // Get all projects
      const users = await db.select().from(UserTable).execute();

      return NextResponse.json({ users }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
