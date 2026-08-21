import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { BookingCTA } from "@/components/site/BookingCTA";

import { business, locations } from "@/content/business";

import { studioImages } from "@/content/media";
import { pageMeta } from "@/lib/seo";

const title = "Studio & Team — Angel Nails Berlin Prenzlauer Berg";
const description =
  "Angel Nails ist ein Nagel- und Beautystudio mit zwei Standorten in Berlin Prenzlauer Berg und Hennigsdorf. Team, Arbeitsweise und Sprachen im Überblick.";

export const Route = createFileRoute("/studio")({
  head: () => pageMeta({ title, description, path: "/studio" }),
  component: Studio,
});

function Studio() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Über uns"
        title="Studio"
        intro="Bei Angel Nails stehst du im Mittelpunkt: hochwertige Behandlungen für Nägel, Hände, Füße und Wimpern an zwei Standorten — Berlin Prenzlauer Berg und Hennigsdorf."
      />

      <section className="shell grid gap-10 pb-16 md:grid-cols-12 md:gap-16 md:pb-24">
        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-muted-foreground">
            Unser erfahrenes Team arbeitet mit modernen Techniken und nimmt sich Zeit für deine
            Wünsche — von der klassischen Maniküre bis zur Volumentechnik bei Wimpern. Im Studio
            sprechen wir {business.languages.join(", ")}.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Individualität, saubere Arbeit und Kundenzufriedenheit stehen im Vordergrund. Viele
            Kundinnen begleiten uns seit Jahren — das ist für uns der beste Maßstab.
          </p>

          <h2 className="display-md mt-14">Team</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Nhi, Hang, Loan und Hana behandeln dich im Studio Prenzlauer Berg.
          </p>
          <Link
            to="/team"
            className="link-underline mt-4 inline-block text-xs uppercase tracking-[0.2em]"
          >
            Team kennenlernen
          </Link>

          <h2 className="display-md mt-14">Gut zu wissen</h2>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {business.amenities.map((item) => (
              <li key={item} className="border-b pb-2">
                {item}
              </li>
            ))}
            <li className="border-b pb-2">{business.payment}</li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="space-y-5">
            {studioImages.map((image) => (
              <div key={image.src} className="zoom-media aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="img-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 border-t pt-8">
            <h2 className="eyebrow">Standorte</h2>
            <ul className="mt-5 space-y-5 text-sm">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <p>{loc.name}</p>
                  <p className="text-muted-foreground">
                    {loc.street}, {loc.postalCode} {loc.addressLocality}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BookingCTA title="Lern uns kennen." />
    </SiteLayout>
  );
}
