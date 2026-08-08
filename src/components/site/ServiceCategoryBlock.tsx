import type { ServiceCategory } from "@/content/services";

export function ServiceCategoryBlock({
  category,
  index,
}: {
  category: ServiceCategory;
  index?: number;
}) {
  return (
    <section id={category.id} className="scroll-mt-28 border-t py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-12 md:gap-12">
        <header className="md:col-span-4">
          {typeof index === "number" ? (
            <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
          ) : null}
          <h2 className="display-md mt-3">{category.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{category.intro}</p>
          {category.note ? (
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">{category.note}</p>
          ) : null}
        </header>

        <ul className="md:col-span-8">
          {category.services.map((service) => (
            <li
              key={service.name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-5 first:border-t md:first:border-t-0"
            >
              <div className="min-w-[60%] flex-1">
                <h3 className="text-base font-normal">{service.name}</h3>
                {service.description ? (
                  <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                ) : null}
              </div>
              <div className="text-right">
                <p className="whitespace-nowrap text-base">{service.price ?? "auf Anfrage"}</p>
                {service.duration ? (
                  <p className="text-xs text-muted-foreground">{service.duration}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
