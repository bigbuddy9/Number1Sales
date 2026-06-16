// Single source of truth for copy, links, and structured content.

type ScreenshotEntry = { src: string; alt: string; featured?: boolean };

export const site = {
  brand: "Scale Solar",
  domain: "scalesolar.co",
  bookingUrl: "https://cal.com/team/scale-solar/advisory-session",
  // Used by the inline Cal.com embeds (under hero + final CTA).
  // Format: "username/event-slug" or "team/team-slug/event-slug".
  calLink: "team/scale-solar/advisory-session",
  // Plausible domain — leave as the production domain. Script is injected
  // unconditionally; if no Plausible account exists for this domain yet,
  // the requests are silently dropped. Add the domain at plausible.io when ready.
  plausibleDomain: "scalesolar.co",

  hero: {
    h1: "Implement the #1 solar sales system into your business.",
    sub: "Proven to generate over $100m / year, a replicable process you can plug directly into your company today to 2-5x your revenue, fast.",
    // No-skip player source: a Cloudflare Stream HLS manifest (.m3u8) or an
    // .mp4 URL. Leave empty to show the placeholder.
    videoSrc: "" as string,
    // Poster image (path in /public or absolute URL) shown before play.
    videoThumbnail: "" as string,
    cta: "Book a Call",
  },

  proof: {
    header: "Proof",
    intro:
      "Direct evidence from company-wide sales meetings during my time at RESINC Solar — the #1 solar company in Australia. I worked there from August 2025 to January 2026 before launching Scale Solar.",
    introTwo:
      "In that time: was the #1 salesperson in the company every month, broke the company's weekly and monthly sales records, won the $10,000 company-wide sales competition, won the #1 Salesperson in the Company award, averaged a 50%+ close rate, and personally closed over $3.5M in revenue.",
    months: [
      {
        label: "Month 1 — August",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        body: "Started a week late into August — still finished as the #1 salesperson in the company across every metric. In the final week of the month, became the first rep in company history to cross the 100kW mark for total solar kW sold in a single week.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/aug-total-sales.jpg", alt: "August — monthly total sales (Jesse #1)" },
          { src: "/proof/aug-close-rate.jpg", alt: "August — monthly close rates (Jesse 49%)" },
          { src: "/proof/aug-system-size.jpg", alt: "August — monthly sum of system size (Jesse 230.12 kW)" },
          { src: "/proof/aug-week-31.jpg", alt: "August — weekly snapshot" },
        ],
      },
      {
        label: "Month 2 — September",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        body: "Second month — #1 in every trackable company metric. Screenshots below show the monthly results plus snapshots from two weekly meetings.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/sep-total-sales.jpg", alt: "September — monthly total sales (Jesse 25)" },
          { src: "/proof/sep-close-rate.jpg", alt: "September — monthly close rates (Jesse 49%)" },
          { src: "/proof/sep-system-size.jpg", alt: "September — monthly sum of system size (Jesse 274.56 kW)" },
          { src: "/proof/sep-week-07.jpg", alt: "September — weekly snapshot" },
          { src: "/proof/sep-week-21.jpg", alt: "September — weekly snapshot" },
        ],
      },
      {
        label: "Month 3 — October",
        medals: "🥇 Total Sales · 🥈 Close Rate · 🥇 Total kW Sold",
        body: "#1 across every metric except close rate. Worth flagging: one rep had switched to in-home appointments while the rest of us were on virtual, which structurally lifts close rate.\n\nThis was also the month my cousin Daniel joined the company. Never sold anything in his life — first sales role ever. I trained him on my full process: scripts, frameworks, meeting recordings, the whole system. He finished #2 in the company in his first month, behind me.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/oct-total-sales.jpg", alt: "October — monthly total sales (Jesse #1, Daniel #2)" },
          { src: "/proof/oct-close-rate.jpg", alt: "October — monthly close rates" },
          { src: "/proof/oct-system-size.jpg", alt: "October — monthly sum of system size (Jesse 237.6 kW)" },
          { src: "/proof/oct-week-05.jpg", alt: "October — weekly snapshot" },
          { src: "/proof/oct-week-12.jpg", alt: "October — weekly snapshot" },
          { src: "/proof/oct-week-19.jpg", alt: "October — weekly snapshot" },
        ],
      },
      {
        label: "Month 4 — November",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        highlight: "National weekly and monthly sales records broken.",
        body: "Broke the company's all-time weekly sales record. Then broke the all-time monthly record — same month. #1 across every trackable metric. Daniel finished #2 across every metric again, in his second month.\n\nScreenshots below show the record-breaking week, two other weekly snapshots, and the full monthly results.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/nov-total-sales.jpg", alt: "November — monthly total sales (Jesse 38, Daniel 34)" },
          { src: "/proof/nov-close-rate.jpg", alt: "November — monthly close rates (Jesse 58%, Dan 48%)" },
          { src: "/proof/nov-week-16.jpg", alt: "November — record-breaking week: 15 sales, 182.16 kW", featured: true },
          { src: "/proof/nov-week-23.jpg", alt: "November — weekly snapshot" },
          { src: "/proof/nov-week-1.jpg", alt: "November — weekly snapshot" },
        ],
      },
      {
        label: "Month 5 — December",
        medals: "$10,000 sales competition won. #1 Salesperson in the Company award.",
        body: "The company was off for half of December over the holiday period, so there were no weekly or monthly meetings, though December is when the awards came in.\n\nI was presented with the #1 Salesperson in the Company award and the $10,000 bonus for winning the company-wide sales competition. I split the bonus 50/50 with Daniel, who finished second. Daniel was also named the #2 Salesperson in the Company — going from zero sales experience to outperforming every rep but me in just two months, a testament to how effectively this system transfers.\n\nBelow: the sales competition details and Jesse receiving the #1 Salesperson in the Company award.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/dec-competition.jpg", alt: "December — $10,000 sales competition details" },
          { src: "/proof/dec-jesse-award.jpg", alt: "December — #1 Salesperson in the Company award presentation" },
        ],
      },
    ],
    messages: {
      label: "Unfathomable.",
      body: "I constantly had other reps inside the company reaching out asking me how it was possible I was delivering these results consistently. This is what a dialled-in system does — it gives you an unparalleled advantage over everyone else. To peers without one, the gap between me and them seems impossible to close. They're guessing through every single call while I'm executing a framework.",
      images: [
        { src: "/messages/msg-8.jpg", alt: "Peer message — close-rate gap (25% vs 50%)" },
        { src: "/messages/msg-7.jpg", alt: "Peer message — 'literally hypnotising these leads'" },
        { src: "/messages/msg-6.jpg", alt: "Peer message — '15 sales a week, would kill to see one of your recorded calls'" },
        { src: "/messages/msg-5.jpg", alt: "Peer message — 'spell on the leads' (2-6 sales/week vs yours)" },
        { src: "/messages/msg-4.jpg", alt: "Peer message — feedback on presentation, asking for recent ones to watch" },
        { src: "/messages/msg-3.jpg", alt: "Peer message — 'your awesome at what you do and it's inspiring'" },
        { src: "/messages/msg-2.jpg", alt: "Peer message — 'what's your secret mate'" },
        { src: "/messages/msg-1.jpg", alt: "Peer message — 'killing it mate, keen to watch your recordings'" },
      ],
    },
  },

  totalRevenue: {
    header: "Total Revenue Closed",
    body: "Personal deal tracker — every deal logged, every dollar collected. Over five months, this is the cash that came in from solar systems I personally closed.",
    headline: "$3,526,791.50",
    sub: "in personally closed revenue · 5 months",
    screenshot: { src: "/proof/revenue.jpg", alt: "Personal deal tracker — total cash collected: $3,526,791.50" },
  },

  receipts: {
    header: "Receipts.",
    paragraphs: [
      "Every screenshot above is from real company sales meetings. Every record, every #1 finish, every dollar — direct evidence.",
      "These results weren't purely down to talent. They came from following a clear, repeatable process — one built around meticulously optimising every stage of the sales cycle: appointments, follow-ups, closes, referrals.",
      "It's a system I can install in your business and train any rep to run effectively. Anyone can replicate these results.",
      "The clearest example: my cousin Daniel. He'd never sold anything in his life when he joined the company. I trained him on the exact same system, and he performed immediately — finishing above every other rep in the company, aside from myself.",
      "If the system works on someone with zero prior sales experience, it'll work in your business — as it has for the businesses below.",
    ],
  },

  caseStudies: {
    header: "Case Studies",
    placeholder: "Client case studies — first cohort underway, results landing soon.",
    // Future: each entry becomes a card. Keeping the structure ready.
    cases: [] as Array<{
      header: string;
      client: string;
      keyResult: string;
      quote?: string;
      screenshot?: { src: string; alt: string };
    }>,
  },

  finalCta: {
    title: "Book an Advisory Session",
    tagline: "Proven Formula. Proven Results.",
    body: "Copy and paste the #1 solar sales system directly into your business.",
  },

  // Post-booking confirmation page, served at /confirmed.
  // Point your Cal.com event type's "Redirect on booking" URL here:
  // https://scalesolar.co/confirmed
  confirmation: {
    eyebrow: "Booking confirmed",
    h1: "Must watch this video before your call.",
    // Small label shown directly above the video player.
    videoTitle: "Your pre-call briefing",
    // No-skip player source: a Cloudflare Stream HLS manifest (.m3u8) or an
    // .mp4 URL. Raw MP4 from R2 = exact source quality, no re-encode.
    videoSrc:
      "https://pub-5e2c7df6c10c4ad08bc1a296cd537a28.r2.dev/Post%20Call%20Confirmation%20Video%20-%20SCALE%20SOLAR-esv2-80p-bg-10p-music-10p.mp4",
    // Poster image (path in /public or absolute URL) shown before play.
    // Empty = no Stream dependency (the video autoplays muted anyway).
    videoThumbnail: "" as string,
    // Fraction of width to keep, to crop baked-in black side bars (1 = none).
    videoCrop: 1,
    // WebVTT subtitles file (path in /public). Empty = no captions track.
    captionsSrc: "/captions/confirmation.vtt" as string,
    requirements: {
      header: "How to get the most from your call.",
      note: "Before we jump on, make sure you've got:",
      items: [
        {
          title: "A laptop — not your phone",
          body: "We'll be sharing screens and working through your funnel together. A phone won't cut it.",
        },
        {
          title: "A notepad, or a way to take notes",
          body: "You'll walk away with clear, actionable steps — capture them as we go.",
        },
        {
          title: "A quiet room, no distractions",
          body: "Somewhere you can focus and talk freely for the full session.",
        },
        {
          title: "45–60 minutes blocked out",
          body: "Completely free, nothing either side. Show up ready, not half in.",
        },
        {
          title: "Anyone this decision affects",
          body: "If someone else weighs in on this, have them on the call with you.",
        },
      ],
      footer: "Show up ready and we'll make it count.",
    },
    resultsHeader: "While you wait — here's what this system produces.",
    resultsSub: "Not theory. This is the exact system we'll walk through on your call.",
  },

  footer: {
    line: "© 2026 Scale Solar",
  },
};

export type Site = typeof site;
