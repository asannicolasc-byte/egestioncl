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
