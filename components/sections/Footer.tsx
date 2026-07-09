import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

const NAV = [
  { label: "Treatments", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Rebates", href: "/#rebates" },
  { label: "Book", href: "/#book" },
  { label: "Visit", href: "/#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-sage-light">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/logo-badge.png"
              alt={site.businessName}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full bg-cream p-1"
            />
            <p className="mt-4 font-display text-xl text-cream">{site.businessName}</p>
            <p className="mt-3 text-sm leading-relaxed">
              Treatment-focused remedial massage on the Mornington Peninsula.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-light">
              Restore • Recover • Move
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-honey">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm">
            <p className="text-cream">Get in touch</p>
            <a href={site.phoneHref} className="mt-2 block hover:text-honey">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-honey">
              {site.email}
            </a>
            <div className="mt-4 flex gap-3">
              {site.socials.instagram ? (
                <a href={site.socials.instagram} aria-label="Instagram" className="hover:text-honey" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </a>
              ) : null}
              {site.socials.facebook ? (
                <a href={site.socials.facebook} aria-label="Facebook" className="hover:text-honey" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14 8.5h2V5.8h-2c-1.7 0-3 1.4-3 3.1V11H9v2.7h2V21h2.7v-7.3h2.1l.4-2.7h-2.5V9.4c0-.5.4-.9.9-.9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6">
          <div className="flex flex-col gap-2 text-xs text-sage-light/80 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {site.businessName}.
              {site.abn ? ` ${site.abn}.` : ""}
            </p>
            <p>Mornington · Mornington Peninsula · Victoria</p>
          </div>
          <p className="mt-4 text-center text-xs text-sage-light/60">
            Designed &amp; developed by{" "}
            <a
              href="https://www.biznize.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sage-light underline-offset-2 hover:text-honey"
            >
              Biznize
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
