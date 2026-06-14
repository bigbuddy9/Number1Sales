import { site } from "@/lib/site";

export default function Requirements() {
  const { header, note, items, footer } = site.confirmation.requirements;

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
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accentSoft to-accent text-accentInk shadow-[0_4px_16px_-2px_rgba(212,175,55,0.55)]"
                aria-hidden
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink md:text-lg">{item.title}</h3>
                <p className="mt-1.5 text-body text-mutedHi">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>

        {footer ? (
          <p className="mx-auto mt-10 max-w-3xl text-center text-base font-semibold text-accent md:text-lg">
            {footer}
          </p>
        ) : null}
      </div>
    </section>
  );
}
