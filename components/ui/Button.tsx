import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-honey";

const variants: Record<Variant, string> = {
  // Honey/ochre accent — reserved for the primary booking action.
  primary: "bg-honey text-cream hover:bg-honey-dark shadow-sm",
  // Outline that adapts to dark or light backgrounds via currentColor.
  outline:
    "border border-current/30 text-current hover:bg-current/10",
  ghost: "text-current hover:bg-current/10",
};

/**
 * Button — rendered as an anchor, since every action on a one-page site is a
 * link (to the booking section, a phone number, or an external calendar).
 */
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
