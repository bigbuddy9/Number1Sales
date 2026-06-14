import { site } from "@/lib/site";

export default function Requirements() {
  const { header, note, items } = site.confirmation.requirements;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="prose-x text-center">
          <h2 className="h2">{header}</h2>
          <p className="mt-4 body-lg">{note}</p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5"
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accentInk"
                aria-hidden
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink md:text-lg">{item.title}</h3>
                <p className="mt-1 text-body text-mutedHi">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
