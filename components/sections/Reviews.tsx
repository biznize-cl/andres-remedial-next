import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { StarRating } from "@/components/StarRating";
import { getGoogleReviews } from "@/lib/google-reviews";
import { testimonials } from "@/lib/content";

type Card = {
  key: string;
  author: string;
  detail: string;
  text: string;
  rating: number;
};

/**
 * Reviews — shows live Google reviews when GOOGLE_PLACES_API_KEY +
 * GOOGLE_PLACE_ID are set, otherwise the curated testimonials from content.ts.
 * Async server component: the Google fetch happens at build/revalidate time,
 * never in the browser.
 */
export async function Reviews() {
  const google = await getGoogleReviews();

  const cards: Card[] = google
    ? google.reviews.map((r) => ({
        key: r.id,
        author: r.author,
        detail: r.relativeTime,
        text: r.text,
        rating: r.rating,
      }))
    : testimonials.map((t, i) => ({
        key: `${t.author}-${i}`,
        author: t.author,
        detail: t.detail,
        text: t.quote,
        rating: 5,
      }));

  const heading = google ? "What my clients say." : "What my clients say.";

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionHeading
            eyebrow={google ? "Google reviews" : "In their words"}
            heading={heading}
            align="center"
          />

          {google ? (
            // Aggregate rating line — and the Google attribution required when
            // displaying Places API content.
            <a
              href={google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-line bg-cream px-5 py-2.5 text-sm text-ink transition-shadow hover:shadow-sm"
            >
              <span className="font-display text-xl text-ink">
                {google.rating.toFixed(1)}
              </span>
              <StarRating rating={google.rating} className="text-honey" />
              <span className="text-ink-soft">
                {google.total.toLocaleString()} Google reviews
              </span>
            </a>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.key}
              delay={i * 90}
              className="flex h-full flex-col rounded-2xl border border-line bg-cream p-7"
            >
              <StarRating rating={card.rating} className="text-honey" />
              <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink">
                {card.text}
              </blockquote>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="font-medium text-ink">{card.author}</p>
                <p className="text-sm text-ink-soft">{card.detail}</p>
              </footer>
            </Reveal>
          ))}
        </div>

        {google ? (
          <p className="mt-10 text-center text-sm text-ink-soft">
            Reviews from{" "}
            <a
              href={google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-honey-dark underline-offset-2 hover:underline"
            >
              Google
            </a>
            . Showing a selection of my most recent.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
