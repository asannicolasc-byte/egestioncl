import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/eg-logo-web-2.png.asset.json";

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-[28px] transition-all duration-300 ${
          scrolled
            ? "border border-brand-soft bg-white/80 shadow-[0_14px_40px_-24px_rgba(37,41,67,0.45)] backdrop-blur-xl"
            : "border border-transparent bg-white/55 backdrop-blur-md"
        }`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5 sm:px-4 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center" aria-label="EGestión, inicio">
            <img
              src={logo.url}
              alt="EGestión"
              width={320}
              height={60}
              className="h-11 w-auto sm:h-14"
            />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-underline rounded-full px-3.5 py-2 text-sm font-medium text-brand-ink/75 transition-colors hover:text-brand-blue"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="group hidden items-center gap-2 rounded-full bg-brand-lime py-1.5 pr-1.5 pl-5 text-sm font-semibold text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(37,41,67,0.6)] sm:inline-flex"
            >
              Agenda una reunión
              <span className="grid size-8 place-items-center rounded-full bg-brand-ink">
                <ArrowUpRight className="size-4 text-brand-lime transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-soft bg-white text-brand-blue transition-colors hover:bg-brand-soft lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="rounded-b-[28px] border-t border-brand-soft bg-white/95 px-3 py-3 backdrop-blur-xl lg:hidden"
            aria-label="Móvil"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-2.5 text-base font-medium text-brand-ink transition-colors hover:bg-brand-soft"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-lime px-5 py-3 text-sm font-semibold text-brand-ink"
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
