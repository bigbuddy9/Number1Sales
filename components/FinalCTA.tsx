import { site } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.18),_transparent_60%)]"
        />
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Ready to 5x your solar business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Book a 20-minute call. We&apos;ll diagnose the leaks and show you the exact blueprint to plug them.
        </p>
        <a href={site.bookingUrl} className="btn-primary mt-8">
          Book a Call
        </a>
      </div>
    </section>
  );
}
