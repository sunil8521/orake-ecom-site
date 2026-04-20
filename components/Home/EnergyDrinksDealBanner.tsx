import React from "react";
import Image from "next/image";

const EnergyDrinksDealBanner = () => {
  return (
    <section
      className="w-full  bg-[#8a9b87] flex items-center justify-center mb-8 overflow-hidden relative"
      style={{ minHeight: 540, width: '100%', margin: '32px 0 0 0', padding: 0 }}
    >
      {/* Centered Content Wrapper */}
      <div className="flex flex-row items-center justify-center w-full max-w-[1400px] px-12 gap-8 relative">
        {/* Left Content */}
        <div className="flex flex-col justify-center w-full max-w-[600px] z-10">
          <span className="text-sm md:text-base text-[#f3f3e7] font-semibold mb-2 tracking-wide" style={{ opacity: 0.9 }}>
            (WINTER DEAL DAYS)
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4" style={{ lineHeight: 1.1 }}>
            Save 20% or more on<br />Energy Drinks
          </h2>
          <p className="text-[#ffffff] text-lg md:text-xl font-medium mb-6" style={{ opacity: 0.95 }}>
            Unlock Savings: Get 20% or More Off Your Favorite Energy Drinks
          </p>
          <button
            className="w-fit px-8 py-4 bg-white text-[#222] rounded-full font-semibold shadow hover:bg-[#f3f3e7] transition-colors text-lg md:text-xl"
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}
          >
            Shop Now
          </button>
        </div>
        {/* Decorative lines (SVG) */}
        <svg
          className="absolute left-0 bottom-0 z-0 hidden md:block"
          width="500"
          height="340"
          viewBox="0 0 600 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.75 }}
        >
          <path d="M0 540 Q300 300 600 540" stroke="#5e8158" strokeWidth="2" fill="none" />
          <path d="M0 480 Q300 240 600 480" stroke="#5e8158" strokeWidth="2" fill="none" />
          <path d="M0 420 Q300 180 600 420" stroke="#5e8158" strokeWidth="1" fill="none" />
          <path d="M0 360 Q300 120 600 360" stroke="#5e8158" strokeWidth="0.7" fill="none" />
          
        </svg>
          {/* Cans */}
        <div className="flex flex-col items-end z-20">
          <Image
            src="/can1.png"
            alt="Energy Drink Can"
            width={500}
            height={900}
            className="rotate-[18deg] drop-shadow-2xl -mb-8"
          />
          <Image
            src="/can2.png"
            alt="Energy Drink Can"
            width={400}
            height={750}
            className="drop-shadow-4xl -mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default EnergyDrinksDealBanner;
