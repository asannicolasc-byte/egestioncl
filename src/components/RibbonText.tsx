import React, { useEffect, useState } from "react";

const D = "M940 -120 C 860 80 784 220 760 360 C 732 536 840 640 972 612 C 1096 584 1132 432 1024 368 C 924 308 804 372 780 488 C 760 600 840 700 960 792 C 1080 884 1200 940 1400 1000";
// Sub-segment of D that passes in FRONT through the self-crossing (segments 4-5, verbatim from D).
const D_FRONT = "M1024 368 C 924 308 804 372 780 488 C 760 600 840 700 960 792";
// Length of D up to the start of D_FRONT, so the duplicated text keeps the exact same rhythm.
const FRONT_START = 1234.864;
const RIBBON_TEXT = "Tu empresa en buenas manos · ";

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
  const svgWidth = isXL ? 1360 : 1050;
  const svgHeight = isXL ? 1000 : 772;
  const right = isXL ? -310 : -250;
  const fontSize = isXL ? 22 : 21;

  const textEl = (id: string, offset: number) => (
    <text
      fill="#252944"
      fontSize={fontSize}
      fontWeight="500"
      letterSpacing="2.2"
      dy="0.35em"
      textAnchor="start"
      style={{ textTransform: "uppercase" }}
    >
      <textPath href={`#${id}`} startOffset={offset}>
        {RIBBON_TEXT.repeat(25)}
      </textPath>
    </text>
  );

  return (
    <svg
      aria-hidden="true"
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 1360 1000"
      className="ribbon-text"
      style={{
        position: "absolute",
        top: "-100px",
        right: `${right}px`,
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
      }}
    >
      <defs>
        <path id="ribbonFlow" d={D} fill="none" />
        <path id="ribbonFlow-front" d={D_FRONT} fill="none" />
        <mask
          id="ribbonFrontMask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1360"
          height="1000"
        >
          <rect x="0" y="0" width="1360" height="1000" fill="black" />
          <path
            d={D_FRONT}
            stroke="white"
            strokeWidth="88"
            fill="none"
            strokeLinecap="round"
          />
        </mask>
        <filter id="ribbonFrontShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dy="2" stdDeviation="6" floodColor="#252944" floodOpacity="0.14" />
        </filter>
      </defs>

      <g id="ribbonLayer">
        <path d={D} fill="none" stroke="#FFFFFF" strokeWidth="74" />
        <path d={D} fill="none" stroke="#C0E12D" strokeWidth="58" />
        {textEl("ribbonFlow", 0)}
      </g>

      <g mask="url(#ribbonFrontMask)" filter="url(#ribbonFrontShadow)">
        <path d={D_FRONT} fill="none" stroke="#FFFFFF" strokeWidth="70" />
        <path d={D_FRONT} fill="none" stroke="#C0E12D" strokeWidth="58" />
        {textEl("ribbonFlow-front", -FRONT_START)}
      </g>
    </svg>
  );
}
