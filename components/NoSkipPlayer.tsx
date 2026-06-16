"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type Hls from "hls.js";

type Props = {
  /** HLS manifest (.m3u8) or an .mp4 file URL. */
  src: string;
  /** Poster image shown before play (path in /public or absolute URL). */
  poster?: string;
  title?: string;
};

const SPEEDS = [1, 1.25, 1.5, 2];

function fmt(t: number): string {
  if (!isFinite(t) || t < 0) t = 0;
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function NoSkipPlayer({ src, poster, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const maxTimeRef = useRef(0);

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [speedOpen, setSpeedOpen] = useState(false);
  const [hasCaptions, setHasCaptions] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(false);

  // Load the source (HLS via hls.js, or native for Safari/mp4).
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const isM3u8 = /\.m3u8(\?.*)?$/i.test(src);
    const nativeHls = video.canPlayType("application/vnd.apple.mpegurl");

    if (isM3u8 && !nativeHls) {
      let cancelled = false;
      import("hls.js").then(({ default: HlsCtor }) => {
        if (cancelled || !videoRef.current) return;
        if (!HlsCtor.isSupported()) {
          video.src = src;
          return;
        }
        const hls = new HlsCtor({ enableWorker: true });
        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(HlsCtor.Events.SUBTITLE_TRACKS_UPDATED, (_evt, data) => {
          setHasCaptions((data?.subtitleTracks?.length ?? 0) > 0);
        });
        hls.subtitleDisplay = false;
      });
      return () => {
        cancelled = true;
        hlsRef.current?.destroy();
        hlsRef.current = null;
      };
    }

    // Native playback (Safari HLS or mp4).
    video.src = src;
    const sync = () => setHasCaptions(video.textTracks.length > 0);
    sync();
    video.textTracks.addEventListener?.("addtrack", sync);
    return () => video.textTracks.removeEventListener?.("addtrack", sync);
  }, [src]);

  // Block skipping ahead: allow rewind, snap back any forward jump.
  const guardSeek = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.currentTime > maxTimeRef.current + 0.5) {
      v.currentTime = maxTimeRef.current;
    }
  }, []);

  const onTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    // Advance the watched watermark only during real, contiguous playback.
    if (v.currentTime > maxTimeRef.current && v.currentTime - maxTimeRef.current < 1.5) {
      maxTimeRef.current = v.currentTime;
    }
    setCurrent(v.currentTime);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    if (v.paused) v.play();
    else v.pause();
  }, []);

  const cycleSpeedTo = (s: number) => {
    const v = videoRef.current;
    if (v) v.playbackRate = s;
    setSpeed(s);
    setSpeedOpen(false);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const toggleCaptions = () => {
    const next = !captionsOn;
    setCaptionsOn(next);
    const hls = hlsRef.current;
    if (hls) {
      hls.subtitleDisplay = next;
      hls.subtitleTrack = next ? 0 : -1;
    } else {
      const v = videoRef.current;
      if (v && v.textTracks[0]) v.textTracks[0].mode = next ? "showing" : "disabled";
    }
  };

  const toggleFullscreen = () => {
    const el = videoRef.current?.parentElement;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  if (!src) {
    return (
      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="flex flex-col items-center gap-2 text-muted">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg/60">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
            </svg>
          </div>
          <p className="text-sm">Video pending</p>
        </div>
      </div>
    );
  }

  const pct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-black">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        poster={poster || undefined}
        className="h-full w-full"
        playsInline
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={onTimeUpdate}
        onSeeking={guardSeek}
        onSeeked={guardSeek}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        aria-label={title ?? "Video"}
      />

      {/* Center play overlay (before start / when paused). */}
      {!playing ? (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/10"
          aria-label="Play video"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accentInk shadow-[0_20px_60px_-20px_rgba(212,175,55,0.6)] transition group-hover:scale-105">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </button>
      ) : null}

      {/* Control bar. No draggable scrubber — skipping ahead is blocked. */}
      {started ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition group-hover:opacity-100 [.paused_&]:opacity-100">
          {/* Non-interactive progress indicator. */}
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
          </div>

          <div className="pointer-events-auto flex items-center gap-3 text-white">
            <button type="button" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
              {playing ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              )}
            </button>

            <span className="text-xs tabular-nums text-white/80">
              {fmt(current)} / {fmt(duration)}
            </span>

            <div className="ml-auto flex items-center gap-3">
              {/* Speed */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSpeedOpen((o) => !o)}
                  className="rounded px-1.5 text-xs font-semibold text-white/90 hover:text-white"
                  aria-label="Playback speed"
                >
                  {speed}x
                </button>
                {speedOpen ? (
                  <div className="absolute bottom-7 right-0 flex flex-col overflow-hidden rounded-lg border border-white/15 bg-black/90 text-xs">
                    {SPEEDS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => cycleSpeedTo(s)}
                        className={`px-3 py-1.5 text-left hover:bg-white/10 ${
                          s === speed ? "text-accent" : "text-white/90"
                        }`}
                      >
                        {s}x
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Captions */}
              {hasCaptions ? (
                <button
                  type="button"
                  onClick={toggleCaptions}
                  className={`rounded px-1 text-xs font-bold ${
                    captionsOn ? "text-accent" : "text-white/90 hover:text-white"
                  }`}
                  aria-label="Toggle subtitles"
                >
                  CC
                </button>
              ) : null}

              {/* Mute */}
              <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
                {muted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4 9v6h4l5 5V4L8 9H4Zm12.5 3 2.5 2.5-1 1L15.5 13 13 15.5l-1-1L14.5 12 12 9.5l1-1L15.5 11 18 8.5l1 1L16.5 12Z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4 9v6h4l5 5V4L8 9H4Zm12 3a4 4 0 0 0-2-3.46v6.92A4 4 0 0 0 16 12Z" />
                  </svg>
                )}
              </button>

              {/* Fullscreen */}
              <button type="button" onClick={toggleFullscreen} aria-label="Fullscreen">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4 9V4h5v2H6v3H4Zm11-5h5v5h-2V6h-3V4ZM4 15h2v3h3v2H4v-5Zm14 0h2v5h-5v-2h3v-3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
