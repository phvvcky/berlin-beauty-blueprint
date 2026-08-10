import { Link } from "@tanstack/react-router";
import { business, locations } from "@/content/business";
import { navItems } from "./Header";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-px bg-foreground text-background/85">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={logo}
              alt={`${business.name} Logo`}
              width={512}
              height={512}
              className="h-14 w-14"
            />
            <p className="font-display mt-5 text-4xl text-background md:text-5xl">{business.name}</p>
            <p className="eyebrow mt-3 !text-background/55">{business.tagline}</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/70">
              Zwei Studios für Nägel, Wimpern und Augenbrauen. Wir sprechen{" "}
              {business.languages.join(", ")}.
            </p>
          </div>

          <div>
            <h2 className="eyebrow !text-background/55">Studios</h2>
            <ul className="mt-5 space-y-6 text-sm">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <p className="text-background">{loc.name}</p>
                  <p className="text-background/70">
                    {loc.street}, {loc.postalCode} {loc.addressLocality}
                  </p>
                  <a href={loc.phoneHref} className="link-underline text-background/70">
                    {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow !text-background/55">Navigation</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-underline text-background/80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="eyebrow mt-8 !text-background/55">Social</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-background/80"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={business.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-background/80"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-background/80"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-background/15 pt-8 text-xs text-background/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.legalName}
          </p>
          <a
            href={business.imprintUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}
