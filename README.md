# Number One Sales

Landing page for [number1sales.com](https://number1sales.com) — **The Number One Solar Blueprint**.

Built with Next.js 15, TypeScript, Tailwind CSS. Deploys free on Vercel.

## Quick edits

**Almost all copy lives in one file:** [`lib/site.ts`](./lib/site.ts).

- Headline, subheading, CTA labels → `hero`
- Booking link (Cal.com / Calendly / TidyCal) → `bookingUrl`
- Intro video → paste a YouTube/Vimeo/Loom **embed** URL into `hero.videoEmbedUrl`
  - YouTube embed format: `https://www.youtube.com/embed/VIDEO_ID`
- Stats row → `stats`
- Value props → `valueProps`
- How it works steps → `howItWorks`
- Testimonials → `testimonials`
- FAQ → `faq`

Edit, commit, push — Vercel auto-deploys.

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy (one-time setup)

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to [vercel.com/new](https://vercel.com/new), import `bigbuddy9/number1sales`.
3. Vercel auto-detects Next.js — click **Deploy**. Done.
4. In Vercel → Project → Settings → Domains, add `number1sales.com`. Vercel gives you DNS records to set at your registrar.

## Structure

```
app/
  layout.tsx      # <html>, metadata, fonts
  page.tsx        # composes all sections
  globals.css     # Tailwind + base styles
components/       # one file per section (Nav, Hero, Stats, …)
lib/site.ts       # all copy + links live here
```
