import { booking, business, cta } from "@/content/business";
import { useLocation } from "@/lib/location-context";

/** Mobile-only sticky conversion bar. */
export function StickyBookingBar() {
  const { location } = useLocation();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur-sm lg:hidden">
      <div className="flex items-stretch gap-2 px-3 py-3">
        <a
          href={location.phoneHref}
          className="btn-base btn-outline !px-3 !text-[0.65rem]"
          aria-label={`${location.name} anrufen`}
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
