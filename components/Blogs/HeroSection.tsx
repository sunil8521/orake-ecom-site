import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function HeroSection() {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#15161b]">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/orake-blog-banner.png" 
          alt="The Culture Blog Banner" 
          className="w-full h-full object-cover object-center opacity-100" 
        />
        {/* Responsive Gradients for blending and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#15161b]/90 md:from-[#15161b] via-[#15161b]/40 md:via-[#15161b]/80 to-transparent w-[85%] md:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15161b]/60 md:from-[#15161b] via-transparent md:via-[#15161b]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2">
          <p className={`${textFont.className} text-[#dbba53] text-sm font-bold uppercase tracking-[0.2em]`}>
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-white/30 mx-2">/</span>
            <span className="text-white">The Culture</span>
          </p>
        </div>

        {/* Headline */}
        <h1 className={`${titleFont.className} text-white text-[clamp(4rem,10vw,8rem)] uppercase leading-[0.9] tracking-wide max-w-4xl mb-6`}>
          THE
          <br />
          <span className="text-[#de3e4f]">CULTURE.</span>
        </h1>

        {/* Subtitle */}
        <p className={`${textFont.className} text-xl sm:text-2xl text-gray-300 font-light max-w-2xl border-l-4 border-[#de3e4f] pl-4`}>
          Dive into the lifestyle. The latest drops, creator interviews, and everything fueling the next generation.
        </p>
      </div>
    </section>
  );
}
