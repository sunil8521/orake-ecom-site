import HeroSection from "@/components/Home/HeroSection";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] to-[#1e293b]">
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      {/* <TaglineBanner />
      <GiftExperienceSection />
      <VideoShowcaseSection />
      <IndulgenceSection />
      <ClosebyAlwaysSection />
      <ValuesAndBeliefsSection />
      <TriedAndCelebratedSection />
      <FollowUsSection /> */}
    </div>
  );
}
