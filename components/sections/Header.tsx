"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";

const NAV = [
  { label: "Treatments", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Rebates", href: "#rebates" },
  { label: "Visit", href: "#contact" },
];

/**
 * Header — transparent over the dark hero, then settles into a solid
 * limestone bar once the user scrolls past it. The booking CTA is always
 * present so the primary action is never more than a glance away.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-limestone/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className={`font-display text-lg font-medium tracking-tight transition-colors sm:text-xl ${
            onDark ? "text-cream" : "text-ink"
          }`}
        >
          {site.businessName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-honey ${
                onDark ? "text-cream/85" : "text-ink-soft"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button href="#book" variant="primary">
            Book now
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${onDark ? "text-cream" : "text-ink"}`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu panel */}
      {open ? (
        <div className="border-t border-line bg-limestone md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
            <Button
              href="#book"
              variant="primary"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Book now
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
