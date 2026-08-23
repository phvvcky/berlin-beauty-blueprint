import { business, cta } from "@/content/business";
import { instagramGallery } from "@/content/media";

/** Instagram-Feed als endlose Laufband-Galerie (Studio-358-Anmutung). */
export function InstagramSection() {
  const strip = [...instagramGallery, ...instagramGallery];

  return (
    <section className="section overflow-hidden">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
        </div>
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
          Auswahl an echten Arbeiten — kein Live-Feed. Aktuelle Sets findest du auf Instagram.
        </p>
      </div>
    </section>
  );
}
