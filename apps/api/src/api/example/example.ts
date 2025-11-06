import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import { createMessageSchema } from "@/api/example/schemas"

const messages = [
  {
    id: 1,
    text: "Hello, Hono!",
  },
  {
    id: 2,
    text: "Welcome to the Hono framework.",
  },
]

const app = new Hono()
  .get("/", async (c) => {
    return c.json({ messages })
  })
  .post("/", zValidator("json", createMessageSchema), async (c) => {
    const { text } = await c.req.json()
    const newMessage = {
      id: Math.floor(Math.random() * 1000) + 3, // Simple random ID for example
      text,
    }
    messages.push(newMessage)

    return c.json({ messages }, 201)
  })

export const examplesApp = app
