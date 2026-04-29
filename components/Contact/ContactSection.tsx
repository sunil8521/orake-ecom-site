"use client";
import { useState } from "react";
import { MapPin, Phone, Send, Clock } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ContactSection() {
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
    <>
      {/* ━━━ Dark Hero Banner ━━━ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
          <div className="absolute w-72 h-72 bg-[#c25b5e]/5 rounded-full blur-[100px] bottom-0 left-1/4" />
        </div>



        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#de3e4f]" />
            <span className={`${textFont.className} text-[#de3e4f] text-sm font-bold uppercase tracking-[0.25em]`}>
              Hit Us Up
            </span>
            <span className="h-[2px] w-8 bg-[#de3e4f]" />
          </div>
          <h2 className={`${titleFont.className} text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.95] tracking-wide text-white`}>
            Got Questions?<br />
            <span className="text-[#de3e4f]">Let&apos;s Talk.</span>
          </h2>
          <p className={`${textFont.className} text-gray-400 text-sm md:text-base tracking-[0.15em] uppercase max-w-lg mx-auto mt-6`}>
            We&apos;re always here. Drop us a message and we&apos;ll get back faster than you can crack a can.
          </p>
        </div>
      </section>

      {/* ━━━ Contact Form + Info ━━━ */}
      <section className="relative bg-white py-16 md:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 text-center ${titleFont.className} uppercase text-[#15161b] opacity-[0.02] leading-none pointer-events-none select-none whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[16rem]`}>
          ORAKE
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

            <div className="flex flex-col gap-8">
              <form onSubmit={handleSubmit} className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h3 className={`${titleFont.className} text-3xl sm:text-4xl uppercase tracking-wide text-[#15161b] mb-2`}>
                  Send a Message
                </h3>
                <p className={`${textFont.className} text-gray-400 text-sm mb-8`}>
                  Fill in the form and our team will respond within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        Name <span className="text-[#de3e4f]">*</span>
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handle} placeholder="Your name" required
                        className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all`} />
                    </div>
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        Email <span className="text-[#de3e4f]">*</span>
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handle} placeholder="you@energy.com" required
                        className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all`} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handle} placeholder="Optional"
                        className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all`} />
                    </div>
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>Subject</label>
                      <div className="relative">
                        <select name="subject" value={form.subject} onChange={handle}
                          className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] appearance-none rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all pr-10`}>
                          <option value="" disabled>Select inquiry type</option>
                          <option value="wholesale">Wholesale / Distribution</option>
                          <option value="press">Press / Media</option>
                          <option value="support">Order Support</option>
                          <option value="general">Just saying hi 👋</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                      Message <span className="text-[#de3e4f]">*</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handle} placeholder="Drop the details here..." required rows={5}
                      className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all resize-none`} />
                  </div>

                  <button type="submit"
                    className={`${textFont.className} group inline-flex items-center gap-3 bg-[#15161b] hover:bg-[#de3e4f] text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(222,62,79,0.3)] active:scale-95`}>
                    Send Message
                    <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </form>
            </div>

            {/* ── Info Sidebar ── */}
            <div className="space-y-6">

              {/* Details Card */}
              <div className="bg-[#15161b] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#de3e4f] rounded-full blur-[80px] opacity-15" />
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#dbba53] rounded-full blur-[60px] opacity-10" />

                <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide relative z-10 mb-8`}>
                  The Details
                </h3>

                {/* Address */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-[#de3e4f]" />
                    </div>
                    <h4 className={`${textFont.className} font-bold text-base uppercase tracking-wider`}>HQ</h4>
                  </div>
                  <p className={`${textFont.className} text-white/60 text-sm pl-[3.25rem] leading-relaxed`}>
                    Swiftrise Solution Pvt. Ltd.<br />New Delhi, India
                  </p>
                </div>

                <div className="border-t border-white/10 my-6" />

                {/* Contact */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#de3e4f]" />
                    </div>
                    <h4 className={`${textFont.className} font-bold text-base uppercase tracking-wider`}>Direct Line</h4>
                  </div>
                  <div className="pl-[3.25rem] space-y-1">
                    <p className={`${textFont.className} text-lg font-medium tracking-wide`}>+1 (800) ORAKE-UP</p>
                    <p className={`${textFont.className} text-sm text-white/60`}>hello@orakeenergy.com</p>
                  </div>
                </div>

                <div className="border-t border-white/10 my-6" />

                {/* Hours */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-[#dbba53]" />
                    </div>
                    <h4 className={`${textFont.className} font-bold text-base uppercase tracking-wider`}>Hours</h4>
                  </div>
                  <div className="pl-[3.25rem] space-y-0.5">
                    <p className={`${textFont.className} text-sm text-white/60`}>Mon – Fri: 9AM – 7PM IST</p>
                    <p className={`${textFont.className} text-sm text-white/60`}>Sat – Sun: 10AM – 4PM IST</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Map View Card (Full Width) ── */}
          <div className="mt-10 lg:mt-16 rounded-3xl overflow-hidden border border-gray-100 shadow-sm w-full h-[400px] sm:h-[500px]">
            <div className="relative h-full w-full bg-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=28.631451,77.206331&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
