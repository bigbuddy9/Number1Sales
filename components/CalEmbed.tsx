"use client";

import { useEffect, useRef } from "react";

type Props = {
  calLink: string;
  namespace?: string;
  minHeight?: number;
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

export default function CalEmbed({ calLink, namespace = "default", minHeight = 600 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (!window.Cal) return;
      const Cal = window.Cal;

      // Bootstrap the Cal global if it's a fresh load
      if (!Cal.loaded) {
        Cal.ns = Cal.ns || {};
        Cal.q = Cal.q || [];
      }

      Cal("init", namespace, { origin: "https://app.cal.com" });

      Cal.ns[namespace]("inline", {
        elementOrSelector: containerRef.current,
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink,
      });

      Cal.ns[namespace]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#D4AF37" },
          dark: {
            "cal-brand": "#D4AF37",
            "cal-text": "#FFFFFF",
            "cal-bg": "#0A0A0A",
            "cal-bg-emphasis": "#16161A",
            "cal-border": "#1F1F23",
          },
        },
      });
    };

    document.head.appendChild(script);

    return () => {
      // Leave the script — removing it breaks other embeds on the same page.
    };
  }, [calLink, namespace]);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-surface"
      style={{ minHeight }}
    >
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%", overflow: "scroll", minHeight }}
      />
    </div>
  );
}
