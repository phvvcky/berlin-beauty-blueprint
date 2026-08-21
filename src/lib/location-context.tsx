import { createContext, useContext, useState, type ReactNode } from "react";
import { locations, type Location } from "@/content/business";

const STORAGE_KEY = "angel-nails-location";

type LocationContextValue = {
  location: Location;
  setLocationId: (id: string) => void;
};

const LocationContext = createContext<LocationContextValue | null>(null);

function readInitialLocationId(): string {
  if (typeof window === "undefined") return locations[0]!.id;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && locations.some((l) => l.id === stored)) return stored;
  } catch {
    // localStorage kann in privaten Modi/Sandbox-Umgebungen fehlschlagen — ignorieren
  }
  return locations[0]!.id;
}

export function LocationProvider({ children }: { children: ReactNode }) {
  const [locationId, setLocationIdState] = useState<string>(readInitialLocationId);

  const setLocationId = (id: string) => {
    setLocationIdState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // ignorieren
    }
  };

  const location = locations.find((l) => l.id === locationId) ?? locations[0]!;

  return (
    <LocationContext.Provider value={{ location, setLocationId }}>
      {children}
    </LocationContext.Provider>
  );
}

/** Aktuell gewählter Standort + Setter. Muss innerhalb von <LocationProvider> genutzt werden. */
export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation muss innerhalb von <LocationProvider> genutzt werden.");
  return ctx;
}
