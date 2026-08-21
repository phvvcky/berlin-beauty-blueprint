import { locations } from "@/content/business";
import { useLocation } from "@/lib/location-context";

/** Kleiner Pill-Toggle zum Umschalten zwischen den Studio-Standorten. */
export function LocationSwitcher() {
  const { location, setLocationId } = useLocation();

  return (
    <div
      role="tablist"
      aria-label="Studio auswählen"
      className="inline-flex items-center gap-1 rounded-full border bg-secondary/60 p-1"
    >
      {locations.map((loc) => {
        const active = loc.id === location.id;
        return (
          <button
            key={loc.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setLocationId(loc.id)}
            className={`rounded-full px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {loc.city}
          </button>
        );
      })}
    </div>
  );
}
