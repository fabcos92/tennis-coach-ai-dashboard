import { useState } from "react";

type Stats = {
  first_serve_in_pct: number;
  second_serve_in_pct: number;
  unforced_errors: number;
};

type Props = {
  onSubmit: (data: { type: "match_stats"; stats: Stats }) => void;
  isLoading: boolean;
};

export const AnalyzeForm = ({ onSubmit, isLoading }: Props) => {
  const [stats, setStats] = useState<Stats>({
    first_serve_in_pct: 0,
    second_serve_in_pct: 0,
    unforced_errors: 0,
  });

  const handleChange = (key: keyof Stats, value: string) => {
    setStats((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      type: "match_stats",
      stats,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="text-sm text-gray-600">First serve %</label>
          <input
            type="number"
            className="w-full border rounded-lg p-2"
            value={stats.first_serve_in_pct}
            onChange={(e) => handleChange("first_serve_in_pct", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Second serve %</label>
          <input
            type="number"
            className="w-full border rounded-lg p-2"
            value={stats.second_serve_in_pct}
            onChange={(e) => handleChange("second_serve_in_pct", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Unforced errors</label>
          <input
            type="number"
            className="w-full border rounded-lg p-2"
            value={stats.unforced_errors}
            onChange={(e) => handleChange("unforced_errors", e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isLoading ? "Analyzing..." : "Analyze match"}
      </button>
    </form>
  );
};