import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function Proof() {
  const { header, intro, introTwo, months } = site.proof;

  return (
    <section id="proof" className="section border-t border-border/50">
      <div className="container-x">
        <header className="prose-x text-center">
          <h2 className="h2">{header}</h2>
          <p className="mt-6 body-lg">{intro}</p>
          <p className="mt-4 body-lg">{introTwo}</p>
        </header>

        <div className="mt-20 space-y-20 md:mt-24 md:space-y-28">
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

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {m.screenshots.map((s, i) => (
                  <Screenshot key={i} src={s.src} alt={s.alt} caption={s.caption} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
