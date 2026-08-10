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


import work05 from "@/assets/work-05.jpg";
/** Echte Arbeits- und Studiofotos (Quelle: myangelnails.de / Angel Nails). */
import nailsReal01 from "@/assets/nails-real-01.jpg";
import nailsReal02 from "@/assets/nails-real-02.jpg";
import nailsReal03 from "@/assets/nails-real-03.jpg";
import studioSign from "@/assets/studio-sign.jpg";
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

/** Echtes Kundenfoto aus dem Studio (Quelle: Angel Nails / myangelnails.de). */
export const heroImage: GalleryImage = {
  src: nailsReal01,
  alt: "Hand mit Babyboomer-Modellage in Rosé-Nude von Angel Nails Berlin",
  width: 1200,
  height: 2133,
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
    src: studioSign,
    alt: "Angel Nails Schriftzug mit Flügel-Logo im Studio Prenzlauer Berg",
    width: 1200,
    height: 1600,
  },
  {
    src: studioFront,
    alt: "Eingang und Schaufenster von Angel Nails in der Danziger Straße 142 in Berlin",
    width: 1080,
    height: 720,
  },
];

export const gallery: GalleryImage[] = [
  { src: nailsReal01, alt: "Babyboomer-Modellage in Rosé-Nude, langes Coffin-Design von Angel Nails", width: 1200, height: 2133, caption: "Modellage · Babyboomer" },
  { src: studioReal01, alt: "Heller Salonraum von Angel Nails Prenzlauer Berg mit weißen Maniküre-Arbeitsplätzen", width: 1080, height: 720, caption: "Studio Prenzlauer Berg" },
  { src: nailsReal02, alt: "Zwei Hände mit rosé-nude Modellage und Visitenkarte von Angel Nails", width: 1200, height: 1600, caption: "Maniküre · Nude Rosé" },
  { src: studioReal02, alt: "Blick durch den Studioraum von Angel Nails mit Marmorboden und goldenen Absperrungen", width: 1080, height: 720, caption: "Salonraum" },
  { src: nailsReal03, alt: "French-Modellage mit rosa Herz-Nailart von Angel Nails", width: 1200, height: 1600, caption: "Nailart · Herz French" },
  { src: studioSign, alt: "Angel Nails Schriftzug mit Flügel-Logo im Studio Prenzlauer Berg", width: 1200, height: 1600, caption: "Angel Nails" },
  { src: studioReal03, alt: "Arbeitsplätze mit Lampen und Spiegeln im Studio Angel Nails Prenzlauer Berg", width: 1080, height: 720, caption: "Arbeitsplätze" },
  { src: work05, alt: "Pflegeprodukte und Handtuch als Sinnbild für Pediküre und Fußpflege", width: 1200, height: 900, caption: "Pediküre · Pflege" },
  { src: studioFront, alt: "Eingang und Schaufenster von Angel Nails in der Danziger Straße 142 in Berlin", width: 1080, height: 720, caption: "Danziger Straße 142" },
];

/** Auswahl für die Startseite */
export const featuredGallery = [gallery[0]!, gallery[1]!, gallery[2]!, gallery[4]!, gallery[5]!];
/** Auswahl für die Instagram-Sektion (nur Arbeiten, keine Raumfotos) */
export const instagramGallery = [gallery[0]!, gallery[2]!, gallery[4]!, gallery[5]!];

