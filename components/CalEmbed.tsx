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

// Pull a start time out of Cal's bookingSuccessful payload, whose exact shape
// varies by version. We check the common paths and return the first string.
function findStartTime(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  const candidates: unknown[] = [d.startTime, d.date, d.start];
  const booking = d.booking;
  if (booking && typeof booking === "object") {
    const b = booking as Record<string, unknown>;
    candidates.push(b.startTime, b.date, b.start);
  }
  for (const c of candidates) {
    if (typeof c === "string" && c) return c;
  }
  return null;
}

export default function CalEmbed({ calLink, namespace = "default", minHeight = 600 }: Props) {
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
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // Redirect to the confirmation page ourselves on a successful booking.
      // Doing it here (instead of Cal's external "Redirect on booking") avoids
      // the "You are leaving Cal.com" interstitial, and lets us pass the real
      // booking time straight through to the date bubble.
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          const data = (e as { detail?: { data?: unknown } }).detail?.data;
          // Temporary: confirms the payload shape during verification.
          console.log("[cal:bookingSuccessful]", data);
          const startTime = findStartTime(data);
          const url = new URL("/confirmed", window.location.origin);
          if (startTime) url.searchParams.set("startTime", startTime);
          window.location.href = url.toString();
        },
      });
    })();
  }, [namespace]);

  return (
    <div className="w-full overflow-hidden" style={{ minHeight }}>
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
