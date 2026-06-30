import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Contours } from "@/components/Contours";
import { hero, site } from "@/lib/content";

/**
 * Hero — the thesis of the page. Dark eucalyptus-teal field (deliberately not
 * the cream-hero default), the contour signature drifting behind, a confident
 * serif headline, and the booking action front and centre.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand text-cream"
    >
      {/* Signature contour texture, drifting slowly behind the content. */}
      <Contours
        className="contour-drift pointer-events-none absolute inset-0 h-full w-full text-sage"
        opacity={0.18}
      />
      {/* Soft glow to lift the headline off the texture. */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-soft/40 blur-3xl" />

      <Container className="relative grid items-center gap-12 pb-20 pt-32 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-44">
        <div>
          <p className="eyebrow text-sage-light">{hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {hero.headlineLead}{" "}
            <span className="text-honey">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sage-light">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#book" variant="primary">
              {hero.primaryCta}
            </Button>
            <Button href="#services" variant="outline" className="text-cream">
              {hero.secondaryCta}
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-sage-light">
            {hero.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-honey" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* Image placeholder — owner drops a calming treatment-room photo here. */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl2)] border border-cream/15 bg-brand-soft/40 shadow-2xl">
            <Contours className="absolute inset-0 h-full w-full text-sage-light" opacity={0.25} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-sage-light">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 16l5-5 4 4 3-3 4 4M4 19h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em]">Photo placeholder</span>
            </div>
          </div>
          {/* Floating proof chip — verified from his Google listing. */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-cream/15 bg-brand-dark/80 px-5 py-4 backdrop-blur-sm sm:block">
            <p className="font-display text-2xl text-honey">5.0 ★</p>
            <p className="text-xs text-sage-light">Google rated</p>
          </div>
        </div>
      </Container>

      {/* Warm divider into the limestone body. */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <p className="sr-only">{site.businessName} — remedial massage, Mount Martha.</p>
    </section>
  );
}
