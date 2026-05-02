import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { LightboxProvider } from "@/components/Lightbox";
import iconImg from "@/ScaleSolarIcon.png";
import logoImg from "@/ScaleSolarLogoTransparent.png";

export const metadata: Metadata = {
  title: `${site.brand} — ${site.hero.h1}`,
  description: site.hero.sub,
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: site.brand,
    description: site.hero.sub,
    url: `https://${site.domain}`,
    siteName: site.brand,
    type: "website",
    images: [{ url: logoImg.src, width: logoImg.width, height: logoImg.height, alt: site.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand,
    description: site.hero.sub,
    images: [logoImg.src],
  },
  icons: {
    icon: [{ url: iconImg.src, type: "image/png" }],
    apple: iconImg.src,
  },
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
        {/* Plausible Analytics — tagged events, scroll depth, outbound links.
            Add the domain at plausible.io to start collecting. */}
        <script
          defer
          data-domain={site.plausibleDomain}
          src="https://plausible.io/js/script.tagged-events.outbound-links.js"
        />
      </head>
      <body>
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}
