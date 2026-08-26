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
        <path
          d="M1520 -60 C 1380 40 1300 160 1380 250 C 1460 340 1560 300 1520 200 C 1480 100 1300 200 1290 360 C 1280 520 1420 600 1400 760 C 1385 880 1300 940 1180 1000"
          stroke="#F0F7D8" strokeWidth="26" />
        <path
          d="M1520 120 C 1420 220 1360 300 1420 390 C 1480 480 1420 620 1480 720 C 1530 805 1500 900 1420 1000"
          stroke="#EDF0FF" strokeWidth="20" />
        <path
          d="M1560 620 C 1440 700 1400 800 1460 880 C 1520 960 1470 1040 1380 1080"
          stroke="#E7F2C2" strokeWidth="22" />
        <path
          d="M-80 1000 C 60 900 140 980 260 920 C 380 860 420 950 540 930 C 640 913 700 970 780 1040"
          stroke="#F0F7D8" strokeWidth="24" className="brand-ribbon-mobile-hide" />
        <path
          d="M-80 20 C 20 -50 120 -10 110 70 C 100 145 20 150 26 90 C 32 40 110 30 170 -40"
          stroke="#EDF0FF" strokeWidth="18" className="brand-ribbon-mobile-hide" />
      </g>
    </svg>
  );
}
