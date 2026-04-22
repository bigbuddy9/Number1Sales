// Single source of truth for copy and links. Edit here to update the site.
export const site = {
  brand: "Number One Sales",
  domain: "number1sales.com",
  // Primary CTA — swap for your Cal.com / TidyCal / Calendly link when ready.
  bookingUrl: "https://cal.com/number1sales",
  hero: {
    eyebrow: "The Number One Solar Blueprint",
    headline: "The proven sales blueprint to 5x your solar business.",
    sub: "A battle-tested system for solar companies and reps who are done guessing — more booked appointments, higher close rates, bigger checks.",
    primaryCta: "Book a Call",
    secondaryCta: "See the Proof",
    // Paste a YouTube/Vimeo/Loom embed URL here when the intro video is ready.
    // Example: "https://www.youtube.com/embed/VIDEO_ID"
    videoEmbedUrl: "" as string,
  },
  stats: [
    { value: "5x", label: "Average pipeline lift" },
    { value: "30+", label: "Solar teams trained" },
    { value: "$10M+", label: "In rep-generated revenue" },
  ],
  valueProps: [
    {
      title: "Book more appointments",
      body: "Scripts, openers, and objection handlers that turn cold doors and dials into booked sits — no fluff, no theory.",
    },
    {
      title: "Close at a higher rate",
      body: "A closing framework designed specifically for solar — urgency, financing, and the exact language that gets signatures.",
    },
    {
      title: "Build a repeatable system",
      body: "Daily standups, KPIs, and management playbooks so your team performs without you babysitting every deal.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Book a call",
      body: "We diagnose where deals are leaking — lead gen, appointments, or close rate — in 20 minutes.",
    },
    {
      step: "02",
      title: "Install the blueprint",
      body: "Scripts, playbooks, and training dropped into your team. Reps use it on their next shift.",
    },
    {
      step: "03",
      title: "Scale what works",
      body: "Weekly tuning, KPI reviews, and new plays as your team hits each milestone.",
    },
  ],
  testimonials: [
    {
      quote: "Our close rate jumped from 11% to 27% in six weeks. This is the real stuff.",
      author: "Testimonial placeholder",
      role: "Solar Sales Manager",
    },
    {
      quote: "My reps stopped dreading the phone. Booked sits doubled in the first month.",
      author: "Testimonial placeholder",
      role: "Owner, Residential Solar",
    },
    {
      quote: "Finally a system built for solar instead of generic sales theory.",
      author: "Testimonial placeholder",
      role: "Regional Director",
    },
  ],
  faq: [
    {
      q: "Who is this for?",
      a: "Solar companies, sales managers, and individual reps who want a proven system instead of piecing together advice from a dozen gurus.",
    },
    {
      q: "How fast will I see results?",
      a: "Most teams see more booked appointments within the first week and close-rate lift inside 30 days.",
    },
    {
      q: "Do I need a big team?",
      a: "No. This works for solo reps, small crews, and full organizations — the system scales with you.",
    },
    {
      q: "What happens on the call?",
      a: "We diagnose where your sales process is leaking and show you exactly what the blueprint would change. No pressure.",
    },
  ],
};

export type Site = typeof site;
