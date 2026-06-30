import type { ReactNode } from "react";

/**
 * SectionHeading — eyebrow label + display heading, with an optional intro.
 * The eyebrow encodes section context (location, topic) rather than decorating.
 */
export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  tone = "ink",
}: {
  eyebrow: string;
  heading: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "light";
}) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "light" ? "text-sage-light" : "text-honey-dark";
  const headingColor = tone === "light" ? "text-cream" : "text-ink";
  const introColor = tone === "light" ? "text-sage-light" : "text-ink-soft";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-3xl leading-tight font-medium sm:text-4xl md:text-[2.75rem] ${headingColor}`}
      >
        {heading}
      </h2>
      {intro ? (
        <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
      ) : null}
    </div>
  );
}
