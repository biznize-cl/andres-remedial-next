/**
 * StarRating — five stars with `rating` of them filled. Decorative stars are
 * aria-hidden; a single visually-hidden label carries the rating for
 * screen readers and assistive tech.
 */
export function StarRating({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) {
  const filled = Math.round(rating);

  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      <span className="sr-only">Rated {rating} out of 5</span>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill={i < filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path
            strokeLinejoin="round"
            d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L4.4 9.6l5.8-.8L12 3.5z"
          />
        </svg>
      ))}
    </span>
  );
}
