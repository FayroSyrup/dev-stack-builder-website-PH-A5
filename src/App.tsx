import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import type { ITechnology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stack, setStack] = useState<ITechnology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: ITechnology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
    </div>
  );
}

export default App;