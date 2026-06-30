/**
 * Contours — the site's signature motif.
 *
 * Layered topographic contour lines that read two ways at once: the coastal
 * topography of the Mornington Peninsula, and the layers of fascia and muscle
 * a remedial therapist works through. Drawn with `currentColor` so callers
 * control the tint via a `text-*` class. Purely decorative → aria-hidden.
 */

type ContoursProps = {
  className?: string;
  /** Stroke opacity for the line set. */
  opacity?: number;
};

// Eight nested, gently-offset contour bands. Handcrafted so the spacing
// tightens and loosens like a real contour map rather than a uniform pattern.
const LINES = [
  "M-40 120 C 220 70, 420 170, 700 120 S 1160 60, 1260 130",
  "M-40 175 C 240 120, 430 230, 720 175 S 1170 110, 1260 185",
  "M-40 235 C 250 175, 450 300, 740 235 S 1180 165, 1260 245",
  "M-40 300 C 260 235, 470 375, 760 300 S 1190 225, 1260 310",
  "M-40 370 C 270 300, 480 455, 770 370 S 1190 290, 1260 380",
  "M-40 445 C 275 370, 490 540, 780 445 S 1195 360, 1260 455",
  "M-40 525 C 280 450, 500 625, 790 525 S 1200 435, 1260 535",
  "M-40 610 C 285 535, 505 705, 795 610 S 1200 515, 1260 620",
];

export function Contours({ className = "", opacity = 0.5 }: ContoursProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 680"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        opacity={opacity}
      >
        {LINES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
