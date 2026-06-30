import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contact, site, faqs } from "@/lib/content";

/**
 * Contact — location, hours, direct contact, an embedded map, and FAQs.
 * The map uses Google's keyless embed endpoint driven by NEXT_PUBLIC_MAP_QUERY
 * (falls back to the clinic address from content).
 */
export function Contact() {
  const mapQuery =
    process.env.NEXT_PUBLIC_MAP_QUERY ??
    `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          intro={contact.body}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Details + hours */}
          <div className="space-y-8">
            <div>
              <h3 className="eyebrow text-honey-dark">Where</h3>
              <address className="mt-3 not-italic text-lg leading-relaxed text-ink">
                {site.address.street}
                <br />
                {site.address.suburb} {site.address.state} {site.address.postcode}
              </address>
            </div>

            <div>
              <h3 className="eyebrow text-honey-dark">Get in touch</h3>
              <div className="mt-3 flex flex-col gap-1 text-lg text-ink">
                <a className="hover:text-honey" href={site.phoneHref}>
                  {site.phone}
                </a>
                <a className="hover:text-honey" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>

            <div>
              <h3 className="eyebrow text-honey-dark">Opening hours</h3>
              <dl className="mt-3 divide-y divide-line border-y border-line">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-2.5 text-[0.95rem]">
                    <dt className="text-ink-soft">{h.day}</dt>
                    <dd className="font-medium text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Button href="#book" variant="primary">
              Book an appointment
            </Button>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[var(--radius-xl2)] border border-line shadow-sm">
            <iframe
              title={`Map to ${site.businessName}, ${site.address.suburb}`}
              src={mapSrc}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* FAQs — native <details> for accessible, JS-free accordions. */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="text-center font-display text-2xl text-ink sm:text-3xl">
            Good to know
          </h3>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-line bg-cream px-6 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                  {faq.question}
                  <svg
                    className="shrink-0 text-honey transition-transform duration-200 group-open:rotate-45"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
