import { useCallback, useRef, useState } from "react";
import type { BeforeAfterPair } from "@/content/media";

/**
 * Vorher-/Nachher-Slider. Bilder kommen aus `beforeAfterPairs` in src/content/media.ts
 * und lassen sich dort 1:1 gegen neue Studio-Fotos tauschen.
 */
export function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const [value, setValue] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <figure className="group">
      <div
        ref={frameRef}
        className="relative aspect-[4/5] w-full select-none overflow-hidden bg-secondary"
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) setFromClientX(e.clientX);
        }}
      >
        <img
          src={pair.after.src}
          alt={pair.after.alt}
          loading="lazy"
          decoding="async"
          className="img-cover absolute inset-0"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <img
            src={pair.before.src}
            alt={pair.before.alt}
            loading="lazy"
            decoding="async"
            className="img-cover"
          />
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
          style={{ left: `${value}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-background/70 bg-background/90 text-[0.6rem] uppercase tracking-[0.18em] shadow-[var(--shadow-soft)]">
            ‹ ›
          </span>
        </div>

        <span className="absolute bottom-4 left-4 bg-background/85 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.22em]">
          Vorher
        </span>
        <span className="absolute right-4 bottom-4 bg-foreground/85 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-background">
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
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 h-11 w-full cursor-ew-resize opacity-0"
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
