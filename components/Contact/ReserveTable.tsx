"use client";
import { useState } from "react";
import {
  MapPin, Phone, Mail, Clock,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function ReserveTable() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", guests: "",
    date: "", time: "", requests: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation submitted! We'll confirm shortly.");
  };

  return (
    <section id="reserve" className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#fdf8f4" }}>

      {/* watermark */}
      <div className="relative">
        <p className="absolute top-0 inset-x-0 text-center font-playfair font-extrabold uppercase text-gray-900 opacity-[0.025] leading-none pointer-events-none select-none whitespace-nowrap
          text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
          Reserve a Table
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="text-red-600 text-sm">♦♦♦</span>
          <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            Reserve a Table
          </p>
          <h2 className="font-playfair font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Dine With Us –{" "}
            <span className="text-red-600 italic">Reserve Now</span>
          </h2>
        </div>

        {/* ── Content grid: form + info card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-8 lg:gap-10">

          {/* ── FORM ── */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Ex. John Doe"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="example@gmail.com"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  placeholder="Enter Phone Number"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Number of Guests <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handle}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition pr-10"
                  >
                    <option value="" disabled>Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                      <option key={n} value={n}>{n} Guest{n !== 1 ? "s" : ""}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Date of Reservation <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handle}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Time of Reservation <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handle}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
                />
              </div>
            </div>

            {/* Row 4 – special requests */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Special Requests
              </label>
              <textarea
                name="requests"
                value={form.requests}
                onChange={handle}
                placeholder="Enter Here"
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-8 py-3.5 bg-red-600 text-white text-[12px] font-bold uppercase tracking-[2px] rounded-full hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Book a Table
            </button>
          </form>

          {/* ── INFO CARD ── */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col gap-7 h-fit">

            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-red-500 shrink-0" />
                <h4 className="font-playfair font-semibold text-base">Address</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed pl-6">
                2484 Royal Ln. Mesa, New Jersey 45463
              </p>
            </div>

            <div className="border-t border-white/10" />

            {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={16} className="text-red-500 shrink-0" />
                <h4 className="font-playfair font-semibold text-base">Contact</h4>
              </div>
              <div className="pl-6 space-y-1">
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Phone size={12} className="shrink-0 text-gray-500" />
                  +1(000) 000-0000
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Mail size={12} className="shrink-0 text-gray-500" />
                  example@gmail.com
                </p>
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* Open Time */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-red-500 shrink-0" />
                <h4 className="font-playfair font-semibold text-base">Open Time</h4>
              </div>
              <div className="pl-6 space-y-1.5">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Monday – Friday</span>
                  <span>: 11:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Saturday – Sunday</span>
                  <span>: 09:00 AM – 11:00 PM</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* Stay Connected */}
            <div>
              <h4 className="font-playfair font-semibold text-base mb-3">Stay Connected</h4>
              <div className="flex gap-3 flex-wrap">
                {[
                  { Icon: FaFacebook, label: "Facebook" },
                  { Icon: FaTwitter,  label: "Twitter"  },
                  { Icon: FaPinterest, label: "Pinterest" },
                  { Icon: FaInstagram,label: "Instagram" },
                  { Icon: FaYoutube,  label: "YouTube"  },
                ].map(({ Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors duration-300 text-white"
                  >
                    <Icon size={16} />
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
