import { team } from "@/content/business";
import { SectionHeading } from "./SectionHeading";

/**
 * TEAM — gezeichnete Karikatur-Porträts (Illustrationen, keine Fotos).
 * Austauschbar über `team.members[].portrait` in src/content/business.ts.
 */
export function TeamGrid({
  eyebrow = "Team",
  title = "Wer dich behandelt",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="shell pb-16 md:pb-24">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((member) => (
          <li key={member.name} className="group">
            <div className="overflow-hidden rounded-[999px_999px_28px_28px] bg-secondary">
              <img
                src={member.portrait}
                alt={`Gezeichnetes Porträt von ${member.name}, Stylistin bei Angel Nails`}
                width={816}
                height={816}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <p className="mt-5 font-display text-3xl">{member.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              ★ {member.rating} · {member.reviews} Bewertungen
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
        {team.portraitNote} Bewertungen je Stylistin laut {team.source}-Profil Prenzlauer Berg.
      </p>
    </section>
  );
}
