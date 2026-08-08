import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { LocationCard } from "@/components/site/LocationCard";
import { BookingCTA } from "@/components/site/BookingCTA";
import { GoogleRatingSection } from "@/components/site/GoogleRatingSection";
import { business, booking, locations } from "@/content/business";
import { localBusinessSchema, pageMeta } from "@/lib/seo";

const title = "Kontakt & Standorte — Angel Nails Berlin & Hennigsdorf";
const description =
  "Angel Nails: Danziger Straße 142, 10407 Berlin Prenzlauer Berg und Havelpassage 6, 16761 Hennigsdorf. Öffnungszeiten, Telefonnummern und Online-Buchung.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    ...pageMeta({ title, description, path: "/kontakt" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Kontakt"
        title="Standorte"
        intro="Wimpern- und Augenbrauentermine buchst du online über Treatwell. Für Nägel und Füße erreichst du uns telefonisch im jeweiligen Studio."
      />

      <GoogleRatingSection />



      <section className="shell grid gap-14 border-t pt-12 pb-16 md:grid-cols-2 md:gap-16 md:pb-24">
        {locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </section>

      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-8 border-t pt-12 md:grid-cols-3">
          <div>
            <h2 className="eyebrow">Buchung</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {booking.onlineLabel}. {booking.nailsNote}
            </p>
          </div>
          <div>
            <h2 className="eyebrow">Social</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Instagram {business.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={business.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">Hinweise</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {business.payment}. Eine öffentliche E-Mail-Adresse liegt uns nicht vor — bitte
              telefonisch oder über Instagram anfragen.
            </p>
          </div>
        </div>
      </section>

      <BookingCTA title="Wir freuen uns auf dich." />
    </SiteLayout>
  );
}
