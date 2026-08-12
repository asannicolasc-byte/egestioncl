import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase ${
        tone === "light" ? "text-white/70" : "text-brand-ink/55"
      }`}
    >
      <span className="size-2 rounded-[3px] bg-brand-lime" />
      {children}
    </span>
  );
}
