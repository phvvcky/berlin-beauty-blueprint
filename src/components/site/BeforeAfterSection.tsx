import { beforeAfterPairs } from "@/content/media";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Reveal } from "./Reveal";

export function BeforeAfterSection() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Vorher · Nachher</p>
            <h2 className="display-lg mt-4">Zieh den Regler</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Echte Arbeiten aus dem Studio Prenzlauer Berg — vom Naturnagel zur fertigen Modellage.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-10">
          {beforeAfterPairs.map((pair, i) => (
            <Reveal key={pair.id} delay={i * 120}>
              <BeforeAfterSlider pair={pair} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
