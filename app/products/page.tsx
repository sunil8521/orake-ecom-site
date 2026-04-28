import type { Metadata } from "next";
import Hero from "@/components/Product/Hero";
import BestSelling from "@/components/Product/BestSelling";
import CraftingMoments from "@/components/Product/CraftingMoments";
import FooterBanner from "@/components/Product/FooterBanner";

export const metadata: Metadata = {
  title: "Orake Products — Premium Prebiotic Energy Drinks",
  description: "Shop Orake's lineup of zero-sugar prebiotic energy drinks. Strawberry Vanilla and Ginger Lemon — real fruit juice, natural caffeine, no crash.",
};

export default function ProductPage() {
	return (
		<div className="min-h-screen bg-white overflow-hidden">
			{/* <Hero /> */}
			<BestSelling />
			{/* <CraftingMoments /> */}
			{/* <FooterBanner /> */}
		</div>
	);
}
