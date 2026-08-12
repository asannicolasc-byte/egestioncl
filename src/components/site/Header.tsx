import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoHorizontal from "@/assets/logo_3.png.asset.json";
import logoMark from "@/assets/logo_2.png.asset.json";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cowork", label: "Cowork Andino" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className={`mx-auto max-w-6xl rounded-[22px] border transition-all duration-300 ${
          scrolled
            ? "border-brand-ink/10 bg-white/85 shadow-[0_10px_40px_-18px_rgba(10,10,10,0.35)] backdrop-blur-xl"
            : "border-white/15 bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5 sm:px-4 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center" aria-label="EGestión, inicio">
            <img
              src={logoHorizontal.url}
              alt="EGestión"
              width={1920}
              height={941}
              className="hidden h-10 w-auto rounded-xl sm:block"
            />
            <img
              src={logoMark.url}
              alt="EGestión"
              width={1146}
              height={1146}
              className="h-9 w-auto rounded-lg sm:hidden"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-brand-ink/70 hover:bg-brand-soft hover:text-brand-blue"
                    : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="hidden items-center gap-1.5 rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-blue transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Agenda una reunión
              <span className="grid size-5 place-items-center rounded-full bg-brand-blue">
                <ArrowUpRight className="size-3 text-brand-lime" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors lg:hidden ${
                scrolled
                  ? "border-brand-ink/15 text-brand-blue"
                  : "border-white/30 bg-white/10 text-white"
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-brand-ink/10 bg-white/95 px-3 py-3 backdrop-blur-xl lg:hidden" aria-label="Móvil">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-base font-medium text-brand-ink hover:bg-brand-soft"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white"
                >
                  Agenda una reunión <ArrowUpRight className="size-4" />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
