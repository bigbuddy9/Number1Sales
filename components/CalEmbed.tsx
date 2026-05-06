"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

type Props = {
  calLink: string;
  /** Identifier for analytics + the embed namespace (must be unique per page). */
  namespace?: string;
  /** Min height of the calendar container. Default 720px reads cleanly on desktop. */
  minHeight?: number;
};

export default function CalEmbed({ calLink, namespace = "default", minHeight = 540 }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#D4AF37",
          },
          dark: {
            "cal-brand": "#D4AF37",
            "cal-text": "#FFFFFF",
            "cal-bg": "#0A0A0A",
            "cal-bg-emphasis": "#16161A",
            "cal-border": "#1F1F23",
          },
        },
        hideEventTypeDetails: true,
        layout: "column_view",
      });
    })();
  }, [namespace]);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-surface"
      style={{ minHeight }}
    >
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight }}
        config={{ layout: "column_view", theme: "dark" }}
      />
    </div>
  );
}
