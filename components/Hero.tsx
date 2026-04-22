import { site } from "@/lib/site";

export default function Hero() {
  const { eyebrow, headline, sub, primaryCta, secondaryCta, videoEmbedUrl } = site.hero;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.18),_transparent_55%)]"
      />
      <div className="container-x pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">{sub}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={site.bookingUrl} className="btn-primary">
            {primaryCta}
          </a>
          <a href="#proof" className="btn-secondary">
            {secondaryCta}
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-20px_rgba(245,158,11,0.25)]">
            {videoEmbedUrl ? (
              <iframe
                src={videoEmbedUrl}
                title="Intro video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg/60">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-sm">Intro video goes here</p>
                <p className="text-xs">Set <code className="rounded bg-bg/60 px-1 py-0.5">hero.videoEmbedUrl</code> in <code className="rounded bg-bg/60 px-1 py-0.5">lib/site.ts</code></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
