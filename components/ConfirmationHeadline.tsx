"use client";

import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

const NAME_KEYS = ["attendeeName", "name", "attendee", "fullName"];

function firstNameFrom(raw: string | null): string | null {
  if (!raw) return null;
  const first = raw.trim().split(/\s+/)[0];
  if (!first) return null;
  return first.charAt(0).toUpperCase() + first.slice(1);
}

export default function ConfirmationHeadline() {
  const params = useSearchParams();
  const base = site.confirmation.h1;
  const name = firstNameFrom(NAME_KEYS.map((k) => params.get(k)).find(Boolean) ?? null);
  // With a name: "Bruno — must watch this video before your call."
  const text = name ? `${name} — ${base.charAt(0).toLowerCase()}${base.slice(1)}` : base;

  return <h1 className="h1 mt-6 text-balance">{text}</h1>;
}
