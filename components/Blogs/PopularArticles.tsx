"use client";
import { Zap } from "lucide-react";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const sideArticles = [
  {
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    title: "Surviving the 24-Hour Marathon Stream",
    desc: "How top creators use Orake to maintain focus without the crash.",
    tag: "Gaming",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    title: "The Perfect Pre-Workout Stack",
    desc: "Why Orake is replacing traditional pre-workouts for elite athletes.",
    tag: "Fitness",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    title: "Pop-up Drop: Miami Beach Recap",
    desc: "We took over Miami for the launch of our Tropical Citrus blend.",
    tag: "Events",
  },
];

export default function PopularArticles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#15161b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <p className={`${textFont.className} text-sm font-bold text-[#de3e4f] tracking-[0.2em] uppercase mb-4`}>
              The Movement
            </p>
            <h2
              className={`${titleFont.className} text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none uppercase tracking-wide`}
            >
              Trending <span className="text-[#dbba53]">Now.</span>
            </h2>
          </div>
          <div className="flex items-start gap-4 max-w-sm">
            <Zap className="w-8 h-8 text-[#de3e4f] shrink-0 mt-1" />
            <p className={`${textFont.className} text-lg text-gray-400 font-light leading-relaxed`}>
              The most hyped articles, drops, and community events fueling our generation right now.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          
          {/* Main large article */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
            <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] bg-gray-900">
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
                alt="Main Trending"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              {/* Aggressive gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className={`${textFont.className} inline-block bg-[#de3e4f] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4`}>
                Spotlight
              </span>
              <h3
                className={`${titleFont.className} text-3xl sm:text-4xl text-white mb-2 leading-[1.1] tracking-wide`}
              >
                Zero Sugar. Infinite Energy. The Orake Philosophy.
              </h3>
              <div className="h-1 w-0 bg-[#dbba53] group-hover:w-20 transition-all duration-500 mt-6"></div>
            </div>
          </div>

          {/* Side articles stack */}
          <div className="flex flex-col gap-6 sm:gap-8 justify-center">
            {sideArticles.map((article, i) => (
              <div
                key={i}
                className="flex gap-5 sm:gap-6 items-center p-4 rounded-2xl cursor-pointer group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="relative overflow-hidden rounded-2xl w-32 h-32 sm:w-40 sm:h-40 shrink-0 bg-gray-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#de3e4f] transition-colors duration-300 rounded-2xl pointer-events-none"></div>
                </div>
                
                <div className="flex flex-col py-2">
                  <span className={`${textFont.className} text-xs font-bold text-[#dbba53] tracking-widest uppercase mb-2`}>
                    {article.tag}
                  </span>
                  <h4 className={`${titleFont.className} text-xl sm:text-2xl text-white mb-2 leading-[1.1] tracking-wide group-hover:text-[#de3e4f] transition-colors`}>
                    {article.title}
                  </h4>
                  <p className={`${textFont.className} text-base text-gray-400 font-light leading-relaxed line-clamp-2`}>
                    {article.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
