import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
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
        <Receipts />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
