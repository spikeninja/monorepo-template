import { hc } from "hono/client"
import type { AppType } from "api/src/index.ts"

export const apiClient = hc<AppType>("http://localhost:3001")
