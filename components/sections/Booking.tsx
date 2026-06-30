import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingEmbed } from "@/components/BookingEmbed";

/**
 * Booking — the conversion section every CTA on the page points to (#book).
 */
export function Booking() {
  return (
    <section id="book" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Book"
          heading="Ready when you are."
          intro="Choose a time that suits you. New clients welcome — no referral needed."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <BookingEmbed />
        </div>
      </Container>
    </section>
  );
}
