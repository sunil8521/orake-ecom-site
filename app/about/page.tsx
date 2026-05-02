import type { Metadata } from "next";
import Hero from "@/components/About/Hero";
import AboutUs from "@/components/About/AboutUs";
import FooterBanner from "@/components/About/FooterBanner";

export const metadata: Metadata = {
	title: "About Orake — Our Story & Mission",
	description: "Discover the story behind Orake premium prebiotic energy drinks. Real ingredients, zero sugar, and a mission to fuel your everyday grind naturally.",
};

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-[#15161b] overflow-hidden">

			<Hero />
			<AboutUs />

			<FooterBanner />
		</div>
	);
}
