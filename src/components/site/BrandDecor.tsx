type Props = { variant: "hero" | "footer" };

const arcStyle: React.CSSProperties = { pointerEvents: "none" };

function Arc({
  color,
  opacity,
  d,
  className,
  style,
}: {
  color: string;
  opacity: number;
  d: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
      className={`brand-decor-shape absolute ${className ?? ""}`}
      style={{ ...arcStyle, ...style, opacity }}
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={21}
        strokeLinecap="round"
      />
    </svg>
  );
}

const OPEN_ARC = "M100 10 a90 90 0 1 1 -63.6 26.4";
const HALF_ARC = "M100 10 a90 90 0 0 1 0 180";
const SMILE = "M30 90 a80 80 0 0 0 140 0";

const LIME = "#C0E12D";
const BLUE = "#0946FF";

export function BrandDecor({ variant }: Props) {
  const size = "clamp(120px, 18vw, 320px)";

  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none"
      >
        <div
          className="brand-dots absolute inset-0 opacity-50"
          style={{ maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 85%)" }}
        />
        <Arc
          color={LIME}
          opacity={0.26}
          d={OPEN_ARC}
          style={{ width: size, height: size, top: "2%", right: "-6%" }}
        />
        <Arc
          color={BLUE}
          opacity={0.18}
          d={HALF_ARC}
          className="hidden sm:block"
          style={{ width: size, height: size, top: "38%", right: "-10%" }}
        />
        <Arc
          color={LIME}
          opacity={0.22}
          d={SMILE}
          className="hidden sm:block"
          style={{ width: size, height: size, bottom: "-8%", left: "-6%" }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden rounded-[40px]"
    >
      <div
        className="brand-dots absolute inset-0 opacity-35"
        style={{ maskImage: "linear-gradient(to top, black 0%, transparent 85%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 85%)" }}
      />
      <Arc
        color={BLUE}
        opacity={0.3}
        d={OPEN_ARC}
        style={{ width: "clamp(160px, 24vw, 380px)", height: "clamp(160px, 24vw, 380px)", bottom: "-14%", left: "-8%" }}
      />
      <Arc
        color={LIME}
        opacity={0.22}
        d={SMILE}
        className="hidden sm:block"
        style={{ width: size, height: size, top: "-10%", right: "-6%" }}
      />
    </div>
  );
}
