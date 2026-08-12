import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Coffee,
  ShieldCheck,
  Handshake,
  Users,
  Calculator,
  TrendingUp,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Pill } from "@/components/site/Pill";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-reunion.jpg";
import coworkImg from "@/assets/cowork-andino.jpg";
import logoWhiteGreen from "@/assets/logo_5.png.asset.json";

const WHATSAPP = "https://wa.me/56900000000"; // PLACEHOLDER: reemplazar por el número real
const EMAIL = "contacto@egestion.cl"; // PLACEHOLDER: reemplazar por el correo real

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EGestión | Asesoría contable y tributaria en Los Andes" },
      {
        name: "description",
        content:
          "Asesoría contable, tributaria y estratégica en Los Andes, Chile. Tu empresa en buenas manos: impuestos al día, números claros y decisiones acompañadas.",
      },
      { property: "og:title", content: "EGestión | Tu empresa en buenas manos" },
      {
        property: "og:description",
        content:
          "El partner estratégico que se sienta contigo: contabilidad, impuestos, finanzas y personas en Los Andes, Valle de Aconcagua.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICIOS_EXTRA = [
  {
    title: "Contabilidad",
    icon: Calculator,
    text: "Registramos tu información según las normas contables vigentes y la convertimos en informes claros que reflejan la realidad de tu empresa, para que puedas analizar tu situación actual y decidir tu futuro con datos reales.",
  },
  {
    title: "Remuneraciones",
    icon: Users,
    text: "Aplicamos la normativa laboral vigente para que enfrentes con tranquilidad el día a día de tu equipo. Tus contratos y tu gente en regla, mejorando las relaciones laborales dentro de tu organización.",
  },
];

const PILARES = [
  {
    icon: ShieldCheck,
    title: "Asesoría tributaria experta",
    text: "Impuestos al día, sin sorpresas y pagando lo justo.",
  },
  {
    icon: Handshake,
    title: "Asesoría 1 a 1",
    text: "Tu empresa, en una conversación. Cara a cara, no un formulario.",
  },
  {
    icon: Calculator,
    title: "Un solo partner",
    text: "Contabilidad, impuestos, finanzas, contratos y personas.",
  },
  {
    icon: TrendingUp,
    title: "Desde la idea hasta el crecimiento",
    text: "Acompañamos al que parte y al que quiere crecer.",
  },
];

