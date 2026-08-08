/**
 * REVIEWS — ausschließlich verifizierte Bewertungen von Treatwell
 * (Profil Angel Nails Nagelstudio & Lashes Berlin Prenzlauer Berg).
 * Keine erfundenen Bewertungen.
 */

export const ratingSummary = {
  score: "4,8",
  scoreValue: 4.8,
  count: 677,
  source: "Treatwell",
  sourceUrl:
    "https://www.treatwell.de/ort/angel-nails-nagelstudio-lashes-berlin-prenzlauer-berg/",
  location: "Studio Prenzlauer Berg",
};

export type Review = {
  text: string;
  author: string;
  treatment: string;
  stylist?: string;
  source: string;
};

export const reviews: Review[] = [
  {
    text: "Ich gehe seit 5 Jahren zu Angel Nails um meine Wimpern sowie meine Nägel machen zu lassen und ich bin jedes Mal super happy mit dem Ergebnis.",
    author: "Lætizia",
    treatment: "Wimpernverlängerung",
    stylist: "Nhi",
    source: "Verifizierte Bewertung · Treatwell",
  },
  {
    text: "Wieder eine hervorragende Arbeit. Hält gute 4 Wochen und länger.",
    author: "Annette",
    treatment: "Wimpernverlängerung",
    stylist: "Hang",
    source: "Verifizierte Bewertung · Treatwell",
  },
  {
    text: "Alles super gelaufen, freundlich wie immer und gute Arbeit — vielen Dank.",
    author: "Lisa",
    treatment: "Wimpernverlängerung",
    stylist: "Hang",
    source: "Verifizierte Bewertung · Treatwell",
  },
];
