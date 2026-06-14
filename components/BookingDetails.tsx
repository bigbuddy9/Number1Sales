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
  const rawDate = DATE_KEYS.map((k) => params.get(k)).find(Boolean) ?? null;

  let when: string | null = null;
  if (rawDate) {
    const d = new Date(rawDate);
    if (!isNaN(d.getTime())) {
      when = new Intl.DateTimeFormat("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(d);
    }
  }

  if (!name && !when) return null;

  return (
    <p className="mt-4 text-body text-mutedHi">
      {name ? (
        <>
          {name.split(" ")[0]}, you&rsquo;re locked in
        </>
      ) : (
        "You're locked in"
      )}
      {when ? (
        <>
          {" — "}
          <span className="font-semibold text-ink">{when}</span>
        </>
      ) : (
        "."
      )}
    </p>
  );
}
