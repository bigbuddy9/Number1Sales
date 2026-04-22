import { site } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="proof" className="container-x py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Proof</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Real teams. Real numbers.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {site.testimonials.map((t, i) => (
          <figure
            key={i}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <blockquote className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm">
              <div className="font-semibold">{t.author}</div>
              <div className="text-muted">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
