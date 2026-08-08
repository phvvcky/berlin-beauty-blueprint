import { business, cta } from "@/content/business";
import { instagramGallery } from "@/content/media";

export function InstagramSection() {
  return (
    <section className="section">
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
            className="btn-base btn-outline self-start"
          >
            {cta.instagram}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {instagramGallery.map((image) => (
            <a
              key={image.src}
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="zoom-media aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="img-cover"
              />
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Auswahl an Beispielmotiven — kein Live-Feed. Aktuelle Arbeiten findest du auf Instagram.
        </p>
      </div>
    </section>
  );
}
