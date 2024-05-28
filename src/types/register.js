import { z } from 'zod'

export const registerZodSchema = z
  .object({
    name: z.string().min(3).max(128),
    surname: z.string().min(3).max(128),
    email: z.string().email(),
    password: z.string().min(6).max(128),
    confirmPassword: z.string(),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: 'Passwords must match!',
    path: ['confirmPassword'],
  })
