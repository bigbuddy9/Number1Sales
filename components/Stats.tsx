import { site } from "@/lib/site";

export default function Stats() {
  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div className="container-x grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
        {site.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold tracking-tight md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
