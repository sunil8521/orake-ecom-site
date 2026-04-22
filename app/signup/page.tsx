"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function SignUpPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) { alert("Passwords don't match!"); return; }
    alert("Account creation coming soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#dbba53]/10 rounded-full blur-[120px] -top-20 -left-20" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-block bg-[#dbba53] text-[#15161b] px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(219,186,83,0.4)]`}>
            New Here?
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
            JOIN US
          </h1>
          <p className={`${textFont.className} text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase max-w-md mx-auto mt-3`}>
            Create your Orake account
          </p>
        </div>
      </div>

      {/* White Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[460px] mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-8`}>
              Your Details
            </h3>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Full Name <span className="text-[#de3e4f]">*</span></label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" name="name" value={form.name} onChange={handle} placeholder="Your name" required
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-4 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Email <span className="text-[#de3e4f]">*</span></label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="you@energy.com" required
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-4 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Password <span className="text-[#de3e4f]">*</span></label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type={showPass ? "text" : "password"} name="password" value={form.password} onChange={handle} placeholder="Min 8 characters" required
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-12 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#15161b] transition-colors">
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm */}
              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Confirm Password <span className="text-[#de3e4f]">*</span></label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type={showPass ? "text" : "password"} name="confirm" value={form.confirm} onChange={handle} placeholder="Re-enter password" required
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-4 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-[#dbba53] flex items-center justify-center transition-colors mt-0.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#dbba53]" />
                </div>
                <span className={`${textFont.className} text-sm text-gray-500 leading-relaxed`}>
                  I agree to the <Link href="/policies#terms" className="text-[#c25b5e] hover:text-[#15161b] transition-colors font-semibold">Terms</Link> and <Link href="/policies#refund" className="text-[#c25b5e] hover:text-[#15161b] transition-colors font-semibold">Policies</Link>
                </span>
              </label>

              {/* Submit */}
              <button type="submit" className={`${textFont.className} w-full bg-[#dbba53] hover:bg-[#c9a940] text-[#15161b] py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(219,186,83,0.3)] active:scale-[0.98]`}>
                Create Account
              </button>
            </div>
          </form>

          <p className={`${textFont.className} text-center mt-8 text-gray-500 text-lg`}>
            Already have an account?{" "}
            <Link href="/login" className="text-[#c25b5e] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
