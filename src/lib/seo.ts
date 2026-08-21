import { business, locations } from "@/content/business";
import { ratingSummary } from "@/content/reviews";

/**
 * TODO: Platzhalter-Domain — sobald die echte Domain feststeht, hier
 * ersetzen (ohne abschließenden Slash, z.B. "https://angel-nails-berlin.de").
 * Ohne absolute URLs zeigen Link-Vorschauen (WhatsApp/Instagram/Facebook)
 * kein korrektes Bild/Linkziel an.
 */
export const SITE_URL = "https://www.angel-nails-berlin.example";

/** Standard-Vorschaubild für Social-Shares, falls eine Seite keins angibt. */
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** schema.org NailSalon / BeautySalon entries — one per Standort. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": locations.map((loc, i) => ({
      "@type": ["NailSalon", "BeautySalon"],
      "@id": `#${loc.id}`,
      name: `${business.legalName} — ${loc.name}`,
      // TODO: echtes Foto statt Instagram-Profillink eintragen, sobald og-image.jpg existiert
      image: DEFAULT_OG_IMAGE,
      url: absoluteUrl("/"),
      telephone: loc.phone,
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Bar",
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.street,
        postalCode: loc.postalCode,
        addressLocality: loc.addressLocality,
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: loc.geo.lat,
        longitude: loc.geo.lng,
      },
      openingHours: loc.schemaHours,
      hasMap: loc.mapsUrl,
      sameAs: [business.social.instagram, business.social.tiktok, business.social.facebook],
      ...(i === 0
        ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: ratingSummary.scoreValue,
              reviewCount: ratingSummary.count,
              bestRating: 5,
            },
          }
        : {}),
    })),
  };
}

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  /** Optionales, seitenspezifisches Vorschaubild (absolute oder relative URL). */
  image?: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : DEFAULT_OG_IMAGE;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
