import React, { useEffect, useState } from "react";

const D = "M-40 470 C 90 470 130 300 250 250 C 340 212 430 250 440 330 C 450 415 350 460 290 410 C 230 360 300 250 400 262 C 500 274 540 400 660 400";

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
  const svgWidth = isXL ? 660 : 500;
  const svgHeight = isXL ? 560 : 430;
  const right = isXL ? -40 : -30;
  const fontSize = isXL ? 16 : 14;

  return (
    <svg
      aria-hidden="true"
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 660 560"
      className="ribbon-text"
      style={{
        position: "absolute",
        top: "150px",
        right: `${right}px`,
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
      }}
    >
      <defs>
        <path id="ribbonFlow" d={D} fill="none" />
      </defs>
      <path d={D} fill="none" stroke="#FFFFFF" strokeWidth="58" strokeLinecap="round" />
      <path d={D} fill="none" stroke="#C0E12D" strokeWidth="44" strokeLinecap="round" />
      <text
        fill="#252944"
        fontSize={fontSize}
        fontWeight="500"
        letterSpacing="1.5"
        style={{ textTransform: "uppercase" }}
      >
        <textPath href="#ribbonFlow" startOffset="0">
          Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos ·
        </textPath>
      </text>
    </svg>
  );
}
