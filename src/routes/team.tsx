import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { BookingCTA } from "@/components/site/BookingCTA";
import { TeamGrid } from "@/components/site/TeamGrid";
import { business } from "@/content/business";
import { pageMeta } from "@/lib/seo";

const title = "Team — Angel Nails Berlin Prenzlauer Berg";
const description =
  "Das Team von Angel Nails: Nhi, Hang, Loan und Hana — Nagelmodellage, Wimpernverlängerung und Augenbrauen in Berlin Prenzlauer Berg und Hennigsdorf.";

export const Route = createFileRoute("/team")({
  head: () => pageMeta({ title, description, path: "/team" }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Die Hände hinter der Arbeit"
        title="Team"
        intro={`Vier Stylistinnen, ein Anspruch: saubere Arbeit, ehrliche Beratung und Zeit für deine Wünsche. Im Studio sprechen wir ${business.languages.join(", ")}.`}
      />

      <TeamGrid />

      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-10 border-t pt-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="display-md">Wie wir arbeiten</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Jede Behandlung beginnt mit einem kurzen Gespräch: Nagelform, Länge, Farbe,
              Wimpern-Intensität. Wir arbeiten mit hochwertigen Materialien, sauberer Vorbereitung
              und nehmen uns die Zeit, die eine Arbeit braucht — nicht die, die in einen Slot passt.
            </p>
          </div>
          <div>
            <h2 className="display-md">Gut zu wissen</h2>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {business.amenities.map((item) => (
                <li key={item} className="border-b pb-2">
                  {item}
                </li>
              ))}
              <li className="border-b pb-2">{business.payment}</li>
              <li className="border-b pb-2">Sprachen: {business.languages.join(" · ")}</li>
            </ul>
          </div>
        </div>
      </section>

      <BookingCTA title="Lern uns kennen." />
    </SiteLayout>
  );
}
