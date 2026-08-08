/**
 * SERVICE DATA
 * Preise: verifiziert über Treatwell (Studio Prenzlauer Berg).
 * Für Nagel- und Fußpflege liegen öffentlich keine Preise vor -> "Preis auf Anfrage".
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
  "Preise laut Treatwell-Profil Studio Prenzlauer Berg. Änderungen vorbehalten — Preise im Studio können abweichen.";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "naegel",
    title: "Maniküre & Nagelmodellage",
    intro:
      "Klassische Pflege, Gel- und Acrylmodellage, Auffüllen und Neuanlage — abgestimmt auf deine Nagelform.",
    note: "Preise auf Anfrage — für Nägel und Füße sind online keine verbindlichen Preise hinterlegt.",
    services: [
      {
        name: "Maniküre",
        description: "Formen, Nagelhautpflege, Politur.",
        price: "Preis auf Anfrage",
      },
      {
        name: "Nagelmodellage — Neuanlage",
        description: "Gel oder Acryl, individuelle Länge und Form.",
        price: "Preis auf Anfrage",
      },
      {
        name: "Auffüllen",
        description: "Auffüllen einer bestehenden Modellage.",
        price: "Preis auf Anfrage",
      },
      {
        name: "Shellac / Farbgel",
        description: "Langhaltende Farbe auf dem Naturnagel.",
        price: "Preis auf Anfrage",
      },
      {
        name: "Nail Art & Design",
        description: "French, Chrome, Ombré, Steinchen und freie Designs.",
        price: "Preis auf Anfrage",
      },
    ],
  },
  {
    id: "fuesse",
    title: "Pediküre & Fußpflege",
    intro: "Gepflegte Füße — klassisch oder mit langhaltender Farbe.",
    note: "Preise auf Anfrage.",
    services: [
      { name: "Pediküre", description: "Fußbad, Nagelpflege, Hornhaut.", price: "Preis auf Anfrage" },
      { name: "Pediküre mit Farbgel", price: "Preis auf Anfrage" },
    ],
  },
  {
    id: "wimpern-neuanlage",
    title: "Wimpernverlängerung — Neuanlage",
    intro:
      "Von natürlich bis dramatisch: 1:1 Technik für einen dezenten Look, Volumentechnik für mehr Fülle.",
    services: [
      { name: "1:1 Technik Soft", price: "55 €", duration: "45 Min." },
      { name: "1:1 Technik Medium", price: "75 €", duration: "1 Std." },
      { name: "1:1 Technik Extrem", price: "95 €", duration: "1 Std." },
      { name: "Volumentechnik Angel", price: "65 €", duration: "1 Std. 30 Min." },
      { name: "Volumentechnik Bad Angel", price: "85 €", duration: "1 Std. 30 Min." },
      { name: "Volumentechnik Devil", price: "105 €", duration: "2 Std." },
    ],
  },
  {
    id: "wimpern-auffuellen",
    title: "Wimpern auffüllen",
    intro:
      "Preis richtet sich nach dem Abstand zur letzten Behandlung. Angegeben ist der Startpreis bis 2 Wochen.",
    services: [
      { name: "Auffüllen 1:1 Soft", price: "ab 32 €", duration: "40 – 45 Min." },
      { name: "Auffüllen 1:1 Medium", price: "ab 40 €", duration: "1 Std." },
      { name: "Auffüllen 1:1 Extrem", price: "ab 45 €", duration: "1 Std." },
      { name: "Auffüllen Volumen Angel", price: "ab 40 €", duration: "1 – 1,5 Std." },
      { name: "Auffüllen Volumen Bad Angel", price: "ab 45 €", duration: "1 – 1,5 Std." },
    ],
  },
  {
    id: "augenbrauen",
    title: "Augenbrauen & Wimpernpflege",
    intro: "Form, Farbe und Lifting — schnelle Termine mit sichtbarem Effekt.",
    services: [
      { name: "Wimpernlifting inkl. Färben & Keratin", price: "45 €", duration: "1 Std." },
      { name: "Augenbrauen färben & zupfen", price: "15 €", duration: "15 Min." },
      { name: "Weitere Augenbrauen- & Wimpernbehandlungen", price: "ab 10 €" },
    ],
  },
];

/** Auf der Startseite hervorgehobene Kategorien */
export const featuredCategoryIds = ["naegel", "wimpern-neuanlage", "augenbrauen", "fuesse"];
