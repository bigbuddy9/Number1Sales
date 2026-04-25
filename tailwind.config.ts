import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111113",
        surfaceHi: "#16161A",
        border: "#1F1F23",
        ink: "#FFFFFF",
        muted: "#A1A1AA",
        mutedHi: "#D4D4D8",
        accent: "#D4AF37",
        accentHover: "#E8C25A",
        accentSoft: "#F2D982",
        accentInk: "#1A1300",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
        prose: "780px",
        video: "800px",
      },
      fontSize: {
        h1: ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.25rem, 2.4vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        body: ["1.125rem", { lineHeight: "1.7" }],
        bodyLg: ["1.25rem", { lineHeight: "1.6" }],
      },
      spacing: {
        section: "6rem",
        sectionLg: "8rem",
      },
    },
  },
  plugins: [],
};

export default config;
