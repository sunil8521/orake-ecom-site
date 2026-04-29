import Image from "next/image";
import { Sansita, DM_Sans } from "next/font/google";
import { MoveUpRight } from "lucide-react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const socials = [
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaTwitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#c25b5e] text-white pt-20 overflow-hidden flex flex-col justify-between">

      {/* Top Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-12 sm:px-16 lg:px-28 flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 pb-10">

        {/* CTA Block + Logo */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 z-20">
          {/* Logo */}
          <div className="mb-2">
            <Image src="/orake-white-logo.svg" alt="Orake" width={140} height={50} className="opacity-90" />
          </div>

          <h3 className={`${titleFont.className} text-[clamp(2.5rem,5vw,4rem)] uppercase leading-[0.9] tracking-wider`}>
            Thirsty for <br /> <span className="text-[#15161b]">more details?</span>
          </h3>
          <p className={`${textFont.className} text-lg lg:text-xl font-medium tracking-wide text-white/80 max-w-sm`}>
            Reach out to our team for partnerships, orders, or just to talk flavors!
          </p>
          <a href="mailto:hello@orake.com" className="group flex items-center gap-4 mt-2 w-fit">
            <span className={`${titleFont.className} text-2xl lg:text-3xl tracking-widest uppercase pb-1 border-b-2 border-white/40 group-hover:border-white transition-colors`}>
              hello@orake.com
            </span>
            <div className="w-10 h-10 rounded-full bg-white text-[#c25b5e] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-md">
              <MoveUpRight size={20} className="stroke-[3px]" />
            </div>
          </a>

        </div>

        {/* Links Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-6 z-20">

          <div className="flex flex-col gap-4">
            <p className={`${titleFont.className} text-xl tracking-widest text-[#15161b] uppercase mb-2`}>Product</p>
            <a href="/products" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Our Drinks</a>
            <a href="/about" className={`${textFont.className} text-lg hover:translate-x-2 transition-transform`}>Testimonials</a>
          </div>

          <div className="flex flex-col gap-4">
            <p className={`${titleFont.className} text-xl tracking-widest text-[#15161b] uppercase mb-2`}>Company</p>
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

      {/* Bottom Copyright */}
      <div className="w-full max-w-[1400px] mx-auto px-12 sm:px-16 lg:px-28 pt-8 pb-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 z-20">
        <p className={`${textFont.className} text-md text-white/80 font-medium tracking-wide`}>
          © 2026 <a href="https://swiftrise.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">Swiftrise Solution Pvt Ltd</a>. ALL RIGHTS RESERVED.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socials.map(({ Icon, label, href }) => (
            <a key={label} href={href} aria-label={label}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white hover:text-[#c25b5e] flex items-center justify-center transition-all duration-300 text-white hover:scale-110 hover:shadow-lg">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
