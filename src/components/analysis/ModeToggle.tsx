import type { Mode } from "../../types/analyze";

type Props = {
  current: Mode;
  onToggle: (mode: Mode) => void;
};

export const ModeToggle = ({ current, onToggle }: Props) => {
  return (
    <div className="flex border rounded-xl p-1 w-fit bg-gray-100">
      
      <button
        onClick={() => onToggle("stats")}
        className={`px-4 py-2 text-sm rounded-lg transition ${
          current === "stats"
            ? "bg-white shadow font-medium text-gray-900"
            : "text-gray-500"
        }`}
      >
        Stats
      </button>

      <button
        onClick={() => onToggle("text")}
        className={`px-4 py-2 text-sm rounded-lg transition ${
          current === "text"
            ? "bg-white shadow font-medium text-gray-900"
            : "text-gray-500"
        }`}
      >
        Match Description
      </button>

    </div>
  );
};