const STATS = [
  { n: "+XX años", l: "de experiencia" },
  { n: "+XXX", l: "empresas acompañadas" },
  { n: "100%", l: "atención personalizada" },
  { n: "Los Andes", l: "y todo el Valle de Aconcagua" },
];

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#cowork", label: "Cowork Andino" },
  { href: "#contacto", label: "Contacto" },
];

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="bg-brand-blue text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
            <Reveal>
              <Pill>Asesoría contable y estratégica · Los Andes</Pill>
              <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
                El partner estratégico que se sienta contigo
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                No te entregamos un balance y adiós. Nos sentamos contigo, entendemos tu negocio y
                te acompañamos en cada decisión: contabilidad, impuestos, finanzas y personas.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-lime px-6 py-3.5 text-sm font-semibold text-brand-blue transition-transform hover:scale-[1.03]"
                >
                  Agenda una reunión <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Conversemos por WhatsApp
                </a>
              </div>
              <p className="mt-8 text-sm text-brand-lime">Tu empresa en buenas manos.</p>
            </Reveal>

            <Reveal delay={120}>
              {/* PLACEHOLDER: foto de René / una reunión real */}
              <img
                src={heroImg}
                alt="Reunión de asesoría entre René y un cliente de EGestión"
                width={1200}
                height={1000}
                className="w-full rounded-[20px] object-cover shadow-2xl"
              />
            </Reveal>
          </div>
        </section>

        {/* VALUE STRIP */}
        <section className="bg-brand-soft">
          <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
            {[
              { icon: Coffee, t: "Cara a cara, no un formulario" },
              { icon: ShieldCheck, t: "Impuestos al día, sin sorpresas con el SII" },
              { icon: Handshake, t: "Un solo partner para toda tu empresa" },
            ].map((i, idx) => (
              <Reveal as="li" key={i.t} delay={idx * 80}>
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-lime">
                    <i.icon className="size-5 text-brand-blue" />
                  </span>
                  <span className="text-sm font-medium text-brand-ink">{i.t}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-3xl">
            <Pill tone="outline">Quiénes somos</Pill>
            <h2 className="mt-5 text-3xl font-bold text-brand-ink sm:text-4xl lg:text-5xl">
              Experiencia de contador, trato de socio
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-ink/75 sm:text-lg">
              La marca nace de cómo trabaja René: no solo ve números y te manda un informe. Va a tu
              local, se toma un café, entiende tu negocio de verdad y recién ahí habla de números.
              Te explicamos qué significa cada número y qué hacer con él.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="h-full rounded-[20px] border border-brand-ink/10 bg-brand-soft p-6 transition-shadow hover:shadow-lg">
                  <p className="font-display text-3xl font-bold text-brand-blue">{s.n}</p>
                  <p className="mt-2 text-sm text-brand-ink/70">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <Reveal className="max-w-3xl">
            <Pill tone="outline">Servicios</Pill>
            <h2 className="mt-5 text-3xl font-bold text-brand-ink sm:text-4xl lg:text-5xl">
              Todo lo de tu empresa, en un solo partner
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="lg:col-span-2">
              <article className="rounded-[20px] bg-brand-blue p-8 text-white shadow-xl md:p-12">
                <span className="inline-flex rounded-full bg-brand-lime px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-blue uppercase">
                  Nuestra especialidad
                </span>
                <h3 className="mt-6 text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Consultoría y asesoría tributaria
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
                  Planificamos tus impuestos a partir del análisis de tus obligaciones y beneficios
                  tributarios, con una visión estratégica: que pagues lo justo, sin sorpresas con el
                  SII, y que tus impuestos jueguen a favor del crecimiento de tu negocio.
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-lime hover:underline"
                >
                  Conversemos <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>

            {SERVICIOS_EXTRA.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <article className="flex h-full flex-col rounded-[20px] border border-brand-ink/10 bg-white p-8 transition-shadow hover:shadow-lg">
                  <span className="grid size-11 place-items-center rounded-full bg-brand-lime">
                    <s.icon className="size-5 text-brand-blue" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-brand-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/75">{s.text}</p>
                  <a
                    href="#contacto"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    Conversemos <ArrowUpRight className="size-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* POR QUÉ */}
        <section className="bg-brand-blue text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal className="max-w-3xl">
              <Pill>Por qué EGestión</Pill>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Los números claros, las decisiones acompañadas
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PILARES.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-lime">
                    <p.icon className="size-6 text-brand-blue" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COWORK */}
        <section id="cowork" className="bg-brand-lime text-brand-blue">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex rounded-full bg-brand-blue px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                Un espacio de EGestión
              </span>
              <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Cowork Andino — un lugar para trabajar bien en Los Andes
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-ink/80 sm:text-lg">
                Si EGestión acompaña a las personas que trabajan, Cowork Andino les da además el
                lugar para hacerlo. Uno de los primeros coworks de la ciudad, hecho por alguien de
                la ciudad.
              </p>
              <a
                href="#contacto"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Conoce el espacio <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
            <Reveal delay={120}>
              {/* PLACEHOLDER: foto real del Cowork Andino */}
              <img
                src={coworkImg}
                alt="Interior del Cowork Andino en Los Andes"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full rounded-[20px] object-cover shadow-xl"
              />
            </Reveal>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="bg-brand-blue text-white">
          <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center md:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ¿Estás pensando en tu negocio? Partamos por un café.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85">
              Cuéntanos en qué estás y te decimos cómo te acompañamos. Sin compromiso, en simple.
            </p>
            <a
              href="#contacto"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-semibold text-brand-blue transition-transform hover:scale-[1.03]"
            >
              Agenda una reunión <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-ink sm:text-4xl">Conversemos</h2>
              <p className="mt-4 text-sm text-brand-ink/70">
                Déjanos tus datos y te respondemos a la brevedad.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-[20px] bg-brand-soft p-8">
                <h3 className="text-lg font-bold text-brand-ink">Escríbenos directo</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                    <span>
                      <span className="block font-semibold text-brand-ink">WhatsApp</span>
                      <a href={WHATSAPP} className="text-brand-blue hover:underline">
                        +56 9 XXXX XXXX
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                    <span>
                      <span className="block font-semibold text-brand-ink">Correo</span>
                      <a href={`mailto:${EMAIL}`} className="text-brand-blue hover:underline">
                        {EMAIL}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                    <span>
                      <span className="block font-semibold text-brand-ink">Ubicación</span>
                      <span className="text-brand-ink/75">
                        Los Andes, Región de Valparaíso, Chile
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-brand-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <img
                src={logoWhiteGreen.url}
                alt="EGestión"
                width={1920}
                height={941}
                loading="lazy"
                className="h-14 w-auto object-contain object-left"
              />
              <p className="mt-4 text-sm text-brand-lime">Tu empresa en buenas manos.</p>
            </div>
            <nav aria-label="Pie de página">
              <h2 className="text-sm font-semibold">Navegación</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-brand-lime">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="text-sm text-white/80">
              <h2 className="text-sm font-semibold text-white">Contacto</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href={WHATSAPP} className="hover:text-brand-lime">
                    WhatsApp: +56 9 XXXX XXXX
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-brand-lime">
                    {EMAIL}
                  </a>
                </li>
                <li>Los Andes, Región de Valparaíso, Chile</li>
              </ul>
            </div>
          </div>
          <p className="mt-12 border-t border-white/15 pt-6 text-xs text-white/65">
            EGestión · Asesoría contable y estratégica · Los Andes, Chile
          </p>
        </div>
      </footer>
    </div>
  );
}
