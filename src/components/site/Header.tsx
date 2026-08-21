import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { business, cta, booking } from "@/content/business";
import { ActionLink } from "./ActionLink";
import { LocationSwitcher } from "./LocationSwitcher";
import logo from "@/assets/logo.png";

export const navItems = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/galerie", label: "Galerie" },
  { to: "/team", label: "Team" },
  { to: "/studio", label: "Studio" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-sm border-b"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-10 items-center justify-end border-b border-black/5">
        <LocationSwitcher />
      </div>

      <div className="shell flex h-[70px] items-center justify-between md:h-[86px]">
        <Link to="/" className="flex items-center gap-3" aria-label={`${business.name} Startseite`}>
          <img
            src={logo}
            alt={`${business.name} Logo`}
            width={512}
            height={512}
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-tight md:text-[1.75rem]">
              {business.name}
            </span>
            <span className="eyebrow mt-1 text-[0.6rem]">Berlin · Hennigsdorf</span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="link-underline text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ActionLink href={booking.defaultUrl} external variant="primary" className="!min-h-11">
            {cta.book}
          </ActionLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-foreground transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-foreground transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="lg:hidden">
          <nav aria-label="Mobile Navigation" className="shell flex flex-col gap-1 pb-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b py-4 font-display text-3xl"
              >
                {item.label}
              </Link>
            ))}
            <ActionLink href={booking.defaultUrl} external className="mt-6 w-full">
              {cta.book}
            </ActionLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
