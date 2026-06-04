"use client";
import { useState, useRef } from "react";
import { Mail, ArrowLeft, CheckCircle, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import { useAuthStore } from "@/store/useAuthStore";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<"email" | "reset" | "success">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const { setAuthModalView } = useAuthStore();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    setLoading(true);
    try {
      const { error } = await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "forget-password"
      });
      
      if (error) {
        toast.error(error.message || "Failed to send reset code.");
      } else {
        toast.success("Reset code sent to your email.");
        setStep("reset");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length !== 4) {
      toast.error("Please enter the complete 4-digit code");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    
    setLoading(true);
    try {
      const { error } = await authClient.emailOtp.resetPassword({
        email,
        otp: otpString,
        password,
      });
      
      if (error) {
        toast.error(error.message || "Failed to reset password. Invalid or expired code.");
      } else {
        toast.success("Password reset successfully!");
        setStep("success");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    inputsRef.current[Math.min(pasted.length, 3)]?.focus();
  };

  return (
    <div className="w-full max-w-[520px] mx-auto pb-6 sm:pb-8">
      <div className="relative overflow-hidden p-5 sm:p-8 md:p-10 pt-6 sm:pt-8">
        
        {step === "email" && (
          <form onSubmit={handleSendOtp} className="relative z-10">
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
                    placeholder="you@drinkorake.com"
                    required
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-4 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`${textFont.className} w-full bg-[#15161b] hover:bg-[#c25b5e] text-white py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3`}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Reset Code"
                )}
              </button>
            </div>
          </form>
        )}

        {step === "reset" && (
          <form onSubmit={handleResetPassword} className="relative z-10">
            <button type="button" onClick={() => setStep("email")} className={`${textFont.className} inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#c25b5e] uppercase tracking-wider transition-colors mb-6`}>
              <ArrowLeft size={14} /> Back
            </button>

            <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-3`}>
              Enter Reset Code
            </h3>
            <p className={`${textFont.className} text-gray-400 text-sm tracking-wider mb-8`}>
              We sent a 4-digit code to <span className="text-[#15161b] font-semibold">{email}</span>
            </p>

            <div className="space-y-6">
              {/* OTP Inputs */}
              <div className="flex gap-3 justify-center mb-6" onPaste={handleOtpPaste}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => { inputsRef.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    className={`${textFont.className} w-14 h-16 text-center text-2xl font-bold border-2 rounded-xl transition-all duration-200 focus:outline-none ${digit
                      ? "border-[#c25b5e] bg-red-50 text-[#15161b]"
                      : "border-gray-200 bg-gray-50 text-gray-400 focus:border-[#dbba53] focus:bg-white"
                      }`}
                  />
                ))}
              </div>

              {/* New Password */}
              <div>
                <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                  New Password <span className="text-[#de3e4f]">*</span>
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={8}
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-12 py-3.5 text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#15161b] transition-colors">
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || otp.join("").length !== 4}
                className={`${textFont.className} w-full bg-[#15161b] hover:bg-[#c25b5e] text-white py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3`}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="text-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-3`}>
              Password Updated
            </h3>
            <p className={`${textFont.className} text-gray-400 text-sm tracking-wider mb-8`}>
              Your password has been successfully reset. You can now use your new password to sign in.
            </p>

            <button
              type="button"
              onClick={() => setAuthModalView("login")}
              className={`${textFont.className} w-full bg-[#15161b] hover:bg-[#c25b5e] text-white py-4 rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] text-center`}
            >
              Sign In Now
            </button>
          </div>
        )}

        {step !== "success" && (
          <p className={`${textFont.className} text-center mt-8 text-gray-500 text-sm`}>
            Remember your password?{" "}
            <button type="button" onClick={() => setAuthModalView("login")} className="text-[#c25b5e] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors">
              Sign In
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

