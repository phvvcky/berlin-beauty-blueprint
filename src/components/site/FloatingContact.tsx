import { useState } from "react";
import { useLocation } from "@/lib/location-context";

/**
 * Floating Messenger-Buttons — WhatsApp, Viber, LINE.
 * Nutzt die Messenger-Kontakte des aktuell gewählten Standorts
 * (siehe LocationSwitcher / src/content/business.ts).
 *
 * Klick auf den runden Auslöser (Logo) öffnet die drei Kanäle. Jeder
 * Kanal-Button öffnet direkt den Chat mit dem Studio.
 */
export function FloatingContact() {
  const { location } = useLocation();
  const [open, setOpen] = useState(false);

  const digitsOnly = location.messengers.whatsapp.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${digitsOnly}`;
  const viberHref = `viber://chat?number=${encodeURIComponent(location.messengers.viber)}`;
  const lineHref = location.messengers.lineId
    ? `https://line.me/R/ti/p/${encodeURIComponent(location.messengers.lineId)}`
    : undefined;

  const channels = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: whatsappHref,
      bg: "#25D366",
      icon: <WhatsAppIcon />,
    },
    {
      key: "viber",
      label: "Viber",
      href: viberHref,
      bg: "#7360F2",
      icon: <ViberIcon />,
    },
    ...(lineHref
      ? [
          {
            key: "line",
            label: "LINE",
            href: lineHref,
            bg: "#06C755",
            icon: <LineIcon />,
          },
        ]
      : []),
  ];

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 lg:bottom-6">
      {open ? (
        <ul className="flex flex-col items-end gap-3">
          {channels.map((ch) => (
            <li key={ch.key}>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ch.label} — Chat mit ${location.name} öffnen`}
                title={`${ch.label}: ${location.name}`}
                className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
                style={{ backgroundColor: ch.bg }}
              >
                {ch.icon}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={
          open ? "Kontakt-Menü schließen" : "Kontakt-Menü öffnen — per Messenger schreiben"
        }
        className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-transform hover:scale-105"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16.02 4C9.4 4 4 9.36 4 15.94c0 2.2.6 4.27 1.66 6.06L4 28l6.2-1.62a12.05 12.05 0 0 0 5.82 1.48h.01c6.62 0 12.02-5.36 12.02-11.94C28.05 9.36 22.65 4 16.02 4Z"
        fill="#fff"
      />
      <path
        d="M22.86 19.02c-.32-.16-1.9-.93-2.2-1.04-.29-.1-.5-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.53-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z"
        fill="#25D366"
      />
    </svg>
  );
}

function ViberIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 5c-6 0-10.6 3.9-10.6 10 0 4.1 2.1 7.3 5.5 9v3.9l3.9-3.1c.4 0 .8.06 1.2.06 6 0 10.6-3.9 10.6-9.85C26.6 8.9 22 5 16 5Z"
        fill="#fff"
      />
      <path
        d="M16.5 8.4c-.4 0-.5.1-.5.5s.1.5.5.5c3.6.1 5.9 2.3 6 6.1 0 .4.1.5.5.5s.5-.1.5-.5c-.1-4.3-2.7-7-7-7.1Z"
        fill="#7360F2"
      />
      <path
        d="M16.4 10.5c-.3 0-.4.1-.4.4s.1.4.4.4c2 .1 3 1.2 3.1 3.3 0 .3.1.4.4.4s.4-.1.4-.4c-.1-2.5-1.5-4-4-4.1ZM21.5 18.9c-.3-.2-1.5-1.2-2.2-1.4-.5-.2-.7 0-1 .3-.2.2-.7.9-.9 1.1-.2.2-.4.2-.7 0-.4-.2-1.5-.6-2.8-1.7-1-.9-1.7-2-1.9-2.4-.2-.4 0-.5.15-.7.14-.15.3-.35.45-.5.15-.2.2-.3.3-.5.1-.2.05-.4-.02-.55-.08-.16-.7-1.7-.96-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.55.08-.83.4-.28.32-1.1 1.03-1.1 2.55 0 1.5 1.1 3 1.28 3.2.15.2 2.2 3.35 5.3 4.7.75.32 1.33.5 1.78.65.75.24 1.43.2 1.96.12.6-.1 1.85-.75 2.1-1.48.27-.73.27-1.35.19-1.48-.08-.14-.28-.2-.6-.36Z"
        fill="#7360F2"
      />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="9" fill="#fff" />
      <path
        d="M25.9 15.3c0-4.5-4.5-8.1-10-8.1s-10 3.6-10 8.1c0 4 3.5 7.4 8.3 8v-1.9s-.02 0 0 0c-.05-.32.2-.6.55-.6h.02c4.62-.6 8-3.6 8-7.5Z"
        fill="#06C755"
      />
      <path
        d="M13.4 12.7h-.7c-.1 0-.2.1-.2.2v4.4c0 .1.1.2.2.2h.7c.1 0 .2-.1.2-.2v-4.4c0-.1-.1-.2-.2-.2ZM18.4 12.7h-.7c-.1 0-.2.1-.2.2v2.6l-2-2.7-.02-.02v-.02h-.7c-.1 0-.2.1-.2.2v4.4c0 .1.1.2.2.2h.7c.1 0 .2-.1.2-.2v-2.6l2 2.7.05.05h.67c.1 0 .2-.1.2-.2v-4.4c0-.1-.1-.2-.2-.2ZM11.9 16.6h-1.7v-3.7c0-.1-.1-.2-.2-.2h-.7c-.1 0-.2.1-.2.2v4.4c0 .05.02.1.05.14.03.03.08.06.13.06h2.6c.1 0 .2-.1.2-.2v-.7c0-.1-.1-.2-.2-.2ZM22.3 13.6c.1 0 .2-.1.2-.2v-.7c0-.1-.1-.2-.2-.2h-2.6c-.05 0-.1.02-.14.05-.03.04-.05.09-.05.14v4.4c0 .05.02.1.05.13.04.04.09.06.14.06h2.6c.1 0 .2-.1.2-.2v-.7c0-.1-.1-.2-.2-.2h-1.7v-.7h1.7c.1 0 .2-.1.2-.2v-.7c0-.1-.1-.2-.2-.2h-1.7v-.75h1.7Z"
        fill="#fff"
      />
    </svg>
  );
}
