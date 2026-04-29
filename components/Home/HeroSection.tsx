"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // Placeholder assets (replace with your own for perfect match)
  // Unsplash image URLs for demo purposes
  // Unsplash images for demo
  const canImages = ["/can1.png", "/can2.png"];
  const [canIdx, setCanIdx] = useState(0);
  const caramelSplash = "/can2.png"; // Place can2.png in public/

  // Background color changes with image
  const bgColors = ["#ce777b", "#d7b452"];

  // Auto-slide between can images
  useEffect(() => {
    const interval = setInterval(() => {
      setCanIdx((prev) => (prev + 1) % canImages.length);
    }, 2000); // 3 seconds
    return () => clearInterval(interval);
  }, []);
  // Coffee bean or lemon
  const beanImgs = ["/food1.png", "/lemon.png"];
  const beanImg = beanImgs[canIdx];
  // Product cans
  const productCans = [
    "/can1.png",
    "/can2.png",
    "/can1.png",
    "/can2.png",
    "/can1.png",
    "/can2.png",
  ];



  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-x-clip z-10 transition-colors duration-700"
      style={{ backgroundColor: bgColors[canIdx] }}
    >
      {/* Removed top fog effect for solid background */}

      {/* Large faded background text, animated */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none overflow-hidden">
        <span
          className="text-[15vw] md:text-[min(16vw,180px)] font-extrabold uppercase transition-colors duration-700 tracking-[0.2em] md:tracking-[0.4em] pl-[0.2em] md:pl-[0.4em] text-center"
          style={{ color: canIdx === 0 ? '#ae5d61' : '#b89c3a' }}
        >
          {canIdx === 0 ? 'VANILLA' : 'LEMON'}
        </span>
      </div>

      {/* Modern 3D rotating coffee beans or lemons */}
      <div className="absolute top-[20%] md:top-54 -left-4 md:left-0 z-20 animate-rot3d-1 scale-[0.6] md:scale-100 drop-shadow-2xl" style={{ width: 158, height: 48, transformStyle: 'preserve-3d' }}>
        {beanImgs.map((src, idx) => (
          <Image key={src} src={src} alt="fruit" width={158} height={48} className={`absolute inset-0 object-contain transition-opacity duration-700 ${canIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
        ))}
      </div>
      <div className="absolute top-[12%] md:top-32 -right-4 md:right-0 z-20 animate-rot3d-2 scale-[0.5] md:scale-100 drop-shadow-2xl" style={{ width: 196, height: 76, transformStyle: 'preserve-3d' }}>
        {beanImgs.map((src, idx) => (
          <Image key={src} src={src} alt="fruit" width={196} height={76} className={`absolute inset-0 object-contain transition-opacity duration-700 ${canIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
        ))}
      </div>
      <div className="absolute bottom-[35%] md:bottom-92 -left-2 md:left-[25%] z-20 animate-rot3d-3 scale-75 md:scale-100 drop-shadow-xl" style={{ width: 112, height: 32, transformStyle: 'preserve-3d' }}>
        {beanImgs.map((src, idx) => (
          <Image key={src} src={src} alt="fruit" width={112} height={32} className={`absolute inset-0 object-contain transition-opacity duration-700 ${canIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
        ))}
      </div>
      <div className="absolute top-[45%] md:bottom-74 -right-2 md:right-[33%] z-20 animate-rot3d-4 scale-[0.7] md:scale-100 drop-shadow-xl" style={{ width: 124, height: 40, transformStyle: 'preserve-3d' }}>
        {beanImgs.map((src, idx) => (
          <Image key={src} src={src} alt="fruit" width={124} height={40} className={`absolute inset-0 object-contain transition-opacity duration-700 ${canIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
        ))}
      </div>


      {/* Center can and caramel splash */}
      <div className="relative flex flex-col items-center justify-center pt-37 pb-16 z-30">
        <div className="relative flex items-center justify-center" style={{ minHeight: 340 }}>
          {/* Caramel splash behind can */}
          <Image src={caramelSplash} alt="caramel splash" width={380} height={320} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 8px 32px #b97a3c88)', width: 'auto', height: 'auto' }} />
          {/* Animated central can */}
          <div className="relative z-20 w-[700px] h-[560px] flex items-center justify-center overflow-hidden">
            {canImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt="cold brew can"
                width={1400}
                height={1120}
                className={`absolute left-0 top-0 w-full h-full object-contain transition-opacity duration-700 ${canIdx === idx ? 'opacity-100' : 'opacity-0'}`}
                style={{ width: '700px', height: '560px' }}
                priority={idx === 0}
              />
            ))}
          </div>
          {/* Lactose Free badge */}
          {/* <div className="absolute left-0 bottom-8 z-30">
            <div className="bg-green-500 text-white font-bold rounded-full px-4 py-2 text-xs shadow-lg border-4 border-white">LACTOSE FREE</div>
          </div> */}
        </div>
        {/* Buy now button */}
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <button className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-white/70 bg-white/10 text-white text-lg font-semibold shadow-lg backdrop-blur-md transition hover:bg-white/30">
            Buy Now <span className="ml-2">→</span>
          </button>
        </div> */}
      </div>

      {/* Product cans row - curved layout at bottom */}
      <div className="absolute left-0 bottom-0 w-full z-30 flex justify-center pointer-events-none max-md:translate-y-8" style={{ height: 0 }}>
        {productCans.map((src, i) => {
          const total = productCans.length - 1;
          const arc = Math.PI / 1.8; // arc in radians
          const angle = arc * (i / total) - arc / 2;
          const radius = 410;
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius * 0.4; // NEGATIVE for upward curve
          // Highlight the can if it matches the current canIdx (even indices: 0,2,4 = can1.png; odd: 1,3,5 = can2.png)
          const isActive = (canIdx === 0 && src === "/can1.png") || (canIdx === 1 && src === "/can2.png");
          return (
            <div
              key={i}
              className={`absolute left-1/2 ${i === 2 || i === 3 ? 'block' : 'hidden md:block'}`}
              style={{
                transform: `translate(-50%, 0) translateX(${x}px) translateY(${y}px)`,
                zIndex: 10 + i,
              }}
            >
              {isActive && (
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[110px] h-[110px] md:w-[160px] md:h-[160px]"
                  style={{
                    background: canIdx === 0
                      ? 'radial-gradient(circle, rgba(251,238,230,0.8) 20%, rgba(174,93,97,0.4) 60%, transparent 100%)'
                      : 'radial-gradient(circle, rgba(255,251,230,0.8) 20%, rgba(184,156,58,0.4) 60%, transparent 100%)',
                    opacity: 0.8,
                    filter: 'blur(10px)',
                    zIndex: 1,
                  }}
                />
              )}
              <Image
                src={src}
                alt={`can${i + 1}`}
                width={194}
                height={300}
                className={`object-contain transition-all duration-500 max-md:scale-90 ${isActive ? 'opacity-100' : 'opacity-60'} ${isActive ? 'z-20' : ''}`}
                style={{ position: 'relative', zIndex: 2, width: 'auto', height: 'auto' }}
              />
            </div>
          );
        })}
      </div>

      {/* Extend pink background to lower the boundary line */}
      <div className="absolute left-0 top-full w-full h-[40px] z-0 transition-colors duration-700" style={{ backgroundColor: bgColors[canIdx] }}></div>

      {/* White curved background behind product cans row (z-10, visually behind cans) */}
      <div className="absolute left-1/2 bottom-[-40px] z-10 pointer-events-none w-[100vw] min-w-[900px] md:min-w-0 md:w-[60vw]" style={{ height: 120, transform: 'translateX(-50%)' }}>
        <svg viewBox="0 0 900 120" width="100%" height="120" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,120 Q450,-60 900,120 L900,120 L0,120 Z" fill="#fff" />
        </svg>
      </div>

      {/* Modern 3D rotating animations for beans/lemons */}
      <style jsx>{`
        @keyframes rot3d-1 {
          0% { transform: rotateY(-18deg) rotateX(0deg); }
          30% { transform: rotateY(12deg) rotateX(8deg); }
          60% { transform: rotateY(18deg) rotateX(-8deg); }
          100% { transform: rotateY(-18deg) rotateX(0deg); }
        }
        @keyframes rot3d-2 {
          0% { transform: rotateX(14deg) rotateY(0deg); }
          40% { transform: rotateX(-10deg) rotateY(16deg); }
          80% { transform: rotateX(10deg) rotateY(-12deg); }
          100% { transform: rotateX(14deg) rotateY(0deg); }
        }
        @keyframes rot3d-3 {
          0% { transform: rotateY(0deg) rotateX(-10deg); }
          50% { transform: rotateY(18deg) rotateX(10deg); }
          100% { transform: rotateY(0deg) rotateX(-10deg); }
        }
        @keyframes rot3d-4 {
          0% { transform: rotateX(-16deg) rotateY(8deg); }
          60% { transform: rotateX(12deg) rotateY(-14deg); }
          100% { transform: rotateX(-16deg) rotateY(8deg); }
        }
        .animate-rot3d-1 { animation: rot3d-1 7s cubic-bezier(0.4,0,0.2,1) infinite; }
        .animate-rot3d-2 { animation: rot3d-2 8.5s cubic-bezier(0.4,0,0.2,1) infinite 1.1s; }
        .animate-rot3d-3 { animation: rot3d-3 7.8s cubic-bezier(0.4,0,0.2,1) infinite 0.6s; }
        .animate-rot3d-4 { animation: rot3d-4 9s cubic-bezier(0.4,0,0.2,1) infinite 1.6s; }
      `}</style>
    </section>
  );
}

