
 import Hero from "@/components/Product/Hero";
import BestSelling from "@/components/Product/BestSelling";
import CategorySection from "@/components/Product/CategorySection";
import CraftingMoments from "@/components/Product/CraftingMoments";
import SpecialCollection from "@/components/Product/SpecialCollection";
 // import Newsletter from "@/components/Product/Newsletter";
import FooterBanner from "@/components/Product/FooterBanner";
 
export default function ProductPage() {
	return (
		<div className="min-h-screen bg-white">
		 
			<Hero />
			<CategorySection />
			<BestSelling />
			<CraftingMoments />
			<SpecialCollection />
		 
			{/* <Newsletter /> */}
			<FooterBanner />
			 
		</div>
	);
}
