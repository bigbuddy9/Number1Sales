import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function TotalRevenue() {
  const { header, body, headline, sub, screenshot } = site.totalRevenue;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="prose-x">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_220px] md:gap-10">
            <div>
              <h2 className="h2">{header}</h2>
              <p className="mt-6 body-lg">{body}</p>
              <div className="mt-6">
                <div className="text-3xl font-extrabold tracking-tight text-accent md:text-4xl">
                  {headline}
                </div>
                <div className="mt-2 text-sm font-medium text-mutedHi">{sub}</div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[220px] md:max-w-none">
              <Screenshot
                src={screenshot.src}
                alt={screenshot.alt}
                fit="contain"
                aspect="aspect-[1/2]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
