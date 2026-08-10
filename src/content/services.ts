/**
 * SERVICE DATA
 * Preise: offizielle Preislisten "Angel Nails" & "Angel Lashes" (myangelnails.de, Stand 2024).
 * Keine geschätzten oder erfundenen Preise.
 */

export type Service = {
  name: string;
  description?: string;
  price?: string;
  duration?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  /** Quelle/Hinweis unter der Kategorie */
  note?: string;
  services: Service[];
};

export const priceSourceNote =
  "Preise laut offizieller Preisliste von Angel Nails & Angel Lashes. Änderungen vorbehalten — Zahlung ausschließlich in bar.";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "naegel",
    title: "Nail Services",
    intro:
      "Maniküre, Neumodellage und Auffüllen — in Natur, French, Babyboomer oder farbigem Verlauf.",
    note: "Neumodellage = du kommst mit Naturnägeln. Auffüllen = du kommst mit bestehender Modellage.",
    services: [
      { name: "Maniküre", price: "10 €" },
      { name: "Neumodellage Natur", description: "Nudefarbe.", price: "33 €" },
      {
        name: "Neumodellage Natur mit French",
        description: "Freie Farbauswahl.",
        price: "43 €",
      },
      { name: "Neumodellage Farbe / Babyboomer", price: "38 €" },
      {
        name: "Neumodellage farbiger Verlauf (Ombré)",
        description: "Airbrush oder farbiges Pulver.",
        price: "43 €",
      },
      {
        name: "Ablösen der alten Modellage und alles neu",
        price: "+5 €",
      },
      { name: "Auffüllen Natur", description: "Nudefarbe.", price: "30 €" },
      { name: "Auffüllen Natur mit French", price: "40 €" },
      { name: "Auffüllen Farbe / Babyboomer", price: "35 €" },
      {
        name: "Auffüllen farbiger Verlauf (Ombré)",
        description: "Airbrush oder farbiges Pulver.",
        price: "40 €",
      },
    ],
  },
  {
    id: "fuesse",
    title: "Feet Services",
    intro: "Pediküre klassisch, mit Gel-Farbe oder mit Zehenmodellage.",
    services: [
      { name: "Pediküre", price: "25 €" },
      { name: "Pediküre mit Gel-Farbe", description: "Ohne Aufbau.", price: "40 €" },
      {
        name: "Pediküre mit Zehenmodellage",
        description: "Farbe / Babyboomer / French — neu oder auffüllen.",
        price: "55 €",
      },
      { name: "Neu Zehenmodellage Natur", description: "Nudefarbe.", price: "35 €" },
      { name: "Neu Zehenmodellage Natur mit French", price: "40 €" },
      { name: "Neu Zehenmodellage Farbe / Babyboomer", price: "40 €" },
      { name: "Neu nur Gelfarbe ohne Modellage", price: "30 €" },
      { name: "Auffüllen Zehenmodellage Natur", description: "Nudefarbe.", price: "30 €" },
      { name: "Auffüllen Zehenmodellage Natur mit French", price: "35 €" },
      { name: "Auffüllen Farbe / Babyboomer", price: "35 €" },
      { name: "Auffüllen nur Gelfarbe ohne Modellage", price: "30 €" },
    ],
  },
  {
    id: "wimpern-11",
    title: "Wimpern 1:1 Methode",
    intro:
      "Eine Extension pro Naturwimper — Soft, Medium oder Extrem, je nach gewünschter Intensität.",
    note: "Nach 4 Wochen und 5 Tagen wird automatisch ein Neuset berechnet. Auffüllen nur möglich, wenn noch mind. 10 % der Extensions vorhanden sind.",
    services: [
      { name: "Soft — Neu", price: "55 €" },
      { name: "Soft — Auffüllen bis 2 / 3 / 4 Wochen", price: "32 / 40 / 48 €" },
      { name: "Medium — Neu", price: "75 €" },
      { name: "Medium — Auffüllen bis 2 / 3 / 4 Wochen", price: "40 / 48 / 56 €" },
      { name: "Extrem — Neu", price: "95 €" },
      { name: "Extrem — Auffüllen bis 2 / 3 / 4 Wochen", price: "45 / 55 / 65 €" },
    ],
  },
  {
    id: "wimpern-volumen",
    title: "Wimpern Volumentechnik",
    intro: "Mehrere feine Extensions pro Naturwimper — Angel, Bad Angel oder Devil.",
    note: "Fremdarbeiten, die aufgefüllt werden können, werden mit Aufpreis berechnet.",
    services: [
      { name: "Angel — Neu (2D – 3D)", price: "65 €" },
      { name: "Angel — Auffüllen bis 2 / 3 / 4 Wochen", price: "40 / 48 / 56 €" },
      { name: "Bad Angel — Neu (4D – 5D)", price: "85 €" },
      { name: "Bad Angel — Auffüllen bis 2 / 3 / 4 Wochen", price: "45 / 55 / 65 €" },
      { name: "Devil — Neu (ab 6D)", price: "105 €" },
      { name: "Devil — Auffüllen bis 2 / 3 / 4 Wochen", price: "55 / 65 / 75 €" },
    ],
  },
  {
    id: "wimpern-extras",
    title: "Lifting, Design & Augenbrauen",
    intro: "Schnelle Termine mit sichtbarem Effekt.",
    services: [
      { name: "Wimpern Lifting", description: "Inkl. Färben & Keratin.", price: "40 €" },
      {
        name: "Wimpern Design — Neu",
        description: "Hybrid, Kim K, Wispy — Aufpreis auf das jeweilige Set.",
        price: "+10 €",
      },
      { name: "Wimpern Design — Auffüllen", price: "+5 €" },
      {
        name: "Augenbrauen färben & zupfen",
        description: "Quelle: Treatwell.",
        price: "15 €",
        duration: "15 Min.",
      },
    ],
  },
];

/** Auf der Startseite hervorgehobene Kategorien */
export const featuredCategoryIds = ["naegel", "wimpern-11", "wimpern-volumen", "fuesse"];
