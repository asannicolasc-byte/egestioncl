import React, { useEffect, useState } from "react";

const D = "M-120 620 C 120 620 200 380 420 330 C 600 288 760 380 762 520 C 764 660 600 720 500 640 C 400 560 470 400 640 396 C 820 392 900 560 1120 560";

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
  const svgWidth = isXL ? 1000 : 780;
  const svgHeight = isXL ? 820 : 640;
  const right = isXL ? -260 : -220;
  const fontSize = isXL ? 19 : 17;

  return (
    <svg
      aria-hidden="true"
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 1000 820"
      className="ribbon-text"
      style={{
        position: "absolute",
        top: "60px",
        right: `${right}px`,
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
      }}
    >
      <defs>
        <path id="ribbonFlow" d={D} fill="none" />
      </defs>
      <path d={D} fill="none" stroke="#FFFFFF" strokeWidth="74" />
      <path d={D} fill="none" stroke="#C0E12D" strokeWidth="58" />
      <text
        fill="#252944"
        fontSize={fontSize}
        fontWeight="500"
        letterSpacing="2"
        style={{ textTransform: "uppercase" }}
      >
        <textPath href="#ribbonFlow" startOffset="0">
          Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos ·
        </textPath>
      </text>
    </svg>
  );
}
