import { db } from "@/drizzle/db";
import { BlogsTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const alldesigns = async () => {
  try {
    const blogs = await db.select().from(BlogsTable).execute();
    return { blogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getoneDesign = async (id: string) => {
  try {
    const blog = await db
      .select()
      .from(BlogsTable)
      .where(eq(BlogsTable.id, Number(id)))
      .execute();

    if (blog.length === 0) {
      throw new Error("Blog not found");
    }

    return { blog: blog[0] };
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

export const addDesign = async (values: any) => {
  try {
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_BASE_URL || 'https://www.riishi.net';
    
    const res = await fetch(`${baseUrl}/api/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error(`Failed to create blog: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};
