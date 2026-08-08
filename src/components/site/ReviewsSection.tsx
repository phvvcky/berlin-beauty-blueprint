import { ratingSummary, reviews } from "@/content/reviews";

export function ReviewsSection() {
  return (
    <section className="section bg-secondary">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Bewertungen</p>
            <h2 className="display-lg mt-4">
              {ratingSummary.score}{" "}
              <span className="text-muted-foreground text-[0.4em] align-middle">
                / 5 · {ratingSummary.count} Bewertungen
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Verifizierte Bewertungen von{" "}
            <a
              href={ratingSummary.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              {ratingSummary.source}
            </a>{" "}
            für das {ratingSummary.location}.
          </p>
        </div>

        <ul className="mt-14 grid gap-px border-t md:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.author} className="border-b py-8 md:border-b-0 md:pr-8">
              <blockquote className="font-display text-2xl leading-snug md:text-[1.6rem]">
                „{review.text}“
              </blockquote>
              <footer className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-foreground">{review.author}</span> · {review.treatment}
                {review.stylist ? ` · bei ${review.stylist}` : ""}
                <span className="mt-2 block normal-case tracking-normal">{review.source}</span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
