import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg bg-white border border-slate-200 shadow-sm transition-all")}>
      <h1 className="text-2xl font-bold mb-2 text-slate-900 font-heading tracking-tight">Component Example</h1>
      <h2 className="text-xl font-semibold text-primary">{count}</h2>
      <div className="flex gap-2">
        <button 
          onClick={() => setCount((prev) => prev - 1)}
          className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
        >
          -
        </button>
        <button 
          onClick={() => setCount((prev) => prev + 1)}
          className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};
