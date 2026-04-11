import HeroSection from "@/components/Home/HeroSection";
import EnergyDrinkSection from "@/components/Home/EnergyDrinkSection";
import EnergyDrinksDealBanner from "@/components/Home/EnergyDrinksDealBanner";
import SmoothieShowcaseSection from "@/components/Home/SmoothieShowcaseSection";
import CollectionsSection from "@/components/Home/CollectionsSection";
import TaglineBanner from "@/components/Home/TaglineBanner";
import IndulgenceSection from "@/components/Home/IndulgenceSection";
import GiftExperienceSection from "@/components/Home/GiftExperienceSection";
import VideoShowcaseSection from "@/components/Home/VideoShowcaseSection";
import ClosebyAlwaysSection from "@/components/Home/ClosebyAlwaysSection";
import ValuesAndBeliefsSection from "@/components/Home/ValuesAndBeliefsSection";
import TriedAndCelebratedSection from "@/components/Home/TriedAndCelebratedSection";
import FollowUsSection from "@/components/Home/FollowUsSection";
import Navbar from "@/components/Navbar";
import PrivacyPolicySection from "@/components/Home/PrivacyPolicySection";
import Footer from "@/components/Footer";
 

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <HeroSection />
      <CollectionsSection />
      <EnergyDrinkSection />
      <EnergyDrinksDealBanner />
      {/* <PrivacyPolicySection /> */}
      <SmoothieShowcaseSection />
      <TaglineBanner />
      <GiftExperienceSection />
      <VideoShowcaseSection />
      <IndulgenceSection />
      <ClosebyAlwaysSection />
      <ValuesAndBeliefsSection />
      <TriedAndCelebratedSection />
      <FollowUsSection />
      <Footer />
    </div>
  );
}
