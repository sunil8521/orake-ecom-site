import type { Metadata } from "next";
import HeroSection from "@/components/Blogs/HeroSection";
import CTASection from "@/components/Blogs/CTASection";
import NewsBlogs from "@/components/Blogs/NewsBlogs";

export const metadata: Metadata = {
  title: "Orake Blog — Energy, Wellness & Lifestyle",
  description: "Latest articles on energy science, hydration, flavor development, and the Orake lifestyle. Stay informed, stay fueled.",
};

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
          <HeroSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="section-divider" />
          </div>

          <NewsBlogs />
          
          <CTASection />
        </div>
    );
}
