"use client";
import Image from "next/image";

export default function HeroSection() {
  // Placeholder assets (replace with your own for perfect match)
  // Unsplash image URLs for demo purposes
  // Unsplash images for demo
  const canImg = "/can1.png"; // Place can1.png in public/
  const caramelSplash = "/can2.png"; // Place can2.png in public/
  // Coffee bean
  const beanImg = "/food1.png";
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
    <section className="relative min-h-[100vh] flex flex-col justify-between bg-[#ce777b] overflow-hidden">
      {/* Removed top fog effect for solid background */}

      {/* Large faded background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none">
        <span className="text-[min(16vw,180px)]  font-extrabold text-[#ae5d61] tracking-widest uppercase" style={{letterSpacing: '0.4em'}}>VANILLA</span>
      </div>

      {/* Floating coffee beans */}
      <Image src={beanImg} alt="bean" width={158} height={48} className="absolute left-12 top-54 z-20 animate-float-slow" />
      <Image src={beanImg} alt="bean" width={196} height={76} className="absolute right-24 top-32 z-20 animate-float" />
      <Image src={beanImg} alt="bean" width={112} height={32} className="absolute left-1/4 bottom-92 z-20 animate-float-reverse" />
      <Image src={beanImg} alt="bean" width={124} height={40} className="absolute right-1/3 bottom-74 z-20 animate-float" />

      {/* Center can and caramel splash */}
      <div className="relative flex flex-col items-center justify-center pt-37 pb-16 z-30">
        <div className="relative flex items-center justify-center" style={{minHeight: 340}}>
          {/* Caramel splash behind can */}
          <Image src={caramelSplash} alt="caramel splash" width={380} height={320} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" style={{filter: 'drop-shadow(0 8px 32px #b97a3c88)'}} />
          {/* Central can */}
          <Image src={canImg} alt="cold brew can" width={770} height={620} className="relative z-20 drop-shadow-2xl" />
          {/* Lactose Free badge */}
          <div className="absolute left-0 bottom-8 z-30">
            <div className="bg-green-500 text-white font-bold rounded-full px-4 py-2 text-xs shadow-lg border-4 border-white">LACTOSE FREE</div>
          </div>
        </div>
        {/* Buy now button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30">
          <button className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-white/70 bg-white/10 text-white text-lg font-semibold shadow-lg backdrop-blur-md transition hover:bg-white/30">
            Kup teraz <span className="ml-2">→</span>
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
          return (
            <div
              key={i}
              className="absolute left-1/2"
              style={{
                transform: `translate(-50%, 0) translateX(${x}px) translateY(${y}px)`,
                zIndex: 10 + i,
              }}
            >
              <Image src={src} alt={`can${i+1}`} width={194} height={300} className="object-contain" />
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

      {/* Animations for floating beans */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float 7s ease-in-out infinite; }
        .animate-float-reverse { animation: float 5s ease-in-out infinite reverse; }
      `}</style>
    </section>
  );
}
