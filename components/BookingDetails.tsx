"use client";

import { useSearchParams } from "next/navigation";

// Cal.com appends booking details as query params when "Redirect on booking"
// is set with parameter forwarding on. Param names can vary by Cal version, so
// we check the common ones and render only what we can confidently parse.
const DATE_KEYS = ["startTime", "date", "bookingStartTime", "eventStartTime", "start"];
const NAME_KEYS = ["name", "attendeeName", "attendee", "fullName"];

export default function BookingDetails() {
  const params = useSearchParams();

  const name = NAME_KEYS.map((k) => params.get(k)).find(Boolean) ?? null;
  const firstName = name ? name.split(" ")[0] : null;
  const rawDate = DATE_KEYS.map((k) => params.get(k)).find(Boolean) ?? null;

  let when: string | null = null;
  if (rawDate) {
    const d = new Date(rawDate);
    if (!isNaN(d.getTime())) {
      const dateStr = new Intl.DateTimeFormat("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }).format(d);
      const timeStr = new Intl.DateTimeFormat("en-AU", {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(d);
      when = `${dateStr} · ${timeStr}`;
    }
  }

  if (!when && !firstName) return null;

  return (
    <div className="mt-5 flex justify-center">
      <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-mutedHi">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          className="text-accent"
          aria-hidden
        >
          <path
            d="M7 3v3M17 3v3M4 8h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {when ? (
          <span className="font-semibold text-ink">{when}</span>
        ) : (
          <span className="font-semibold text-ink">You&rsquo;re locked in</span>
        )}
        {firstName ? <span className="text-muted">· {firstName}</span> : null}
      </span>
    </div>
  );
}
