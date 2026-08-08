/**
 * BILDER — zum Austauschen einfach die Dateien in src/assets/ ersetzen
 * (gleicher Dateiname) oder hier neue Importe eintragen.
 * Aktuell: hochwertige Platzhalter-Motive, keine Originalfotos von Angel Nails.
 */

import hero from "@/assets/hero.jpg";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";
import work06 from "@/assets/work-06.jpg";
import work07 from "@/assets/work-07.jpg";
import work08 from "@/assets/work-08.jpg";
import studio01 from "@/assets/studio-01.jpg";
import studio02 from "@/assets/studio-02.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export const heroImage: GalleryImage = {
  src: hero,
  alt: "Hände mit gepflegter Nagelmodellage in Nude-Beige auf hellem Leinen",
  width: 1600,
  height: 1920,
};

export const studioImages: GalleryImage[] = [
  {
    src: studio01,
    alt: "Heller Maniküre-Arbeitsplatz mit Holztisch und ruhiger, warmer Einrichtung",
    width: 1408,
    height: 1008,
  },
  {
    src: studio02,
    alt: "Regal mit Nagellackflaschen in Nude- und Brauntönen im Studio",
    width: 1400,
    height: 1000,
  },
];

export const gallery: GalleryImage[] = [
  { src: work01, alt: "Milchig-weiße Gelnägel in ovaler Form", width: 900, height: 1200, caption: "Gel · Milky White" },
  { src: work02, alt: "Nahaufnahme eines Auges mit Wimpernverlängerung in Volumentechnik", width: 1200, height: 900, caption: "Wimpern · Volumen" },
  { src: work03, alt: "Hände mit dunkelbrauner Farbgel-Maniküre halten eine Tasse", width: 900, height: 1200, caption: "Farbgel · Espresso" },
  { src: work04, alt: "Detailaufnahme glänzender Nägel in warmem Nude-Ton", width: 900, height: 1200, caption: "Maniküre · Nude" },
  { src: work05, alt: "Pflegeprodukte und Handtuch als Sinnbild für Pediküre und Fußpflege", width: 1200, height: 900, caption: "Pediküre · Pflege" },
  { src: work06, alt: "Lange Stiletto-Nägel in dunklem Espressobraun mit Hochglanz", width: 900, height: 1200, caption: "Modellage · Stiletto" },
  { src: work07, alt: "Hände mit zartem Flieder-Farbgel auf Marmor", width: 900, height: 1200, caption: "Farbgel · Lilac" },
  { src: work08, alt: "Nageldesignerin arbeitet konzentriert an der Maniküre einer Kundin", width: 1000, height: 1000, caption: "Im Studio" },
];

/** Auswahl für die Startseite */
export const featuredGallery = gallery.slice(0, 5);
/** Auswahl für die Instagram-Sektion */
export const instagramGallery = gallery.filter((_, i) => [3, 1, 6, 5].includes(i));

