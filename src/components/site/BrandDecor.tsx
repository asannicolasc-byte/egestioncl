type Variant = "hero" | "section";

const LIME = "#F0F7D8";
const BLUE = "#EDF0FF";

type Ribbon = {
  /** zone box the ribbon lives in — keeps decor in the outer margins */
  zone: React.CSSProperties;
  /** hide below lg when the section is too cramped */
  lgOnly?: boolean;
  /**
   * Chained cubic beziers in a 300x300 viewBox. Every path starts and ends
   * outside the box and loops back over itself at least once (a coil, not a
   * swoosh). Rendered with preserveAspectRatio="meet" so the stroke keeps a
   * constant thickness along its whole length.
   */
  d: string;
  color: string;
  width: number;
};

/* coil that enters top-right, loops, exits bottom */
const COIL_A =
  "M380 -60 C 300 30, 190 20, 170 100 C 152 172, 250 200, 268 140 C 284 86, 190 60, 140 120 C 88 182, 130 280, 60 360";
/* mirrored coil, runs roughly parallel to COIL_A */
const COIL_B =
  "M420 20 C 340 110, 240 100, 222 178 C 206 246, 296 272, 312 216 C 326 166, 240 140, 192 196 C 142 254, 180 340, 110 420";
/* coil that enters bottom-left, loops, exits right */
const COIL_C =
  "M-70 360 C 20 300, 30 200, 110 190 C 180 182, 200 268, 142 280 C 88 291, 62 200, 128 158 C 196 114, 300 168, 370 110";

const HERO_RIBBONS: Ribbon[] = [
  {
    // right edge, upper — pairs with the next one
    zone: { top: "20px", right: 0, width: "20%", height: "430px" },
    d: COIL_A,
    color: BLUE,
    width: 26,
  },
  {
    // right edge, overlapping the first, roughly parallel
    zone: { top: "20px", right: 0, width: "20%", height: "430px" },
    d: COIL_B,
    color: LIME,
    width: 22,
  },
  {
    // bottom edge, right side
    zone: { bottom: 0, right: 0, width: "16%", height: "150px" },
    lgOnly: true,
    d: COIL_C,
    color: LIME,
    width: 22,
  },
  {
    // bottom edge, below the CTA buttons / left corner
    zone: { bottom: 0, left: 0, width: "12%", height: "130px" },
    lgOnly: true,
    d: COIL_A,
    color: BLUE,
    width: 20,
  },
  {
    // small curl in the top-left corner, above the nav
    zone: { top: 0, left: 0, width: "8%", height: "130px" },
    lgOnly: true,
    d: COIL_C,
    color: LIME,
    width: 18,
  },
];

const SECTION_RIBBONS: Ribbon[] = [
  {
    // top-right corner band (inside the section's top padding)
    zone: { top: 0, right: 0, width: "18%", height: "150px" },
    d: COIL_A,
    color: BLUE,
    width: 24,
  },
  {
    // bottom-right corner band, parallel and overlapping along the edge
    zone: { bottom: 0, right: 0, width: "16%", height: "150px" },
    d: COIL_B,
    color: LIME,
    width: 20,
  },
  {
    // bottom-left corner band
    zone: { bottom: 0, left: 0, width: "16%", height: "150px" },
    d: COIL_C,
    color: LIME,
    width: 20,
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
          className={`absolute overflow-hidden ${r.lgOnly ? "hidden lg:block" : ""}`}
          style={r.zone}
          viewBox="0 0 300 300"
          preserveAspectRatio="xMidYMid meet"
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
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}
