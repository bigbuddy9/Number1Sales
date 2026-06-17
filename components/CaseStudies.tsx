import { site } from "@/lib/site";

export default function CaseStudies() {
  const { header, placeholder, cases } = site.caseStudies;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="prose-x text-center">
          <h2 className="h2">{header}</h2>
          {cases.length === 0 ? (
            <p className="mt-6 body-lg">{placeholder}</p>
          ) : null}
        </div>

        {cases.length > 0 ? (
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
            {cases.map((c, i) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/30"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{c.client}</h3>
                  <span className="shrink-0 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {c.timeframe}
                  </span>
                </div>

                {/* Divider */}
                <div className="mt-5 border-t border-border/60" />

                {/* Stats grid */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {c.stats.map((s, j) => (
                    <div key={j} className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium uppercase tracking-widest text-muted">
                        {s.label}
                      </span>
                      <span className="text-2xl font-bold tracking-tight text-accent">
                        {s.value}
                      </span>
                      <span className="text-xs text-muted">{s.detail}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
