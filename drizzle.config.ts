import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: './drizzle',
  dialect: 'postgresql',
  schema: './db/schema.ts',
  dbCredentials: {
    url: process.env.PSQL_DATABASE_URL!,
  },

})