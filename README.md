# Bayside Remedial Therapy — marketing site

A single-page marketing website for an independent remedial massage therapist in
**Mount Martha, VIC** (Mornington Peninsula). Built with **Next.js (App Router)
+ Tailwind CSS v4**, designed for local SEO and easy editing.

> All copy, services, pricing, and contact details are **placeholders** — edit
> them in one file: [`lib/content.ts`](lib/content.ts).

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing the site (no coding needed)

Everything the owner changes lives in **`lib/content.ts`**:

- Business & therapist name, credentials, tagline
- Phone, email, address, geo coordinates, ABN, socials
- Opening hours (also feeds Google's structured data)
- Services (name, description, duration, price)
- About bio + credentials, health-fund rebate points
- Testimonials and FAQs

Each placeholder is marked `PLACEHOLDER`. The clinic address and hours also
drive the `LocalBusiness` structured data in
[`components/JsonLd.tsx`](components/JsonLd.tsx) automatically.

## Connecting online booking

The booking section shows a "call to book" card until you connect a provider.

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_BOOKING_URL` to your booking embed URL (Cliniko, Halaxy,
   Calendly, etc.).
3. Restart `npm run dev`. The section now renders the live calendar.

Optionally set `NEXT_PUBLIC_MAP_QUERY` to fine-tune the contact map pin.

## Google Reviews

The reviews section shows **live Google reviews** when configured, and falls
back to the curated testimonials in `lib/content.ts` until then — so it works
with zero setup.

To go live:

1. In Google Cloud, create an API key and enable **Places API (New)**.
   Restrict the key (HTTP referrers or IP) so it can't be abused.
2. Find your **Place ID** with Google's
   [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
3. Set `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` in `.env.local` (and in
   your Vercel project's Environment Variables). Restart the dev server.

Notes:

- These are **server-only** secrets (no `NEXT_PUBLIC_` prefix) — the key never
  reaches the browser.
- Google's API returns **at most 5 reviews** and chooses which; this is a hard
  limit, not a bug. For more, a paid widget service would be needed.
- Reviews are fetched at most once a day (cached), keeping the site fast and the
  API usage within Google's free monthly credit for a single business.

## Replacing the imagery

- The hero and about sections show **photo placeholders**. Drop real photos in
  `public/` and swap the placeholder blocks in
  [`components/sections/Hero.tsx`](components/sections/Hero.tsx) and
  [`components/sections/About.tsx`](components/sections/About.tsx) for
  `next/image`.
- `public/og.svg` is the social-share preview image. For best compatibility
  across Facebook/LinkedIn, export a **1200×630 PNG or JPG** and update the
  `images` paths in [`app/layout.tsx`](app/layout.tsx).

## Design system

- **Palette:** deep eucalyptus-teal brand, warm limestone, sage, honey accent.
- **Type:** Spectral (display) + Hanken Grotesk (body), via `next/font`.
- **Signature:** topographic contour lines ([`components/Contours.tsx`](components/Contours.tsx))
  — the Peninsula's coastline and the body's layered fascia in one motif.
- Tokens live in [`app/globals.css`](app/globals.css) under `@theme`.

## Deploy

Push to a Git repo and import on [Vercel](https://vercel.com) (zero config), or:

```bash
npx vercel
```

Set `NEXT_PUBLIC_BOOKING_URL` in the Vercel project's Environment Variables, and
update `site.url` in `lib/content.ts` to your real domain.
