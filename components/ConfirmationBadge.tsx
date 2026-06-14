"use client";

import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

// Cal.com appends booking details as query params when "Redirect on booking"
// is set with parameter forwarding on. Param names vary by Cal version, so we
// check the common ones and only render the date/time when we can parse it.
const DATE_KEYS = ["startTime", "date", "bookingStartTime", "eventStartTime", "start"];

function formatWhen(raw: string | null): string | null {
  if (!raw) return null;
  const d = new Date(raw);
  if (isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(d);
}

export default function ConfirmationBadge() {
  const params = useSearchParams();
  const when = formatWhen(DATE_KEYS.map((k) => params.get(k)).find(Boolean) ?? null);

  return (
    <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accentSoft sm:text-sm">
      <span className="inline-flex items-center gap-2 uppercase tracking-wide">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(212,175,55,0.7)]"
          aria-hidden
        />
        {site.confirmation.eyebrow}
      </span>
      {when ? (
        <span className="inline-flex items-center gap-2.5">
          <span className="hidden h-3.5 w-px bg-accent/30 sm:inline-block" aria-hidden />
          <span className="font-medium normal-case tracking-normal text-mutedHi">{when}</span>
        </span>
      ) : null}
    </span>
  );
}
