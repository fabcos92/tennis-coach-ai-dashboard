import type { Issue } from "../types/analyze";

export const sortIssues = (issues: Issue[]) => {
  return [...issues].sort(
    (a, b) =>
      (b.severity === "high" ? 3 : b.severity === "medium" ? 2 : 1) -
      (a.severity === "high" ? 3 : a.severity === "medium" ? 2 : 1)
  )
};