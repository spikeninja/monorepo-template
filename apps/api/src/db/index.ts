import "dotenv/config"
import { Pool } from "pg"
import { config } from "@/env"
import { drizzle } from "drizzle-orm/node-postgres"
import * as authSchema from "@/db/schemas/auth-schema.js"

const pool = new Pool({
  connectionString: config.databaseURL,
})

export const db = drizzle({ client: pool, schema: { ...authSchema } })
