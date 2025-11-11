import { hc } from "hono/client"
import type { AppType } from "api/src/index.ts"

// Use server-side URL when running on server, client-side URL when running in browser
const getApiUrl = () => {
  // Server-side: use internal Docker service name
  if (typeof window === 'undefined') {
    return process.env.API_URL || 'http://api:3001'
  }
  // Client-side: use public URL (localhost or external domain)
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
}

export const apiClient = hc<AppType>(getApiUrl())
