import { site } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-border/60 bg-surface/30">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            From first call to scaled team in 3 steps.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {site.howItWorks.map((s) => (
            <div key={s.step} className="rounded-2xl border border-border bg-bg p-6">
              <div className="text-sm font-semibold text-accent">{s.step}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
