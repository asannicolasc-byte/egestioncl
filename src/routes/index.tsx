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
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero-reunion-2.jpg.asset.json";
import coworkImg from "@/assets/cowork-andino.jpg.asset.json";
import reneImg from "@/assets/rene-ponce.png.asset.json";
import taxImg from "@/assets/hero-tax-documents.jpg.asset.json";
import egLime from "@/assets/eg-lime.png.asset.json";
import logoVideo from "@/assets/egestion-logo-animado.mp4.asset.json";
import peopleCafeImg from "@/assets/people-cafe.jpg.asset.json";

const WHATSAPP = "https://wa.me/56962060320";
const WA_WITH_MESSAGE = "https://wa.me/56962060320?text=Hola%20Ren%C3%A9%2C%20me%20gustar%C3%ADa%20que%20nos%20tom%C3%A1ramos%20un%20caf%C3%A9%20para%20conversar%20de%20mi%20negocio";
const EMAIL = "rene.ponce@egestion.cl";

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
    title: "Asesoría tributaria ",
    icon: ShieldCheck,
    tone: "blue" as const,
    text: "Planificamos tus impuestos a partir del análisis de tus obligaciones y beneficios tributarios, con visión estratégica: que pagues lo justo, sin sorpresas con el SII, y que tus impuestos jueguen a favor del crecimiento de tu negocio.",
  },
  {
    n: "02",
    title: "Asesoría de contabilidad",
    icon: Calculator,
    tone: "lime" as const,
    text: "Registramos tu información según las normas vigentes y la convertimos en informes claros que reflejan la realidad de tu empresa, para decidir con datos reales.",
  },
  {
    n: "03",
    title: "Gestión de personas",
    icon: Users,
    tone: "soft" as const,
    text: "Aplicamos la normativa laboral vigente para que enfrentes con tranquilidad el día a día de tu equipo: contratos y gente en regla, mejores relaciones laborales.",
  },
];

const PILARES = [
  {
    icon: ShieldCheck,
    title: "Asesoría tributaria experta",
    text: "Impuestos al día, beneficiando siempre tu negocio.",
    tone: "blue" as const,
  },
  {
    icon: Handshake,
    title: "Asesoría 1 a 1",
    text: "Nos aseguramos de explicarte todo de forma personalizada.",
    tone: "soft" as const,
  },
  {
    icon: Calculator,
    title: "Un solo partner",
    text: "Contabilidad, impuestos, finanzas, contratos y personas.",
    tone: "lime" as const,
  },
  {
    icon: TrendingUp,
    title: "De la idea al crecimiento",
    text: "Acompañamos al que parte y al que quiere crecer.",
    tone: "white" as const,
  },
];

const STATS = [
  { n: "+XX", l: "Años de experiencia", d: "Trayectoria acompañando a empresas." },
  { n: "+XXX", l: "Empresas acompañadas", d: "Desde emprendedores hasta empresas consolidadas." },
  { n: "100%", l: "Atención personalizada", d: "Siempre hablas con quien conoce tu negocio." },
];

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cowork", label: "Cowork Andino" },
  { href: "#contacto", label: "Contacto" },
];

const CARD_TONES = {
  blue: "bg-brand-blue text-white",
  lime: "bg-brand-lime text-brand-ink",
  soft: "bg-brand-soft text-brand-ink",
  white: "bg-white text-brand-ink border border-brand-soft",
};

