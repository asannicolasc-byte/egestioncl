import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
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
import { Eyebrow } from "@/components/site/Eyebrow";
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

const SERVICIOS = [
  {
    n: "01",
    title: "Consultoría y asesoría tributaria",
    icon: ShieldCheck,
    featured: true,
    text: "Planificamos tus impuestos a partir del análisis de tus obligaciones y beneficios tributarios, con visión estratégica: que pagues lo justo, sin sorpresas con el SII, y que tus impuestos jueguen a favor del crecimiento de tu negocio.",
  },
  {
    n: "02",
    title: "Contabilidad",
    icon: Calculator,
    featured: false,
    text: "Registramos tu información según las normas vigentes y la convertimos en informes claros que reflejan la realidad de tu empresa, para decidir con datos reales.",
  },
  {
    n: "03",
    title: "Remuneraciones",
    icon: Users,
    featured: false,
    text: "Aplicamos la normativa laboral vigente para que enfrentes con tranquilidad el día a día de tu equipo: contratos y gente en regla, mejores relaciones laborales.",
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
    title: "De la idea al crecimiento",
    text: "Acompañamos al que parte y al que quiere crecer.",
  },
];

const STATS = [
  { n: "+XX", l: "años de experiencia", d: "Trayectoria acompañando a empresas." },
  { n: "+XXX", l: "empresas acompañadas", d: "Desde emprendedores hasta pymes consolidadas." },
  { n: "100%", l: "atención personalizada", d: "Siempre hablas con quien conoce tu negocio." },
  { n: "Local", l: "Los Andes y el Valle de Aconcagua", d: "Presencia local, cerca de tu operación." },
];


