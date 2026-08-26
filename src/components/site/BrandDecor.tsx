type Variant = "hero" | "footer";

type ShapeName = "smile" | "tail" | "ring" | "dot" | "arc" | "bar";

const LIME = "#C0E12D";
const BLUE = "#0946FF";

function BrandShape({
  name,
  color,
  opacity,
  rotate,
  size,
  style,
  className,
}: {
  name: ShapeName;
  color: string;
  opacity: number;
  rotate: number;
  size: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      aria-hidden="true"
      focusable="false"
      className={`brand-decor-shape absolute ${className ?? ""}`}
      style={{
        ...style,
        width: size,
        height: size,
        color,
        opacity,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: "none",
      }}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      {name === "smile" && <path d="M4 22 Q40 60 76 22" strokeWidth={16} />}
      {name === "tail" && <path d="M56 8 L56 48 Q56 76 20 72" strokeWidth={16} />}
      {name === "ring" && (
        <>
          <path d="M72 40 A30 30 0 1 0 48 70" strokeWidth={15} />
          <path d="M42 34 H72" strokeWidth={13} />
        </>
      )}
      {name === "dot" && <circle cx="40" cy="40" r="24" fill="currentColor" stroke="none" />}
      {name === "arc" && <path d="M10 70 A38 38 0 0 1 70 10" strokeWidth={16} />}
      {name === "bar" && (
        <rect x="0" y="31" width="80" height="18" rx="9" fill="currentColor" stroke="none" />
      )}
    </svg>
  );
}

type Placement = {
  name: ShapeName;
  color: string;
  opacity: number;
  rotate: number;
  size: string;
  style: React.CSSProperties;
  mobile?: boolean;
};

const HERO: Placement[] = [
  {
    name: "arc",
    color: LIME,
    opacity: 0.26,
    rotate: -22,
    size: "clamp(180px, 26vw, 340px)",
    style: { top: "-8%", right: "-7%" },
    mobile: true,
  },
  {
    name: "tail",
    color: BLUE,
    opacity: 0.22,
    rotate: 196,
    size: "clamp(120px, 15vw, 210px)",
    style: { top: "26%", left: "-6%" },
    mobile: true,
  },
  {
    name: "smile",
    color: LIME,
    opacity: 0.24,
    rotate: 9,
    size: "clamp(100px, 12vw, 170px)",
    style: { bottom: "-6%", left: "18%" },
  },
  {
    name: "bar",
    color: BLUE,
    opacity: 0.22,
    rotate: -38,
    size: "clamp(90px, 11vw, 150px)",
    style: { top: "8%", left: "31%" },
  },
  {
    name: "ring",
    color: LIME,
    opacity: 0.2,
    rotate: 47,
    size: "clamp(110px, 14vw, 190px)",
    style: { bottom: "4%", right: "-5%" },
    mobile: true,
  },
  {
    name: "smile",
    color: BLUE,
    opacity: 0.2,
    rotate: 14,
    size: "clamp(90px, 10vw, 130px)",
    style: { top: "58%", right: "22%" },
  },
  {
    name: "dot",
    color: BLUE,
    opacity: 0.35,
    rotate: 14,
    size: "26px",
    style: { top: "14%", left: "12%" },
    mobile: true,
  },
  {
    name: "dot",
    color: LIME,
    opacity: 0.35,
    rotate: -38,
    size: "20px",
    style: { bottom: "16%", right: "34%" },
  },
];

const FOOTER: Placement[] = [
  {
    name: "arc",
    color: BLUE,
    opacity: 0.28,
    rotate: 196,
    size: "clamp(170px, 24vw, 320px)",
    style: { bottom: "-12%", left: "-8%" },
    mobile: true,
  },
  {
    name: "smile",
    color: LIME,
    opacity: 0.24,
    rotate: -22,
    size: "clamp(110px, 14vw, 190px)",
    style: { top: "-9%", right: "6%" },
    mobile: true,
  },
  {
    name: "bar",
    color: BLUE,
    opacity: 0.22,
    rotate: 47,
    size: "clamp(90px, 11vw, 150px)",
    style: { top: "34%", left: "22%" },
  },
  {
    name: "ring",
    color: LIME,
    opacity: 0.22,
    rotate: 9,
    size: "clamp(130px, 17vw, 240px)",
    style: { bottom: "8%", right: "-7%" },
    mobile: true,
  },
  {
    name: "tail",
    color: BLUE,
    opacity: 0.2,
    rotate: -38,
    size: "clamp(90px, 12vw, 160px)",
    style: { top: "6%", left: "38%" },
  },
  {
    name: "smile",
    color: BLUE,
    opacity: 0.2,
    rotate: 14,
    size: "clamp(90px, 10vw, 130px)",
    style: { bottom: "26%", left: "8%" },
  },
  {
    name: "dot",
    color: LIME,
    opacity: 0.35,
    rotate: 47,
    size: "24px",
    style: { top: "22%", right: "28%" },
    mobile: true,
  },
];

export function BrandDecor({ variant }: { variant: Variant }) {
  const shapes = variant === "hero" ? HERO : FOOTER;
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
      {shapes.map((s, i) => (
        <BrandShape
          key={i}
          name={s.name}
          color={s.color}
          opacity={s.opacity}
          rotate={s.rotate}
          size={s.size}
          style={s.style}
          className={s.mobile ? "" : "hidden sm:block"}
        />
      ))}
    </div>
  );
}
