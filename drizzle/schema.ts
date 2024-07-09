import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const UserTable = pgTable(
  "user",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    password: text("password").notNull(),
  },
  (user) => {
    return {
      uniqueIdx: uniqueIndex("users_idx").on(user.email),
    };
  }
);

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
    github: text('github').notNull(),
    siteurl: text('url'),
    conclusion: text("conclusion"),
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
    projectType: text('projectType'),
    role: text('role'),
    indutry: text('industry'),
    problemStatement: text('problemStatement'),
    description: text("description").notNull(),
    designLink: text("designLink").notNull(),
    headerimage: text("headerimage").notNull(), // Changed from 'image' to 'headerimage'
    contentHeader: text("contentHeader"),
    contentHeader2: text("contentHeader2"),
    content: text("content").notNull(),
    images: text("images"),
    presentationLink:text('presentationLink'),
    conclusion: text("conclusion"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (blog) => {
    return {
      uniqueIdx: uniqueIndex("blogs_idx").on(blog.name),
    };
  }
);
