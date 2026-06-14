import { Suspense } from "react";
import { site } from "@/lib/site";
import VideoPlayer from "./VideoPlayer";
import BookingDetails from "./BookingDetails";

export default function ConfirmationHero() {
  const { eyebrow, h1, sub, videoEmbedUrl, videoThumbnail } = site.confirmation;

  return (
    <section className="relative">
      <div className="container-x pt-8 pb-section md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-accentSoft">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(212,175,55,0.7)]"
              aria-hidden
            />
            {eyebrow}
          </p>
          <Suspense fallback={null}>
            <BookingDetails />
          </Suspense>
          <h1 className="h1 mt-6">{h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body md:text-bodyLg text-mutedHi">{sub}</p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-video">
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
