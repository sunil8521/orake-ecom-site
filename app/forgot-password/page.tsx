"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -left-20" />
          <div className="absolute w-64 h-64 bg-[#dbba53]/8 rounded-full blur-[100px] bottom-0 right-10" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(194,91,94,0.4)]`}>
            Account Recovery
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
            FORGOT PASSWORD
          </h1>
          <p className={`${textFont.className} text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase max-w-md mx-auto mt-3`}>
            We&apos;ll help you get back in
          </p>
        </div>
      </div>

      {/* White Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[460px] mx-auto">
          {!sent ? (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <Link href="/login" className={`${textFont.className} inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#c25b5e] uppercase tracking-wider transition-colors mb-6`}>
                <ArrowLeft size={14} /> Back to login
              </Link>

              <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-3`}>
                Reset Password
              </h3>
              <p className={`${textFont.className} text-gray-400 text-sm tracking-wider mb-8`}>
                Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
              </p>

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
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@energy.com"
                      required
                      className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-4 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`${textFont.className} w-full bg-[#15161b] hover:bg-[#c25b5e] text-white py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-3`}>
                Check Your Email
              </h3>
              <p className={`${textFont.className} text-gray-400 text-sm tracking-wider mb-2`}>
                We&apos;ve sent a password reset link to
              </p>
              <p className={`${textFont.className} text-[#c25b5e] text-lg font-bold mb-8`}>
                {email}
              </p>
              <p className={`${textFont.className} text-gray-400 text-xs tracking-wider mb-8`}>
                Didn&apos;t receive the email? Check your spam folder or try again.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setSent(false)}
                  className={`${textFont.className} w-full bg-gray-100 hover:bg-gray-200 text-[#15161b] py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all`}
                >
                  Try Another Email
                </button>
                <Link
                  href="/login"
                  className={`${textFont.className} w-full bg-[#15161b] hover:bg-[#c25b5e] text-white py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] text-center`}
                >
                  Back to Login
                </Link>
              </div>
            </div>
          )}

          {/* Help text */}
          <p className={`${textFont.className} text-center mt-8 text-gray-500 text-sm`}>
            Remember your password?{" "}
            <Link href="/login" className="text-[#c25b5e] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
