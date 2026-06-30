/**
 * Google Reviews — server-side data layer.
 *
 * Fetches up to 5 reviews via the Places API (New). Runs only on the server
 * (the API key is read from a non-public env var), so the key is never shipped
 * to the browser. Returns `null` on any problem — missing config, network
 * error, bad response — which signals the UI to fall back to curated
 * testimonials. The page therefore works with or without Google configured.
 *
 * To go live, set in `.env.local` (and your Vercel project):
 *   GOOGLE_PLACES_API_KEY=...   (Places API enabled, key restricted)
 *   GOOGLE_PLACE_ID=...         (find via Google's Place ID Finder)
 */

export type NormalizedReview = {
  id: string;
  author: string;
  rating: number;
  text: string;
  /** e.g. "2 weeks ago" */
  relativeTime: string;
};

export type GoogleReviewsData = {
  rating: number;
  total: number;
  reviewsUrl: string;
  reviews: NormalizedReview[];
};

// Shape of the bits of the Places API (New) response we consume.
type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    name?: string;
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: { displayName?: string };
  }>;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Not configured yet → caller falls back to curated testimonials.
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          // Field mask keeps the request on the cheapest SKU that includes reviews.
          "X-Goog-FieldMask":
            "rating,userRatingCount,googleMapsUri,reviews",
        },
        // Call Google at most once a day; serve cached/static the rest of the time.
        next: { revalidate: 86400 },
      },
    );

    if (!res.ok) return null;

    const data = (await res.json()) as PlacesApiResponse;
    const raw = data.reviews ?? [];

    const reviews: NormalizedReview[] = raw
      .map((r, i) => ({
        id: r.name ?? `review-${i}`,
        author: r.authorAttribution?.displayName ?? "Google reviewer",
        rating: r.rating ?? 0,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
      }))
      // Keep only substantive, positive-leaning reviews for the marketing page.
      .filter((r) => r.text.length > 0 && r.rating >= 4);

    if (reviews.length === 0) return null;

    return {
      rating: data.rating ?? 0,
      total: data.userRatingCount ?? reviews.length,
      reviewsUrl: data.googleMapsUri ?? "https://www.google.com/maps",
      reviews,
    };
  } catch {
    // Network/parse failure → fall back gracefully.
    return null;
  }
}
