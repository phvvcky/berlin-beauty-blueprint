import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyBookingBar } from "./StickyBookingBar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="inhalt" className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyBookingBar />
    </div>
  );
}
