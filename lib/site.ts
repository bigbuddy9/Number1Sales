// Single source of truth for copy, links, and structured content.

type ScreenshotEntry = { src: string; alt: string; caption?: string };

export const site = {
  brand: "Number 1 Sales",
  domain: "number1sales.com",
  bookingUrl: "https://cal.com/number1sales",
  // Used by the inline Cal.com embeds (under hero + final CTA).
  // Format: "username" or "username/event-slug".
  calLink: "number1sales",
  // Plausible domain — leave as the production domain. Script is injected
  // unconditionally; if no Plausible account exists for this domain yet,
  // the requests are silently dropped. Add the domain at plausible.io when ready.
  plausibleDomain: "number1sales.com",

  hero: {
    h1: "Implement the #1 solar sales system into your business.",
    sub: "Proven to generate over $100m / year, a replicable process you can plug directly into your company today to 2-5x your revenue, fast.",
    // YouTube/Vimeo/Mux embed URL. Leave empty to show the placeholder.
    // If YouTube, use the /embed/VIDEO_ID form — ?rel=0 is added automatically.
    videoEmbedUrl: "" as string,
    // Path inside /public for the click-to-play thumbnail (creator's face).
    // Leave empty to use a built-in placeholder.
    videoThumbnail: "" as string,
    cta: "Book a Call",
  },

  proof: {
    header: "Recent Sales Results 💎",
    intro:
      "Direct evidence from company-wide sales meetings during my time at RESINC Solar — the #1 solar company in Australia. I worked there from August 2025 to January 2026 before launching Number 1 Sales.",
    introTwo:
      "In that time: #1 every month, broke the company's weekly and monthly sales records, won the $10,000 company-wide sales competition, took home the #1 Salesperson award, averaged a 50%+ close rate, and personally closed over $3.5M in revenue.",
    months: [
      {
        label: "Month 1 — August",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        body: "Started a week into August. Still finished #1 across every company metric. In the final week of the month, became the first rep in company history to cross the 100kW mark for total solar kW sold in a single week.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/aug-1.png", alt: "August — monthly total sales" },
          { src: "/proof/aug-2.png", alt: "August — week ending 31/08/2025: first solo 100kW week", caption: "Week ending 31/08/2025 — 108.24 kW sold solo, a company first" },
          { src: "/proof/aug-3.png", alt: "August — monthly sum of system size (kW)" },
          { src: "/proof/aug-4.png", alt: "August — monthly close rates" },
        ],
      },
      {
        label: "Month 2 — September",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        body: "Second month — #1 in every trackable company metric. Screenshots below show the monthly results plus snapshots from two weekly meetings.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/sep-1.png", alt: "September — monthly total sales" },
          { src: "/proof/sep-2.png", alt: "September — week ending 21/09/2025", caption: "Week ending 21/09/2025" },
          { src: "/proof/sep-3.png", alt: "September — week ending 07/09/2025", caption: "Week ending 07/09/2025" },
          { src: "/proof/sep-4.png", alt: "September — monthly sum of system size (kW)" },
          { src: "/proof/sep-5.png", alt: "September — monthly close rates" },
        ],
      },
      {
        label: "Month 3 — October",
        medals: "🥇 Total Sales · 🥈 Close Rate · 🥇 Total kW Sold",
        body: "#1 across every metric except close rate. Worth flagging: one rep had switched to in-home appointments while the rest of us were on virtual, which structurally lifts close rate.\n\nThis was also the month my cousin Daniel joined the company. Never sold anything in his life — first sales role ever. I trained him on my full process: scripts, frameworks, meeting recordings, the whole system. He finished #2 in the company in his first month, behind me.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/oct-1.png", alt: "October — monthly total sales (Jesse #1, Daniel #2)" },
          { src: "/proof/oct-2.png", alt: "October — week ending 19/10/2025", caption: "Week ending 19/10/2025" },
          { src: "/proof/oct-3.png", alt: "October — weekly results", caption: "Week ending 05/10/2025" },
          { src: "/proof/oct-4.png", alt: "October — monthly sum of system size (kW)" },
          { src: "/proof/oct-5.png", alt: "October — monthly close rates" },
          { src: "/proof/oct-6.png", alt: "October — week ending 12/10/2025", caption: "Week ending 12/10/2025" },
        ],
      },
      {
        label: "Month 4 — November",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        highlight: "National weekly and monthly sales records broken.",
        body: "Broke the company's all-time weekly sales record. Then broke the all-time monthly record — same month. #1 across every trackable metric. Daniel finished #2 across every metric again, in his second month.\n\nScreenshots below show the record-breaking week, two other weekly snapshots, and the full monthly results.",
        screenshots: <ScreenshotEntry[]>[
          { src: "/proof/nov-1.png", alt: "November — record-breaking week ending 16/11/2025", caption: "Week ending 16/11/2025 — all-time company weekly sales record (15 sales · 182.16 kW)" },
          { src: "/proof/nov-2.png", alt: "November — weekly snapshot", caption: "Weekly results — November" },
          { src: "/proof/nov-3.png", alt: "November — weekly snapshot", caption: "Weekly results — November" },
          { src: "/proof/nov-4.png", alt: "November — monthly total sales (Jesse 38, Daniel 34)" },
          { src: "/proof/nov-5.png", alt: "November — monthly close rates (Jesse 58%, Dan 48%)" },
        ],
      },
      {
        label: "Month 5 — December",
        medals: "$10,000 sales competition won. #1 Salesperson in the Company award.",
        body: "The company was off for half of December over the holiday period, so there were no weekly or monthly meetings, though December is when the awards came in.\n\nI was presented with the #1 Salesperson in the Company award and the $10,000 bonus for winning the company-wide sales competition. I split the bonus 50/50 with Daniel, who finished second. Daniel also won Fastest-Growing Sales Rep after having no prior sales experience 2 months earlier, a testament to this systems effectiveness.\n\nBelow: the sales competition details, the award presentation, and Daniel receiving his award.",
        screenshots: <ScreenshotEntry[]>[
          { src: "", alt: "December — sales competition details" },
          { src: "", alt: "December — award presentation" },
          { src: "", alt: "December — #1 salesperson award" },
          { src: "", alt: "December — Daniel's award" },
        ],
      },
    ],
  },

  totalRevenue: {
    header: "Total Revenue Closed",
    body: "Below is my personal deal tracker showing total cash collected during my time at the company — over $3.5M in personally closed revenue.",
    screenshot: { src: "", alt: "Personal deal tracker — total cash collected" },
  },

  receipts: {
    header: "Receipts.",
    paragraphs: [
      "Every screenshot above is from real company sales meetings. Every record, every #1 finish, every dollar — direct evidence.",
      "These results weren't purely down to talent. They came from following a clear, repeatable process — one built around meticulously optimising every stage of the sales cycle: appointments, follow-ups, closes, referrals.",
      "It's a system I can install in your business and train any rep to run effectively. Anyone can replicate these results.",
      "The clearest example: my cousin Daniel. He'd never sold anything in his life when he joined the company. I trained him on the exact same system, and he finished #2 every single month, directly behind me.",
      "If the system works on someone with zero prior sales experience, it'll work in your business — as it has for the businesses below.",
    ],
    cta: "Book a Call",
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
    title: "Book an Advisory Call",
    tagline: "Proven Formula. Proven Results.",
    body: "Copy and paste the #1 solar sales system directly into your business.",
  },

  footer: {
    line: "© 2026 Number 1 Sales",
  },
};

export type Site = typeof site;
