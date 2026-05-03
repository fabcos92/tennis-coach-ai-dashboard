import { useAnalyze } from "../hooks/useAnalyze";
import { AnalyzeForm } from "../components/analysis/AnalyzeForm";
import { SkeletonLine } from "../components/ui/SkeletonLine";
import { ResultCard } from "../components/analysis/ResultCard";
import type { Mode } from "../types/analyze";
import { ModeToggle } from "../components/analysis/ModeToggle";
import { TextAnalyzeForm } from "../components/analysis/TextAnalyzeForm";
import { useState } from "react";

export const Dashboard = () => {
  const { result, mutate, isPending, error } = useAnalyze();
  const [mode, setMode] = useState<Mode>("stats");

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-3xl space-y-6">

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h1 className="text-xl font-semibold">Tennis Coach AI</h1>
          <p className="text-sm text-gray-500">
            Analyze your match performance and get actionable insights
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="space-y-4">

            <ModeToggle current={mode} onToggle={setMode} />

            {mode === "stats" ? (
              <AnalyzeForm
                onSubmit={mutate}
                isLoading={isPending}
              />
            ) : (
              <TextAnalyzeForm
                onSubmit={mutate}
                isLoading={isPending}
              />
            )}
          </div>
        </div>

        {!result && !isPending && !error && (
          <div className="bg-white border rounded-xl p-6 text-center text-gray-500">
            No analysis yet. Enter match stats to begin.
          </div>
        )}

        {isPending && (
          <div className="bg-white border rounded-xl p-6 space-y-3">
            <SkeletonLine />
            <SkeletonLine />
            <SkeletonLine />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
            <p className="font-medium">Analysis failed</p>
            <p className="text-sm">Try again or adjust input data.</p>
          </div>
        )}

        {result && !isPending && (
          <ResultCard result={result} />
        )}

      </div>
    </div>
  );
};