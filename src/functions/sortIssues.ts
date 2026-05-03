import { getSeverity } from "./getSeverity";

export const sortIssues = (issues: string[]) => {
  return [...issues].sort((a, b) => getSeverity(b) - getSeverity(a));
};