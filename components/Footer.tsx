"use client";
import { Anton, Oswald } from "next/font/google";
import { MoveUpRight } from "lucide-react";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Footer() {
  return (
    <footer className="relative bg-[#c25b5e] text-white pt-20 overflow-hidden flex flex-col justify-between">
      
      {/* Top Main Mega Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 pb-10">
        
        {/* Call to Action Block */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 z-20">
          <h3 className={`${titleFont.className} text-[clamp(2.5rem,5vw,4rem)] uppercase leading-[0.9] tracking-wider`}>
            Thirsty for <br/> <span className="text-[#15161b]">more details?</span>
          </h3>
          <p className={`${textFont.className} text-lg lg:text-xl font-medium tracking-wide text-white/80 max-w-sm`}>
            Reach out to our team for partnerships, orders, or just to talk flavors!
          </p>
          <a href="mailto:hello@orake.com" className="group flex items-center gap-4 mt-4 w-fit">
            <span className={`${titleFont.className} text-2xl lg:text-3xl tracking-widest uppercase pb-1 border-b-2 border-white/40 group-hover:border-white transition-colors`}>
              hello@orake.com
            </span>
            <div className="w-10 h-10 rounded-full bg-white text-[#c25b5e] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-md">
              <MoveUpRight size={20} className="stroke-[3px]" />
            </div>
          </a>
        </div>

        {/* Links Grid Block */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-6 z-20">
          
          <div className="flex flex-col gap-4">
            <p className={`${titleFont.className} text-xl tracking-widest text-[#15161b] uppercase mb-2`}>Product</p>
            <a href="/Product" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Our Drinks</a>
            <a href="/about" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Ingredients</a>
            <a href="/about" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Nutrition</a>
            <a href="/about" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Testimonials</a>
          </div>

          <div className="flex flex-col gap-4">
            <p className={`${titleFont.className} text-xl tracking-widest text-[#15161b] uppercase mb-2`}>Company</p>
            <a href="/about" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Our Story</a>
            <a href="/about" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Community</a>
            <a href="/blog" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Blog</a>
            <a href="/contact" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Contact</a>
          </div>

          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <p className={`${titleFont.className} text-xl tracking-widest text-[#15161b] uppercase mb-2`}>Legal</p>
            <a href="/policies#terms" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Terms of Service</a>
            <a href="/policies#refund" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Refund Policy</a>
            <a href="/policies#shipping" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Shipping</a>
            <a href="/policies#cancellation" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Cancellation</a>
          </div>

        </div>
      </div>

      {/* Extreme Bottom Social / Copyright Bar */}
      <div className="w-full bg-[#15161b] text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className={`${textFont.className} text-md text-gray-400 font-medium tracking-wide`}>
             © 2026 ORAKE BEVERAGES. ALL RIGHTS RESERVED.
           </p>
           
           <div className="flex gap-4 sm:gap-6">
             {["LinkedIn", "Instagram", "Twitter"].map((link) => (
               <a 
                 key={link} 
                 href="#" 
                 className={`${titleFont.className} text-lg uppercase tracking-wide hover:text-[#c25b5e] transition-colors`}
               >
                 {link}
               </a>
             ))}
           </div>
        </div>
      </div>

    </footer>
  );
}