const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cowork", label: "Cowork Andino" },
  { href: "#contacto", label: "Contacto" },
];

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="px-3 pt-3 sm:px-5 sm:pt-5">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-brand-ink">
            <img
              src={heroImg}
              alt="Reunión de asesoría entre el equipo de EGestión y un cliente"
              width={1600}
              height={1000}
              className="absolute inset-0 size-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/75 to-brand-ink/25" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(90% 80% at 0% 100%, color-mix(in oklab, var(--brand-blue) 55%, transparent), transparent 60%)",
              }}
            />

            <div className="relative mx-auto flex min-h-[620px] max-w-6xl flex-col justify-end px-5 pt-36 pb-8 sm:min-h-[680px] sm:px-8 md:pt-44 lg:min-h-[760px]">
              <Reveal className="max-w-3xl">
                <Eyebrow tone="light">ASESORÍA CONTABLE Y ESTRATÉGICA </Eyebrow>
                <h1 className="mt-6 text-[2.5rem] leading-[1.02] font-bold text-white sm:text-6xl lg:text-7xl">
                  Queremos ver{" "}
                  <span className="text-brand-lime">crecer tu negocio</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  Te acompañamos en cada decisión: contabilidad, impuestos, finanzas y personas.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#contacto"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-lime py-2 pr-2 pl-6 text-sm font-semibold text-brand-blue transition-transform hover:scale-[1.03]"
                  >
                    Agenda una reunión
                    <span className="grid size-9 place-items-center rounded-full bg-brand-blue">
                      <ArrowUpRight className="size-4 text-brand-lime transition-transform group-hover:rotate-45" />
                    </span>
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                  >
                    Conversemos por WhatsApp
                  </a>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <Eyebrow>Quiénes somos</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <Reveal>
              <h2 className="text-3xl leading-[1.12] font-bold text-brand-ink sm:text-4xl lg:text-[3.25rem]">
                Somos un equipo de profesionales dedicados a la contabilidad y gestión de empresas.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-brand-ink/70">
                Te explicamos qué significa cada número y qué hacer con él.{" "}
              </p>
              <a
                href="#servicios"
                className="mt-6 inline-flex items-center gap-2 border-b border-brand-blue/30 pb-1 text-sm font-semibold text-brand-blue transition-colors hover:border-brand-blue"
              >
                Ver nuestros servicios <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-10 border-t border-brand-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="lg:border-l lg:border-brand-ink/10 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
                  <p className="font-display text-4xl font-bold text-brand-blue lg:text-5xl">
                    {s.n}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-brand-ink">{s.l}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-brand-ink/55">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="px-3 sm:px-5">
          <div className="mx-auto max-w-[1400px] rounded-[28px] bg-brand-ink px-5 py-20 text-white sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <Eyebrow tone="light">Servicios</Eyebrow>
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <Reveal>
                  <h2 className="text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-[3.25rem]">
                    Todo lo de tu empresa,
                    <br />
                    en un solo partner
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="text-sm leading-relaxed text-white/60">
                    Nuestra especialidad es la asesoría tributaria, y la complementamos con la
                    contabilidad y las personas de tu empresa.
                  </p>
                </Reveal>
              </div>

              <div className="mt-14 grid gap-4 lg:grid-cols-3">
                {SERVICIOS.map((s, i) => (
                  <Reveal key={s.title} delay={i * 90} className={s.featured ? "lg:row-span-1" : ""}>
                    <article
                      className={`group flex h-full flex-col rounded-[24px] p-7 transition-colors md:p-9 ${
                        s.featured
                          ? "bg-brand-blue text-white lg:col-span-1"
                          : "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`grid size-11 place-items-center rounded-2xl ${
                            s.featured ? "bg-brand-lime" : "bg-white/10"
                          }`}
                        >
                          <s.icon
                            className={`size-5 ${s.featured ? "text-brand-blue" : "text-brand-lime"}`}
                          />
                        </span>
                        <span
                          className={`font-display text-sm font-semibold ${
                            s.featured ? "text-brand-lime" : "text-white/35"
                          }`}
                        >
                          {s.n}
                        </span>
                      </div>
                      {s.featured && (
                        <span className="mt-6 inline-flex w-fit rounded-full bg-brand-lime px-3.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-brand-blue uppercase">
                          Nuestra especialidad
                        </span>
                      )}
                      <h3 className="mt-5 text-xl leading-snug font-bold sm:text-2xl">{s.title}</h3>
                      <p
                        className={`mt-4 flex-1 text-sm leading-relaxed ${
                          s.featured ? "text-white/80" : "text-white/60"
                        }`}
                      >
                        {s.text}
                      </p>
                      <a
                        href="#contacto"
                        className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                          s.featured ? "text-brand-lime" : "text-white"
                        }`}
                      >
                        Conversemos
                        <span
                          className={`grid size-7 place-items-center rounded-full transition-transform group-hover:translate-x-1 ${
                            s.featured ? "bg-brand-lime/20" : "bg-white/10"
                          }`}
                        >
                          <ArrowUpRight className="size-3.5" />
                        </span>
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <Eyebrow>Por qué EGestión</Eyebrow>
            <h2 className="mt-8 max-w-3xl text-3xl leading-[1.12] font-bold text-brand-ink sm:text-4xl lg:text-[3rem]">
              Los números claros, las decisiones acompañadas
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-[24px] border border-brand-ink/10 bg-brand-soft p-7 transition-colors hover:border-brand-blue/30 hover:bg-white">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-blue">
                    <p.icon className="size-5 text-brand-lime" />
                  </span>
                  <h3 className="mt-6 text-lg leading-snug font-bold text-brand-ink">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-ink/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* COWORK */}
        <section id="cowork" className="px-3 sm:px-5">
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-brand-lime">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2">
              <Reveal>
                <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                  <span className="size-2 rounded-[3px] bg-brand-blue" />
                  Un espacio de EGestión
                </span>
                <h2 className="mt-6 text-3xl leading-[1.1] font-bold text-brand-blue sm:text-4xl lg:text-[3rem]">
                  Cowork Andino
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
                  Si EGestión acompaña a las personas que trabajan, Cowork Andino les da además el
                  lugar para hacerlo. Uno de los primeros coworks de la ciudad, hecho por alguien de
                  la ciudad.
                </p>
                <a
                  href="#contacto"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand-blue py-2 pr-2 pl-6 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  Conoce el espacio
                  <span className="grid size-9 place-items-center rounded-full bg-brand-lime">
                    <ArrowUpRight className="size-4 text-brand-blue transition-transform group-hover:rotate-45" />
                  </span>
                </a>
              </Reveal>
              <Reveal delay={120}>
                <img
                  src={coworkImg}
                  alt="Interior del Cowork Andino en Los Andes"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[24px] object-cover shadow-[0_30px_60px_-30px_rgba(10,10,10,0.5)]"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="h-full rounded-[28px] border border-brand-ink/10 bg-white p-7 sm:p-10">
                <h2 className="text-3xl leading-tight font-bold text-brand-ink sm:text-4xl">
                  ¿Estás pensando en tu negocio? Partamos por un café.
                </h2>
                <p className="mt-4 text-sm text-brand-ink/65">
                  Déjanos tus datos y te respondemos a la brevedad. Sin compromiso, en simple.
                </p>
                <div className="mt-9">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-between rounded-[28px] bg-brand-blue p-7 text-white sm:p-10">
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-lime">
                    <Coffee className="size-5 text-brand-blue" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">Escríbenos directo</h3>
                  <ul className="mt-8 space-y-6 text-sm">
                    <li className="flex items-start gap-3">
                      <MessageCircle className="mt-0.5 size-5 shrink-0 text-brand-lime" />
                      <span className="min-w-0">
                        <span className="block font-semibold">WhatsApp</span>
                        <a href={WHATSAPP} className="text-white/75 hover:text-brand-lime">
                          +56 9 XXXX XXXX
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 size-5 shrink-0 text-brand-lime" />
                      <span className="min-w-0">
                        <span className="block font-semibold">Correo</span>
                        <a
                          href={`mailto:${EMAIL}`}
                          className="break-all text-white/75 hover:text-brand-lime"
                        >
                          {EMAIL}
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-brand-lime" />
                      <span className="min-w-0">
                        <span className="block font-semibold">Ubicación</span>
                        <span className="text-white/75">
                          Los Andes, Región de Valparaíso, Chile
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="mt-10 font-display text-lg font-semibold text-brand-lime">
                  Tu empresa en buenas manos.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-[1400px] rounded-[28px] bg-brand-ink px-5 py-14 text-white sm:px-8">
          <div className="mx-auto max-w-6xl">
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
                <p className="mt-4 text-sm text-white/60">
                  Asesoría contable, tributaria y estratégica en Los Andes, Valle de Aconcagua.
                </p>
              </div>
              <nav aria-label="Pie de página">
                <h2 className="text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase">
                  Navegación
                </h2>
                <ul className="mt-5 space-y-2.5 text-sm text-white/75">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} className="hover:text-brand-lime">
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div>
                <h2 className="text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase">
                  Contacto
                </h2>
                <ul className="mt-5 space-y-2.5 text-sm text-white/75">
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
                  <li>Los Andes, Chile</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} EGestión. Todos los derechos reservados.</p>
              <p>Los Andes · Valle de Aconcagua</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
