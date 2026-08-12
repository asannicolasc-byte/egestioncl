import type { ReactNode } from "react";

export function Pill({
  children,
  tone = "lime",
}: {
  children: ReactNode;
  tone?: "lime" | "blue" | "outline";
}) {
  const tones = {
    lime: "bg-brand-lime text-brand-blue",
    blue: "bg-brand-blue text-white",
    outline: "border border-brand-blue/25 text-brand-blue bg-brand-blue/5",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
