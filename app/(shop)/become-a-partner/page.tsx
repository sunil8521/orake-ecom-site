import type { Metadata } from "next";
import BecomePartnerHero from "@/components/Partner/BecomePartnerHero";
import BecomePartnerSection from "@/components/Partner/BecomePartnerSection";

export const metadata: Metadata = {
  title: "Become a Partner — Orake",
  description: "Establish or expand your business with Orake prebiotic fiber soda. Join us as a retailer, distributor, or exporter and share the gut-loving fizz.",
};

export default function BecomePartnerPage() {
  return (
    <>
      <BecomePartnerHero />
      <BecomePartnerSection />
    </>
  );
}
