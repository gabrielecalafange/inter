import type { ReactNode } from "react";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${className || ""}`}>
      {children}
    </span>
  );
}

