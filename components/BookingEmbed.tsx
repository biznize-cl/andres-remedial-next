import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

/**
 * BookingEmbed — the single integration point for online bookings.
 *
 * Set NEXT_PUBLIC_BOOKING_URL (Cliniko / Halaxy / Calendly embed URL) and this
 * renders the live calendar. Until then it shows a tidy "call to book"
 * fallback, so the page is fully functional with zero configuration.
 *
 * Keeping all booking logic here means connecting a real provider is a
 * one-line environment change — no markup edits anywhere else.
 */
export function BookingEmbed() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  if (bookingUrl) {
    return (
      <div className="overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-cream shadow-sm">
        <iframe
          src={bookingUrl}
          title={`Book an appointment with ${site.businessName}`}
          className="h-[760px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback — no booking provider connected yet.
  return (
    <div className="rounded-[var(--radius-xl2)] border border-line bg-cream p-8 text-center shadow-sm sm:p-12">
      <p className="eyebrow text-honey-dark">Bookings</p>
      <p className="mt-4 font-display text-2xl text-ink sm:text-3xl">
        Call or message to book your session.
      </p>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">
        Online booking is on its way. For now, the quickest way to lock in a
        time is a quick call or text — you&rsquo;ll usually get a same-day reply.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={site.phoneHref} variant="primary">
          Call {site.phone}
        </Button>
        <Button
          href={`mailto:${site.email}`}
          variant="outline"
          className="text-ink"
        >
          Email the clinic
        </Button>
      </div>
      {/*
        TODO (owner): paste your booking embed URL into NEXT_PUBLIC_BOOKING_URL
        in .env.local to replace this card with a live booking calendar.
      */}
    </div>
  );
}
