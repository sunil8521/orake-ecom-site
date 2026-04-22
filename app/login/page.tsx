"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner — makes transparent navbar visible */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(194,91,94,0.4)]`}>
            Welcome Back
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
            SIGN IN
          </h1>
          <p className={`${textFont.className} text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase max-w-md mx-auto mt-3`}>
            Access your Orake account
          </p>
        </div>
      </div>

      {/* White Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[460px] mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-8`}>
              Your Details
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                  Email Address <span className="text-[#de3e4f]">*</span>
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="you@energy.com"
                    required
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-4 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                  Password <span className="text-[#de3e4f]">*</span>
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handle}
                    placeholder="••••••••"
                    required
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-12 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#15161b] transition-colors">
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-[#c25b5e] flex items-center justify-center transition-colors">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#c25b5e] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className={`${textFont.className} text-sm text-gray-500 uppercase tracking-wider`}>Remember me</span>
                </label>
                <Link href="/forgot-password" className={`${textFont.className} text-sm text-[#c25b5e] hover:text-[#15161b] uppercase tracking-wider transition-colors font-semibold`}>
                  Forgot?
                </Link>
              </div>

              {/* Submit */}
              <button type="submit" className={`${textFont.className} w-full bg-[#15161b] hover:bg-[#c25b5e] text-white py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] active:scale-[0.98]`}>
                Sign In
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gray-200" />
              <span className={`${textFont.className} text-gray-400 text-sm uppercase tracking-widest`}>or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <button type="button" className={`${textFont.className} flex-1 bg-gray-50 border-2 border-gray-200 text-[#15161b] py-3.5 rounded-xl hover:border-gray-400 hover:bg-gray-100 transition-all flex items-center justify-center gap-2 font-semibold text-sm uppercase tracking-wider`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
              <button type="button" className={`${textFont.className} flex-1 bg-gray-50 border-2 border-gray-200 text-[#15161b] py-3.5 rounded-xl hover:border-gray-400 hover:bg-gray-100 transition-all flex items-center justify-center gap-2 font-semibold text-sm uppercase tracking-wider`}>
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                Facebook
              </button>
            </div>
          </form>

          {/* Sign up link */}
          <p className={`${textFont.className} text-center mt-8 text-gray-500 text-lg`}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#c25b5e] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
