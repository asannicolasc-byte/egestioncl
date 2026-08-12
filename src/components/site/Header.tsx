import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoHorizontal from "@/assets/logo_3.png.asset.json";
import logoMark from "@/assets/logo_2.png.asset.json";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#cowork", label: "Cowork Andino" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/10 bg-white/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <a href="#inicio" className="flex min-w-0 items-center" aria-label="EGestión, inicio">
          <img
            src={logoHorizontal.url}
            alt="EGestión"
            width={1920}
            height={941}
            className="hidden h-11 w-auto rounded-md sm:block"
          />
          <img
            src={logoMark.url}
            alt="EGestión"
            width={1146}
            height={1146}
            className="h-10 w-auto sm:hidden"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-brand-ink/75 transition-colors hover:text-brand-blue"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden items-center gap-1.5 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Agenda una reunión <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-ink/15 text-brand-blue lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-brand-ink/10 bg-white px-5 py-4 lg:hidden" aria-label="Móvil">
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
            <li className="mt-2">
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
    </header>
  );
}