function ArrowBadge({ tone }: { tone: keyof typeof CARD_TONES }) {
  const styles = {
    blue: "bg-brand-lime text-brand-blue",
    lime: "bg-brand-ink text-brand-lime",
    soft: "bg-brand-blue text-brand-lime",
    white: "bg-brand-soft text-brand-blue",
  };
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${styles[tone]}`}
    >
      <ArrowUpRight className="size-4" />
    </span>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.331 0-2.64-.353-3.787-1.021l-.272-.162-2.816.738.752-2.742-.177-.282A7.965 7.965 0 0 1 3.835 12c0-4.416 3.589-8.003 8.004-8.003 4.415 0 8.003 3.588 8.003 8.003 0 4.416-3.588 8.004-8.003 8.004M20.807 3.153A11.668 11.668 0 0 0 11.839 0C5.33 0 0 5.33 0 11.84c0 2.082.544 4.113 1.574 5.907L.052 24l6.305-1.654a11.85 11.85 0 0 0 5.482 1.343h.005c6.51 0 11.839-5.331 11.839-11.84 0-3.163-1.232-6.136-3.476-8.396" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden px-3 pt-28 pb-6 sm:px-5 sm:pt-32">
          <div
            aria-hidden
            className="blob pointer-events-none absolute -top-32 -left-24 size-[28rem] bg-brand-blue/10 blur-3xl"
          />
          <div
            aria-hidden
            className="blob pointer-events-none absolute -top-10 right-0 size-[22rem] bg-brand-lime/25 blur-3xl"
          />

          <div className="relative mx-auto max-w-6xl">
            <Reveal className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-lime px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand-ink uppercase">
                <span className="size-2 rounded-full bg-brand-blue" />
                ASESORÍA CONTABLE Y ESTRATÉGICA{" "}
              </span>
              <h1 className="mt-7 text-[2.75rem] leading-[0.98] font-bold text-brand-ink sm:text-6xl lg:text-[5rem]">
                Queremos ver{"\n"}
                <span className="block text-brand-blue">crecer tu negocio</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-ink/65 sm:text-lg">
                Te acompañamos en cada decisión: Asesoría contable, tributaria y estratégica,
                finanzas y gestión de personas.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-lime py-2 pr-2 pl-6 text-sm font-semibold text-brand-ink transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(37,41,67,0.6)]"
                >
                  Agenda una reunión
                  <span className="grid size-9 place-items-center rounded-full bg-brand-ink">
                    <ArrowUpRight className="size-4 text-brand-lime transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-brand-ink transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue hover:text-brand-blue"
                >
                  Conversemos por WhatsApp
                </a>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-[1.55fr_0.45fr]">
              <Reveal delay={120}>
                <div className="tab-corner relative overflow-hidden bg-brand-soft">
                  <img
                    src={heroImg.url}
                    alt="Reunión de asesoría entre el equipo de EGestión y un cliente"
                    width={1600}
                    height={1104}
                    className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                  />
                </div>
              </Reveal>
              <Reveal delay={220} className="grid h-full gap-4">
                <div className="flex flex-col justify-between rounded-[32px] bg-brand-blue p-7 text-white">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-lime">
                    <ShieldCheck className="size-5 text-brand-blue" />
                  </span>
                  <p className="mt-8 font-display text-2xl leading-tight font-bold">
                    Tu empresa en buenas manos.
                  </p>
                </div>
                <img
                  src={taxImg.url}
                  alt="Revisión de documentos tributarios y financieros"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="hidden min-h-0 w-full flex-1 rounded-[32px] object-cover lg:block"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <Eyebrow>Quiénes somos</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-10">
            <Reveal>
              <h2 className="text-3xl leading-[1.12] font-bold text-brand-ink sm:text-4xl lg:text-[3.25rem]">
                <span className="text-brand-ink">Somos un equipo de expertos en</span>
                <span className="block text-brand-blue">asesoría contable, tributaria</span>
                <span className="block text-brand-blue">y estratégica</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="my-4 max-w-3xl text-base leading-relaxed text-brand-ink/70">
                Te explicamos qué significa cada número y qué hacer con él.{" "}
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <Reveal>
              <div className="group relative h-full max-h-[420px] w-full overflow-hidden rounded-[32px]">
                <img
                  src={reneImg.url}
                  alt="René Ponce, fundador de EGestión"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
                />
                {/* Overlay desktop: aparece al hacer hover */}
                <div className="absolute inset-x-0 bottom-0 hidden h-[55%] translate-y-full flex-col justify-end bg-gradient-to-t from-[#252943]/85 to-transparent p-6 transition-transform duration-300 ease-out group-hover:translate-y-0 lg:flex">
                  <h3 className="text-lg font-bold text-white">René Ponce</h3>
                  <p className="text-sm font-semibold text-brand-lime">Fundador de EGestión</p>
                </div>
                {/* Overlay móvil: siempre visible compacto */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-[#252943]/85 to-transparent p-4 lg:hidden">
                  <h3 className="text-base font-bold text-white">René Ponce</h3>
                  <p className="text-xs font-semibold text-brand-lime">Fundador de EGestión</p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((s, i) => (
                <Reveal
                  key={s.l}
                  delay={i * 110}
                  className={i === 0 ? "sm:col-span-2" : ""}
                >
                  <div
                    className={`lift h-full rounded-[32px] p-7 ${
                      i === 0
                        ? "bg-brand-lime text-brand-ink"
                        : i === 1
                          ? "bg-brand-soft text-brand-ink"
                          : "bg-brand-blue text-white"
                    }`}
                  >
                    <Counter
                      value={s.n}
                      className="font-display text-4xl font-bold lg:text-5xl"
                    />
                    <p className="mt-3 text-sm font-semibold">{s.l}</p>
                    <p
                      className={`mt-1.5 text-[13px] leading-relaxed ${
                        i === 2 ? "text-white/70" : "text-brand-ink/60"
                      }`}
                    >
                      {s.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="px-3 sm:px-5">
          <div className="mx-auto max-w-[1400px] rounded-[40px] bg-brand-ink px-5 py-20 text-white sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <Eyebrow tone="light">Servicios</Eyebrow>
              </Reveal>
              <div className="mt-8 flex flex-col gap-6">
                <Reveal>
                  <h2 className="text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-[3.75rem]">
                    Tu empresa en buenas manos
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="max-w-3xl text-base leading-relaxed whitespace-nowrap text-white/60">
                    Complementamos nuestra especialidad en asesoría tributaria, con la contabilidad y la gestión de personas.
                  </p>
                </Reveal>
              </div>

              <div className="mt-14 grid gap-4 lg:grid-cols-3">
                {SERVICIOS.map((s, i) => (
                  <Reveal key={s.title} delay={i * 120}>
                    <article
                      className={`lift group flex h-full flex-col rounded-[32px] p-7 md:p-9 ${CARD_TONES[s.tone]}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className={`grid size-11 place-items-center rounded-2xl ${
                            s.tone === "blue"
                              ? "bg-brand-lime text-brand-blue"
                              : s.tone === "lime"
                                ? "bg-brand-ink text-brand-lime"
                                : "bg-brand-blue text-brand-lime"
                          }`}
                        >
                          <s.icon className="size-5" />
                        </span>
                        <ArrowBadge tone={s.tone} />
                      </div>
                      {s.tone === "blue" && (
                        <span className="mt-6 inline-flex w-fit rounded-full bg-brand-lime px-3.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-brand-ink uppercase">
                          Nuestra especialidad
                        </span>
                      )}
                      <h3 className="mt-5 text-xl leading-snug font-bold sm:text-2xl">{s.title}</h3>
                      <p
                        className={`mt-4 flex-1 text-sm leading-relaxed ${
                          s.tone === "blue" ? "text-white/80" : "text-brand-ink/70"
                        }`}
                      >
                        {s.text}
                      </p>
                      <div className="mt-8 flex items-center justify-between">
                        <a
                          href="#contacto"
                          className={`inline-flex items-center gap-2 text-sm font-semibold ${
                            s.tone === "blue" ? "text-brand-lime" : "text-brand-blue"
                          }`}
                        >
                          Quiero saber más
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <span
                          className={`font-display text-sm font-semibold ${
                            s.tone === "blue" ? "text-white/45" : "text-brand-ink/35"
                          }`}
                        >
                          {s.n}
                        </span>
                      </div>
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
              Entendemos tu negocio&nbsp;
              <br />
              y&nbsp;te acompañamos&nbsp;
              <br />
              en cada decisión
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <div className={`lift h-full rounded-[32px] p-7 ${CARD_TONES[p.tone]}`}>
                  <span
                    className={`grid size-12 place-items-center rounded-2xl ${
                      p.tone === "blue"
                        ? "bg-brand-lime text-brand-blue"
                        : p.tone === "lime"
                          ? "bg-brand-ink text-brand-lime"
                          : "bg-brand-blue text-brand-lime"
                    }`}
                  >
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-lg leading-snug font-bold">{p.title}</h3>
                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      p.tone === "blue" ? "text-white/75" : "text-brand-ink/65"
                    }`}
                  >
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* COWORK */}
        <section id="cowork" className="px-3 sm:px-5">
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[40px] bg-brand-lime">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2">
              <Reveal>
                <span className="inline-flex items-center gap-2.5 rounded-full bg-brand-ink/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                  <span className="size-2 rounded-full bg-brand-blue" />
                  Un espacio de EGestión
                </span>
                <h2 className="mt-6 text-3xl leading-[1.1] font-bold text-brand-blue sm:text-4xl lg:text-[3rem]">
                  Cowork Andino
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
                  Cowork Andino es una extensión de EGestión que le entrega a las personas un
                  espacio para trabajar. Uno de los primeros coworks de la ciudad, hecho por alguien
                  de la ciudad.
                </p>
                <a
                  href="#contacto"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand-blue py-2 pr-2 pl-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(37,41,67,0.7)]"
                >
                  Conoce el espacio
                  <span className="grid size-9 place-items-center rounded-full bg-brand-lime">
                    <ArrowUpRight className="size-4 text-brand-blue transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </a>
              </Reveal>
              <Reveal delay={140}>
                <div className="tab-corner overflow-hidden bg-white/40">
                  <img
                    src={coworkImg.url}
                    alt="Interior del Cowork Andino en Los Andes"
                    width={1408}
                    height={1056}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="flex h-full flex-col rounded-[32px] border border-brand-soft bg-white p-7 shadow-[0_28px_60px_-45px_rgba(37,41,67,0.6)] sm:p-10">
                <h2 className="text-3xl leading-tight font-bold text-brand-ink sm:text-4xl">
                  ¿Nos tomamos un café?
                </h2>
                <p className="mt-4 text-sm text-brand-ink/65">
                  Escríbenos directo y coordinamos.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WA_WITH_MESSAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-brand-lime px-6 py-4 text-sm font-semibold text-brand-ink transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(37,41,67,0.6)]"
                  >
                    <WhatsAppIcon className="size-5" />
                    Conversemos por WhatsApp
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=Hola%20Ren%C3%A9%2C%20me%20gustar%C3%ADa%20que%20nos%20tom%C3%A1ramos%20un%20caf%C3%A9%20para%20conversar%20de%20mi%20negocio`}
                    className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(37,41,67,0.7)]"
                  >
                    <Mail className="size-5" />
                    Escríbenos un correo
                  </a>
                </div>
                <div className="relative mt-8 min-h-[180px] flex-1 overflow-hidden rounded-[32px]">
                  <img
                    src={peopleCafeImg.url}
                    alt="Reunión en un café para conversar sobre tu negocio"
                    width={1600}
                    height={1067}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-between rounded-[32px] bg-brand-blue p-7 text-white sm:p-10">
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
                          +56 9 6206 0320
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
                        <span className="text-white/75">Los Andes, Región de Valparaíso, Chile</span>
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

        {/* VIDEO LOGO */}
        <section className="bg-white px-5 pb-20">
          <Reveal className="mx-auto max-w-6xl">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-[32px]">
              <video
                src={logoVideo.url}
                autoPlay
                loop
                muted
                playsInline
                aria-label="Logo animado de EGestión"
                width={720}
                height={720}
                className="aspect-square w-full object-cover"

              />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto max-w-[1400px] rounded-[40px] bg-brand-ink px-5 py-14 text-white sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <img
                  src={egLime.url}
                  alt="EGestión"
                  width={797}
                  height={607}
                  loading="lazy"
                  className="h-14 w-auto object-contain object-left"
                />
                <p className="mt-4 text-sm text-white/60">
                  Asesoría contable, tributaria y estratégica.
                </p>
              </div>
              <nav aria-label="Pie de página">
                <h2 className="text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase">
                  Navegación
                </h2>
                <ul className="mt-5 space-y-2.5 text-sm text-white/75">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} className="transition-colors hover:text-brand-lime">
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
                    <a href={WHATSAPP} className="transition-colors hover:text-brand-lime">
                      WhatsApp: +56 9 6206 0320
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-brand-lime">
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
