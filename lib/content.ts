/**
 * SITE CONTENT — single source of truth.
 *
 * Everything the site owner needs to change lives here. No JSX editing required.
 *
 * Voice: first person (Andres is a solo practitioner) — "I / me / my", not
 * "we / our". Copy avoids the em dash (—) by request; use commas or full stops.
 *
 * The booking link and map are driven by environment variables (see
 * `.env.example`): NEXT_PUBLIC_BOOKING_URL, NEXT_PUBLIC_MAP_QUERY.
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

export type FaqGroup = {
  title: string;
  items: Faq[];
};

export const site = {
  /** Business / practice name shown in the nav and footer. */
  businessName: "Andres Remedial",
  /** Therapist's name, as shown under the About bio. */
  therapistName: "Andres Jackson",
  /** Role line shown under the name. */
  credential: "Remedial Massage Therapist",
  /** Short tagline used in the document title. */
  tagline: "Remedial Massage in Mornington",
  /** Used for absolute URLs in metadata, sitemap and structured data. */
  url: "https://www.andresremedial.com.au", // TODO: confirm real domain
  /** Contact details (phone verified from Google listing). */
  phone: "0493 828 268",
  phoneHref: "tel:+61493828268",
  email: "hello@andresremedial.com.au", // TODO: confirm real email address
  /** Clinic address — verified from Google listing. */
  address: {
    venue: "The Chiro Collective",
    street: "2/33 Dava Dr",
    suburb: "Mornington",
    state: "VIC",
    postcode: "3931",
    country: "Australia",
  },
  /** Geo coordinates of the clinic (verified from Google listing). */
  geo: { lat: -38.2404, lng: 145.0321 },
  /** TODO: confirm ABN for the footer, or leave blank to hide. */
  abn: "ABN 00 000 000 000",
  /** Social links. Leave a value empty ("") to hide that icon. */
  socials: {
    instagram: "", // TODO: add real Instagram URL or leave "" to hide
    facebook: "", // TODO: add real Facebook URL or leave "" to hide
  },
  /**
   * Opening hours. If you change these, also update
   * openingHoursSpecification in JsonLd.tsx.
   */
  hours: [
    { day: "Wednesday", time: "9:20am – 12:30pm, 3:00pm – 8:20pm" },
    { day: "Alternate Saturdays", time: "By appointment only" },
    { day: "Mon, Tue, Thu, Fri, Sun", time: "Closed" },
  ] as const,
  hoursNote: "Additional appointments may be available on request.",
};

export const hero = {
  eyebrow: "Mornington · Mornington Peninsula",
  /** Headline is split so the accent word can be styled separately. */
  headlineLead: "Hands-on relief for",
  headlineAccent: "bodies that work hard.",
  subhead:
    "Targeted remedial massage to reduce pain, support recovery from injury, and help you move through life with more freedom, just minutes from the Mornington foreshore.",
  primaryCta: "Book an appointment",
  secondaryCta: "See treatments",
  /** Trust badges under the hero — verified facts only. */
  badges: [
    "Rated 5.0 ★ on Google",
    "Easy online booking",
    "Mornington Peninsula",
  ],
};

export const servicesIntro = {
  eyebrow: "Treatment",
  heading: "Personalised, hands-on care tailored to your needs.",
  intro:
    "Every session is assessment-led and tailored to you, combining hands-on treatment with targeted strategies to reduce pain, improve movement, and help you get back to doing what you love.",
  pricingNote:
    "Indicative pricing below. Your private health rebate brings the out-of-pocket cost down.",
};

export const services: Service[] = [
  {
    name: "Remedial Treatment",
    description:
      "A tailored, treatment-focused session designed to assess, treat, and address the underlying causes of pain, stiffness, and movement restrictions, helping you recover, move better, and feel your best.",
    duration: "60 min",
    price: "$147",
  },
];

