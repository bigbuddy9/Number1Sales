import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function Proof() {
  const { header, intro, introTwo, months, summary } = site.proof;

  const allImages = [
    ...months.flatMap((m) => m.screenshots),
    ...(summary ? [summary.screenshot] : []),
  ].map((s) => ({ src: s.src, alt: s.alt }));

  let imgIdx = 0;

  return (
    <section id="proof" className="section border-t border-border/50">
      <div className="container-x">
        <header className="prose-x text-center">
          <h2 className="h2">{header}</h2>
          <p className="mt-6 body-lg">{intro}</p>
          <p className="mt-4 body-lg">{introTwo}</p>
        </header>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {months.map((m) => (
            <article key={m.label} className="prose-x">
              <h3 className="h3 text-ink">{m.label}</h3>
              <p className="mt-3 text-sm font-medium text-mutedHi">{m.medals}</p>
              {"highlight" in m && m.highlight ? (
                <p className="mt-4 text-base font-semibold text-accent">{m.highlight}</p>
              ) : null}
              <div className="mt-5 space-y-4">
                {m.body.split("\n\n").map((p, i) => (
                  <p key={i} className="body-lg">{p}</p>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                {m.screenshots.map((s) => {
                  const i = imgIdx++;
                  return (
                    <Screenshot
                      key={s.src}
                      src={s.src}
                      alt={s.alt}
                      featured={s.featured}
                      images={allImages}
                      index={i}
                    />
                  );
                })}
              </div>
            </article>
          ))}

          {summary ? (
            <article className="prose-x">
              <h3 className="h3 text-ink">{summary.label}</h3>
              <p className="mt-3 body-lg">{summary.body}</p>
              <div className="mx-auto mt-6 max-w-md">
                <Screenshot
                  src={summary.screenshot.src}
                  alt={summary.screenshot.alt}
                  fit="contain"
                  aspect="aspect-[3/4]"
                  images={allImages}
                  index={imgIdx++}
                />
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
