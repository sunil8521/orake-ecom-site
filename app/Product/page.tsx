import Navbar from "@/components/Navbar";
import ProductHeroSection from "@/components/Product/ProductHeroSection";
import ProductPageSection from "@/components/Product/ProductPageSection";
import ProductHighlightsSection from "@/components/Product/ProductHighlightsSection";
import ProductBundleSection from "@/components/Product/ProductBundleSection";
import ProductFaqSection from "@/components/Product/ProductFaqSection";

export default function ProductPage() {
	return (
		<div className="min-h-screen bg-[#2b0a14]">
			<Navbar />
			{/* <ProductHeroSection />
			<ProductPageSection />
			<ProductHighlightsSection />
			<ProductBundleSection />
			<ProductFaqSection /> */}
		</div>
	);
}
