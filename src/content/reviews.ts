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

/**
 * GOOGLE — Angel Nails Google Business Profil.
 * Werte pflegst du hier zentral; Links zeigen auf das Maps-Profil.
 */
export const googleRating = {
  score: "4,9",
  scoreValue: 4.9,
  countLabel: "1.400+",
  source: "Google",
  /** Bewertungen lesen */
  reviewsUrl:
    "https://www.google.com/maps/place/Angel+Nails+Nagelstudio+Berlin+Prenzlauer+Berg/@52.5345841,13.4331239,17z",
  /** Bewertung abgeben (öffnet das Google-Profil, dort „Rezension schreiben“) */
  writeReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Angel%20Nails%20Nagelstudio%20Danziger%20Stra%C3%9Fe%20142%20Berlin",
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
    text: "Wieder eine hervorragende Arbeit. Hält gute 4 Wochen und länger.",
    author: "Annette",
    treatment: "Wimpernverlängerung",
    stylist: "Hang",
    source: "Verifizierte Bewertung · Treatwell",
  },
  {
    text: "Ich gehe seit 5 Jahren zu Angel Nails, um meine Wimpern sowie meine Nägel machen zu lassen, und ich bin jedes Mal super happy mit dem Ergebnis.",
    author: "Lætizia",
    treatment: "Wimpernverlängerung",
    stylist: "Nhi",
    source: "Verifizierte Bewertung · Treatwell",
  },
  {
    text: "Alles super gelaufen, freundlich wie immer und gute Arbeit — vielen Dank.",
    author: "Lisa",
    treatment: "Wimpernverlängerung",
    stylist: "Hang",
    source: "Verifizierte Bewertung · Treatwell",
  },
  {
    text: "Alles super gewesen, vielen lieben Dank.",
    author: "Maria",
    treatment: "Wimpernverlängerung",
    stylist: "Hang",
    source: "Verifizierte Bewertung · Treatwell",
  },
];

/** Verteilung der 677 Treatwell-Bewertungen (5★ → 1★). */
export const ratingBreakdown = [402, 66, 12, 10, 8];

/** Behandlungs-Scores laut Treatwell-Profil. */
export const treatmentScores = [
  { label: "Wimpernverlängerung", score: "4,8" },
  { label: "Wimpernwelle", score: "4,1" },
];
