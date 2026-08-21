/**
 * BUSINESS CONTENT — single source of truth.
 *
 * Everything a new studio needs to change lives in this file plus
 * src/content/services.ts, reviews.ts and media.ts.
 *
 * Sources (Stand: Recherche myangelnails.de, bestes-nagelstudio.berlin,
 * Treatwell). Nicht verifizierte Angaben sind mit "TODO" markiert.
 */

export type OpeningHour = { days: string; hours: string };

export type Location = {
  id: string;
  name: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
  addressLocality: string;
  phone: string;
  phoneHref: string;
  /**
   * Messenger-Kontakte für diesen Standort.
   * TODO: aktuell = Studio-Festnetznummer im internationalen Format.
   * Falls es eigene WhatsApp/Viber-Geschäftsnummern gibt, hier ersetzen.
   */
  messengers: {
    /** E.164-Format ohne "+", z.B. "493042020652" */
    whatsapp: string;
    /** E.164-Format mit "+", z.B. "+493042020652" */
    viber: string;
    /**
     * LINE hat keinen universellen Telefon-Deeplink wie WhatsApp/Viber.
     * TODO: echte LINE-ID eintragen (z.B. "@angelnails"), sonst bleibt der
     * LINE-Button ausgeblendet.
     */
    lineId?: string;
  };
  mapsUrl: string;
  bookingUrl: string;
  geo: { lat: number; lng: number };
  hours: OpeningHour[];
  /** schema.org openingHours format */
  schemaHours: string[];
  note?: string;
  transport?: string;
};

export const business = {
  name: "Angel Nails",
  legalName: "Angel Nails Nagelstudio & Lashes",
  tagline: "Nail & Beauty Studio",
  city: "Berlin",
  languages: ["Deutsch", "English", "Tiếng Việt"],
  /** Sprache der Website. Weitere Sprachen später: eigene content/-Datei je Sprache. */
  locale: "de",
  email: "", // TODO: keine öffentliche E-Mail-Adresse verifizierbar
  instagramHandle: "@angel_nails_nagelstudio",
  social: {
    instagram: "https://www.instagram.com/angel_nails_nagelstudio/?hl=de",
    tiktok: "https://www.tiktok.com/@angel_nails_nagelstudio",
    facebook: "https://www.facebook.com/angelnails.nagelstudio/",
  },
  imprintUrl: "https://myangelnails.de/?page_id=32",
  payment: "Zahlung ausschließlich in bar (Quelle: Treatwell)",
  amenities: ["Kostenloses WLAN", "Kinderfreundlich", "Haustiere erlaubt"],
} as const;

export const cta = {
  book: "Termin buchen",
  services: "Leistungen ansehen",
  instagram: "Instagram ansehen",
  directions: "Route planen",
} as const;

