import { z } from 'zod'

export const loginZodSchema = z.object({
  password: z.string().min(6).max(128),
  email: z.string().email(),
})
