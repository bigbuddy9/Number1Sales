import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import TotalRevenue from "@/components/TotalRevenue";
import Receipts from "@/components/Receipts";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Proof />
        <TotalRevenue />
        <CaseStudies />
        <Receipts />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
