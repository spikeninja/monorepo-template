import { serve } from "@hono/node-server"
import { Hono } from "hono"

import { authApp } from "@/api/auth"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})
app.route("/api", authApp)

serve(
  {
    fetch: app.fetch,
    port: 3001,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)
