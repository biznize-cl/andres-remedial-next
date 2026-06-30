import type { Metadata } from "next";
import { Spectral, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/next";

// Display: Spectral — a calm, low-contrast literary serif (deliberately not
// the Playfair/Fraunces default). Body: Hanken Grotesk — a warm humanist sans.
const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.businessName} | ${site.tagline}`;
const description =
  "Treatment-focused remedial massage in Mornington on the Mornington Peninsula. Ease pain, recover from injury and move with more freedom. Book online with Andres Remedial.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.businessName}`,
  },
  description,
  keywords: [
    "remedial massage Mornington",
    "massage therapist Mornington",
    "remedial massage Mornington Peninsula",
    "deep tissue massage Mornington",
    "sports massage Mornington",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.businessName,
    title,
    description,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      // Browser extensions (e.g. Scribe) and theme scripts commonly inject
      // attributes onto <html> before React hydrates. This suppresses the
      // resulting hydration warning for THIS element's own attributes only —
      // it does not silence mismatches in the rest of the tree.
      suppressHydrationWarning
      className={`${spectral.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-limestone">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
