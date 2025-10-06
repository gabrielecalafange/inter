import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg";
}

export function Button({ size = "sm", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md border px-4 py-2 font-bold transition-[color,box-shadow] hover:opacity-80 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        size === "lg" ? "text-lg py-4 px-8" : "text-sm py-2 px-3",
        className
      )}
      {...props}
    />
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

