import { booking, business, cta } from "@/content/business";
import { heroImage } from "@/content/media";
import { googleRating, ratingSummary } from "@/content/reviews";
import { ActionLink } from "./ActionLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="shell flex flex-col items-center pt-8 pb-14 text-center md:pt-14 md:pb-24">
        <p className="eyebrow">
          {business.tagline} · {business.city} & Hennigsdorf
        </p>

        {/* Arch visual with floating trust badge */}
        <div className="relative mt-8 w-full max-w-[26rem] md:mt-10 md:max-w-[30rem]">
          <div className="zoom-media aspect-[4/5] w-full rounded-t-full shadow-[var(--shadow-lift)]">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              fetchPriority="high"
              className="img-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-2 flex items-center gap-2 rounded-full border border-accent/15 bg-card/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-sm md:right-0">
            <span aria-hidden className="text-[0.65rem] text-clay">
              ★★★★★
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.14em]">
              {googleRating.score}{" "}
              <span className="text-muted-foreground">| {googleRating.countLabel} Google</span>
            </span>
          </div>
        </div>

        <h1 className="display-xl mt-16 !text-[clamp(2.5rem,7vw,5rem)]">
          Angel Nails —<br />
          <span className="italic text-clay">Nägel & Wimpern in Berlin</span>
        </h1>

        <p className="mt-6 max-w-md text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
          Präzise Handarbeit an zwei Standorten — Prenzlauer Berg & Hennigsdorf.
        </p>

        <div className="mt-9 flex w-full max-w-sm flex-col gap-3">
          <ActionLink href={booking.defaultUrl} external variant="primary" className="w-full">
            {cta.book}
          </ActionLink>
          <ActionLink to="/leistungen" variant="outline" className="w-full">
            {cta.services}
          </ActionLink>
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <a
            href={googleRating.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            Google Bewertungen
          </a>
          <span aria-hidden>·</span>
          <a
            href={ratingSummary.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            {ratingSummary.score} aus {ratingSummary.count} · {ratingSummary.source}
          </a>
        </p>

        <p className="mt-8 flex items-center justify-center gap-4 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground/70">
          <span>Prenzlauer Berg</span>
          <span aria-hidden>•</span>
          <span>Hennigsdorf</span>
        </p>
      </div>
    </section>
  );
}
