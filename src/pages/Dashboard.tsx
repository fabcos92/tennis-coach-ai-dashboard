import { useAnalyze } from "../hooks/useAnalyze";
import { AnalyzeForm } from "../components/Form/AnalyzeForm";

export const Dashboard = () => {
  const { result, mutate, isPending, error } = useAnalyze();

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-3xl space-y-6">
        
        <div className="bg-white shadow-sm border rounded-xl p-6">
          <h1 className="text-xl font-semibold">Tennis Coach AI</h1>
          <p className="text-gray-500 text-sm">
            Analyze your performance and get actionable insights
          </p>
        </div>

        <div className="bg-white shadow-sm border rounded-xl p-6">
          <AnalyzeForm onSubmit={mutate} isLoading={isPending} />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
            Failed to analyze data. Try again.
          </div>
        )}

        {result && (
          <div className="bg-white shadow-sm border rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-semibold">Analysis Result</h2>

            <div>
              <p className="text-sm text-gray-500">Focus area</p>
              <p className="font-medium">{result.focus_area}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Issues</p>
              <ul className="list-disc ml-5">
                {result.issues?.map((i: string) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm text-gray-500">Recommendations</p>
              <ul className="list-disc ml-5">
                {result.recommendations?.map((r: string) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};