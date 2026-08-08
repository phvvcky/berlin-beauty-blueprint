export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="shell pt-12 pb-10 md:pt-20 md:pb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-xl mt-5 !text-[clamp(2.5rem,8vw,6rem)]">{title}</h1>
      {intro ? (
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
