import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { about, site } from "@/lib/content";

/**
 * About — builds the trust the booking depends on: a real person, a clear
 * method, verifiable credentials, and Andres's own philosophy.
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Portrait */}
        <Reveal className="order-last lg:order-first lg:sticky lg:top-24">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-xl2)] border border-line shadow-sm">
            <Image
              src="/images/andres-portrait.jpg"
              alt={`${site.therapistName}, ${site.credential}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Experience highlight */}
          <p className="mt-6 rounded-2xl border border-line bg-limestone/60 p-5 text-[0.95rem] leading-relaxed text-ink-soft">
            {about.experience}
          </p>

          <p className="mt-8 font-display text-lg text-ink">
            {site.therapistName}
          </p>
          <p className="text-sm text-ink-soft">{site.credential}</p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {about.credentials.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <svg className="mt-0.5 shrink-0 text-honey" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c}
              </li>
            ))}
          </ul>

          {/* Philosophy pull-quote */}
          <blockquote className="mt-9 border-l-2 border-honey pl-5 font-display text-xl leading-relaxed text-ink italic">
            &ldquo;{about.quote}&rdquo;
          </blockquote>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-honey-dark transition-colors hover:text-honey"
          >
            Read my full story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
