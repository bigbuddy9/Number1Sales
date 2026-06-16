import { Suspense } from "react";
import { site } from "@/lib/site";
import NoSkipPlayer from "./NoSkipPlayer";
import ConfirmationBadge from "./ConfirmationBadge";
import ConfirmationHeadline from "./ConfirmationHeadline";

export default function ConfirmationHero() {
  const { eyebrow, h1, videoTitle, videoSrc, videoThumbnail, videoCrop, captionsSrc, captionsDefault } =
    site.confirmation;

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
          <div className="mt-6 flex justify-center" aria-hidden>
            <svg
              className="animate-bounce text-accent"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-5xl">
          <NoSkipPlayer
            src={videoSrc}
            poster={videoThumbnail}
            title={videoTitle}
            crop={videoCrop}
            captionsSrc={captionsSrc}
            defaultCaptions={captionsDefault}
          />
        </div>
      </div>
    </section>
  );
}
