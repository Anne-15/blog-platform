import { db } from "@/drizzle/db";
import { ProjectsTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const {
    name,
    title,
    desc,
    headerimage,
    backgroundInfo,
    objectives,
    functionaliy,
    designs,
    github,
    siteurl,
    conclusion,
  } = await req.json();

  // Validate request body
  if (
    !name ||
    !title ||
    !desc ||
    !headerimage ||
    !backgroundInfo ||
    !objectives ||
    !github
  ) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const project = await db
      .insert(ProjectsTable)
      .values({
        name,
        title,
        desc,
        image: headerimage,
        backgroundInfo,
        objectives,
        functionaliy,
        designs,
        github,
        siteurl,
        conclusion,
      })
      .returning()
      .execute();
    return NextResponse.json(
      { message: "Project created", projectId: project[0].id },
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
      const project = await db
        .select()
        .from(ProjectsTable)
        .where(eq(ProjectsTable.id, Number(id)))
        .execute();

      if (project.length === 0) {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      } else {
        return NextResponse.json({ project: project[0] }, { status: 200 });
      }
    } else {
      // Get all projects
      const projects = await db.select().from(ProjectsTable).execute();

      return NextResponse.json({ projects }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await db
      .delete(ProjectsTable)
      .where(eq(ProjectsTable.id, Number(id)))
      .returning();

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
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
    desc,
    headerimage,
    backgroundInfo,
    objectives,
    functionaliy,
    designs,
    conclusion,
  } = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // Validate request body
  if (
    !name ||
    !title ||
    !desc ||
    !headerimage ||
    !backgroundInfo ||
    !objectives ||
    !functionaliy ||
    !designs ||
    !conclusion
  ) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const project = await db
      .update(ProjectsTable)
      .set({
        name,
        title,
        desc,
        image: headerimage,
        backgroundInfo,
        objectives,
        functionaliy,
        designs,
        conclusion,
      })
      .where(eq(ProjectsTable.id, Number(id)))
      .returning()
      .execute();

    if (project.length === 0) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project updated", projectId: project[0].id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
