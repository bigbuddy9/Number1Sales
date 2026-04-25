"use client";

import { useEffect, useState } from "react";

type Props = {
  src?: string;
  alt: string;
  caption?: string;
};

export default function Screenshot({ src, alt, caption }: Props) {
  const [open, setOpen] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!src || errored) {
    return (
      <figure className="group">
        <div className="flex aspect-[16/10] items-center justify-center rounded-lg border border-border bg-surface text-sm text-muted">
          <span>Screenshot pending</span>
        </div>
        {caption ? <figcaption className="mt-2 text-xs text-muted">{caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <>
      <figure>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full overflow-hidden rounded-lg border border-border bg-surface transition hover:border-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={`Expand: ${alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setErrored(true)}
            className="h-auto w-full transition group-hover:scale-[1.01]"
          />
        </button>
        {caption ? <figcaption className="mt-2 text-xs text-muted">{caption}</figcaption> : null}
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-mutedHi hover:text-ink"
            aria-label="Close"
          >
            Close ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[92vw] rounded-lg border border-border"
          />
        </div>
      )}
    </>
  );
}
