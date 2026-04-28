import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function HeroSection() {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#15161b]">
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-[#c25b5e]/20 rounded-full blur-[150px] -top-40 -right-32" />
        <div className="absolute w-[400px] h-[400px] bg-[#dbba53]/10 rounded-full blur-[120px] bottom-0 left-0" />
        <div className="absolute w-[300px] h-[300px] bg-[#de3e4f]/10 rounded-full blur-[100px] top-1/3 left-1/3" />
      </div>

      {/* Floating product images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cans */}
        <img src="/canepink.png" alt="" className="absolute right-[6%] top-[12%] w-24 lg:w-32 rotate-[18deg] opacity-20 hidden md:block" />
        <img src="/caneyellow.png" alt="" className="absolute right-[22%] bottom-[8%] w-20 lg:w-28 -rotate-[12deg] opacity-15 hidden md:block" />
        
        {/* SVG ingredients scattered */}
        <img src="/svgs/starwbery-svg.png" alt="" className="absolute left-[5%] top-[20%] w-14 lg:w-20 rotate-[25deg] opacity-[0.12]" />
        <img src="/svgs/lemon-svg.png" alt="" className="absolute right-[40%] top-[8%] w-12 lg:w-16 -rotate-[15deg] opacity-[0.1]" />
        <img src="/svgs/ginger-svg.png" alt="" className="absolute left-[15%] bottom-[12%] w-14 lg:w-18 rotate-[10deg] opacity-[0.12] hidden sm:block" />
        <img src="/svgs/leaf-svg.png" alt="" className="absolute right-[12%] top-[55%] w-10 lg:w-14 rotate-[40deg] opacity-[0.08]" />
        <img src="/svgs/leaf-2.png" alt="" className="absolute left-[35%] top-[5%] w-10 lg:w-12 -rotate-[30deg] opacity-[0.07] hidden lg:block" />
        <img src="/svgs/flower-sb.png" alt="" className="absolute left-[8%] top-[60%] w-12 lg:w-16 rotate-[-20deg] opacity-[0.1] hidden sm:block" />
        <img src="/svgs/lemon-2-svg.png" alt="" className="absolute right-[35%] bottom-[15%] w-10 lg:w-14 rotate-[22deg] opacity-[0.09] hidden md:block" />
        
        {/* Orake logo watermark */}
        <img src="/orake-white-logo.svg" alt="" className="absolute right-[8%] bottom-[20%] w-28 lg:w-40 opacity-[0.04] hidden lg:block" />
      </div>

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h1 className={`${titleFont.className} text-[clamp(6rem,18vw,20rem)] uppercase leading-none tracking-tight text-white/[0.03] whitespace-nowrap`}>
          BLOG
        </h1>
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
