import type { Metadata } from "next";
import ConfirmationHero from "@/components/ConfirmationHero";
import Requirements from "@/components/Requirements";
import Proof from "@/components/Proof";
import TotalRevenue from "@/components/TotalRevenue";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.brand} — ${site.confirmation.h1}`,
  description: site.confirmation.sub,
  // Confirmation page is a private next step, not something to index.
  robots: { index: false, follow: false },
};

export default function ConfirmedPage() {
  return (
    <>
      <main>
        <ConfirmationHero />
        <Requirements />

        <section className="section border-t border-border/50 pb-0">
          <div className="container-x">
            <div className="prose-x text-center">
              <h2 className="h2">{site.confirmation.resultsHeader}</h2>
              <p className="mt-4 body-lg">{site.confirmation.resultsSub}</p>
            </div>
          </div>
        </section>

        {/* Results — reuses the home-page proof + revenue sections. */}
        <Proof />
        <TotalRevenue />
      </main>
      <Footer />
    </>
  );
}
