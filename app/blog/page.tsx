import Navbar from "@/components/Navbar";
import BlogHero from "@/components/Blogs/Hero";

export default function BlogPage() {
    return (
        <>   
        <div className="min-h-screen bg-[#2b0a14]">
            <Navbar />
            <BlogHero />
            <div className="flex items-center justify-center h-[40vh] text-white text-4xl font-bold">
                Blog Page Coming Soon!
            </div>
        </div>
         </>
    );
}
