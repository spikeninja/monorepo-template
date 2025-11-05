import * as z from "zod"
import "dotenv/config"

const envSchema = z
  .object({
    APP_LEVEL: z.enum(["DEV", "PROD"]),

    POSTGRES_DB: z.string(),
    POSTGRES_USER: z.string(),
    POSTGRES_HOST: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_PORT: z.coerce.number(),
  })
  .transform((obj) => ({
    appLevel: obj.APP_LEVEL,

    postgresDB: obj.POSTGRES_DB,
    postgresHost: obj.POSTGRES_HOST,
    postgresUser: obj.POSTGRES_USER,
    postgresPort: obj.POSTGRES_PORT,
    postgresPassword: obj.POSTGRES_PASSWORD,

    databaseURL: `postgresql://${obj.POSTGRES_USER}:${obj.POSTGRES_PASSWORD}@${obj.POSTGRES_HOST}:${obj.POSTGRES_PORT}/${obj.POSTGRES_DB}`,
  }))

export const config = envSchema.parse(process.env)
