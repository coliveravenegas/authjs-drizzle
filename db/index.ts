import { drizzle } from 'drizzle-orm/neon-http';
export const db = drizzle(process.env.PSQL_DATABASE_URL!);

