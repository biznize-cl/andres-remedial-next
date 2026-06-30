import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Contours } from "@/components/Contours";
import { Reveal } from "@/components/Reveal";
import { rebates } from "@/lib/content";

/**
 * Rebates — rendered as a dark teal band so it stands apart from the light
 * body. Health-fund rebates are a major booking trigger for AU clients, so
 * this section earns the visual emphasis.
 */
export function Rebates() {
  return (
    <section
      id="rebates"
      className="relative scroll-mt-20 overflow-hidden bg-brand py-20 text-cream sm:py-28"
    >
      <Contours
        className="pointer-events-none absolute inset-0 h-full w-full text-sage"
        opacity={0.14}
      />
      <Container className="relative">
        <SectionHeading
          eyebrow={rebates.eyebrow}
          heading={rebates.heading}
          intro={rebates.body}
          tone="light"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {rebates.points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 80}
              className="rounded-2xl border border-cream/12 bg-brand-dark/40 p-7 backdrop-blur-sm"
            >
              <h3 className="font-display text-xl text-cream">{point.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-sage-light">
                {point.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
