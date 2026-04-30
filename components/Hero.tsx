import { site } from "@/lib/site";
import VideoPlayer from "./VideoPlayer";
import CalEmbed from "./CalEmbed";

export default function Hero() {
  const { h1, sub, videoEmbedUrl, videoThumbnail } = site.hero;

  return (
    <section className="relative">
      <div className="container-x pt-20 pb-section md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="h1">{h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body md:text-bodyLg text-mutedHi">{sub}</p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-video">
          <VideoPlayer embedUrl={videoEmbedUrl} thumbnail={videoThumbnail} title="Intro" />
        </div>

        <div className="mx-auto mt-12 w-full max-w-3xl">
          <CalEmbed calLink={site.calLink} namespace="hero" />
        </div>
      </div>
    </section>
  );
}
