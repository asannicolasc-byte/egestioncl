import React from "react";

export default function RibbonText() {
  return (
    <svg
      aria-hidden="true"
      width="620"
      height="720"
      viewBox="0 0 620 720"
      className="ribbon-text"
      style={{
        position: "absolute",
        top: "-40px",
        right: "-120px",
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
      }}
    >
      <defs>
        <path
          id="ribbonCurve"
          d="M540 -40 C 400 120 380 300 470 420 C 560 540 480 660 340 760"
          fill="none"
        />
      </defs>
      <path
        d="M540 -40 C 400 120 380 300 470 420 C 560 540 480 660 340 760"
        fill="none"
        stroke="#C0E12D"
        strokeWidth="54"
        strokeLinecap="round"
      />
      <text
        fill="#252944"
        fontSize="19"
        fontWeight="500"
        letterSpacing="1.5"
        style={{ textTransform: "uppercase" }}
      >
        <textPath href="#ribbonCurve" startOffset="0">
          Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos · Tu empresa en buenas manos ·
        </textPath>
      </text>
    </svg>
  );
}
