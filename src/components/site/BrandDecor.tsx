type Variant = "hero" | "section";

const LIME = "#F0F7D8";
const BLUE = "#EDF0FF";

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
    d: "M1320 -80 C 1160 60, 1280 250, 1120 340 C 1000 408, 1170 520, 1090 660 C 1040 748, 1160 790, 1310 760",
    color: BLUE,
    width: 26,
    mobile: true,
  },
  {
    // right cluster, overlaps the first in the corner
    d: "M1340 180 C 1220 240, 1260 430, 1090 490 C 980 528, 1020 610, 1140 640 C 1250 668, 1310 720, 1290 820",
    color: LIME,
    width: 22,
    mobile: true,
  },
  {
    // far bottom-left corner, below the buttons
    d: "M-180 820 C -60 770, -120 660, 10 626 C 120 598, 60 700, 140 742 C 200 774, 214 830, 180 900",
    color: LIME,
    width: 20,
  },
  {
    // bottom-right, cropped by both edges
    d: "M1340 620 C 1200 640, 1120 700, 1140 780 C 1156 846, 1260 860, 1340 890",
    color: BLUE,
    width: 18,
  },
];

const SECTION_RIBBONS: Ribbon[] = [
  {
    // right edge
    d: "M1320 -60 C 1200 60, 1280 200, 1150 300 C 1050 376, 1190 470, 1140 620 C 1110 712, 1210 780, 1330 810",
    color: BLUE,
    width: 24,
    mobile: true,
  },
  {
    // right edge, overlapping in the bottom corner
    d: "M1350 300 C 1240 350, 1270 470, 1170 530 C 1096 574, 1140 640, 1240 672 C 1320 698, 1360 750, 1340 840",
    color: LIME,
    width: 20,
    mobile: true,
  },
  {
    // left edge
    d: "M-180 120 C -70 20, -110 220, 10 260 C 110 294, 40 400, -50 452 C -120 492, -170 560, -150 660",
    color: LIME,
    width: 18,
  },
];

export function BrandDecor({ variant }: { variant: Variant }) {
  const ribbons = variant === "hero" ? HERO_RIBBONS : SECTION_RIBBONS;
  const mask = "linear-gradient(to bottom, black 0%, transparent 80%)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      {variant === "hero" && (
        <div
          className="brand-halftone absolute inset-0"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />
      )}
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
