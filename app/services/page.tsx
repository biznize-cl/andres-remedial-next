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

/** Line icon per technique, keyed by the `icon` field in content.ts. */
function TechIcon({ name }: { name: string }) {
  const p = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "hands":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...p}>
          <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11m0-6a1.5 1.5 0 0 1 3 0v6m0-4.5a1.5 1.5 0 0 1 3 0V15a5 5 0 0 1-5 5h-1.6a5 5 0 0 1-3.9-1.9l-2.2-2.8a1.6 1.6 0 0 1 2.4-2.1L9 13" />
        </svg>
      );
    case "target":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...p}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "layers":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...p}>
          <path d="M3 8c3-2 6-2 9 0s6 2 9 0M3 13c3-2 6-2 9 0s6 2 9 0M3 18c3-2 6-2 9 0s6 2 9 0" />
        </svg>
      );
    case "needle":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...p}>
          <path d="M4 20L15 9" />
          <path d="M14 6l4 4-1.6 1.6-4-4z" />
        </svg>
      );
    case "movement":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...p}>
          <path d="M3 12h4l2-5 4 10 2-5h6" />
        </svg>
      );
    default:
      return null;
  }
}

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
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.techniques.items.map((item, i) => (
              <Reveal
                key={item.name}
                delay={(i % 3) * 80}
                className="rounded-2xl border border-line bg-limestone p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-honey">
                  <TechIcon name={item.icon} />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </Reveal>
            ))}
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
