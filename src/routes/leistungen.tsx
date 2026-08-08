import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceCategoryBlock } from "@/components/site/ServiceCategoryBlock";
import { BookingCTA } from "@/components/site/BookingCTA";
import { serviceCategories, priceSourceNote } from "@/content/services";
import { pageMeta } from "@/lib/seo";

const title = "Leistungen & Preise — Angel Nails Berlin & Hennigsdorf";
const description =
  "Alle Leistungen von Angel Nails: Maniküre, Gel- und Nagelmodellage, Nail Art, Pediküre, Wimpernverlängerung ab 32 € und Augenbrauen ab 10 €.";

export const Route = createFileRoute("/leistungen")({
  head: () => pageMeta({ title, description, path: "/leistungen" }),
  component: Leistungen,
});

function Leistungen() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Leistungen"
        title="Preise"
        intro="Nägel, Füße, Wimpern und Augenbrauen. Preise für Wimpern- und Augenbrauenbehandlungen sind verbindlich über Treatwell hinterlegt; Nagelpreise nennen wir dir gern im Studio."
      />

      <div className="shell pb-4">
        <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">{priceSourceNote}</p>
      </div>

      <div className="shell pb-16 md:pb-24">
        {serviceCategories.map((category, i) => (
          <ServiceCategoryBlock key={category.id} category={category} index={i} />
        ))}
      </div>

      <BookingCTA title="Termin sichern" />
    </SiteLayout>
  );
}
