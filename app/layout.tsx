import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.brand} — ${site.hero.headline}`,
  description: site.hero.sub,
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: `${site.brand} — The Number One Solar Blueprint`,
    description: site.hero.sub,
    url: `https://${site.domain}`,
    siteName: site.brand,
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
