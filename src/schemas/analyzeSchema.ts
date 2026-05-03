import { z } from "zod"

export const analyzeSchema = z.object({
  first_serve_in_pct: z.number().min(0).max(100),
  second_serve_in_pct: z.number().min(0).max(100),
  unforced_errors: z.number().min(0),
})

export type AnalyzeFormData = z.infer<typeof analyzeSchema>