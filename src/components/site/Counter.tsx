import { useEffect, useRef, useState } from "react";

/**
 * Contador animado. Si el valor contiene dígitos, los anima desde 0.
 * Si son placeholders (ej. "+XX"), se muestra tal cual.
 */
export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const match = value.match(/\d+/);
  const target = match ? parseInt(match[0], 10) : null;
  const [n, setN] = useState(target === null ? null : 0);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    const run = () => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        clearTimeout(fallback);
        run();
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    // Safety net: never leave the number stuck at 0
    const fallback = window.setTimeout(() => {
      io.disconnect();
      setN(target);
    }, 2500);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, [target]);


  const display =
    target === null || n === null ? value : value.replace(/\d+/, String(n));

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
