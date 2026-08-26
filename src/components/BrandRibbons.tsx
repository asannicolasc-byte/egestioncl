import React from "react";

export default function BrandRibbons() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Right edge: two long parallel winding tubes, one curls back over itself */}
        <path
          d="M1540 -80 C 1240 60 1120 220 1230 330 C 1330 430 1450 380 1400 270 C 1350 165 1150 240 1120 420 C 1090 610 1260 690 1230 850 C 1210 960 1300 1010 1520 1040"
          stroke="#F0F7D8" strokeWidth="24" />
        <path
          d="M1560 60 C 1330 190 1240 320 1330 430 C 1420 540 1300 660 1330 790 C 1355 900 1450 950 1560 970"
          stroke="#EDF0FF" strokeWidth="22" />
        {/* Bottom edge */}
        <path
          d="M-100 980 C 90 860 210 990 360 930 C 510 870 560 980 700 960 C 830 942 940 1010 1040 1090"
          stroke="#F0F7D8" strokeWidth="24" className="brand-ribbon-mobile-hide" />
        {/* Top-left curl */}
        <path
          d="M-90 30 C 30 -60 150 -20 140 70 C 132 150 40 160 44 96 C 48 44 130 34 200 -60"
          stroke="#EDF0FF" strokeWidth="20" className="brand-ribbon-mobile-hide" />
      </g>

    </svg>
  );
}
