import type { Metadata } from "next";
import Hero from "@/components/About/Hero";
import AboutUs from "@/components/About/AboutUs";
import VisionMission from "@/components/About/VisionMission";
import FooterBanner from "@/components/About/FooterBanner";

export const metadata: Metadata = {
	title: "About Orake — Our Story & Mission",
	description: "Discover the story behind Orake premium prebiotic fiber sodas. Real ingredients, zero sugar, and a mission to nourish your gut naturally.",
};

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-[#15161b] overflow-hidden">
			<main>
				<Hero />
				<AboutUs />
				<VisionMission />
				{/* <VideoSection /> */}
			</main>
			<FooterBanner />
		</div>
	);
}
