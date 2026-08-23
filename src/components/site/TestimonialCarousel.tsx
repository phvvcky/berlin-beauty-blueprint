import { useState } from "react";
import { ratingSummary, reviews } from "@/content/reviews";
import { useLocation } from "@/lib/location-context";

/** Editorial Testimonial-Karussell mit echten Treatwell-Bewertungen. */
export function TestimonialCarousel() {
  const { location } = useLocation();
  const items = reviews.filter((r) => r.locationId === location.id);
  const [index, setIndex] = useState(0);
  const current = items[Math.min(index, Math.max(items.length - 1, 0))];

  if (!current) {
    return (
      <section className="section bg-foreground text-background">
        <div className="shell">
          <p className="eyebrow !text-background/60">Stimmen</p>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-background/70">
            Für {location.name} sind noch keine einzelnen Bewertungen hinterlegt.
          </p>
        </div>
      </section>
    );
  }

  const go = (dir: number) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <section className="section bg-foreground text-background">
      <div className="shell">
        <div className="flex items-end justify-between gap-6">
          <p className="eyebrow !text-background/60">Stimmen · {ratingSummary.source}</p>
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-background/60">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <blockquote className="mt-10 max-w-4xl font-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.12] italic">
          „{current.text}“
        </blockquote>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-background/20 pt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-background/70">
            <span className="text-background">{current.author}</span> · {current.treatment}
            {current.stylist ? ` · bei ${current.stylist}` : ""}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Vorherige Bewertung"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-background/30 transition-colors hover:bg-background hover:text-foreground"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Nächste Bewertung"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-background/30 transition-colors hover:bg-background hover:text-foreground"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
