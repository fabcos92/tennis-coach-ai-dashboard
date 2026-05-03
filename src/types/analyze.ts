export type AnalyzeRequest = {
  type: string
  stats?: {
    firstServePct: number
    secondServeWonPct: number
    unforcedErrors: number
  }
  text?: string
}

export type Issue = {
  text: string;
  severity: Severity;
}

export type AnalyzeResponse = {
  issues: Issue[]
  recommendations: string[]
  focus_area: string
}

export type Mode = "stats" | "text";

export type Severity = "high" | "medium" | "low";