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
      className="relative min-h-[100vh] flex flex-col justify-between overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: bgColors[canIdx] }}
    >
      {/* Removed top fog effect for solid background */}

      {/* Large faded background text, animated */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none">
        <span className={`text-[min(16vw,180px)] font-extrabold tracking-widest uppercase transition-colors duration-700`} style={{
          letterSpacing: '0.4em',
          color: canIdx === 0 ? '#ae5d61' : '#b89c3a',
        }}>
          {canIdx === 0 ? 'VANILLA' : 'LEMON'}
        </span>
      </div>

      {/* Modern 3D rotating coffee beans or lemons */}
      <Image src={beanImg} alt={canIdx === 0 ? "bean" : "lemon"} width={158} height={48} className="absolute top-54 z-20 animate-rot3d-1" style={{ left: 0, transformStyle: 'preserve-3d' }} />
      <Image src={beanImg} alt={canIdx === 0 ? "bean" : "lemon"} width={196} height={76} className="absolute top-32 z-20 animate-rot3d-2" style={{ right: 0, transformStyle: 'preserve-3d' }} />
      <Image src={beanImg} alt={canIdx === 0 ? "bean" : "lemon"} width={112} height={32} className="absolute bottom-92 z-20 animate-rot3d-3" style={{ left: '25%', transformStyle: 'preserve-3d' }} />
      <Image src={beanImg} alt={canIdx === 0 ? "bean" : "lemon"} width={124} height={40} className="absolute bottom-74 z-20 animate-rot3d-4" style={{ right: '33%', transformStyle: 'preserve-3d' }} />

      {/* Center can and caramel splash */}
      <div className="relative flex flex-col items-center justify-center pt-37 pb-16 z-30">
        <div className="relative flex items-center justify-center" style={{minHeight: 340}}>
          {/* Caramel splash behind can */}
          <Image src={caramelSplash} alt="caramel splash" width={380} height={320} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" style={{filter: 'drop-shadow(0 8px 32px #b97a3c88)'}} />
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
          
        </div>
        {/* Buy now button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30">
          <button className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-white/70 bg-white/10 text-white text-md font-semibold shadow-lg backdrop-blur-md transition hover:bg-white/30">
            Buy Now <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Product cans row - curved layout at bottom */}
      <div className="absolute left-0 bottom-0 w-full z-30 flex justify-center pointer-events-none" style={{height: -12}}>
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
              className="absolute left-1/2"
              style={{
                transform: `translate(-50%, 0) translateX(${x}px) translateY(${y}px)`,
                zIndex: 10 + i,
              }}
            >
              {isActive && (
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: 80,
                    height: 80,
                    background: canIdx === 0
                      ? 'radial-gradient(circle, #fbeee6 60%, #ae5d61 100%)'
                      : 'radial-gradient(circle, #fffbe6 60%, #b89c3a 100%)',
                    opacity: 0.45,
                    zIndex: 1,
                  }}
                />
              )}
              <Image
                src={src}
                alt={`can${i+1}`}
                width={170}
                height={300}
                className={`object-contain transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'} ${isActive ? 'z-20' : ''}`}
                style={{ position: 'relative', zIndex: 2 }}
              />
            </div>
          );
        })}
      </div>

      {/* White curved background behind product cans row (z-10, visually behind cans) */}
      <div className="absolute left-1/2 bottom-0 z-10 pointer-events-none" style={{height: 120, width: '60vw', transform: 'translateX(-50%)'}}>
        <svg viewBox="0 0 900 120" width="100%" height="120" preserveAspectRatio="none" style={{display: 'block'}}>
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
