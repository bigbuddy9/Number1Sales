import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function CaseStudies() {
  const { header, placeholder, cases } = site.caseStudies;

  const allImages = cases.flatMap((c) =>
    c.screenshots.map((s) => ({ src: s.src, alt: s.alt }))
  );

  let imgIdx = 0;

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
          <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
            {cases.map((c) => (
              <article key={c.client} className="prose-x">
                {/* Header row */}
                <h3 className="h3 text-ink">{c.client}</h3>

                {/* Stats row */}
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
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

                {/* Screenshots 2×2 */}
                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                  {c.screenshots.map((s) => {
                    const i = imgIdx++;
                    return (
                      <Screenshot
                        key={s.src}
                        src={s.src}
                        alt={s.alt}
                        images={allImages}
                        index={i}
                        aspect="aspect-[4/3]"
                      />
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
