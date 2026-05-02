"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import { useAuthStore } from "@/store/useAuthStore";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAuthModalView } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[520px] mx-auto pb-6 sm:pb-8">
      <div className="relative overflow-hidden p-5 sm:p-8 md:p-10 pt-6 sm:pt-8">
        {!sent ? (
          <form onSubmit={handleSubmit} className="relative z-10">
            <button type="button" onClick={() => setAuthModalView("login")} className={`${textFont.className} inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#c25b5e] uppercase tracking-wider transition-colors mb-6`}>
              <ArrowLeft size={14} /> Back to login
            </button>

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
          <div className="text-center relative z-10">
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
              <button
                type="button"
                onClick={() => setAuthModalView("login")}
                className={`${textFont.className} w-full bg-[#15161b] hover:bg-[#c25b5e] text-white py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] text-center`}
              >
                Back to Login
              </button>
            </div>
          </div>
        )}

        <p className={`${textFont.className} text-center mt-8 text-gray-500 text-sm`}>
          Remember your password?{" "}
          <button type="button" onClick={() => setAuthModalView("login")} className="text-[#c25b5e] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
