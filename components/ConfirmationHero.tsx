import { Suspense } from "react";
import { site } from "@/lib/site";
import VideoPlayer from "./VideoPlayer";
import ConfirmationBadge from "./ConfirmationBadge";
import ConfirmationHeadline from "./ConfirmationHeadline";

export default function ConfirmationHero() {
  const { eyebrow, h1, videoTitle, videoEmbedUrl, videoThumbnail } = site.confirmation;

  return (
    <section className="relative">
      <div className="container-x pt-8 pb-section md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <Suspense
            fallback={
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accentSoft sm:text-sm">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(212,175,55,0.7)]"
                  aria-hidden
                />
                {eyebrow}
              </span>
            }
          >
            <ConfirmationBadge />
          </Suspense>
          <Suspense fallback={<h1 className="h1 mt-6 text-balance">{h1}</h1>}>
            <ConfirmationHeadline />
          </Suspense>
        </div>

        <div className="mx-auto mt-12 w-full max-w-video">
          <VideoPlayer embedUrl={videoEmbedUrl} thumbnail={videoThumbnail} title={videoTitle} />
        </div>
      </div>
    </section>
  );
}
