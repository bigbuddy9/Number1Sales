import Link from "next/link";
import { site } from "@/lib/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-bg/80 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {site.brand}
        </Link>
        <a
          href={site.bookingUrl}
          className="btn-primary text-sm plausible-event-name=cta_click plausible-event-position=nav"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
