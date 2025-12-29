// Server-side only functions - DO NOT import in client components
import { db } from "@/drizzle/db";
import { ProjectsTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const allsoftwarePJS = async () => {
  try {
    const projects = await db.select().from(ProjectsTable).execute();
    return { projects };
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const getoneProject = async (id: string) => {
  try {
    const project = await db
      .select()
      .from(ProjectsTable)
      .where(eq(ProjectsTable.id, Number(id)))
      .execute();

    if (project.length === 0) {
      throw new Error("Project not found");
    }

    return { project: project[0] };
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};
