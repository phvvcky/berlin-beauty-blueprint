import { useCallback, useEffect, useRef, useState } from "react";
import type { BeforeAfterPair } from "@/content/media";

/**
 * Vorher-/Nachher-Slider. Bilder kommen aus `beforeAfterPairs` in src/content/media.ts
 * und lassen sich dort 1:1 gegen neue Studio-Fotos tauschen.
 *
 * Bedienung: ziehen, klicken, Pfeiltasten. Beim ersten Sichtbarwerden fährt der
 * Regler einmal automatisch durch das Bild (Hinweis-Sweep).
 */
export function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const [value, setValue] = useState(62);
  const [dragging, setDragging] = useState(false);
  const [swept, setSwept] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  /* Einmaliger Auto-Sweep, sobald der Slider ins Bild scrollt. */
  useEffect(() => {
    const el = frameRef.current;
    if (!el || swept || typeof IntersectionObserver === "undefined") return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        setSwept(true);
        if (reduce) return;
        const start = performance.now();
        const from = 62;
        const to = 22;
        const back = 55;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / 2200);
          const ease = 1 - Math.pow(1 - t, 3);
          const next = t < 0.55 ? from + (to - from) * (ease / 0.55) : to + (back - to) * ((t - 0.55) / 0.45);
          setValue(next);
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [swept]);

  return (
    <figure className="group">
      <div
        ref={frameRef}
        className="relative aspect-[4/5] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden bg-secondary"
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          setDragging(true);
          setSwept(true);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging || e.buttons === 1) setFromClientX(e.clientX);
        }}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        <img
          src={pair.after.src}
          alt={pair.after.alt}
          loading="lazy"
          decoding="async"
          className="img-cover absolute inset-0 scale-[1.02] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - value}% 0 0)`,
            transition: dragging ? "none" : "clip-path 120ms linear",
          }}
        >
          <img
            src={pair.before.src}
            alt={pair.before.alt}
            loading="lazy"
            decoding="async"
            className="img-cover grayscale-[35%]"
          />
        </div>

        {/* Trennlinie + Griff */}
        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-background/95 shadow-[0_0_18px_oklch(0_0_0/25%)]"
          style={{ left: `${value}%`, transition: dragging ? "none" : "left 120ms linear" }}
        >
          <span
            className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-full border border-background/70 bg-background/95 shadow-[var(--shadow-lift)]"
            style={!swept ? { animation: "ba-hint 1.8s ease-in-out infinite" } : undefined}
          >
            <span aria-hidden className="text-xs leading-none">
              ‹
            </span>
            <span aria-hidden className="text-xs leading-none">
              ›
            </span>
          </span>
        </div>

        <span
          className="absolute bottom-4 left-4 bg-background/85 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] transition-opacity duration-300"
          style={{ opacity: value > 14 ? 1 : 0 }}
        >
          Vorher
        </span>
        <span
          className="absolute right-4 bottom-4 bg-foreground/85 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-background transition-opacity duration-300"
          style={{ opacity: value < 86 ? 1 : 0 }}
        >
          Nachher
        </span>

        <label className="sr-only" htmlFor={`ba-${pair.id}`}>
          Vorher-Nachher-Regler für {pair.title}
        </label>
        <input
          id={`ba-${pair.id}`}
          type="range"
          min={0}
          max={100}
          value={Math.round(value)}
          onChange={(e) => {
            setSwept(true);
            setValue(Number(e.target.value));
          }}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-display text-xl">{pair.title}</span>
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          {pair.meta}
        </span>
      </figcaption>
    </figure>
  );
}
