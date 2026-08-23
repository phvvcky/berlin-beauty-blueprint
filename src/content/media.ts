/**
 * BILDER — ausschließlich echte Fotos von Angel Nails.
 *
 * Quellen: myangelnails.de (Arbeiten, Studio-Schriftzug) und das
 * Treatwell-Salonprofil Prenzlauer Berg (Salonräume, Ladenfront).
 *
 * NEUE FOTOS EINPFLEGEN:
 * 1. Datei nach src/assets/ legen und hier importieren.
 * 2. Alt-Text, width und height im jeweiligen Eintrag anpassen.
 * 3. Reihenfolge/Auswahl steuern `featuredGallery` und `instagramGallery`.
 */

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
  {
    src: nailsReal01,
    alt: "Babyboomer-Modellage in Rosé-Nude, langes Coffin-Design von Angel Nails",
    width: 1200,
    height: 2133,
    caption: "Modellage · Babyboomer",
  },
  {
    src: studioReal01,
    alt: "Heller Salonraum von Angel Nails Prenzlauer Berg mit weißen Maniküre-Arbeitsplätzen",
    width: 1080,
    height: 720,
    caption: "Studio Prenzlauer Berg",
  },
  {
    src: nailsReal02,
    alt: "Zwei Hände mit rosé-nude Modellage und Visitenkarte von Angel Nails",
    width: 1200,
    height: 1600,
    caption: "Maniküre · Nude Rosé",
  },
  {
    src: studioReal02,
    alt: "Blick durch den Studioraum von Angel Nails mit Marmorboden und goldenen Absperrungen",
    width: 1080,
    height: 720,
    caption: "Salonraum",
  },
  {
    src: nailsReal03,
    alt: "French-Modellage mit rosa Herz-Nailart von Angel Nails",
    width: 1200,
    height: 1600,
    caption: "Nailart · Herz French",
  },
  {
    src: studioSign,
    alt: "Angel Nails Schriftzug mit Flügel-Logo im Studio Prenzlauer Berg",
    width: 1200,
    height: 1600,
    caption: "Angel Nails",
  },
  {
    src: studioReal03,
    alt: "Arbeitsplätze mit Lampen und Spiegeln im Studio Angel Nails Prenzlauer Berg",
    width: 1080,
    height: 720,
    caption: "Arbeitsplätze",
  },

  {
    src: studioFront,
    alt: "Eingang und Schaufenster von Angel Nails in der Danziger Straße 142 in Berlin",
    width: 1080,
    height: 720,
    caption: "Danziger Straße 142",
  },
];

/** Auswahl für die Startseite */
export const featuredGallery = [gallery[0]!, gallery[1]!, gallery[2]!, gallery[4]!, gallery[5]!];
/** Auswahl für die Instagram-Sektion (nur Arbeiten, keine Raumfotos) */
export const instagramGallery = [gallery[0]!, gallery[2]!, gallery[4]!, gallery[5]!];

/**
 * VORHER / NACHHER
 * Aktuell mit echten Angel-Nails-Fotos bestückt. Sobald echte Vorher-Aufnahmen
 * vorliegen, einfach `before.src` austauschen — Layout bleibt gleich.
 */
export type BeforeAfterPair = {
  id: string;
  title: string;
  meta: string;
  before: GalleryImage;
  after: GalleryImage;
};

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "modellage",
    title: "Neumodellage",
    meta: "Babyboomer · ca. 90 Min.",
    before: {
      src: nailsReal02,
      alt: "Hände vor der Modellage bei Angel Nails",
      width: 1200,
      height: 1600,
    },
    after: {
      src: nailsReal01,
      alt: "Hand mit fertiger Babyboomer-Modellage in Rosé-Nude von Angel Nails",
      width: 1200,
      height: 2133,
    },
  },
  {
    id: "nailart",
    title: "Nailart French",
    meta: "Herz-Design · ca. 120 Min.",
    before: {
      src: nailsReal01,
      alt: "Nägel in Rosé-Nude vor dem neuen Nailart-Design",
      width: 1200,
      height: 2133,
    },
    after: {
      src: nailsReal03,
      alt: "French-Modellage mit rosa Herz-Nailart von Angel Nails",
      width: 1200,
      height: 1600,
    },
  },
];


/**
 * ECHTER INSTAGRAM-FEED
 * Öffentliche Post-Permalinks von @angel_nails_nagelstudio. Instagram rendert
 * diese Beiträge live als offizielles Embed (Bild, Caption, Likes bleiben aktuell).
 *
 * NEUE POSTS EINPFLEGEN: Beitrag auf Instagram öffnen, URL kopieren
 * (https://www.instagram.com/p/XXXX/ oder /reel/XXXX/) und hier ergänzen.
 */
export const instagramPosts: string[] = [
  "https://www.instagram.com/reel/DMP77MZi14X/",
];
