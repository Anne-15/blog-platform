import "./drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schema.ts",
  dbCredentials: {
    url: "postgres://default:uC1hcYGRnHW9@ep-wandering-bonus-a41wnfje-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
});
