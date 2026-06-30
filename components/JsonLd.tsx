import { site, services } from "@/lib/content";

/**
 * JsonLd — injects LocalBusiness structured data.
 *
 * This is what lets Google show the clinic as a rich local result (name,
 * address, hours, map pin, price range). For a single-location service
 * business, it's one of the highest-leverage SEO additions on the page.
 *
 * Schema hours strings ("Mon – Thu") are human-friendly; the machine-readable
 * openingHoursSpecification below is derived separately for accuracy.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.businessName,
    description:
      "Remedial massage therapy in Mornington on the Mornington Peninsula — treatment-focused massage for pain, injury recovery and tension.",
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    image: `${site.url}/og.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: [
      "Mornington",
      "Mount Martha",
      "Mount Eliza",
      "Safety Beach",
      "Dromana",
    ].map((name) => ({ "@type": "City", name })),
    // Keep in sync with `site.hours` in lib/content.ts.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:20",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  };

  // Escape "<" so a stray "</script>" in any content value can't break out of
  // the inline script tag. Keeps the output valid JSON either way.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
