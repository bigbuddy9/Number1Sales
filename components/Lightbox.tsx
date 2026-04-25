"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Img = { src: string; alt: string };

type LightboxState = { images: Img[]; index: number } | null;

type Ctx = { open: (images: Img[], index: number) => void };

const LightboxCtx = createContext<Ctx | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxCtx);
  if (!ctx) throw new Error("useLightbox must be used inside <LightboxProvider>");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>(null);
  const touchStartX = useRef<number | null>(null);

  const open = useCallback((images: Img[], index: number) => {
    setState({ images, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const next = useCallback(() => {
    setState((s) => (s ? { ...s, index: (s.index + 1) % s.images.length } : s));
  }, []);

  const prev = useCallback(() => {
    setState((s) =>
      s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s,
    );
  }, []);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [state, close, next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  };

  const current = state ? state.images[state.index] : null;
  const showArrows = !!state && state.images.length > 1;

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}
      {state && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute right-4 top-4 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-mutedHi hover:text-ink"
            aria-label="Close"
          >
            Close ✕
          </button>
          {showArrows && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/80 text-2xl text-mutedHi hover:text-ink md:left-6 md:h-14 md:w-14"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/80 text-2xl text-mutedHi hover:text-ink md:right-6 md:h-14 md:w-14"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[92vw] rounded-lg border border-border"
          />
        </div>
      )}
    </LightboxCtx.Provider>
  );
}
