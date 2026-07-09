"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";

// Treatments is now a real page; the rest are in-page anchors on the home page.
const NAV = [
  { label: "Treatments", route: "/services" },
  { label: "About", hash: "about" },
  { label: "Rebates", hash: "rebates" },
  { label: "Visit", hash: "contact" },
] as const;

/**
 * Header — transparent over the dark hero, then settles into a solid bar on
 * scroll. Anchors are path-aware: on the home page they scroll in-page; on
 * other routes (e.g. /services) they point back to "/#…" so they still work.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = usePathname() === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;
  const anchor = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);
  const linkClass = `text-sm font-medium transition-colors hover:text-honey ${
    onDark ? "text-cream/85" : "text-ink-soft"
  }`;

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
          href={onHome ? "#top" : "/"}
          className={`flex items-center gap-2.5 font-display text-lg font-medium tracking-tight transition-colors sm:text-xl ${
            onDark ? "text-cream" : "text-ink"
          }`}
        >
          <Image
            src="/logo-badge.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-full bg-cream p-0.5 shadow-sm sm:h-10 sm:w-10"
            priority
          />
          {site.businessName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) =>
            "route" in item ? (
              <Link key={item.label} href={item.route} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={anchor(item.hash)} className={linkClass}>
                {item.label}
              </a>
            ),
          )}
          <Button href={anchor("book")} variant="primary">
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
            {NAV.map((item) => {
              const href = "route" in item ? item.route : anchor(item.hash);
              return (
                <a
                  key={item.label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-cream"
                >
                  {item.label}
                </a>
              );
            })}
            <Button
              href={anchor("book")}
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
