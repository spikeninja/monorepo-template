import { config } from "@/env"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: config.betterAuthURL,
})
