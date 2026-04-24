 import HeroSection from "@/components/Blogs/HeroSection";
import CTASection from "@/components/Blogs/CTASection";
import LatestArticles from "@/components/Blogs/LatestArticles";
import ConservationProjects from "@/components/Blogs/ConservationProjects";
import PopularArticles from "@/components/Blogs/PopularArticles";
import Footer from "@/components/Blogs/Footer";
import NewsBlogs from "@/components/Blogs/NewsBlogs";

export default function BlogPage() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-white">
       
      <HeroSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="section-divider" />
      </div>
<NewsBlogs />
      <PopularArticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="section-divider" />
      </div>

      <LatestArticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="section-divider" />
      </div>

      {/* <ConservationProjects /> */}
      <CTASection />
      {/* <Footer /> */}
    </div>
        </>
    );
}
