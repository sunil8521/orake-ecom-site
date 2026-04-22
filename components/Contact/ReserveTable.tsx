"use client";
import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { Anton, Oswald } from "next/font/google";


const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message blasted off! We'll hit you back soon.");
  };

  return (
    <section className="relative overflow-hidden bg-[#15161b] min-h-screen">


      {/* ━━━ Decorative Background ━━━ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#c25b5e]/8 rounded-full blur-[150px] -top-40 -right-40" />
        <div className="absolute w-[400px] h-[400px] bg-[#dbba53]/5 rounded-full blur-[120px] bottom-20 -left-40" />
      </div>

      {/* ━━━ Hero Header ━━━ */}
      <div className="relative z-10 pt-36 pb-16 md:pt-44 md:pb-24 px-6 sm:px-12 lg:px-20 text-center">
        {/* Massive Watermark */}
        <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
          <h1 className={`${titleFont.className} text-[clamp(6rem,15vw,18rem)] uppercase leading-none tracking-tight text-white/[0.04]`}>
            CONNECT
          </h1>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#de3e4f]" />
            <span className={`${textFont.className} text-[#de3e4f] text-sm font-bold uppercase tracking-[0.25em]`}>
              Hit Us Up
            </span>
            <span className="h-[2px] w-8 bg-[#de3e4f]" />
          </div>
          <h2 className={`${titleFont.className} text-[clamp(3rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-wide text-white`}>
            Got Questions?<br />
            <span className="text-[#de3e4f]">Let&apos;s Talk.</span>
          </h2>
        </div>
      </div>

      {/* ━━━ Content ━━━ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-14 items-start">
          
          {/* Dark Glassmorphic Form */}
          <form onSubmit={handleSubmit} className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <h3 className={`${titleFont.className} text-3xl uppercase tracking-wide text-white mb-8`}>
              Send a Message
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                    Name <span className="text-[#de3e4f]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Your name"
                    required
                    className={`${textFont.className} w-full border-b-2 border-white/10 bg-white/5 px-4 py-3 text-lg font-medium text-white placeholder-gray-500 focus:border-[#de3e4f] focus:bg-white/10 focus:outline-none transition-all rounded-t-lg`}
                  />
                </div>
                <div>
                  <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                    Email <span className="text-[#de3e4f]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="you@energy.com"
                    required
                    className={`${textFont.className} w-full border-b-2 border-white/10 bg-white/5 px-4 py-3 text-lg font-medium text-white placeholder-gray-500 focus:border-[#de3e4f] focus:bg-white/10 focus:outline-none transition-all rounded-t-lg`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="Optional"
                    className={`${textFont.className} w-full border-b-2 border-white/10 bg-white/5 px-4 py-3 text-lg font-medium text-white placeholder-gray-500 focus:border-[#de3e4f] focus:bg-white/10 focus:outline-none transition-all rounded-t-lg`}
                  />
                </div>
                <div>
                  <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handle}
                      className={`${textFont.className} w-full border-b-2 border-white/10 bg-white/5 px-4 py-4 text-lg font-medium text-white appearance-none focus:border-[#de3e4f] focus:bg-white/10 focus:outline-none transition-all pr-10 rounded-t-lg`}
                    >
                      <option value="" disabled className="bg-[#15161b]">Select inquiry type</option>
                      <option value="wholesale" className="bg-[#15161b]">Wholesale / Distribution</option>
                      <option value="press" className="bg-[#15161b]">Press / Media</option>
                      <option value="support" className="bg-[#15161b]">Order Support</option>
                      <option value="general" className="bg-[#15161b]">Just saying hi 👋</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                  Message <span className="text-[#de3e4f]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  placeholder="Drop the details here..."
                  required
                  rows={4}
                  className={`${textFont.className} w-full border-b-2 border-white/10 bg-white/5 px-4 py-3 text-lg font-medium text-white placeholder-gray-500 focus:border-[#de3e4f] focus:bg-white/10 focus:outline-none transition-all resize-none rounded-t-lg`}
                />
              </div>

              <button
                type="submit"
                className={`${textFont.className} group inline-flex items-center gap-3 bg-[#de3e4f] hover:bg-[#c25b5e] text-white px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(222,62,79,0.4)] active:scale-95`}
              >
                Send It
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </form>

          {/* Info Card */}
          <div className="bg-[#c25b5e] rounded-[2.5rem] p-8 sm:p-10 text-white shadow-[0_20px_50px_rgba(194,91,94,0.3)] flex flex-col gap-8 h-full relative overflow-hidden group">
            {/* Ambient Background glow */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#dbba53] rounded-full blur-[60px] opacity-10" />
            
            <h3 className={`${titleFont.className} text-3xl uppercase tracking-wide relative z-10`}>
              The Details
            </h3>

            {/* Address */}
            <div className="relative z-10 group/item cursor-default">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:text-[#c25b5e] transition-colors">
                  <MapPin size={18} className="text-white group-hover/item:text-[#c25b5e] transition-colors" />
                </div>
                <h4 className={`${textFont.className} font-bold text-lg uppercase tracking-wide`}>HQ</h4>
              </div>
              <p className={`${textFont.className} text-white/70 text-[1.1rem] pl-[3.25rem] font-light leading-relaxed group-hover/item:text-white transition-colors`}>
                123 Vibe Street, Suite 404<br />Los Angeles, CA 90012
              </p>
            </div>

            <div className="border-t border-white/20" />

            {/* Contact */}
            <div className="relative z-10 group/item cursor-default">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:text-[#c25b5e] transition-colors">
                  <Phone size={18} className="text-white group-hover/item:text-[#c25b5e] transition-colors" />
                </div>
                <h4 className={`${textFont.className} font-bold text-lg uppercase tracking-wide`}>Direct Line</h4>
              </div>
              <div className="pl-[3.25rem] space-y-1">
                <p className={`${textFont.className} text-xl font-medium tracking-wide hover:text-[#dbba53] transition-colors cursor-pointer inline-block`}>
                  +1 (800) ORAKE-UP
                </p>
                <p className={`${textFont.className} text-[1.1rem] text-white/70 font-light hover:text-white transition-colors cursor-pointer`}>
                  hello@orakeenergy.com
                </p>
              </div>
            </div>

            <div className="border-t border-white/20" />

            {/* Socials */}
            <div className="relative z-10 mt-auto pt-4">
              <h4 className={`${textFont.className} font-bold text-sm uppercase tracking-[0.2em] mb-4 text-white/60`}>Find Us Online</h4>
              <div className="flex gap-4">
                {[
                  { Icon: FaInstagram, color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" },
                  { Icon: FaTiktok,    color: "hover:bg-black hover:shadow-[0_0_10px_cyan,-0_0_10px_red]" },
                  { Icon: FaYoutube,   color: "hover:bg-red-600" },
                  { Icon: FaTwitter,   color: "hover:bg-blue-400" },
                ].map(({ Icon, color }, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 text-white hover:scale-110 ${color}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
