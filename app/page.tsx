import HeroSection from "@/components/Home/HeroSection";
 import EnergyDrinksDealBanner from "@/components/Home/EnergyDrinksDealBanner";
import SmoothieShowcaseSection from "@/components/Home/SmoothieShowcaseSection";
import CollectionsSection from "@/components/Home/CollectionsSection";
import TaglineBanner from "@/components/Home/TaglineBanner";
import GiftExperienceSection from "@/components/Home/GiftExperienceSection";
import VideoShowcaseSection from "@/components/Home/VideoShowcaseSection";
import Testimonials from "@/components/Home/Testimonials";
 


export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip w-full relative">
      <HeroSection />
      <CollectionsSection />
      <TaglineBanner />
      <SmoothieShowcaseSection />
      <EnergyDrinksDealBanner />      
      <GiftExperienceSection />
      <VideoShowcaseSection />
      <Testimonials />
    </div>
  );
}
