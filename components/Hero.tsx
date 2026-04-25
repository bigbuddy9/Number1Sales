import { site } from "@/lib/site";
import VideoPlayer from "./VideoPlayer";

export default function Hero() {
  const { h1, sub, videoEmbedUrl, videoThumbnail, cta } = site.hero;

  return (
    <section className="relative">
      <div className="container-x pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="h1">{h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body md:text-bodyLg text-mutedHi">{sub}</p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-video">
          <VideoPlayer embedUrl={videoEmbedUrl} thumbnail={videoThumbnail} title="Intro" />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.bookingUrl}
            className="btn-primary-lg plausible-event-name=cta_click plausible-event-position=hero"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
