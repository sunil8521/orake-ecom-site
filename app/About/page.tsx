  import ReserveTable from "@/components/About/ReserveTable";
import ValuesAndBeliefs from "@/components/About/ValuesAndBeliefs";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/About/AboutUs";
import Hero from "@/components/About/Hero";
import FoodMenu from "@/components/About/FoodMenu";
 import SpecialOffers from "@/components/About/SpecialOffers";
import VideoSection from "@/components/About/VideoSection";
 import MeetTheChef from "@/components/About/MeetTheChef";
import Testimonials from "@/components/About/Testimonials";
import NewsBlogs from "@/components/About/NewsBlogs";
import Faqs from "@/components/About/Faqs";
import FollowUs from "@/components/About/FollowUs";
 
export default function AboutPage() {
       return (
	        <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <FoodMenu />
        <SpecialOffers />
        <VideoSection />
        <WhyChooseUs />
        <MeetTheChef />
        <Testimonials />
        <NewsBlogs />
        <Faqs />
        <FollowUs />
        <ReserveTable /> 
      </main>
      
    </>	
       );
}
