import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "scale" | "mask";

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  scale: "reveal-scale",
  mask: "reveal-mask",
};

/**
 * Blendet Inhalte beim Scrollen ein (IntersectionObserver, einmalig).
 * Wiederverwendbar für alle Studio-Templates.
 */
export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-revealed={shown ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(variantClass[variant], className)}
    >
      {children}
    </Tag>
  );
}

/** Staffelt direkte Kinder einer Liste/Grid-Sektion. */
export function RevealStagger({
  children,
  step = 90,
  variant = "up",
  className,
}: {
  children: ReactNode[];
  step?: number;
  variant?: RevealVariant;
  className?: string | undefined;
}) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal key={i} variant={variant} delay={i * step} className={className}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
