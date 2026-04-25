import { site } from "@/lib/site";

export default function Receipts() {
  const { header, paragraphs } = site.receipts;

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
      </div>
    </section>
  );
}
