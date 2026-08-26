type Variant = "hero" | "section";

const LIME = "#F0F7D8";
const BLUE = "#EDF0FF";

type Ribbon = {
  /** zone box the ribbon lives in — keeps decor in the outer margins */
  zone: React.CSSProperties;
  /** path drawn in a 200x200 viewBox, always starting/ending outside it */
  d: string;
  color: string;
  width: number;
  mobile?: boolean;
};

const HERO_RIBBONS: Ribbon[] = [
  {
    // top-right corner, winds and doubles back
    zone: { top: 0, right: 0, width: "24%", height: "165px" },
    d: "M240 -40 C 150 30, 230 80, 140 110 C 70 134, 160 170, 120 240",
    color: BLUE,
    width: 22,
    mobile: true,
  },
  {
    // right edge lower, overlaps the first in the corner
    zone: { bottom: 0, right: 0, width: "20%", height: "9%" },
    d: "M250 -40 C 160 20, 210 90, 130 130 C 70 160, 150 200, 120 250",
    color: LIME,
    width: 20,
    mobile: true,
  },
  {
    // far bottom-left corner, below the buttons
    zone: { bottom: 0, left: 0, width: "14%", height: "7%" },
    d: "M-40 240 C 40 190, -20 130, 60 110 C 130 92, 90 170, 160 200 C 200 218, 220 250, 210 290",
    color: LIME,
    width: 18,
  },
];

const SECTION_RIBBONS: Ribbon[] = [
  {
    // top-right corner band (inside the section's top padding)
    zone: { top: 0, right: 0, width: "20%", height: "40px" },
    d: "M260 -60 C 170 20, 250 70, 150 100 C 80 122, 170 160, 130 240",
    color: BLUE,
    width: 22,
    mobile: true,
  },
  {
    // bottom-right corner band, overlapping the top one along the edge
    zone: { bottom: 0, right: 0, width: "18%", height: "42px" },
    d: "M250 -50 C 170 20, 220 100, 140 130 C 80 152, 160 200, 130 260",
    color: LIME,
    width: 18,
    mobile: true,
  },
  {
    // bottom-left corner band
    zone: { bottom: 0, left: 0, width: "18%", height: "42px" },
    d: "M-60 250 C 30 200, -30 140, 60 110 C 130 88, 80 180, 150 210 C 200 232, 220 260, 210 300",
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
      className="pointer-events-none absolute inset-0 z-0 hidden select-none overflow-hidden md:block"
    >
      {variant === "hero" && (
        <div
          className="brand-halftone absolute inset-0"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />
      )}
      {ribbons.map((r, i) => (
        <svg
          key={i}
          className="absolute overflow-hidden"
          style={r.zone}
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d={r.d}
            fill="none"
            stroke={r.color}
            strokeWidth={r.width}
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}
