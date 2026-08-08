import { booking, business, cta } from "@/content/business";
import { heroImage } from "@/content/media";
import { ratingSummary } from "@/content/reviews";
import { ActionLink } from "./ActionLink";

export function Hero() {
  return (
    <section className="relative">
      <div className="shell grid items-end gap-8 pt-10 pb-8 md:grid-cols-12 md:gap-10 md:pt-16 md:pb-16">
        <div className="md:col-span-7 lg:col-span-6">
          <p className="eyebrow">
            {business.tagline} · {business.city} & Hennigsdorf
          </p>
          <h1 className="display-xl mt-6">
            Angel
            <br />
            <span className="italic text-clay">Nails</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Nägel, Wimpern und Augenbrauen mit ruhiger Hand und Blick fürs Detail — an zwei
            Standorten in Berlin Prenzlauer Berg und Hennigsdorf.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={booking.defaultUrl} external variant="primary">
              {cta.book}
            </ActionLink>
            <ActionLink to="/leistungen" variant="outline">
              {cta.services}
            </ActionLink>
          </div>

          <div className="mt-10 flex flex-col gap-2 text-sm text-muted-foreground">
            <p>
              <span className="font-display text-2xl text-foreground">{googleRating.score}</span>{" "}
              <span aria-hidden className="text-clay">★★★★★</span> · {googleRating.countLabel}{" "}
              <a
                href={googleRating.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Google Bewertungen
              </a>
            </p>
            <p>
              {ratingSummary.score} aus {ratingSummary.count} Bewertungen ·{" "}
              <a
                href={ratingSummary.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {ratingSummary.source}
              </a>
            </p>
          </div>

        </div>

        <div className="md:col-span-5 lg:col-span-6">
          <div className="zoom-media aspect-[4/5] md:aspect-[3/4]">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              fetchPriority="high"
              className="img-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
