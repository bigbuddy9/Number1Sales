import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted md:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={site.bookingUrl} className="hover:text-ink">Book a Call</a>
          <a href={`https://${site.domain}`} className="hover:text-ink">{site.domain}</a>
        </div>
      </div>
    </footer>
  );
}
