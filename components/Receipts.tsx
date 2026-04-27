import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function Receipts() {
  const { header, paragraphs, revenue } = site.receipts;

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

          {revenue ? (
            <div className="mt-14">
              <h3 className="h3 text-ink text-center">{revenue.label}</h3>
              <p className="mt-3 body-lg text-center">{revenue.body}</p>
              <div className="mx-auto mt-6 max-w-md">
                <Screenshot
                  src={revenue.screenshot.src}
                  alt={revenue.screenshot.alt}
                  fit="contain"
                  aspect="aspect-[3/4]"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
