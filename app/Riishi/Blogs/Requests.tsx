// Server-side only functions - DO NOT import in client components
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
