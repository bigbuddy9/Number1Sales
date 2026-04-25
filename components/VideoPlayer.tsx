"use client";

import { useState } from "react";

type Props = {
  embedUrl: string;
  thumbnail?: string;
  title?: string;
};

function withParams(url: string, params: Record<string, string>) {
  if (!url) return url;
  const sep = url.includes("?") ? "&" : "?";
  const qs = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  return `${url}${sep}${qs}`;
}

export default function VideoPlayer({ embedUrl, thumbnail, title }: Props) {
  const [playing, setPlaying] = useState(false);

  if (!embedUrl) {
    return (
      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="flex flex-col items-center gap-2 text-muted">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg/60">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
            </svg>
          </div>
          <p className="text-sm">Intro video pending</p>
        </div>
      </div>
    );
  }

  const playSrc = withParams(embedUrl, { autoplay: "1", rel: "0", modestbranding: "1" });

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={title ? `Play: ${title}` : "Play video"}
      >
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt={title ?? "Video thumbnail"}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-surfaceHi to-bg" />
        )}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accentInk shadow-[0_20px_60px_-20px_rgba(16,185,129,0.6)] transition group-hover:scale-105">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black">
      <iframe
        src={playSrc}
        title={title ?? "Intro video"}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
