import { site } from "@/lib/site";
import VideoPlayer from "./VideoPlayer";

export default function ConfirmationHero() {
  const { eyebrow, h1, sub, videoBadge, videoEmbedUrl, videoThumbnail } = site.confirmation;

  return (
    <section className="relative">
      <div className="container-x pt-20 pb-section md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-accentSoft">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(212,175,55,0.7)]"
              aria-hidden
            />
            {eyebrow}
          </p>
          <h1 className="h1 mt-6">{h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body md:text-bodyLg text-mutedHi">{sub}</p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-video">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accentInk shadow-[0_8px_24px_-6px_rgba(212,175,55,0.55)]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
              {videoBadge}
            </span>
          </div>
          <VideoPlayer
            embedUrl={videoEmbedUrl}
            thumbnail={videoThumbnail}
            title="Watch this before your call"
          />
        </div>
      </div>
    </section>
  );
}
