import { getSeverity } from "../../functions/getSeverity";
import { sortIssues } from "../../functions/sortIssues";

type Props = {
  result: {
    focus_area: string;
    issues: string[];
    recommendations: string[];
  };
};

const severityStyles = {
  3: "bg-red-50 text-red-700 border-red-200",
  2: "bg-yellow-50 text-yellow-700 border-yellow-200",
  1: "bg-green-50 text-green-700 border-green-200",
};

const severityLabel = {
  3: "high",
  2: "medium",
  1: "low",
};

export const ResultCard = ({ result }: Props) => {
  const sortedIssues = sortIssues(result.issues || []);
  const topIssue = sortedIssues[0];

  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Primary focus</p>
          <p className="text-lg font-semibold">{result.focus_area}</p>
        </div>

        <div className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
          AI Insight
        </div>
      </div>

      {/* 🔥 TOP ISSUE */}
      {topIssue && (
        <div className="border border-red-200 bg-red-50 rounded-xl p-4">
          <p className="text-sm font-medium text-red-700 mb-1">
            Top priority issue
          </p>
          <p className="text-base font-semibold text-red-800">
            {topIssue}
          </p>
        </div>
      )}

      {/* ISSUES */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          All Issues
        </p>

        <div className="space-y-2">
          {sortedIssues.map((issue) => {
            const severity = getSeverity(issue);

            return (
              <div
                key={issue}
                className={`border rounded-lg px-3 py-2 text-sm flex justify-between items-center ${severityStyles[severity]}`}
              >
                <span>{issue}</span>

                <span className="text-xs uppercase opacity-70">
                  {severityLabel[severity]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Recommendations
        </p>

        <div className="space-y-2">
          {result.recommendations?.map((rec) => (
            <div
              key={rec}
              className="border rounded-lg px-3 py-2 text-sm bg-gray-50"
            >
              {rec}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};