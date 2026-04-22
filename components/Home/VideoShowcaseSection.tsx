"use client";

import { useEffect, useRef, useState } from "react";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function VideoShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Lazy play and entrance animation logic
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
      { threshold: 0.15 } // Trigger when 15% of the video section is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20">
      
      {/* Background Gradient to match project aesthetic */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(222,62,79,0.05)_0%,rgba(244,238,207,0.2)_30%,rgba(255,255,255,0)_70%)]" />

      <div className="relative mx-auto w-full max-w-[1300px]">
        {/* Massive Floating 3D Video Container */}
        {/* Changed to a flex container with a robust minimum height so text physically pushes it instead of blowing out the top */}
        <div className="group relative w-full overflow-hidden rounded-[2.5rem] bg-[#15161b] shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all duration-[1.5s] ease-out hover:shadow-[0_45px_80px_rgba(0,0,0,0.35)] flex items-end min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh]">
          
          {/* Lazy Loaded Video - Now absolutely filling the background */}
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 z-0 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            src="/video2.mp4"
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
          >
            Your browser does not support the video tag.
          </video>

          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#15161b]">
               <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-white"></div>
            </div>
          )}

          {/* Environmental Overlay Gradients for readable text & aesthetic */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent opacity-90" />

          {/* Floating Content / Animated on scroll - Now structurally bounds the container natively! */}
          <div 
            className={`relative z-10 w-full p-6 sm:p-10 md:p-16 lg:w-[65%] xl:w-[60%] transition-all duration-[1.2s] ease-out delay-200 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <h2 className={`${titleFont.className} mb-4 text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[1.05] tracking-wide text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]`}>
              Refresh Your Life,
              <br />
              <span className="text-[#de3e4f]">One Sip at a Time</span>
            </h2>

            <p className={`${textFont.className} mt-4 sm:mt-6 mb-8 sm:mb-10 max-w-[40ch] text-[clamp(1.1rem,4vw,1.5rem)] font-light leading-relaxed text-[#f0f0f2] drop-shadow-md`}>
              Stay hydrated and energized with every drink. Our bottles are designed to keep your beverage pure, cool, and always within reach—because every sip matters.
            </p>

            {/* List items with staggered entry effect on scroll */}
            <div className="mb-8 sm:mb-10 flex flex-col gap-3 sm:gap-4">
              {[
                "Crystal-clear, fresh taste",
                "Long-lasting temperature control",
                "Perfect for every adventure",
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 sm:gap-4 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${isInView ? 500 + i * 150 : 0}ms`, opacity: isInView ? 1 : 0, transform: isInView ? 'translateX(0)' : 'translateX(-20px)' }}
                >
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#de3e4f]/60 bg-[#de3e4f]/20 text-[#de3e4f] shadow-inner backdrop-blur-sm shrink-0">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${textFont.className} text-[1.05rem] sm:text-[1.2rem] font-medium tracking-wide text-gray-100 drop-shadow-sm`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className={`${textFont.className} group mt-2 sm:mt-4 inline-flex items-center gap-3 sm:gap-4 rounded-full bg-white pl-6 pr-5 py-3 sm:pl-8 sm:pr-6 sm:py-4 text-[1.2rem] sm:text-[1.4rem] font-semibold leading-none text-black shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#de3e4f] hover:text-white hover:shadow-[0_15px_30px_rgba(222,62,79,0.3)] active:scale-95`}>
              Shop Bottles
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#de3e4f] shrink-0">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
