import * as z from "zod"
import "dotenv/config"

const envSchema = z
  .object({
    BETTER_AUTH_URL: z.string(),
  })
  .transform((obj) => ({
    betterAuthURL: obj.BETTER_AUTH_URL,
  }))

export const config = envSchema.parse(process.env)
