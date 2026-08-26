type Variant = "hero" | "footer";

const LIME_1 = "#E4F3AC";
const LIME_2 = "#EDF7C6";
const BLUE_1 = "#D3DEFF";
const BLUE_2 = "#E2E8FF";

type Ribbon = {
  d: string;
  color: string;
  width: number;
  mobile?: boolean;
};

/* viewBox: 0 0 1200 700 — every path starts and ends outside these bounds */

const HERO_RIBBONS: Ribbon[] = [
  {
    // right edge, winds and doubles back
    d: "M1320 -80 C 1120 60, 1260 250, 1080 340 C 940 408, 1140 520, 1060 660 C 1010 748, 1140 790, 1300 760",
    color: BLUE_1,
    width: 34,
    mobile: true,
  },
  {
    // bottom-left corner loop
    d: "M-160 820 C 20 760, -60 640, 90 600 C 220 566, 150 700, 260 740 C 340 768, 360 820, 320 880",
    color: LIME_1,
    width: 30,
    mobile: true,
  },
  {
    // top-left corner sweep, hugging the edge
    d: "M-160 40 C -20 -60, 110 60, 150 10 C 190 -40, 250 20, 210 110 C 175 190, 60 180, 20 260",
    color: LIME_2,
    width: 26,
  },
  {
    // right cluster overlap
    d: "M1340 200 C 1180 240, 1220 430, 1040 480 C 920 512, 970 600, 1110 620 C 1230 638, 1300 700, 1280 800",
    color: BLUE_2,
    width: 24,
    mobile: true,
  },
  {
    d: "M-140 400 C -20 340, -20 500, 80 540 C 170 576, 120 660, 10 700 C -50 722, -110 780, -90 840",
    color: BLUE_2,
    width: 22,
  },
];


const FOOTER_RIBBONS: Ribbon[] = [
  {
    // right edge, winding and cropped
    d: "M1340 -80 C 1220 40, 1290 200, 1150 300 C 1050 372, 1210 470, 1150 620 C 1116 706, 1220 790, 1340 820",
    color: LIME_1,
    width: 30,
    mobile: true,
  },
  {
    // bottom-left corner
    d: "M-240 780 C -140 730, -200 620, -90 580 C 10 546, -40 660, 40 706 C 96 738, 110 800, 70 890",
    color: BLUE_1,
    width: 28,
    mobile: true,
  },
  {
    // top-left corner
    d: "M-240 110 C -140 -30, -30 80, 10 20 C 50 -40, 100 30, 60 120 C 26 196, -60 190, -100 270",
    color: BLUE_2,
    width: 24,
  },
  {
    // right cluster overlap
    d: "M1360 260 C 1250 300, 1290 440, 1180 500 C 1100 544, 1140 620, 1240 650 C 1330 677, 1370 720, 1350 820",
    color: LIME_2,
    width: 22,
    mobile: true,
  },
  {
    d: "M-160 380 C -60 320, -60 470, 20 510 C 96 548, 50 630, -40 670 C -100 696, -150 750, -130 820",
    color: LIME_2,
    width: 20,
  },
];


export function BrandDecor({ variant }: { variant: Variant }) {
  const ribbons = variant === "hero" ? HERO_RIBBONS : FOOTER_RIBBONS;
  const mask =
    variant === "hero"
      ? "linear-gradient(to bottom, black 0%, transparent 80%)"
      : "linear-gradient(to top, black 0%, transparent 80%)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 select-none overflow-hidden ${
        variant === "footer" ? "rounded-[40px]" : ""
      }`}
    >
      <div
        className="brand-halftone absolute inset-0"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        {ribbons.map((r, i) => (
          <path
            key={i}
            d={r.d}
            fill="none"
            stroke={r.color}
            strokeWidth={r.width}
            strokeLinecap="round"
            className={r.mobile ? "" : "hidden md:block"}
          />
        ))}
      </svg>
    </div>
  );
}