export const about = {
  eyebrow: "About",
  heading: "Treatment that listens before it works.",
  paragraphs: [
    "I'm Andres, a remedial massage therapist based on the Mornington Peninsula. My approach is built around understanding the bigger picture, not just where it hurts, but why it hurts.",
    "With a background in physiotherapy and high-performance sport, shaped by my own years as a nationally ranked tennis player in Chile, I focus on how the whole body moves, not just the sore spot.",
    "Every session begins with a proper assessment: how you move, what aggravates things, and what you want to get back to. From there, treatment is tailored to your body, your goals, and your lifestyle.",
    "My focus is simple: helping you reduce pain, move more freely, and get back to doing what you love.",
  ],
  /** Experience highlight (first person, drawn from the biography). */
  experience:
    "I work with everyone from professional and semi-professional athletes, including AFL, AFLW and A-League (Women's) environments, to recreational athletes, active adults, and people managing persistent pain or recovering from injury.",
  credentials: [
    "Bachelor of Physiotherapy (Honours), Chile",
    "Cert IV & Diploma of Remedial Massage, Australia",
    "Member, Massage & Myotherapy Australia",
    "Provider for all major private health funds",
  ],
  /** Philosophy pull-quote (from the biography). */
  quote:
    "If we can walk confidently and hold our head high without experiencing pain or discomfort, we can see a clearer vision of our path and how to get there.",
};

export const rebates = {
  eyebrow: "Health funds & rebates",
  heading: "Private health rebates available.",
  body:
    "Remedial massage may be covered under your private health extras, depending on your level of cover. After your session, you'll receive a clear itemised invoice that you can submit directly to your health fund for claiming.",
  points: [
    {
      title: "Private health rebates",
      text: "Claiming is available through most major private health funds, depending on your individual policy.",
    },
    {
      title: "Itemised invoice provided",
      text: "You'll receive a proper invoice with all the details required to submit your claim.",
    },
    {
      title: "No referral needed",
      text: "You can book directly without a doctor's referral.",
    },
  ],
};

/**
 * Fallback testimonials — only shown if the live Google reviews can't be
 * fetched. Kept generic; the live section shows real Google reviews.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd had a tight shoulder for months and tried everything. Two sessions in and I finally have my range of movement back, and the homework actually made the difference.",
    author: "Priya M.",
    detail: "Mount Martha",
  },
  {
    quote:
      "Genuinely the most thorough remedial work I've had. Andres explained exactly what was going on instead of just rubbing where it hurt.",
    author: "Dave R.",
    detail: "Mornington",
  },
  {
    quote:
      "So well looked after. Andres took the time to understand the problem, and my lower back has never been happier.",
    author: "Hannah L.",
    detail: "Safety Beach",
  },
];

export const faqGroups: FaqGroup[] = [
  {
    title: "First visit & treatment",
    items: [
      {
        question: "What should I expect on my first visit?",
        answer:
          "Your first session starts with a conversation about your symptoms, lifestyle, and goals, followed by a movement assessment and treatment tailored to your needs.",
      },
      {
        question: "Do I need a referral?",
        answer:
          "No. You can book directly without a referral. If you'd like to discuss your symptoms or injury beforehand, feel free to get in touch.",
      },
      {
        question: "What should I bring?",
        answer:
          "Wear comfortable clothing and bring any relevant scans, reports, or information related to your injury or condition, if you have them.",
      },
    ],
  },
  {
    title: "Booking & policies",
    items: [
      {
        question: "How does booking work?",
        answer:
          "A 50% deposit is required to confirm your appointment. The remaining balance is paid after your session, unless you choose to pay in full when booking online.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Appointments can be rescheduled or cancelled with at least 24 hours' notice. Changes made within 24 hours, or missed appointments, may result in the deposit being forfeited.",
      },
      {
        question: "Is remedial massage right for my injury?",
        answer:
          "If you're unsure whether treatment is suitable for your pain, injury, or condition, feel free to get in touch before booking. I'm happy to have a chat and see if we're the right fit.",
      },
    ],
  },
];

export const contact = {
  eyebrow: "Visit the clinic",
  heading: "Find me inside The Chiro Collective.",
  body:
    "A calm, professional treatment space in the heart of Mornington, with easy parking and online booking available. If you're dealing with pain, stiffness, or a specific injury and you're unsure if treatment is right for you, feel free to reach out. I'm always happy to chat and see if we're the right fit.",
};
