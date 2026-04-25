import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function TotalRevenue() {
  const { header, body, screenshot } = site.totalRevenue;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="prose-x text-center">
          <h2 className="h2">{header}</h2>
          <p className="mt-6 body-lg">{body}</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Screenshot src={screenshot.src} alt={screenshot.alt} />
        </div>
      </div>
    </section>
  );
}
