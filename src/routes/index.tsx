import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeaturedGallery } from "@/components/site/GalleryGrid";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { TeamGrid } from "@/components/site/TeamGrid";
import { LocationCard } from "@/components/site/LocationCard";
import { InstagramSection } from "@/components/site/InstagramSection";
import { BookingCTA } from "@/components/site/BookingCTA";
import { GoogleRatingSection } from "@/components/site/GoogleRatingSection";
import { ActionLink } from "@/components/site/ActionLink";
import { business, locations } from "@/content/business";
import { googleRating } from "@/content/reviews";
import { serviceCategories, featuredCategoryIds } from "@/content/services";
import { featuredGallery, studioImages } from "@/content/media";
import { localBusinessSchema, pageMeta } from "@/lib/seo";

const title = "Angel Nails — Nagelstudio & Wimpern in Berlin Prenzlauer Berg & Hennigsdorf";
const description =
  "Angel Nails: Nagelmodellage, Maniküre, Pediküre, Wimpernverlängerung und Augenbrauen in Berlin Prenzlauer Berg und Hennigsdorf. 4,8 von 5 bei 677 Treatwell-Bewertungen. Jetzt Termin buchen.";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({ title, description, path: "/" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema()),
      },
    ],
  }),
  component: Home,
});

const featured = serviceCategories.filter((c) => featuredCategoryIds.includes(c.id));

function Home() {
  return (
    <SiteLayout>
      <Hero />

      <GoogleRatingSection />

      {/* Intro / Trust */}
      <section className="section">
        <div className="shell grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="eyebrow">Studio</p>
            <p className="display-md mt-5">
              Präzise Arbeit, ehrliche Beratung und Zeit für das, was dir gefällt.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Angel Nails ist ein familiär geführtes Nagel- und Beautystudio mit zwei Standorten in
              Berlin und Brandenburg. Unser Team arbeitet mit modernen Techniken an Nägeln, Händen,
              Füßen und Wimpern — mit hohem Anspruch an Hygiene und Ergebnis. Viele Kundinnen kommen
              seit Jahren zu uns.
            </p>
            <ul className="mt-10 grid gap-px border-t sm:grid-cols-3">
              <li className="border-b py-5 sm:border-b-0 sm:pr-6">
                <p className="font-display text-4xl">{googleRating.score}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {googleRating.countLabel} Bewertungen · Google
                </p>
              </li>

              <li className="border-b py-5 sm:border-b-0 sm:px-6">
                <p className="font-display text-4xl">2</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Studios · Berlin & Hennigsdorf
                </p>
              </li>
              <li className="py-5 sm:pl-6">
                <p className="font-display text-4xl">3</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Sprachen · {business.languages.join(" · ")}
                </p>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="zoom-media aspect-[4/5]">
              <img
                src={studioImages[0]!.src}
                alt={studioImages[0]!.alt}
                width={studioImages[0]!.width}
                height={studioImages[0]!.height}
                loading="lazy"
                decoding="async"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-secondary">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Leistungen</p>
              <h2 className="display-lg mt-4">Was wir machen</h2>
            </div>
            <ActionLink to="/leistungen" variant="outline" className="self-start">
              Alle Leistungen & Preise
            </ActionLink>
          </div>

          <ul className="mt-14 grid gap-px border-t sm:grid-cols-2">
            {featured.map((cat, i) => (
              <li key={cat.id} className="border-b py-8 sm:odd:pr-10 sm:even:pl-10">
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display-md mt-3">
                  <Link to="/leistungen" hash={cat.id} className="link-underline">
                    {cat.title}
                  </Link>
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {cat.intro}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {cat.services[0]?.price ?? "Preis auf Anfrage"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured work */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Arbeiten</p>
              <h2 className="display-lg mt-4">Ausgewählte Sets</h2>
            </div>
            <ActionLink to="/galerie" variant="outline" className="self-start">
              Galerie ansehen
            </ActionLink>
          </div>
          <div className="mt-12">
            <FeaturedGallery images={featuredGallery} />
          </div>
        </div>
      </section>

      <TeamGrid eyebrow="Team" title="Wer dich behandelt" />

      <ReviewsSection />

      {/* Locations */}
      <section className="section">
        <div className="shell">
          <p className="eyebrow">Standorte</p>
          <h2 className="display-lg mt-4">Zwei Studios</h2>
          <div className="mt-14 grid gap-14 border-t pt-12 md:grid-cols-2 md:gap-16">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>

      <InstagramSection />
      <BookingCTA />
    </SiteLayout>
  );
}
