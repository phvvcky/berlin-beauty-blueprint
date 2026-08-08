import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "max-w-2xl"
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <As className="display-lg">{title}</As>
      {intro ? (
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
      ) : null}
      {children}
    </div>
  );
}
