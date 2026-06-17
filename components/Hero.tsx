import { site } from "@/lib/site";
import NoSkipPlayer from "./NoSkipPlayer";
import CalEmbed from "./CalEmbed";

export default function Hero() {
  const { h1, sub, videoSrc, videoThumbnail, videoCrop, captionsSrc, captionsDefault } = site.hero;

  return (
    <section className="relative">
      <div className="container-x pt-20 pb-section md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="h1">{h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body md:text-bodyLg text-mutedHi">{sub}</p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-5xl">
          <NoSkipPlayer
            src={videoSrc}
            poster={videoThumbnail}
            title="Intro"
            crop={videoCrop}
            captionsSrc={captionsSrc}
            defaultCaptions={captionsDefault}
          />
        </div>

        <div className="mx-auto mt-12 w-full max-w-6xl">
          <CalEmbed calLink={site.calLink} namespace="hero" />
        </div>
      </div>
    </section>
  );
}
