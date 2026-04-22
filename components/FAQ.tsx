import { site } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-border/60 bg-surface/30">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Questions we hear a lot.
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-bg">
          {site.faq.map((item) => (
            <details key={item.q} className="group px-6 py-5 open:bg-surface/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold">
                {item.q}
                <span className="text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
