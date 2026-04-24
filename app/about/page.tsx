import Hero from "@/components/About/Hero";
import AboutUs from "@/components/About/AboutUs";
import VideoSection from "@/components/About/VideoSection";
import FooterBanner from "@/components/Product/FooterBanner";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-[#15161b] overflow-hidden">
			<main>
				<Hero />
				<AboutUs />
				{/* <VideoSection /> */}
			</main>
			<FooterBanner />
		</div>
	);
}
