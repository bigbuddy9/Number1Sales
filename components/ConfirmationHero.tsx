import { site } from "@/lib/site";
import VideoPlayer from "./VideoPlayer";

export default function ConfirmationHero() {
  const { eyebrow, h1, sub, videoEmbedUrl, videoThumbnail } = site.confirmation;

  return (
    <section className="relative">
      <div className="container-x pt-20 pb-section md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            {eyebrow}
          </p>
          <h1 className="h1 mt-6">{h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body md:text-bodyLg text-mutedHi">{sub}</p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-video">
          <VideoPlayer
            embedUrl={videoEmbedUrl}
            thumbnail={videoThumbnail}
            title="Congrats — here's how your call works"
          />
        </div>
      </div>
    </section>
  );
}
