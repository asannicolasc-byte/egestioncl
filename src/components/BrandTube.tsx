import React from "react";

type Props = {
  src: string;
  width: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate?: number;
  /** "hero" keeps the tube visible on phones; others hide under 768px */
  variant?: "hero" | "section";
};

export default function BrandTube({
  src,
  width,
  top,
  bottom,
  left,
  right,
  rotate = 0,
  variant = "section",
}: Props) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`brand-tube ${variant === "hero" ? "brand-tube-hero" : ""}`}
      style={
        {
          position: "absolute",
          top,
          bottom,
          left,
          right,
          "--tube-w": `${width}px`,
          width: "var(--tube-w)",
          height: "auto",
          transform: `rotate(${rotate}deg)`,
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
        } as React.CSSProperties
      }
    />
  );
}
