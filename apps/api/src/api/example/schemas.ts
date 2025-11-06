import * as z from "zod"

export const messageSchema = z.object({
  id: z.number().int().positive(),
  text: z.string().min(1).max(500),
})

export const createMessageSchema = z.object({
  text: z.string().min(1).max(500),
})
