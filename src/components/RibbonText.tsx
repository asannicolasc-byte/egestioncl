import React, { useEffect, useState } from "react";

const D = "M940 -120 C 860 80 784 220 760 360 C 732 536 840 640 972 612 C 1096 584 1132 432 1024 368 C 924 308 804 372 780 488 C 760 600 840 700 960 792 C 1080 884 1200 940 1400 1000";

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
  const right = isXL ? -450 : -380;
  const fontSize = isXL ? 18 : 17;

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
      </defs>
      <path d={D} fill="none" stroke="#FFFFFF" strokeWidth="74" />
      <path d={D} fill="none" stroke="#C0E12D" strokeWidth="58" />
      <text
        fill="#252944"
        fontSize={fontSize}
        fontWeight="500"
        letterSpacing="2.2"
        style={{ textTransform: "uppercase" }}
      >
        <textPath href="#ribbonFlow" startOffset="0">
          Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos ·
        </textPath>
      </text>
    </svg>
  );
}
