// Single source of truth for copy, links, and structured content.

export const site = {
  brand: "Number 1 Sales",
  domain: "number1sales.com",
  bookingUrl: "https://cal.com/number1sales",
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
    header: "RESINC Sales Results 💎",
    intro:
      "Direct evidence from company-wide sales meetings during my time at RESINC Solar — the #1 solar company in Australia. I worked there from August 2025 to January 2026 before launching Number 1 Sales.",
    introTwo:
      "In that time: #1 every month, broke the company's weekly and monthly sales records, won the $10,000 company-wide sales competition, took home the #1 Salesperson award, averaged a 50%+ close rate, and personally closed over $3.5M in revenue.",
    months: [
      {
        label: "Month 1 — August",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        body: "Started a week into August. Still finished #1 across every company metric. In the final week of the month, became the first rep in company history to cross the 100kW mark for total solar kW sold in a single week.",
        screenshots: [
          { src: "", alt: "August — monthly results 1" },
          { src: "", alt: "August — monthly results 2" },
          { src: "", alt: "August — monthly results 3" },
          { src: "", alt: "August — monthly results 4" },
        ],
      },
      {
        label: "Month 2 — September",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        body: "Second month — #1 in every trackable company metric. Screenshots below show the monthly results plus snapshots from two weekly meetings.",
        screenshots: [
          { src: "", alt: "September — screenshot 1" },
          { src: "", alt: "September — screenshot 2" },
          { src: "", alt: "September — screenshot 3" },
          { src: "", alt: "September — screenshot 4" },
          { src: "", alt: "September — screenshot 5" },
        ],
      },
      {
        label: "Month 3 — October",
        medals: "🥇 Total Sales · 🥈 Close Rate · 🥇 Total kW Sold",
        body: "#1 across every metric except close rate. Worth flagging: one rep had switched to in-home appointments while the rest of us were on virtual, which structurally lifts close rate.\n\nThis was also the month my cousin Daniel joined the company. Never sold anything in his life — first sales role ever. I trained him on my full process: scripts, frameworks, meeting recordings, the whole system. He finished #2 in the company in his first month, behind me.",
        screenshots: [
          { src: "", alt: "October — screenshot 1" },
          { src: "", alt: "October — screenshot 2" },
          { src: "", alt: "October — screenshot 3" },
          { src: "", alt: "October — screenshot 4" },
          { src: "", alt: "October — screenshot 5" },
          { src: "", alt: "October — screenshot 6" },
        ],
      },
      {
        label: "Month 4 — November",
        medals: "🥇 Total Sales · 🥇 Close Rate · 🥇 Total kW Sold",
        highlight: "National weekly and monthly sales records broken.",
        body: "Broke the company's all-time weekly sales record. Then broke the all-time monthly record — same month. #1 across every trackable metric. Daniel finished #2 across every metric again, in his second month.\n\nScreenshots below show the record-breaking week, two other weekly snapshots, and the full monthly results.",
        screenshots: [
          { src: "", alt: "November — record-breaking week" },
          { src: "", alt: "November — weekly snapshot 1" },
          { src: "", alt: "November — weekly snapshot 2" },
          { src: "", alt: "November — monthly results 1" },
          { src: "", alt: "November — monthly results 2" },
        ],
      },
      {
        label: "Month 5 — December",
        medals: "$10,000 sales competition won. #1 Salesperson in the Company award.",
        body: "The company was off for half of December over the holiday period, so there were no weekly or monthly meetings, though December is when the awards came in.\n\nI was presented with the #1 Salesperson in the Company award and the $10,000 bonus for winning the company-wide sales competition. I split the bonus 50/50 with Daniel, who finished second. Daniel also won Fastest-Growing Sales Rep after having no prior sales experience 2 months earlier, a testament to this systems effectiveness.\n\nBelow: the sales competition details, the award presentation, and Daniel receiving his award.",
        screenshots: [
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
    header: "Ready to install the system?",
    body: "20 minutes. No pitch, no pressure. We'll diagnose where your sales process is leaking and I'll show you exactly what the system would change.",
    cta: "Book a Call",
  },

  footer: {
    line: "© 2026 Number 1 Sales",
  },
};

export type Site = typeof site;
