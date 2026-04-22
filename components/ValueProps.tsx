import { site } from "@/lib/site";

export default function ValueProps() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Why it works</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Built for solar. Nothing else.
        </h2>
        <p className="mt-4 text-muted">
          Generic sales training doesn&apos;t close solar deals. The blueprint is engineered from the ground up for our industry.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {site.valueProps.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/50"
          >
            <h3 className="text-lg font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
