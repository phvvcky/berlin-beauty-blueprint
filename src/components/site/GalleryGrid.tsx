import type { GalleryImage } from "@/content/media";

/** Editorial masonry grid — works from 375px up. */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="columns-2 gap-3 md:columns-3 md:gap-5">
      {images.map((image) => (
        <figure key={image.src} className="zoom-media mb-3 break-inside-avoid md:mb-5">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="w-full"
          />
          {image.caption ? (
            <figcaption className="bg-background pt-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

/** Asymmetric feature strip used on the homepage. */
export function FeaturedGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
      {images.map((image, i) => (
        <figure
          key={image.src}
          className={`zoom-media ${
            i === 0 ? "col-span-2 row-span-2 aspect-[4/5] md:aspect-[3/4]" : "aspect-[3/4]"
          }`}
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
        </figure>
      ))}
    </div>
  );
}
