import { site } from "@/lib/site";

export default function Receipts() {
  const { header, paragraphs, cta } = site.receipts;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="prose-x">
          <h2 className="h2 text-center">{header}</h2>
          <div className="mt-8 space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="body-lg">{p}</p>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href={site.bookingUrl}
            className="btn-primary-lg plausible-event-name=cta_click plausible-event-position=receipts"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
