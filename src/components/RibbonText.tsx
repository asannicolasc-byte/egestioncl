import React, { useEffect, useState } from "react";

export default function RibbonText() {
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (width < 1024) return null;

  const isXL = width >= 1280;
  const size = isXL ? 440 : 360;
  const viewBox = isXL ? "0 0 440 440" : "0 0 360 360";
  const c = isXL ? 220 : 180;
  const r = isXL ? 180 : 148;
  const strokeWidth = isXL ? 46 : 40;
  const fontSize = isXL ? 18 : 16;
  const right = isXL ? 80 : 50;

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox={viewBox}
      className="ribbon-text"
      style={{
        position: "absolute",
        top: "180px",
        right: `${right}px`,
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
      }}
    >
      <defs>
        <path
          id="ringPath"
          d={`M${c} ${c - r} A${r} ${r} 0 1 1 ${c - 0.1} ${c - r}`}
          fill="none"
        />
      </defs>
      <circle
        cx={c}
        cy={c}
        r={r}
        fill="none"
        stroke="#C0E12D"
        strokeWidth={strokeWidth}
      />
      <text
        fill="#252944"
        fontSize={fontSize}
        fontWeight="500"
        letterSpacing="2"
        style={{ textTransform: "uppercase" }}
      >
        <textPath href="#ringPath" startOffset="0">
          Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos ·
        </textPath>
      </text>
    </svg>
  );
}
