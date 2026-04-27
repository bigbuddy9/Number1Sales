import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function TotalRevenue() {
  const { header, body, headline, sub, screenshot } = site.totalRevenue;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_300px] md:gap-16 lg:grid-cols-[1fr_340px]">
          <div className="prose-x md:mx-0">
            <h2 className="h2">{header}</h2>
            <p className="mt-6 body-lg">{body}</p>
            <div className="mt-8">
              <div className="text-4xl font-extrabold tracking-tight text-accent md:text-5xl">
                {headline}
              </div>
              <div className="mt-2 text-sm font-medium text-mutedHi">{sub}</div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[260px] md:max-w-none">
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
