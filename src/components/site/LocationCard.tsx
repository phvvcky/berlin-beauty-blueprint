import type { Location } from "@/content/business";
import { cta } from "@/content/business";

export function OpeningHours({ location }: { location: Location }) {
  return (
    <dl className="mt-6 space-y-2 text-sm">
      {location.hours.map((row) => (
        <div key={row.days} className="flex justify-between gap-4 border-b border-border/60 pb-2">
          <dt className="text-muted-foreground">{row.days}</dt>
          <dd>{row.hours}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LocationCard({ location }: { location: Location }) {
  return (
    <article className="flex flex-col">
      <p className="eyebrow">{location.city}</p>
      <h3 className="display-md mt-3">{location.name}</h3>

      <address className="mt-5 not-italic text-sm leading-relaxed text-muted-foreground">
        {location.street}
        <br />
        {location.postalCode} {location.addressLocality}
        <br />
        <a href={location.phoneHref} className="link-underline text-foreground">
          {location.phone}
        </a>
      </address>

      <OpeningHours location={location} />

      {location.transport ? (
        <p className="mt-4 text-xs text-muted-foreground">{location.transport}</p>
      ) : null}
      {location.note ? (
        <p className="mt-3 text-xs text-muted-foreground/80">{location.note}</p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={location.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-primary"
        >
          {cta.book}
        </a>
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-outline"
        >
          {cta.directions}
        </a>
      </div>
    </article>
  );
}
