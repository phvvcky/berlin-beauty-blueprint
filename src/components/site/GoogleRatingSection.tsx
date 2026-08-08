import { googleRating } from "@/content/reviews";
import { locations } from "@/content/business";

function Stars() {
  return (
    <span aria-hidden className="text-clay tracking-[0.25em] text-lg">
      ★★★★★
    </span>
  );
}

/** Prominente Google-Bewertungs-Sektion mit Lesen / Bewerten / Anfahrt. */
export function GoogleRatingSection() {
  return (
    <section className="section bg-secondary">
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow">Google Bewertungen</p>
          <p className="mt-5 flex items-baseline gap-4">
            <span className="font-display text-6xl md:text-7xl">{googleRating.score}</span>
            <Stars />
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {googleRating.countLabel} Bewertungen auf Google — Stand laut Google Business Profil.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={googleRating.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary"
            >
              Google Bewertungen lesen
            </a>
            <a
              href={googleRating.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline"
            >
              Bewertung auf Google abgeben
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <ul className="grid gap-px border-t sm:grid-cols-2">
            {locations.map((loc) => (
              <li key={loc.id} className="border-b py-7 sm:odd:pr-8 sm:even:pl-8 sm:border-b-0">
                <p className="eyebrow">{loc.city}</p>
                <p className="font-display text-2xl mt-2">{loc.name}</p>
                <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
                  {loc.street}
                  <br />
                  {loc.postalCode} {loc.addressLocality}
                  <br />
                  <a href={loc.phoneHref} className="link-underline text-foreground">
                    {loc.phone}
                  </a>
                </address>
                <dl className="mt-4 space-y-1 text-sm">
                  {loc.hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{row.days}</dt>
                      <dd>{row.hours}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline mt-5 inline-flex"
                >
                  Anfahrt · Route planen
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
