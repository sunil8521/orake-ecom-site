"use client";
import { Zap, ChevronRight } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const campaigns = [
  {
    image:
      "https://images.unsplash.com/photo-1570742186983-4813589b9d36?q=80&w=800&auto=format&fit=crop",
    title: "Orake X X-Games: The Golden Ticket",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800&auto=format&fit=crop",
    title: "Project Zero: 100% Recyclable Cans By 2026",
  },
];

export default function FeaturedCampaigns() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#e8e8e9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <p className={`${textFont.className} text-sm font-bold text-[#de3e4f] tracking-[0.2em] uppercase mb-4`}>
              Inside the Lab
            </p>
            <h2
              className={`${titleFont.className} text-[clamp(2.5rem,5vw,4.5rem)] text-[#15161b] leading-[0.95] uppercase tracking-wide`}
            >
              Featured <span className="text-[#de3e4f]">Campaigns.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Zap className="w-8 h-8 text-[#dbba53] hidden sm:block" />
            <button className={`${textFont.className} group bg-[#15161b] text-white text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-[#de3e4f] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(222,62,79,0.3)] flex items-center gap-2`}>
              View All 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Large featured project */}
          <div className="lg:col-span-1 rounded-3xl overflow-hidden cursor-pointer group relative h-[450px] sm:h-[500px] lg:h-[600px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1540039155733-d7696ba6bb04?q=80&w=800&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              alt="Main Campaign"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15161b] via-[#15161b]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className={`${textFont.className} inline-block bg-[#dbba53] text-[#15161b] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4`}>
                Global Tour
              </span>
              <h3
                className={`${titleFont.className} text-3xl sm:text-4xl text-white mb-4 leading-[1.1] tracking-wide`}
              >
                The Orake World Tour: 15 Cities, 15 Drops.
              </h3>
              <p className={`${textFont.className} text-gray-300 text-lg leading-relaxed mb-6 max-w-sm font-light`}>
                We're hitting the road with exclusive merch, unreleased flavors, and the hardest-hitting parties of the year.
              </p>
              <button className={`${textFont.className} flex items-center gap-2 text-[#dbba53] font-bold text-lg uppercase tracking-wider group-hover:text-white transition-colors`}>
                Get Tickets
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Side projects */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {campaigns.map((campaign, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden cursor-pointer group relative h-[300px] sm:h-[400px] lg:h-full shadow-xl"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15161b] via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute p-6 top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="w-12 h-12 bg-[#de3e4f] rounded-full flex items-center justify-center shadow-lg">
                      <ChevronRight className="text-white w-6 h-6" />
                   </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3
                    className={`${titleFont.className} text-2xl sm:text-3xl text-white leading-tight tracking-wide group-hover:text-[#dbba53] transition-colors`}
                  >
                    {campaign.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
