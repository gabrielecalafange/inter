import { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border bg-black/40 backdrop-blur-sm ${className || ""}`}>
      {children}
    </div>
  );
}

