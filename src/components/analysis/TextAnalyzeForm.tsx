import { useState } from "react";

type Props = {
  onSubmit: (data: { type: "text"; text: string }) => void;
  isLoading: boolean;
};

export const TextAnalyzeForm = ({ onSubmit, isLoading }: Props) => {
  const [text, setText] = useState("");

  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
      <p className="text-sm font-medium text-gray-700">
        Match description
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe the match performance..."
        className="w-full border rounded-lg p-3 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={() =>
            onSubmit({
            type: "text",
            text,
        })}
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
};