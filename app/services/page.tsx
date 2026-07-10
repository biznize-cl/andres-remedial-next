import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { Contours } from "@/components/Contours";
import { BookingEmbed } from "@/components/BookingEmbed";
import { serviceDetail, site } from "@/lib/content";

const s = serviceDetail;

// Bento layout for the six technique tiles (index-based, matches the order in
// serviceDetail.techniques.items). The feature is a 2x2; long-named cards like
// IASTM sit in wide cells; the two short-named cards are small squares.
// Same spans work on the 2-col mobile grid and the 4-col desktop grid.
const TECH_BENTO = [
  { span: "col-span-2 row-span-2", full: true }, // Remedial & Deep Tissue (feature)
  { span: "col-span-1", full: false }, // Dry Needling (small)
  { span: "col-span-1", full: false }, // Fire Cupping (small)
  { span: "col-span-2", full: true }, // IASTM (wide)
  { span: "col-span-2", full: true }, // Joint Mobilisation (wide)
  { span: "col-span-2", full: true }, // Movement & Rehab (wide)
];

export const metadata: Metadata = {
  title: "Remedial Massage Treatment",
  description:
    "A full remedial massage treatment in Mornington. Assessment-led, hands-on care using remedial and deep-tissue massage, dry needling, and movement guidance. $147 for 60 minutes.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Remedial Massage Treatment | ${site.businessName}`,
    description:
      "Assessment-led remedial massage in Mornington. Book online with Andres Remedial.",
    url: `${site.url}/services`,
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* 1 — Intro band */}
      <section className="relative overflow-hidden bg-brand text-cream">
        <Contours
          className="pointer-events-none absolute inset-0 h-full w-full text-sage"
          opacity={0.16}
        />
        <Container className="relative grid items-center gap-12 pb-20 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-44">
          <div>
            <p className="eyebrow text-sage-light">{s.hero.eyebrow}</p>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {s.hero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage-light">
              {s.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-cream/20 px-4 py-2 text-sm font-semibold">
                {s.hero.price} · {s.hero.duration}
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#book" variant="primary">
                Book an appointment
              </Button>
              <Button href={site.phoneHref} variant="outline" className="text-cream">
                Call {site.phone}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl2)] border border-cream/15 shadow-2xl">
              <Image
                src="/images/treatment-needling.jpg"
                alt="Andres applying dry needling during a remedial treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      </section>

      {/* 2 — What to expect (numbered process) */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow={s.process.eyebrow} heading={s.process.heading} />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {s.process.steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 90}
                className="rounded-2xl border border-line bg-cream p-7"
              >
                <span className="font-display text-3xl text-honey">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* 3 — Techniques */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={s.techniques.eyebrow}
            heading={s.techniques.heading}
            intro={s.techniques.intro}
          />
          <div className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:auto-rows-[12rem] md:grid-cols-4">
            {s.techniques.items.map((item, i) => {
              const b = TECH_BENTO[i] ?? { span: "", full: true };
              return (
                <Reveal
                  key={item.name}
                  delay={(i % 3) * 70}
                  className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-cream/10 shadow-sm ${b.span}`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/55 to-brand-dark/5" />
                  <div className="relative p-5 sm:p-6 text-cream">
                    <h3
                      className={`font-display font-medium ${
                        i === 0 ? "text-xl sm:text-2xl" : "text-lg"
                      }`}
                    >
                      {item.name}
                    </h3>
                    {b.full ? (
                      <p className="mt-1.5 text-sm leading-relaxed text-sage-light">
                        {item.text}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4 — What it helps with */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={s.helpsWith.eyebrow}
            heading={s.helpsWith.heading}
            intro={s.helpsWith.intro}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {s.helpsWith.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 80}
                className="flex gap-4 rounded-2xl border border-line bg-cream p-7"
              >
                <svg className="mt-0.5 shrink-0 text-honey" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-ink-soft">{s.helpsWith.note}</p>
        </Container>
      </section>

      {/* 5 — Pricing band with the clinic photo */}
      <section className="relative overflow-hidden bg-brand text-cream">
        <Contours
          className="pointer-events-none absolute inset-0 h-full w-full text-sage"
          opacity={0.14}
        />
        <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={s.pricing.eyebrow}
              heading={s.pricing.heading}
              intro={s.pricing.body}
              tone="light"
            />
            <div className="mt-8">
              <Button href="#book" variant="primary">
                Book your session
              </Button>
            </div>
          </div>
          <Reveal>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[var(--radius-xl2)] border border-cream/15 shadow-2xl">
              <Image
                src="/images/chiro-collective.jpg"
                alt="Andres at The Chiro Collective, Mornington Peninsula"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6 — Booking */}
      <section id="book" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Book"
            heading="Ready when you are."
            intro="Choose a time that suits you. New clients welcome, no referral needed."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <BookingEmbed />
          </div>
        </Container>
      </section>
    </>
  );
}
