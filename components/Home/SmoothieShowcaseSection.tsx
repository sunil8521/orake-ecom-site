
"use client";
import Image from "next/image";
// import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";


const SmoothieShowcaseSection = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const [section2Overlap, setSection2Overlap] = useState(false);
  const [section3Overlap, setSection3Overlap] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section1Ref.current && section2Ref.current) {
        const rect1 = section1Ref.current.getBoundingClientRect();
        const rect2 = section2Ref.current.getBoundingClientRect();
        // If section2 is overlapping section1 vertically
        const overlap2 = rect2.top < rect1.bottom && rect2.bottom > rect1.top;
        setSection2Overlap(overlap2);
      }
      if (section2Ref.current && section3Ref.current) {
        const rect2 = section2Ref.current.getBoundingClientRect();
        const rect3 = section3Ref.current.getBoundingClientRect();
        // If section3 is overlapping section2 vertically
        const overlap3 = rect3.top < rect2.bottom && rect3.bottom > rect2.top;
        setSection3Overlap(overlap3);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[300vh] w-full mt-74">
      {/* Section 1 */}
      <section
        ref={section1Ref}
        className="sticky top-1/2 -translate-y-1/2 w-full min-h-[70vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl mt-12 z-10"
        style={{ background: "white" }}
      >
        <div className="flex-1 bg-[#ce777b] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl">
            <Image
              src="/can1.png"
              alt="Green Smoothie"
              width={620}
              height={420}
              className="transition-transform duration-500 scale-110"
            />
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Green Smoothie</h2>
          <p className="text-white text-lg mb-6">Guava flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#a2b86c] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#ce777b] text-2xl md:text-3xl font-bold mb-1">Berry Smoothie</h2>
          <p className="text-[#ce777b] text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#ce777b] rounded-full text-[#ce777b] font-semibold hover:bg-black hover:text-white transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#e2b85b] text-2xl md:text-3xl font-bold mb-1">Coffee Milk</h2>
          <p className="text-white text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#ce777b] transition-colors">
            View more <span className="text-xl">→</span>
          </button> 
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className="sticky top-1/2 -translate-y-1/2 w-full min-h-[70vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl z-20"
      >
        {/* Show Section 1's first column above Section 2's left column when overlapping */}
        {/* Left column: fully transparent when overlapping */}
        <div className={`flex-1 flex flex-col items-center justify-center py-12 px-4 transition-all duration-500 ${section2Overlap ? 'opacity-0 bg-transparent pointer-events-none' : 'opacity-100'}`}>
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Green Smoothie</h2>
          <p className="text-white text-lg mb-6">Guava flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#a2b86c] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#d7b452] flex flex-col items-center justify-center py-12 px-4 z-10">
          <div className="mb-8 overflow-hidden group rounded-2xl">
            <Image
              src="/can2.png"
              alt="Berry Smoothie"
              width={620}
              height={420}
              className="transition-transform duration-500 scale-110"
            />
          </div>
          <h2 className="text-[#ffffff] text-2xl md:text-3xl font-bold mb-1">Berry Smoothie</h2>
          <p className="text-[#ffffff] text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#ffffff] rounded-full text-[#ffffff] font-semibold hover:bg-black hover:text-white transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        {/* Right column: fully transparent when overlapping */}
        <div className={`flex-1 flex flex-col items-center justify-center py-12 px-4 transition-all duration-500 ${section2Overlap ? 'opacity-0 bg-transparent pointer-events-none' : 'opacity-100'}`}>
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#e2b85b] text-2xl md:text-3xl font-bold mb-1">Coffee Milk</h2>
          <p className="text-white text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#ce777b] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={section3Ref}
        className="sticky top-1/2 -translate-y-1/2 w-full min-h-[70vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl z-30"
      >
        {/* First column: fully transparent when overlapping Section 2 */}
        <div className={`flex-1 flex flex-col items-center justify-center py-12 px-4 transition-all duration-500 ${section3Overlap ? 'opacity-0 bg-transparent pointer-events-none' : 'opacity-100 bg-[#ffffff]'}`}>
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Green Smoothie</h2>
          <p className="text-white text-lg mb-6">Guava flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#a2b86c] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        {/* Second column: fully transparent when overlapping Section 2 */}
        <div className={`flex-1 flex flex-col items-center justify-center py-12 px-4 transition-all duration-500 ${section3Overlap ? 'opacity-0 bg-transparent pointer-events-none' : 'opacity-100 bg-[#ffffff]'}`}>
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#ce777b] text-2xl md:text-3xl font-bold mb-1">Berry Smoothie</h2>
          <p className="text-[#ce777b] text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#ce777b] rounded-full text-[#ce777b] font-semibold hover:bg-black hover:text-white transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        {/* Third column: always visible */}
        <div className="flex-1 bg-[#ce777b] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl">
            <Image
              src="/can1.png"
              alt="Coffee Milk"
              width={620}
              height={420}
              className="transition-transform duration-500 scale-110"
            />
          </div>
          <h2 className="text-[#e2b85b] text-2xl md:text-3xl font-bold mb-1">Coffee Milk</h2>
          <p className="text-white text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#ce777b] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SmoothieShowcaseSection;
