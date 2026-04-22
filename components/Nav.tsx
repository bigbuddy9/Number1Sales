import Link from "next/link";
import { site } from "@/lib/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          <span>{site.brand}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#how" className="hover:text-ink">How it works</a>
          <a href="#proof" className="hover:text-ink">Proof</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <a href={site.bookingUrl} className="btn-primary text-xs md:text-sm">
          Book a Call
        </a>
      </div>
    </header>
  );
}
