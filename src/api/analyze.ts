import type { AnalyzeRequest, AnalyzeResponse } from "../types/analyze"

export async function analyze(
  data: AnalyzeRequest
): Promise<AnalyzeResponse> {
  const res = await fetch("http://localhost:8080/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("API error")
  }

  return res.json()
}