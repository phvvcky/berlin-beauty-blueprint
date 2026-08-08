import { booking, cta, locations } from "@/content/business";

export function BookingCTA({
  title = "Bereit für deinen nächsten Look?",
  text = "Wimpern und Augenbrauen buchst du direkt online. Für Nägel und Füße genügt ein Anruf im Studio deiner Wahl.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-foreground text-background">
      <div className="shell section">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="display-lg text-background">{title}</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70 md:text-base">
              {text}
            </p>
            <p className="mt-3 text-xs text-background/50">{booking.nailsNote}</p>
          </div>

          <div className="md:col-span-6 md:pl-10">
            <ul className="space-y-8">
              {locations.map((loc) => (
                <li key={loc.id} className="border-t border-background/20 pt-6">
                  <p className="font-display text-2xl text-background">{loc.name}</p>
                  <p className="mt-1 text-sm text-background/60">
                    {loc.street}, {loc.postalCode} {loc.addressLocality}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={loc.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-ghost-light"
                    >
                      {cta.book}
                    </a>
                    <a href={loc.phoneHref} className="btn-base btn-ghost-light">
                      {loc.phone}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
