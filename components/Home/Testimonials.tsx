import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const testimonials = [
  {
    text: "I've never tasted a drink so fresh and natural. The mango flavor is my absolute favorite—it's like a burst of fruit!",
    author: "Emily R.",
    role: "Fitness Enthusiast",
    rating: 5,
  },
  {
    text: "It's my daily pick-me-up. I love that it's delicious and made with real ingredients. The perfect alternative to soda.",
    author: "Jordan M.",
    role: "Health Coach",
    rating: 5,
  },
  {
    text: "The perfect balance of natural sweetness. I've cut out artificial ingredients, and this has been a total game-changer!",
    author: "Carlos T.",
    role: "Wellness Blogger",
    rating: 5,
  },

];

const decorations = [
  "/svgs/starwbery-svg.png",
  "/svgs/ginger-svg.png",
  "/svgs/leaf-svg.png",
  "/svgs/lemon-svg.png",
  "/svgs/flower-sb.png",
  "/svgs/leaf-2.png",
  "/svgs/lemon-2-svg.png",
  

];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < count ? "text-[#f4d169]" : "text-gray-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);const TestimonialCard = ({ t, idx }: { t: typeof testimonials[0], idx: number }) => {
  const Decoration = decorations[idx % decorations.length];

  return (
    <div
      className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[350px] lg:w-[400px] min-h-[320px] sm:min-h-[auto] bg-gradient-to-br from-white via-pink-50/40 to-yellow-50/40 rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full border border-gray-100 overflow-hidden group"
    >
      {/* Decorative Background Image */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none transform -rotate-12">
        <img src={Decoration} alt="decoration" className="w-full h-full object-contain" />
      </div>

      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[4px] bg-[#de3e4f] opacity-80 transition-opacity group-hover:opacity-100"
      />

      <div className="relative z-10 flex flex-col h-full mt-2">
        <Stars count={t.rating} />

        <p className="text-lg font-medium leading-[1.6] text-[#292a31] italic flex-grow">
          "{t.text}"
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="font-bold text-[#15161b] text-base leading-tight uppercase tracking-wider">{t.author}</p>
          
          {/* Subtle dash to finish the minimalist layout */}
          <div className="w-6 h-[2px] bg-[#de3e4f]/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  // Ensure we have enough items so the track is always wider than the 1500px container,
  // allowing a seamless endless loop even if the database only returns 2 or 3 reviews.
  const minItems = 8;
  const displayTestimonials = [...testimonials];
  if (displayTestimonials.length > 0) {
    while (displayTestimonials.length < minItems) {
      displayTestimonials.push(...testimonials);
    }
  }

  return (
    <section 
      id="testimonials" 
      className={`relative w-full py-16 sm:py-24 overflow-hidden bg-[#faf9f6] px-12 sm:px-16 lg:px-28 ${textFont.className}`}
    >
      <style>{`
        @keyframes scroll-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 2rem)); } /* 2rem is gap-8 on desktop */
        }
        .animate-marquee {
          animation: scroll-marquee 80s linear infinite; /* very slow */
        }
        
        /* Pause on hover only on devices that support hover */
        @media (hover: hover) {
          .marquee-wrapper:hover .animate-marquee {
            animation-play-state: paused;
          }
        }
        
        /* Pause on active (touch and hold) for all devices, specifically mobile */
        .marquee-wrapper:active .animate-marquee {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 60s; /* Slower on mobile */
            to { transform: translateX(calc(-100% - 1.5rem)); } /* 1.5rem is gap-6 on mobile */
          }
        }
      `}</style>

       

      {/* Center the whole content to a max width of 1500px as requested */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="mb-12 sm:mb-20">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#c25b5e] text-[#ffffff] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm border border-[#8a9b87]/20">
              What People Say
            </span>
            <h2 className={`${titleFont.className} text-[clamp(2.2rem,5.5vw,4.5rem)] uppercase leading-[1] text-[#15161b] tracking-tight`}>
              Stories from <span className="text-[#de3e4f]">The Source</span>
            </h2>
            <p className="text-gray-500 mt-4 text-sm sm:text-base font-medium tracking-[0.2em] uppercase">
              Real reviews from real sippers
            </p>
            <div className="mt-6 max-w-xl mx-auto text-center text-gray-900">
              <p className="text-base sm:text-lg font-medium">
                Thousands of sippers trust our small-batch flavors — handcrafted, naturally delicious, and ready for your next adventure.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Want to share your experience? Send it to hello@orake.com and we might feature it here.
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {/* Marquee Container without horizontal padding to allow edge-to-edge scrolling inside the 1500px wrapper */}
          <div className="marquee-wrapper flex gap-6 sm:gap-8 py-8 items-stretch">
            {/* First Track */}
            <div className="flex shrink-0 gap-6 sm:gap-8 animate-marquee items-stretch">
              {displayTestimonials.map((t, idx) => (
                <TestimonialCard key={`t1-${idx}`} t={t} idx={idx} />
              ))}
            </div>
            {/* Second Track for seamless loop */}
            <div className="flex shrink-0 gap-6 sm:gap-8 animate-marquee items-stretch" aria-hidden="true">
              {displayTestimonials.map((t, idx) => (
                <TestimonialCard key={`t2-${idx}`} t={t} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
