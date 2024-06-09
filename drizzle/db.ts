import { Pool } from "pg";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from './schema';

export const projects = new Pool({
    connectionString: process.env.POSTGRES_URL!
});

export const db = drizzle(sql, {schema});