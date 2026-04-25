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
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {cases.map((c, i) => (
              <article key={i} className="rounded-2xl border border-border bg-surface p-6">
                <header>
                  <h3 className="h3">{c.header}</h3>
                  <p className="mt-1 text-sm text-muted">{c.client}</p>
                </header>
                <p className="mt-4 text-base font-semibold text-accent">{c.keyResult}</p>
                {c.quote ? (
                  <blockquote className="mt-4 text-mutedHi">&ldquo;{c.quote}&rdquo;</blockquote>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
