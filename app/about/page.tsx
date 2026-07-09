import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { Contours } from "@/components/Contours";
import { bio, about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Andres",
  description:
    "Andres Jackson — remedial massage therapist in Mornington, with a background in physiotherapy and high-performance sport. His story, approach, and philosophy.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Andres | ${site.businessName}`,
    description:
      "From competitive tennis and physiotherapy in Chile to remedial therapy on the Mornington Peninsula.",
    url: `${site.url}/about`,
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Intro band */}
      <section className="relative overflow-hidden bg-brand text-cream">
        <Contours
          className="pointer-events-none absolute inset-0 h-full w-full text-sage"
          opacity={0.16}
        />
        <Container className="relative grid items-center gap-12 pb-20 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-44">
          <div>
            <p className="eyebrow text-sage-light">{bio.eyebrow}</p>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {bio.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage-light">
              {bio.lead}
            </p>
            <p className="mt-8 font-display text-lg text-cream">
              {site.therapistName}
            </p>
            <p className="text-sm text-sage-light">{site.credential}</p>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-xl2)] border border-cream/15 shadow-2xl">
              <Image
                src="/images/andres-portrait.jpg"
                alt={`${site.therapistName}, ${site.credential}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </Container>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      </section>

      {/* Narrative */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl space-y-12">
            {bio.sections.map((sec) => (
              <Reveal key={sec.heading}>
                <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {sec.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Supporting image */}
      <section className="pb-4">
        <Container>
          <Reveal>
            <div className="relative mx-auto aspect-[3/2] w-full max-w-3xl overflow-hidden rounded-[var(--radius-xl2)] border border-line shadow-sm">
              <Image
                src="/images/chiro-collective.jpg"
                alt="Andres at The Chiro Collective, Mornington Peninsula"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Credentials + quote */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow text-honey-dark">Qualifications</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.credentials.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <svg className="mt-0.5 shrink-0 text-honey" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
            <blockquote className="mt-12 border-l-2 border-honey pl-5 font-display text-xl leading-relaxed text-ink italic">
              &ldquo;{about.quote}&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand py-20 text-cream sm:py-24">
        <Contours
          className="pointer-events-none absolute inset-0 h-full w-full text-sage"
          opacity={0.14}
        />
        <Container className="relative text-center">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sage-light">
            Book a remedial treatment, or get in touch if you&rsquo;re not sure
            it&rsquo;s the right fit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#book" variant="primary">
              Book an appointment
            </Button>
            <Button href="/" variant="outline" className="text-cream">
              Back to home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
