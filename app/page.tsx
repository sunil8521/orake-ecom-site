import HeroSection from "@/components/Home/HeroSection";
import EnergyDrinkSection from "@/components/Home/EnergyDrinkSection";
import EnergyDrinksDealBanner from "@/components/Home/EnergyDrinksDealBanner";
import SmoothieShowcaseSection from "@/components/Home/SmoothieShowcaseSection";
import CollectionsSection from "@/components/Home/CollectionsSection";
import TaglineBanner from "@/components/Home/TaglineBanner";
import BrandShowcase from "@/components/Home/BrandShowcase";
// import IndulgenceSection from "@/components/Home/IndulgenceSection";
import GiftExperienceSection from "@/components/Home/GiftExperienceSection";
import VideoShowcaseSection from "@/components/Home/VideoShowcaseSection";
import ClosebyAlwaysSection from "@/components/Home/ClosebyAlwaysSection";
import ValuesAndBeliefsSection from "@/components/Home/ValuesAndBeliefsSection";
import FollowUsSection from "@/components/Home/FollowUsSection";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Testimonials from "@/components/Home/Testimonials";
// import Navbar from "@/components/Navbar";
// import PrivacyPolicySection from "@/components/Home/PrivacyPolicySection";
// import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip w-full relative">
      {/* <Navbar /> */}

      <HeroSection />
      <CollectionsSection />
      {/* <SpecialOffers /> */}
      <TaglineBanner />
      {/* <BrandShowcase /> */}
      <SmoothieShowcaseSection />
      {/* <EnergyDrinkSection /> */}

      <EnergyDrinksDealBanner />
      {/* <PrivacyPolicySection /> */}


      {/* <FollowUsSection /> */}
      <GiftExperienceSection />
      <VideoShowcaseSection />
      {/* <IndulgenceSection /> */}
      {/* <ClosebyAlwaysSection /> */}
      {/* <ValuesAndBeliefsSection /> */}
      <Testimonials />
    </div>
  );
}
