import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Contours } from "@/components/Contours";
import { hero, site } from "@/lib/content";

/**
 * Hero — the thesis of the page. Dark green field, the contour signature
 * drifting behind, a confident serif headline, a real treatment photo, and
 * the booking action front and centre.
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
            <span className="text-[#9cc3aa]">{hero.headlineAccent}</span>
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
                <span className="h-1.5 w-1.5 rounded-full bg-[#9cc3aa]" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/*
          Collage: the main service (hands-on massage) large, with two
          techniques (dry needling, cupping) stacked beside it — so visitors
          read the offering at a glance. Same grid scales on mobile + desktop.
        */}
        <div className="relative">
          <div className="grid aspect-[4/5] grid-cols-3 grid-rows-2 gap-3">
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-[var(--radius-xl2)] border border-cream/15 shadow-2xl">
              <Image
                src="/images/hero-massage.jpg"
                alt="Andres performing hands-on remedial massage"
                fill
                sizes="(max-width: 1024px) 66vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-cream/15 shadow-lg">
              <Image
                src="/images/hero-needling.jpg"
                alt="Dry needling during a remedial treatment"
                fill
                sizes="(max-width: 1024px) 33vw, 15vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-cream/15 shadow-lg">
              <Image
                src="/images/hero-cupping.jpg"
                alt="Cupping during a remedial treatment"
                fill
                sizes="(max-width: 1024px) 33vw, 15vw"
                className="object-cover"
              />
            </div>
          </div>
          {/* Floating proof chip — verified from his Google listing. */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-cream/15 bg-brand-dark/80 px-5 py-4 backdrop-blur-sm sm:block">
            <p className="font-display text-2xl text-[#9cc3aa]">5.0 ★</p>
            <p className="text-xs text-sage-light">Google rated</p>
          </div>
        </div>
      </Container>

      {/* Warm divider into the limestone body. */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <p className="sr-only">{site.businessName}, remedial massage in Mornington.</p>
    </section>
  );
}
