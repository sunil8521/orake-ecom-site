  import WhyChooseUs from "@/components/About/WhyChooseUs";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/About/AboutUs";
import Hero from "@/components/About/Hero";
import FoodMenu from "@/components/About/FoodMenu";
 import VideoSection from "@/components/About/VideoSection";
 import MeetTheChef from "@/components/About/MeetTheChef";
import Testimonials from "@/components/About/Testimonials";
  import FollowUs from "@/components/About/FollowUs";
 
export default function AboutPage() {
       return (
	        <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <FoodMenu />
       
        <VideoSection />
        <WhyChooseUs />
        <MeetTheChef />

          <FollowUs />
        <Testimonials />
      </main>
      
    </>	
       );
}
