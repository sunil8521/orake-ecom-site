"use client";

import { useEffect, useRef, useState } from "react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function VideoShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 md:px-8 pt-4 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-24">
      
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(222,62,79,0.05)_0%,rgba(244,238,207,0.2)_30%,rgba(255,255,255,0)_70%)]" />

      <div className="relative mx-auto w-full max-w-[1400px] xl:max-w-[1500px]">
        {/* Video Container */}
        <div 
          ref={containerRef}
          className="group relative w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] bg-[#15161b] shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-shadow duration-700 hover:shadow-[0_45px_80px_rgba(0,0,0,0.35)] flex items-end aspect-[3/4] sm:aspect-[4/3] md:aspect-auto md:min-h-[80vh]"
        >
          
          {/* Video Background */}
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 z-0 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            src="/video2.mp4"
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsLoaded(true)}
          >
            Your browser does not support the video tag.
          </video>

          {/* Poster / Fallback for mobile (shown until video loads) */}
          <div className={`absolute inset-0 z-0 bg-[#15161b] transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b22] via-[#15161b] to-[#0d0e12]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-white/60"></div>
            </div>
          </div>

          {/* Dark Overlay Gradients */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/20 to-transparent opacity-90" />

          {/* Content */}
          <div 
            className={`relative z-10 w-full p-5 sm:p-8 md:p-12 lg:p-16 lg:w-[65%] xl:w-[55%] transition-all duration-[1.2s] ease-out delay-200 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className={`${titleFont.className} mb-3 sm:mb-4 text-[clamp(2rem,7vw,5rem)] uppercase leading-[1.05] tracking-wide text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]`}>
              Refresh Your Life,
              <br />
              <span className="text-[#de3e4f]">One Sip at a Time</span>
            </h2>

            <p className={`${textFont.className} mt-3 sm:mt-5 mb-6 sm:mb-8 md:mb-10 max-w-[40ch] text-[clamp(0.95rem,3.5vw,1.5rem)] font-light leading-relaxed text-[#f0f0f2]/90 drop-shadow-md`}>
              Stay hydrated and energized with every drink. Our bottles are designed to keep your beverage pure, cool, and always within reach.
            </p>

            {/* Feature List */}
            <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col gap-2.5 sm:gap-3">
              {[
                "Crystal-clear, fresh taste",
                "Long-lasting temperature control",
                "Perfect for every adventure",
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${isInView ? 500 + i * 150 : 0}ms`, opacity: isInView ? 1 : 0, transform: isInView ? 'translateX(0)' : 'translateX(-20px)' }}
                >
                  <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-[#de3e4f]/60 bg-[#de3e4f]/20 text-[#de3e4f] shadow-inner backdrop-blur-sm shrink-0">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${textFont.className} text-[0.95rem] sm:text-[1.1rem] font-medium tracking-wide text-gray-100 drop-shadow-sm`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className={`${textFont.className} group/btn mt-1 sm:mt-2 inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-white pl-5 pr-4 py-2.5 sm:pl-7 sm:pr-5 sm:py-3.5 text-[1.05rem] sm:text-[1.25rem] font-semibold leading-none text-black shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#de3e4f] hover:text-white hover:shadow-[0_15px_30px_rgba(222,62,79,0.3)] active:scale-95`}>
              Shop Bottles
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-white group-hover/btn:text-[#de3e4f] shrink-0">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
