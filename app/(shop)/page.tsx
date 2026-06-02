import HeroSection from "@/components/Home/HeroSection";import EnergyDrinksDealBanner from "@/components/Home/EnergyDrinksDealBanner";
import SmoothieShowcaseSection from "@/components/Home/SmoothieShowcaseSection";
import CollectionsSection from "@/components/Home/CollectionsSection";
import TaglineBanner from "@/components/Home/TaglineBanner";
import GiftExperienceSection from "@/components/Home/GiftExperienceSection";
import VideoShowcaseSection from "@/components/Home/VideoShowcaseSection";
import Testimonials from "@/components/Home/Testimonials";
 
 

import { getFeaturedProducts } from "@/lib/data/product";

export default async function Home() {
  const products = await getFeaturedProducts();
  return (
    <div className="min-h-screen bg-white overflow-x-clip w-full relative">
      <HeroSection />
      <CollectionsSection products={products} />
      <TaglineBanner />
      <SmoothieShowcaseSection />
      <EnergyDrinksDealBanner />      
      <GiftExperienceSection />
      <VideoShowcaseSection />
      <Testimonials />
    </div>
  );
}
