"use client";
import { ChefHat } from "lucide-react";
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = ["FAQs", "Our Staff", "Contact Us", "About Us", "Testimonials"];

  // Generate a totally deterministic organic & rugged torn edge path
  const tearPoints = Array.from({ length: 300 }).map((_, i) => {
    const x = 100 - (i * (100 / 299));
    // Smoother waves and reduced spikes for a less rigid tear
    const wave1 = Math.sin(i * 0.1) * 8;
    const wave2 = Math.sin(i * 0.4) * 4;
    const wave3 = Math.sin(i * 1.0) * 2;
    const pseudoRandom = ((i * i * 37) % 12) - 6; 
    
    // Base center at 35% so the tear sits higher up
    let y = 35 + wave1 + wave2 + wave3 + pseudoRandom;
    y = Math.max(0, Math.min(100, y)); 
    return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
  }).join(', ');
  
  const tearPath = `polygon(0 0, 100% 0, 100% 10%, ${tearPoints}, 0 10%)`;

  return (
    <footer className="relative bg-[#c25b5e] text-white pt-24 pb-8 -mt-[2px] z-20">
        
 
        {/* Photorealistic Torn Paper Top Edge */}
        <div
            className="absolute -top-[2px] left-0 w-full h-10 sm:h-14 md:h-16 z-10 pointer-events-none"
            style={{
                backgroundColor: "#fdf8f4",
                clipPath: tearPath,
            }}
        />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 mb-16 pt-6">

          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
                <ChefHat size={22} className="text-white fill-white/10" />
              </div>
              <div className="leading-none">
                <p className="font-playfair text-2xl font-bold text-white mb-1 tracking-wide">Restro.</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[4px] text-white font-semibold">Restaurant</p>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-8 pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="flex gap-3 flex-wrap">
              {[FaFacebookF, FaXTwitter, FaPinterestP, FaInstagram, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300 text-gray-300">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-playfair text-[19px] font-bold text-white mb-7">Links</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-white hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-playfair text-[19px] font-bold text-white mb-7">Contact Info</h4>
            <ul className="space-y-5">
                <li className="text-sm text-white hover:text-red-500 transition-colors duration-300 cursor-default">(000) 000-0000</li>
                <li className="text-sm text-white hover:text-red-500 transition-colors duration-300 cursor-default">example@gmail.com</li>
                <li className="text-sm text-white leading-relaxed max-w-[200px]">2464 Royal Ln. Mesa, New Jersey 45463</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-playfair text-[19px] font-bold text-white mb-7">Get the latest information</h4>
            <form className="flex w-full mt-2" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
                <input 
                    type="email" 
                    placeholder="Email address" 
                    required
                    className="flex-1 w-full bg-white/10 text-white placeholder-white text-sm px-5 py-3.5 rounded-l-md outline-none focus:bg-white/15 transition-colors border border-transparent focus:border-white/20"
                />
                <button type="submit" className="bg-red-600 hover:bg-red-700 transition-colors text-white px-5 rounded-r-md flex items-center justify-center">
                    <FaPaperPlane size={15} />
                </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
            <p>Copyright © 2025 <span className="text-red-600 hover:underline cursor-pointer">Restro.</span> Website. All Rights Reserved.</p>
            <div className="flex gap-2 text-[13px]">
              <a href="#" className="hover:text-white transition-colors">User Terms & Conditions</a>
              <span className="text-white">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
