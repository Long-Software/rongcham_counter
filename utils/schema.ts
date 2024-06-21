import { z } from 'zod'

export const tokenSchema = z.string().uuid()

export const categorySchema = z.object({
  name: z.string(),
  acronym: z.string()
})
