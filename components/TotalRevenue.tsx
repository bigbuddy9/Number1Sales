import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function TotalRevenue() {
  const { header, body, headline, sub, screenshot } = site.totalRevenue;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="prose-x">
          <h2 className="h2 text-center">{header}</h2>
          <p className="mt-6 body-lg">{body}</p>
          <div className="mt-6 text-center">
            <div className="text-3xl font-extrabold tracking-tight text-accent md:text-4xl">
              {headline}
            </div>
            <div className="mt-2 text-sm font-medium text-mutedHi">{sub}</div>
          </div>
          <div className="mx-auto mt-8 max-w-[240px]">
            <Screenshot
              src={screenshot.src}
              alt={screenshot.alt}
              fit="contain"
              aspect="aspect-[1/2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
