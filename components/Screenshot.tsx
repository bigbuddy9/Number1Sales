"use client";

import { useState } from "react";
import { useLightbox } from "./Lightbox";

type Img = { src: string; alt: string };

type Props = {
  src?: string;
  alt: string;
  images?: Img[];
  index?: number;
  featured?: boolean;
  fit?: "cover" | "contain";
  aspect?: string;
};

export default function Screenshot({
  src,
  alt,
  images,
  index,
  featured,
  fit = "cover",
  aspect,
}: Props) {
  const { open } = useLightbox();
  const [errored, setErrored] = useState(false);

  const wrapClass = featured ? "md:col-span-2" : "";
  const finalAspect =
    aspect ?? (featured ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[16/10]");

  if (!src || errored) {
    return (
      <div
        className={`${wrapClass} flex ${finalAspect} items-center justify-center rounded-lg border border-border bg-surface text-sm text-muted`}
      >
        <span>Screenshot pending</span>
      </div>
    );
  }

  const objectFit = fit === "contain" ? "object-contain" : "object-cover object-top";

  return (
    <button
      type="button"
      onClick={() =>
        images && index !== undefined ? open(images, index) : open([{ src, alt }], 0)
      }
      className={`${wrapClass} group block w-full overflow-hidden rounded-lg border border-border bg-surface transition hover:border-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      aria-label={`Expand: ${alt}`}
    >
      <div className={`${finalAspect} w-full overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className={`h-full w-full ${objectFit} transition group-hover:scale-[1.01]`}
        />
      </div>
    </button>
  );
}
