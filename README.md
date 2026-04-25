# Number 1 Sales

Landing page for [number1sales.com](https://number1sales.com) — the #1 solar sales system.

Next.js 15 · TypeScript · Tailwind. Deploys free on Vercel.

## Editing the page

Almost everything lives in **[`lib/site.ts`](./lib/site.ts)** — all copy, the booking link, month-by-month proof content, and screenshot slots.

- **Hero:** `hero.h1`, `hero.sub`, `hero.videoEmbedUrl`, `hero.videoThumbnail`
- **Booking link (3 buttons):** `bookingUrl`
- **Proof section:** `proof.months[]` — each month has `label`, `medals`, optional `highlight`, `body`, and `screenshots[]`
- **Total revenue:** `totalRevenue.screenshot`
- **Receipts statement:** `receipts.paragraphs[]`
- **Case studies (placeholder):** `caseStudies.cases[]` — push case study objects in when ready
- **Final CTA:** `finalCta.header`, `finalCta.body`
- **Footer:** `footer.line`

Edit, commit, push — Vercel auto-deploys.

## Adding screenshots

1. Drop the cleaned image into `public/proof/` (e.g. `public/proof/aug-1.png`).
2. In `lib/site.ts`, set `src: "/proof/aug-1.png"` on the matching screenshot entry.
3. Each screenshot is click-to-expand on the live site.

**Cleaning checklist (before adding any screenshot):**
- Remove RESINC and Alpha Hippo logos
- Remove `@resinc.com.au` email addresses
- Crop/blur webcam thumbnails of other people
- Crop/blur other reps' surnames
- Remove any visible Alpha Hippo branding

## Adding the intro video

In `lib/site.ts`:

```ts
hero: {
  videoEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID",
  videoThumbnail: "/hero-thumb.jpg", // drop into /public
}
```

Click-to-play is built in. `?rel=0` is added automatically. For Mux or self-hosted, swap `embedUrl` for the player URL — the `<iframe>` will load it directly.

## Analytics (Plausible)

The Plausible script is included in `app/layout.tsx`, pointing at `number1sales.com`. To start collecting:

1. Sign up at [plausible.io](https://plausible.io) and add `number1sales.com` as a site.
2. CTA buttons are pre-tagged — events: `cta_click` with `position` = `nav | hero | receipts | final`.
3. Outbound link clicks and scroll depth are auto-tracked.

To switch to Fathom, replace the `<script>` tag in `app/layout.tsx` and update CTA `class` tags.

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Structure

```
app/
  layout.tsx        # <html>, fonts, metadata, analytics
  page.tsx          # composes all sections
  globals.css       # Tailwind layers + base styles
components/
  Nav.tsx           # brand + Book a Call
  Hero.tsx          # H1, sub, video, primary CTA
  Proof.tsx         # 5 month sub-sections + screenshots
  TotalRevenue.tsx  # deal tracker screenshot
  Receipts.tsx      # closing statement + mid-page CTA
  CaseStudies.tsx   # placeholder, ready for cards
  FinalCTA.tsx      # final conversion block
  Footer.tsx        # © line
  Screenshot.tsx    # click-to-expand image with placeholder
  VideoPlayer.tsx   # click-to-play with thumbnail + rel=0
lib/
  site.ts           # all copy + links
public/
  proof/            # add cleaned screenshots here
```
