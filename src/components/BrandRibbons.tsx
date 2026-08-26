import React from "react";

export default function BrandRibbons() {

  return (

    <svg

      aria-hidden="true"

      viewBox="0 0 1440 900"

      preserveAspectRatio="none"

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

          d="M1500 120 C 1380 140 1300 220 1360 290 C 1420 360 1300 420 1240 360 C 1180 300 1280 220 1340 270 C 1400 320 1360 460 1280 520 C 1200 580 1240 700 1340 720 C 1440 740 1480 820 1440 940"

          stroke="#F0F7D8" strokeWidth="26" />

        <path

          d="M1500 260 C 1400 300 1330 370 1390 440 C 1450 510 1350 600 1300 560 C 1250 520 1330 450 1380 500 C 1430 550 1420 700 1480 780"

          stroke="#EDF0FF" strokeWidth="20" />

        <path

          d="M-40 880 C 60 800 160 860 140 930 C 120 990 40 970 60 910 C 80 860 180 870 240 940"

          stroke="#F0F7D8" strokeWidth="24" />

        <path

          d="M-40 60 C 40 -10 140 30 120 100 C 100 165 20 150 40 95 C 55 55 130 50 190 -20"

          stroke="#EDF0FF" strokeWidth="20" />

      </g>

    </svg>

  );

}
