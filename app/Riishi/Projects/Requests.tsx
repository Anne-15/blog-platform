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

export const addProject = async (values: any) => {
  try {
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_BASE_URL || 'https://www.riishi.net';
    
    const res = await fetch(`${baseUrl}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error(`Failed to create project: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
