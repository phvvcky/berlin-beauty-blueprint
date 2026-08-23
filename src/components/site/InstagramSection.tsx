import { business, cta } from "@/content/business";
import { instagramGallery, instagramPosts } from "@/content/media";
import { Reveal } from "./Reveal";

function embedUrl(permalink: string) {
  return `${permalink.replace(/\/+$/, "")}/embed/captioned/`;
}

/** Echter Instagram-Feed (offizielle Embeds) + Laufband mit Studio-Arbeiten. */
export function InstagramSection() {
  const strip = [...instagramGallery, ...instagramGallery];

  return (
    <section className="section overflow-hidden">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="display-lg mt-4">{business.instagramHandle}</h2>
          </div>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary self-start"
          >
            {cta.instagram}
          </a>
        </Reveal>

        {instagramPosts.length > 0 && (
          <div
            className={`mt-10 grid gap-6 md:mt-12 ${
              instagramPosts.length === 1
                ? "max-w-md"
                : instagramPosts.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {instagramPosts.map((permalink, i) => (
              <Reveal key={permalink} delay={i * 110} className="overflow-hidden bg-card">
                <iframe
                  src={embedUrl(permalink)}
                  title={`Instagram-Beitrag von ${business.instagramHandle}`}
                  loading="lazy"
                  scrolling="no"
                  allowFullScreen
                  className="h-[620px] w-full border-0"
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <div className="marquee mt-12 py-2">
        <div className="marquee-track gap-3 md:gap-5">
          {strip.map((image, i) => (
            <a
              key={`${image.src}-${i}`}
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i >= instagramGallery.length}
              tabIndex={i >= instagramGallery.length ? -1 : undefined}
              className="zoom-media relative aspect-square w-[62vw] shrink-0 sm:w-[38vw] md:w-[22vw]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="img-cover"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="shell">
        <p className="mt-6 text-xs text-muted-foreground">
          Live-Beiträge direkt von Instagram, darunter eine Auswahl echter Arbeiten aus dem Studio.
        </p>
      </div>
    </section>
  );
}
