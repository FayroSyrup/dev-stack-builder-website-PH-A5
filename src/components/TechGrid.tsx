import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/technology";
import TechCard from "./TechCard";

interface ITechGridProps {
  technologies: ITechnology[];
  loading: boolean;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechGrid = ({ technologies, loading, stack, setStack }: ITechGridProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-bold text-2xl mb-6">All Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            stack={stack}
            setStack={setStack}
          />
        ))}
      </div>
    </div>
  );
};

export default TechGrid;