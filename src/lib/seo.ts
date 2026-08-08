import { business, locations } from "@/content/business";
import { ratingSummary } from "@/content/reviews";

/** schema.org NailSalon / BeautySalon entries — one per Standort. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": locations.map((loc, i) => ({
      "@type": ["NailSalon", "BeautySalon"],
      "@id": `#${loc.id}`,
      name: `${business.legalName} — ${loc.name}`,
      image: business.social.instagram,
      url: "/",
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
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
