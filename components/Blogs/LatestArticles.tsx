"use client";
import { Flame } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1564982759979-bf6fd43b176f?q=80&w=800&auto=format&fit=crop",
    title: "Inside the Orake Skate Park Takeover",
    date: "AUSTIN, TX - OCT 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    title: "Orake x CTRL: The Ultimate Esports Collaboration",
    date: "LAS VEGAS - SEP 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=800&auto=format&fit=crop",
    title: "Midnight Raves: Fueling The Underground",
    date: "BERLIN - AUG 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510166089176-b57564a5f7ee?q=80&w=800&auto=format&fit=crop",
    title: "Streetwear Drops: The New Limited Merch Line",
    date: "NEW YORK - JUL 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    title: "Elevating Your Output: The Science of Focus",
    date: "LAB NOTES - JUN 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    title: "Festival Season Survival Guide",
    date: "LIFESTYLE - MAY 2025",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#dbba53] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className={`${textFont.className} text-sm font-bold text-[#de3e4f] tracking-[0.2em] uppercase mb-4`}>
              Community Vibes
            </p>
            <h2
              className={`${titleFont.className} text-[clamp(2.5rem,5vw,4.5rem)] text-[#15161b] leading-[0.9] uppercase tracking-wide`}
            >
              Latest <span className="text-[#de3e4f]">Drops.</span>
            </h2>
          </div>
          <div className="flex items-start gap-4 max-w-sm">
            <Flame className="w-8 h-8 text-[#de3e4f] shrink-0 mt-1" />
            <p className={`${textFont.className} text-lg text-gray-500 font-light leading-relaxed`}>
              Everything happening in our world. From underground raves to top-tier esports tournaments.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article, i) => (
            <div
              key={i}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 bg-[#15161b]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none group-hover:border-2 group-hover:border-[#de3e4f] transition-all"></div>
              </div>
              <div className="flex flex-col flex-1 pl-2">
                <p className={`${textFont.className} text-sm text-[#de3e4f] font-bold tracking-widest uppercase mb-3`}>
                  {article.date}
                </p>
                <h3 className={`${titleFont.className} text-2xl text-[#15161b] leading-[1.1] tracking-wide group-hover:text-[#de3e4f] transition-colors`}>
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
