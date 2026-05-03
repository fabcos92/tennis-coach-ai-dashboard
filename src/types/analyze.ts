export type AnalyzeRequest = {
  type: string
  stats?: {
    firstServePct: number
    secondServeWonPct: number
    unforcedErrors: number
  }
  text?: string
}

export type AnalyzeResponse = {
  issues: string[]
  recommendations: string[]
  focus_area: string
}