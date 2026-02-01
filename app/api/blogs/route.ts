import { db } from "@/drizzle/db";
import { BlogsTable } from "@/drizzle/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export const POST = async (req: NextRequest) => {
  const {
    name,
    title,
    category,
    projectType,
    role,
    industry,
    problemStatement,
    description,
    designLink,
    headerimage,
    contentHeader,
    contentHeader2,
    content,
    images,
    presentationLink,
    conclusion,
  } = await req.json();

  // Validate request body
  if (
    !name ||
    !title ||
    !category ||
    !description ||
    !designLink ||
    !headerimage ||
    !content
  ) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const blog = await db
      .insert(BlogsTable)
      .values({
        name,
        title,
        category,
        projectType,
        role,
        industry,
        problemStatement,
        description,
        designLink,
        headerimage,
        contentHeader,
        contentHeader2,
        content,
        images,
        presentationLink,
        conclusion,
      })
      .returning()
      .execute();
    return NextResponse.json(
      { message: "Blog created", blogId: blog[0].id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
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
      // Get a single blog by ID
      const blog = await db
        .select()
        .from(BlogsTable)
        .where(eq(BlogsTable.id, Number(id)))
        .execute();

      if (blog.length === 0) {
        return NextResponse.json(
          { message: "Blog not found" },
          { status: 404 }
        );
      } else {
        return NextResponse.json({ blog: blog[0] }, { status: 200 });
      }
    } else {
      // Get all blogs
      const blogs = await db.select().from(BlogsTable).execute();

      return NextResponse.json({ blogs }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  const {
    name,
    title,
    category,
    projectType,
    role,
    industry,
    problemStatement,
    description,
    designLink,
    headerimage,
    contentHeader,
    contentHeader2,
    content,
    images,
    presentationLink,
    conclusion,
  } = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "Missing id" },
      { status: 400 }
    );
  }

  if (
    !name ||
    !title ||
    !category ||
    !description ||
    !designLink ||
    !headerimage ||
    !content
  ) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const blog = await db
      .update(BlogsTable)
      .set({
        name,
        title,
        category,
        projectType,
        role,
        industry,
        problemStatement,
        description,
        designLink,
        headerimage,
        contentHeader,
        contentHeader2,
        content,
        images,
        presentationLink,
        conclusion,
      })
      .where(eq(BlogsTable.id, Number(id)))
      .returning()
      .execute();

    if (blog.length === 0) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog updated", blog: blog[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "Missing id" },
      { status: 400 }
    );
  }

  try {
    await db
      .delete(BlogsTable)
      .where(eq(BlogsTable.id, Number(id)))
      .execute();

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
