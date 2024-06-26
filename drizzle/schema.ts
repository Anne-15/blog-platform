import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const ProjectsTable = pgTable(
  "projects",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    title: text("title").notNull(),
    desc: text("desc").notNull(),
    image: text("image").notNull(),
    backgroundInfo: text("backgroundInfo").notNull(),
    objectives: text("objectives").notNull(),
    functionaliy: text("functionaliy"),
    designs: text("designs"),
    conclusion: text("conclusion"),
    badge: text("badge"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (project) => {
    return {
      uniqueIdx: uniqueIndex("projects_idx").on(project.name),
    };
  }
);

export const BlogsTable = pgTable(
  "blogs",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    title: text("title").notNull(),
    category: text("category").notNull(),
    description: text("desc").notNull(),
    headerimage: text("headerimage").notNull(), // Changed from 'image' to 'headerimage'
    content: text("content").notNull(),
    images: text("images"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (blog) => {
    return {
      uniqueIdx: uniqueIndex("blogs_idx").on(blog.name),
    };
  }
);
