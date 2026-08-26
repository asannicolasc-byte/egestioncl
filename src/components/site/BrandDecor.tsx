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
    d: "M1320 -80 C 1080 60, 1240 250, 1020 330 C 830 400, 1080 520, 1000 660 C 950 750, 1120 790, 1300 760",
    color: BLUE_1,
    width: 34,
    mobile: true,
  },
  {
    // bottom-left loop
    d: "M-120 800 C 80 700, -40 560, 180 520 C 380 484, 300 660, 520 700 C 660 726, 700 790, 660 860",
    color: LIME_1,
    width: 30,
    mobile: true,
  },
  {
    // top-left sweep
    d: "M-140 60 C 60 -60, 200 120, 380 40 C 520 -22, 560 60, 520 160 C 480 260, 300 220, 240 320",
    color: LIME_2,
    width: 26,
  },
  {
    // right cluster overlap
    d: "M1340 220 C 1140 250, 1180 420, 980 470 C 840 504, 900 600, 1060 620 C 1200 638, 1280 700, 1260 800",
    color: BLUE_2,
    width: 24,
    mobile: true,
  },
  {
    d: "M-100 380 C 60 300, 60 480, 200 520 C 320 554, 260 660, 100 700 C 20 720, -60 780, -40 840",
    color: BLUE_2,
    width: 22,
  },
];

const FOOTER_RIBBONS: Ribbon[] = [
  {
    d: "M1340 -60 C 1120 40, 1220 220, 1020 300 C 850 368, 1060 460, 1020 600 C 996 690, 1120 780, 1320 800",
    color: LIME_1,
    width: 34,
    mobile: true,
  },
  {
    d: "M-140 760 C 100 700, -20 540, 200 480 C 400 426, 340 620, 560 680 C 700 718, 740 780, 700 860",
    color: BLUE_1,
    width: 30,
    mobile: true,
  },
  {
    d: "M-160 100 C 40 -40, 220 140, 400 60 C 540 -2, 600 100, 540 200 C 480 300, 320 260, 260 360",
    color: BLUE_2,
    width: 26,
  },
  {
    d: "M1360 300 C 1160 330, 1200 480, 1000 520 C 860 548, 920 640, 1080 660 C 1220 678, 1300 740, 1280 840",
    color: LIME_2,
    width: 24,
    mobile: true,
  },
  {
    d: "M-120 320 C 40 240, 40 420, 180 460 C 300 494, 240 600, 80 640 C 0 660, -80 720, -60 780",
    color: LIME_2,
    width: 22,
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
        preserveAspectRatio="xMidYMid slice"
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
