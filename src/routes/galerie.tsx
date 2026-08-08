import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { BookingCTA } from "@/components/site/BookingCTA";
import { gallery } from "@/content/media";
import { pageMeta } from "@/lib/seo";

const title = "Galerie — Nageldesign & Wimpern | Angel Nails Berlin";
const description =
  "Ausgewählte Arbeiten von Angel Nails: Nagelmodellage, Farbgel, Nail Art, Pediküre und Wimpernverlängerung aus unseren Studios in Berlin und Hennigsdorf.";

export const Route = createFileRoute("/galerie")({
  head: () => pageMeta({ title, description, path: "/galerie" }),
  component: Galerie,
});

function Galerie() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Portfolio"
        title="Galerie"
        intro="Ein Eindruck von Formen, Farben und Techniken. Die Motive dienen aktuell als Platzhalter und werden durch Originalfotos aus dem Studio ersetzt."
      />
      <div className="shell pb-16 md:pb-24">
        <GalleryGrid images={gallery} />
      </div>
      <BookingCTA title="Dein Look wartet." />
    </SiteLayout>
  );
}
