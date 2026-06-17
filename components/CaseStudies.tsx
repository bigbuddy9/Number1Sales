import Image from "next/image";
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
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {cases.map((c, i) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-border bg-surface overflow-hidden transition-colors hover:border-accent/30"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 px-7 pt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{c.client}</h3>
                  <span className="shrink-0 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {c.timeframe}
                  </span>
                </div>

                {/* Divider */}
                <div className="mt-5 mx-7 border-t border-border/60" />

                {/* Stats grid */}
                <div className="mt-5 px-7 grid grid-cols-2 gap-4">
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

                {/* Screenshot grid */}
                {c.screenshots && c.screenshots.length > 0 ? (
                  <div className="mt-6 grid grid-cols-2 gap-px bg-border/40">
                    {c.screenshots.map((img, k) => (
                      <div key={k} className="relative aspect-[4/3] bg-bg overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 17vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="pb-7" />
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
