import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

/**
 * Services — a card grid of treatments. No numbered markers: these are
 * parallel options, not a sequence, so numbering would imply false order.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Treatments"
          heading="Targeted, hands-on remedial work."
          intro="Every session is assessment-led and tailored to you. Indicative pricing below — your private health rebate brings the out-of-pocket cost down."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.name}
              delay={(i % 3) * 80}
              className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-7 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-medium text-ink">
                  {service.name}
                </h3>
                <span className="mt-1 shrink-0 rounded-full bg-sage-light/50 px-3 py-1 text-xs font-semibold text-brand-soft">
                  {service.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm text-ink-soft">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {service.duration}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
