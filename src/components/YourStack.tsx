import type { Dispatch, SetStateAction } from "react";
import { RiCloseLine } from "react-icons/ri";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/technology";

interface IYourStackProps {
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({ stack, setStack }: IYourStackProps) => {
  const handleRemove = (id: string) => {
    setStack(stack.filter((t) => t.id !== id));
    toast.info("Technology removed from stack.");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed.");
  };

  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 shadow-sm p-5 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg">Your Stack</h3>
          <p className="text-base-content/50 text-sm">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="btn btn-sm btn-outline btn-error"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center text-base-content/40">
          <div className="text-5xl mb-3">📦</div>
          <p className="text-sm">Your stack is empty.</p>
          <p className="text-xs mt-1">Add technologies to get started.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-base-200"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-9 h-9 object-contain shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{tech.name}</p>
                <p className="text-xs text-base-content/50">{tech.category}</p>
              </div>
              <button
                onClick={() => handleRemove(tech.id)}
                className="btn btn-ghost btn-xs text-error"
              >
                <RiCloseLine size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;