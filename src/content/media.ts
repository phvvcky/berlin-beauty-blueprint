/**
 * BILDER — zum Austauschen einfach die Dateien in src/assets/ ersetzen
 * (gleicher Dateiname) oder hier neue Importe eintragen.
 *
 * ECHTE FOTOS EINPFLEGEN:
 * 1. Originalfotos (Instagram/Google Business) als .jpg nach src/assets/ legen
 *    – z. B. work-01.jpg … work-08.jpg, studio-01.jpg, hero.jpg überschreiben.
 * 2. Alt-Text, width und height im jeweiligen Eintrag unten anpassen.
 * 3. Reihenfolge/Auswahl steuern `featuredGallery` und `instagramGallery`.
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
/** Echte Studiofotos (Quelle: Treatwell-Salonprofil Angel Nails Prenzlauer Berg). */
import studioFront from "@/assets/studio-front.jpg";
import studioReal01 from "@/assets/studio-real-01.jpg";
import studioReal02 from "@/assets/studio-real-02.jpg";
import studioReal03 from "@/assets/studio-real-03.jpg";

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

/** Echte Fotos aus dem Studio Prenzlauer Berg (Quelle: Treatwell-Salonprofil). */
export const studioImages: GalleryImage[] = [
  {
    src: studioReal01,
    alt: "Heller Salonraum von Angel Nails Prenzlauer Berg mit weißen Maniküre-Arbeitsplätzen",
    width: 1080,
    height: 720,
  },
  {
    src: studioReal02,
    alt: "Blick durch den Studioraum von Angel Nails mit Marmorboden und goldenen Absperrungen",
    width: 1080,
    height: 720,
  },
  {
    src: studioReal03,
    alt: "Arbeitsplätze mit Lampen und Spiegeln im Studio Angel Nails Prenzlauer Berg",
    width: 1080,
    height: 720,
  },
  {
    src: studioFront,
    alt: "Eingang und Schaufenster von Angel Nails in der Danziger Straße 142 in Berlin",
    width: 1080,
    height: 720,
  },
];

export const gallery: GalleryImage[] = [
  { src: studioReal01, alt: "Heller Salonraum von Angel Nails Prenzlauer Berg mit weißen Maniküre-Arbeitsplätzen", width: 1080, height: 720, caption: "Studio Prenzlauer Berg" },
  { src: work01, alt: "Milchig-weiße Gelnägel in ovaler Form", width: 900, height: 1200, caption: "Gel · Milky White" },
  { src: work02, alt: "Nahaufnahme eines Auges mit Wimpernverlängerung in Volumentechnik", width: 1200, height: 900, caption: "Wimpern · Volumen" },
  { src: studioReal02, alt: "Blick durch den Studioraum von Angel Nails mit Marmorboden und goldenen Absperrungen", width: 1080, height: 720, caption: "Salonraum" },
  { src: work03, alt: "Hände mit dunkelbrauner Farbgel-Maniküre halten eine Tasse", width: 900, height: 1200, caption: "Farbgel · Espresso" },
  { src: work04, alt: "Detailaufnahme glänzender Nägel in warmem Nude-Ton", width: 900, height: 1200, caption: "Maniküre · Nude" },
  { src: studioReal03, alt: "Arbeitsplätze mit Lampen und Spiegeln im Studio Angel Nails Prenzlauer Berg", width: 1080, height: 720, caption: "Arbeitsplätze" },
  { src: work05, alt: "Pflegeprodukte und Handtuch als Sinnbild für Pediküre und Fußpflege", width: 1200, height: 900, caption: "Pediküre · Pflege" },
  { src: work06, alt: "Lange Stiletto-Nägel in dunklem Espressobraun mit Hochglanz", width: 900, height: 1200, caption: "Modellage · Stiletto" },
  { src: studioFront, alt: "Eingang und Schaufenster von Angel Nails in der Danziger Straße 142 in Berlin", width: 1080, height: 720, caption: "Danziger Straße 142" },
  { src: work07, alt: "Hände mit zartem Flieder-Farbgel auf Marmor", width: 900, height: 1200, caption: "Farbgel · Lilac" },
  { src: work08, alt: "Nageldesignerin arbeitet konzentriert an der Maniküre einer Kundin", width: 1000, height: 1000, caption: "Im Studio" },
];

/** Auswahl für die Startseite */
export const featuredGallery = gallery.slice(0, 5);
/** Auswahl für die Instagram-Sektion (nur Arbeiten, keine Raumfotos) */
export const instagramGallery = [gallery[1]!, gallery[2]!, gallery[5]!, gallery[8]!];