export const locations: Location[] = [
  {
    id: "prenzlauer-berg",
    name: "Studio Prenzlauer Berg",
    city: "Berlin",
    district: "Prenzlauer Berg / Pankow",
    street: "Danziger Straße 142",
    postalCode: "10407",
    addressLocality: "Berlin",
    phone: "030 42020652",
    phoneHref: "tel:+493042020652",
    messengers: {
      whatsapp: "493042020652",
      viber: "+493042020652",
      // TODO: echte LINE-ID eintragen, z.B. "@angelnails-pberg" — Feld einfach ergänzen, dann erscheint der Button automatisch
    },
    mapsUrl:
      "https://www.google.com/maps/place/Angel+Nails+Nagelstudio+Berlin+Prenzlauer+Berg/@52.5345841,13.4331239,17z",
    bookingUrl:
      "https://buchung.treatwell.de/ort/angel-nails-nagelstudio-lashes-berlin-prenzlauer-berg/",
    geo: { lat: 52.5345841, lng: 13.4356988 },
    hours: [
      { days: "Montag – Freitag", hours: "09:00 – 19:00" },
      { days: "Samstag", hours: "09:00 – 17:00" },
      { days: "Sonntag", hours: "Geschlossen" },
    ],
    schemaHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
    transport: "Tram & Bus Greifswalder Straße / Danziger Straße / Arnswalder Platz",
  },
  {
    id: "hennigsdorf",
    name: "Studio Hennigsdorf",
    city: "Hennigsdorf",
    district: "Havelpassage",
    street: "Havelpassage 6",
    postalCode: "16761",
    addressLocality: "Hennigsdorf",
    phone: "03302 4949729",
    phoneHref: "tel:+4933024949729",
    messengers: {
      whatsapp: "4933024949729",
      viber: "+4933024949729",
      // TODO: echte LINE-ID eintragen, z.B. "@angelnails-hennigsdorf" — Feld einfach ergänzen, dann erscheint der Button automatisch
    },
    mapsUrl: "https://www.google.com/maps/place/Angel+Nails+Nagelstudio/@52.63717,13.2001952,17z",
    bookingUrl: "https://buchung.treatwell.de/ort/angel-nails-nagelstudio-lashes-hennigsdorf/",
    geo: { lat: 52.63717, lng: 13.2027701 },
    hours: [
      { days: "Montag – Freitag", hours: "09:00 – 18:30" },
      { days: "Samstag", hours: "09:00 – 15:30" },
      { days: "Sonntag", hours: "Geschlossen" },
    ],
    schemaHours: ["Mo-Fr 09:00-18:30", "Sa 09:00-15:30"],
    note: "Hinweis: Für die Rufnummer kursieren zwei Varianten (…729 / …728). Angegeben ist die Nummer der aktuellen Website myangelnails.de.",
  },
];

/** Primärer Buchungslink (Treatwell) — pro Standort in `locations`. */
export const booking = {
  /** Wimpern & Augenbrauen sind online über Treatwell buchbar. */
  onlineLabel: "Wimpern & Augenbrauen online buchen",
  /** Für Nägel & Füße wird laut myangelnails.de per Terminanfrage/Telefon gebucht. */
  nailsNote: "Termine für Nägel und Füße bitte telefonisch im gewünschten Studio anfragen.",
  defaultUrl:
    "https://buchung.treatwell.de/ort/angel-nails-nagelstudio-lashes-berlin-prenzlauer-berg/",
} as const;

import teamNhi from "@/assets/team-nhi.webp";
import teamHang from "@/assets/team-hang.webp";
import teamLoan from "@/assets/team-loan.webp";
import teamHana from "@/assets/team-hana.webp";

export type TeamMember = {
  name: string;
  rating: string;
  reviews: number;
  portrait: string;
  locationId: string;
};

export const team = {
  /**
   * Quelle: Treatwell Salonprofil Prenzlauer Berg.
   * TODO: Team für Hennigsdorf ist noch nicht verifiziert/eingepflegt —
   * bitte NICHT mit Platzhalterdaten auffüllen, sondern echte Namen/Fotos
   * ergänzen sobald verfügbar (locationId: "hennigsdorf").
   */
  members: [
    { name: "Nhi", rating: "4,9", reviews: 194, portrait: teamNhi, locationId: "prenzlauer-berg" },
    {
      name: "Hang",
      rating: "4,8",
      reviews: 145,
      portrait: teamHang,
      locationId: "prenzlauer-berg",
    },
    { name: "Loan", rating: "4,8", reviews: 87, portrait: teamLoan, locationId: "prenzlauer-berg" },
    { name: "Hana", rating: "4,7", reviews: 46, portrait: teamHana, locationId: "prenzlauer-berg" },
  ] satisfies TeamMember[],
  source: "Treatwell",
  /** Die Porträts sind gezeichnete Illustrationen, keine Fotos. */
  portraitNote: "Die Porträts sind gezeichnete Illustrationen im Karikatur-Stil — keine Fotos.",
} as const;
