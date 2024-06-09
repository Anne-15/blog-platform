import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
 
export const ProjectsTable = pgTable(
  'projects',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    title: text('title').notNull(),
    desc: text('desc').notNull(),
    headerimage: text('image').notNull(),
    body: text('body').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (project) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(project.name),
    };
  },
);

export const BlogsTable = pgTable(
    'blogs',
    {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      blogtitle: text('title').notNull(),
      description: text('desc').notNull(),
      headerimage: text('image').notNull(),
      content: text('content').notNull(),
      contentimage: text('image'),
      createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
    (blog) => {
      return {
        uniqueIdx: uniqueIndex('blogs_idx').on(blog.name),
      };
    },
  );