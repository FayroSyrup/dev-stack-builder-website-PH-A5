import type { Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/technology";

interface ITechCardProps {
  tech: ITechnology;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const difficultyColor: Record<string, string> = {
  "Beginner-Friendly": "badge-success",
  Intermediate: "badge-warning",
  Advanced: "badge-error",
};

const categoryColor: Record<string, string> = {
  Frontend: "badge-info",
  Backend: "badge-primary",
  Database: "badge-secondary",
  Language: "badge-accent",
  Styling: "badge-warning",
  DevOps: "badge-error",
  Tools: "badge-ghost",
};

const TechCard = ({ tech, stack, setStack }: ITechCardProps) => {
  const isAdded = stack.some((t) => t.id === tech.id);

  const handleAddToStack = () => {
    if (isAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Top */}
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between mb-4">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
          <span className="badge badge-sm font-semibold">{tech.badge}</span>
        </div>

        <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
        <p className="text-base-content/60 text-sm mb-4 line-clamp-3">
          {tech.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className={`badge badge-sm ${categoryColor[tech.category] ?? "badge-ghost"}`}>
            {tech.category}
          </span>
          <span className={`badge badge-sm badge-outline ${difficultyColor[tech.difficulty] ?? ""}`}>
            {tech.difficulty}
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-5 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar size={14} />
          <span className="text-sm font-semibold text-base-content">
            {tech.rating.toFixed(1)}
          </span>
        </div>

        <button
          onClick={handleAddToStack}
          disabled={isAdded}
          className={`btn btn-sm rounded-xl ${
            isAdded
              ? "btn-disabled"
              : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white border-none hover:opacity-90"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;