import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaYoutube, FaTiktok, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Subscribe Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <h1 className="text-6xl md:text-7xl font-semibold text-[#204b2a] tracking-tight">Subscribe Us</h1>
            <span className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#204b2a] rounded-full ml-4">
              <FiArrowUpRight size={32} color="#204b2a" />
            </span>
          </div>
        </div>
        <hr className="border-gray-200 mb-8" />
        {/* Links and FAQ */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
          {/* Help & Information */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-[#204b2a]">Help & Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="#" className="hover:underline">Pagination</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Condition</Link></li>
              <li><Link href="#" className="hover:underline">Accecoeries</Link></li>
              <li><Link href="#" className="hover:underline">Term of  Use</Link></li>
              <li><Link href="#" className="hover:underline">Pagination</Link></li>
            </ul>
          </div>
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-[#204b2a]">About Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="#" className="hover:underline">Help Center</Link></li>
              <li><Link href="#" className="hover:underline">Address Store</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Receivers & Amplifiers</Link></li>
              <li><Link href="#" className="hover:underline">Craftsandore</Link></li>
            </ul>
          </div>
          {/* FAQ Section */}
          <div className="md:max-w-xs">
            <h3 className="font-semibold text-lg mb-3 text-[#204b2a]">Maybe your question is have been answered, check this out.</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between border-b border-gray-200 py-2">
                <span className="text-gray-700">What is RIDGED Soft</span>
                <FiArrowUpRight size={20} color="#204b2a" />
              </li>
              <li className="flex items-center justify-between border-b border-gray-200 py-2">
                <span className="text-gray-700">How can I get service from RIDGED Soft</span>
                <FiArrowUpRight size={20} color="#204b2a" />
              </li>
              <li className="flex items-center justify-between border-b border-gray-200 py-2">
                <span className="text-gray-700">What kind of service will I get</span>
                <FiArrowUpRight size={20} color="#204b2a" />
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-200 pt-4">
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Cookies</Link>
            <Link href="#" className="hover:underline">Legal</Link>
            <Link href="#" className="hover:underline">Recalls</Link>
          </div>
          <div className="text-gray-600 text-sm text-center md:text-left">© 2024 Copyright By Sansbro - RIDGED</div>
          <div className="flex gap-4 items-center">
            <Link href="#"><FaYoutube size={24} className="text-[#204b2a] hover:text-red-600 transition-colors" /></Link>
            <Link href="#"><FaTiktok size={24} className="text-[#204b2a] hover:text-black transition-colors" /></Link>
            <Link href="#"><FaLinkedin size={24} className="text-[#204b2a] hover:text-blue-700 transition-colors" /></Link>
            <Link href="#"><FaInstagram size={24} className="text-[#204b2a] hover:text-pink-500 transition-colors" /></Link>
            <Link href="#"><FaFacebook size={24} className="text-[#204b2a] hover:text-blue-600 transition-colors" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
