import { booking, business, cta, locations } from "@/content/business";

/** Mobile-only sticky conversion bar. */
export function StickyBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur-sm lg:hidden">
      <div className="flex items-stretch gap-2 px-3 py-3">
        <a
          href={locations[0]!.phoneHref}
          className="btn-base btn-outline !px-3 !text-[0.65rem]"
          aria-label="Studio Prenzlauer Berg anrufen"
        >
          Anrufen
        </a>
        <a
          href={business.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-outline !px-3 !text-[0.65rem]"
          aria-label="Instagram ansehen"
        >
          Instagram
        </a>
        <a
          href={booking.defaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-primary flex-1 !px-3"
        >
          {cta.book}
        </a>
      </div>
    </div>
  );
}

