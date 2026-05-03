export const getSeverity = (issue: string) => {
  const lower = issue.toLowerCase();

  if (lower.includes("low") || lower.includes("poor")) return 3;
  if (lower.includes("inconsistent") || lower.includes("drop")) return 2;
  return 1;
};