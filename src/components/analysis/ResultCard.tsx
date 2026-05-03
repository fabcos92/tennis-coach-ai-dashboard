import { sortIssues } from "../../functions/sortIssues";
import type { AnalyzeResponse, Severity } from "../../types/analyze";

type Props = {
  result: AnalyzeResponse;
};

const badgeStyleBySeverity: Record<Severity, string> = {
  high: "bg-red-50 text-red-700 border-red-200",
  medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  low: "bg-green-50 text-green-700 border-green-200",
};

export const ResultCard = ({ result }: Props) => {
  const sortedIssues = sortIssues(result.issues || []);
  const topIssue = sortedIssues[0];

  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Focus area
        </p>
        <h2 className="text-lg font-semibold text-gray-900">
          {result.focus_area}
        </h2>
      </div>

      {topIssue && (
        <div className="bg-gray-50 border rounded-xl p-4">
          <p className="text-xs text-gray-500 mb-1">
            Key insight
          </p>
          <p className="text-sm font-medium text-gray-900">
            {topIssue.text}
          </p>
        </div>
      )}

      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Detected patterns
        </p>

        <div className="space-y-2">
          {sortedIssues.map((issue) => {
            return (
              <div
                key={issue.text}
                className={`flex justify-between items-center border rounded-lg px-3 py-2 text-sm ${badgeStyleBySeverity[issue.severity]}`}
              >
                <span>{issue.text}</span>

                <span className="text-xs uppercase opacity-70">
                  {issue.severity}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Recommendations
        </p>

        <div className="grid gap-2">
          {result.recommendations.map((rec) => (
            <div
              key={rec}
              className="border rounded-lg p-3 text-sm bg-blue-50 text-blue-800"
            >
              {rec}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};