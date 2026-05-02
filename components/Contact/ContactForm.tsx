"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";

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
  );
}
