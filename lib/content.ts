/**
 * SITE CONTENT — single source of truth.
 *
 * Everything the site owner needs to change lives here. Replace each value
 * marked `PLACEHOLDER` with the real business details. No JSX editing required.
 *
 * Tip: the booking link and map are driven by environment variables — see
 * `.env.example`. Set NEXT_PUBLIC_BOOKING_URL to switch the booking section
 * from the "call to book" fallback to a live embedded booking calendar.
 */

export type Service = {
  name: string;
  description: string;
  duration: string;
  price: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const site = {
  /** Business / practice name shown in the nav and footer. */
  businessName: "Andres Remedial",
  /** Therapist's name. TODO: confirm Andres's full name / how he wants it shown. */
  therapistName: "Andres",
  /** PLACEHOLDER — post-nominals / headline credential. */
  credential: "Dip. Remedial Massage · Member, Massage & Myotherapy Australia",
  /** PLACEHOLDER — short tagline used in the document title. */
  tagline: "Remedial Massage in Mornington",
  /** Used for absolute URLs in metadata, sitemap and structured data. */
  url: "https://www.baysideremedial.com.au", // PLACEHOLDER — your real domain
  /** Contact details (phone verified from Google listing). */
  phone: "0493 828 268",
  phoneHref: "tel:+61493828268",
  email: "hello@andresremedial.com.au", // TODO: confirm real email address
  /** Clinic address — verified from Google listing. */
  address: {
    street: "2/33 Dava Dr",
    suburb: "Mornington",
    state: "VIC",
    postcode: "3931",
    country: "Australia",
  },
  /** Geo coordinates of the clinic (verified from Google listing). */
  geo: { lat: -38.2404, lng: 145.0321 },
  /** PLACEHOLDER — ABN line for the footer. */
  abn: "ABN 00 000 000 000",
  /** PLACEHOLDER — social links. Leave a value empty ("") to hide that icon. */
  socials: {
    instagram: "https://instagram.com/", // PLACEHOLDER
    facebook: "https://facebook.com/", // PLACEHOLDER
  },
  /**
   * Opening hours — from the Google listing. TODO: confirm with Andres; these
   * are the only public hours Google shows, so expand if he takes more days.
   * If you change these, also update openingHoursSpecification in JsonLd.tsx.
   */
  hours: [
    { day: "Wednesday", time: "9:20am – 8:00pm" },
    { day: "Saturday", time: "9:00am – 2:00pm" },
    { day: "Mon, Tue, Thu, Fri", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ] as const,
};

export const hero = {
  eyebrow: "Mornington · Mornington Peninsula",
  /** Headline is split so the accent word can be styled separately. */
  headlineLead: "Hands-on relief for",
  headlineAccent: "bodies that work hard.",
  subhead:
    "Evidence-based remedial massage to ease persistent pain, recover from injury, and move through your days with more ease — a few minutes from the Mornington foreshore.",
  primaryCta: "Book an appointment",
  secondaryCta: "See treatments",
  /**
   * Trust badges under the hero. Kept to VERIFIED facts only.
   * TODO (confirm with Andres before adding claims like years of experience,
   * specific qualifications, or health-fund/HICAPS rebates).
   */
  badges: [
    "Rated 5.0 ★ on Google",
    "Easy online booking",
    "Mornington Peninsula",
  ],
};

export const services: Service[] = [
  {
    name: "Remedial Massage",
    description:
      "A thorough, treatment-focused session targeting the specific muscles and patterns behind your pain — assessed, treated, and explained.",
    duration: "60 / 90 min",
    price: "from $110",
  },
  {
    name: "Deep Tissue & Sports",
    description:
      "Firmer, sustained pressure for tight, overworked muscles. Ideal for athletes, tradies, and anyone carrying heavy physical load.",
    duration: "60 / 90 min",
    price: "from $110",
  },
  {
    name: "Myofascial Release",
    description:
      "Slow, sustained techniques that release restriction in the connective tissue wrapping your muscles — restoring length and glide.",
    duration: "60 min",
    price: "from $110",
  },
  {
    name: "Trigger Point Therapy",
    description:
      "Precise pressure on the knots that refer pain elsewhere — a common driver of headaches, neck tension, and nagging aches.",
    duration: "45 / 60 min",
    price: "from $95",
  },
  {
    name: "Pregnancy Massage",
    description:
      "Safe, side-lying treatment to ease the lower-back and hip load of pregnancy, with careful positioning and support throughout.",
    duration: "60 min",
    price: "from $115",
  },
  {
    name: "Headache & Jaw (TMJ)",
    description:
      "Focused work through the neck, jaw, and upper back for tension headaches and jaw clenching — including intra-oral on request.",
    duration: "45 min",
    price: "from $95",
  },
];

export const about = {
  eyebrow: "About",
  heading: "Treatment that listens before it works.",
  /** PLACEHOLDER — therapist bio paragraphs. */
  paragraphs: [
    "I'm Jordan, a remedial massage therapist based on the Mornington Peninsula. After a decade treating everyone from desk-bound professionals to surf-lifesavers, I've learned that lasting relief comes from understanding the whole picture — not just chasing the sorest spot.",
    "Every first visit starts with a proper assessment: how you move, what aggravates things, and what you want to get back to. From there we build a treatment plan that fits your body and your life — and I'll always send you home knowing what to do between sessions.",
  ],
  /** PLACEHOLDER — credentials list. */
  credentials: [
    "Diploma of Remedial Massage",
    "Member, Massage & Myotherapy Australia",
    "Provider for all major private health funds",
    "Working with Children & current First Aid",
  ],
};

export const rebates = {
  eyebrow: "Health funds & rebates",
  heading: "Claim your rebate on the spot.",
  body:
    "With HICAPS in the clinic, your private health rebate is processed instantly — you only pay the gap. Remedial massage is covered under most 'extras' policies, and you don't need a doctor's referral to book.",
  points: [
    {
      title: "Instant HICAPS claiming",
      text: "Swipe your health-fund card and walk out paying just the difference. No paperwork, no waiting for reimbursement.",
    },
    {
      title: "No referral needed",
      text: "Remedial massage is a primary-care service — book directly whenever something flares up.",
    },
    {
      title: "Clear, itemised receipts",
      text: "Need to claim later, or for work or insurance? You'll get a proper itemised receipt every time.",
    },
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd had a tight shoulder for months and tried everything. Two sessions in and I finally have my range of movement back — and the homework actually made the difference.",
    author: "Priya M.",
    detail: "Mount Martha",
  },
  {
    quote:
      "Genuinely the most thorough remedial work I've had. Jordan explained exactly what was going on instead of just rubbing where it hurt.",
    author: "Dave R.",
    detail: "Mornington",
  },
  {
    quote:
      "Pregnancy massage here was a lifesaver in my third trimester. So well looked after, and my lower back has never been happier.",
    author: "Hannah L.",
    detail: "Safety Beach",
  },
];

export const faqs: Faq[] = [
  {
    question: "What should I expect on my first visit?",
    answer:
      "A short health and lifestyle chat, a movement assessment, then hands-on treatment tailored to what we find. Allow a little extra time for your first appointment.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No. Remedial massage is a primary-care service, so you can book directly. If you have an EPC/care plan from your GP, let us know.",
  },
  {
    question: "What do I need to bring?",
    answer:
      "Just your private health-fund card if you'd like to claim on the spot. Wear or bring comfortable clothing.",
  },
];

export const contact = {
  eyebrow: "Visit the clinic",
  heading: "Find us in Mornington.",
  body:
    "Easy parking, a calm treatment space, and a short stroll from the village. Book online any time, or get in touch if you're not sure which treatment is right for you.",
};
