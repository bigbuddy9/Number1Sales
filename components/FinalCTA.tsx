import { site } from "@/lib/site";
import CalEmbed from "./CalEmbed";

export default function FinalCTA() {
  const { title, tagline, body } = site.finalCta;

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <div className="prose-x text-center">
          <h2 className="h2">{title}</h2>
          <p className="mt-4 text-base font-semibold text-accent md:text-lg">{tagline}</p>
          <p className="mt-4 body-lg">{body}</p>
        </div>
        <div className="mx-auto mt-10 w-full max-w-5xl">
          <CalEmbed calLink={site.calLink} namespace="final" />
        </div>
      </div>
    </section>
  );
}
