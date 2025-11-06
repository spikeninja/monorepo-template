import { Hono } from "hono"
import { logger } from "hono/logger"
import { cors } from "hono/cors"
import { serve } from "@hono/node-server"

import { authApp } from "@/api/auth"
import { examplesApp } from "@/api/example/example"
import { hc } from "hono/client"

const app = new Hono()
  .use("*", logger())
  .use("*", cors())
  .route("/api/examples", examplesApp)
  .route("/api", authApp)

serve(
  {
    fetch: app.fetch,
    port: 3001,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)

export type AppType = typeof app
