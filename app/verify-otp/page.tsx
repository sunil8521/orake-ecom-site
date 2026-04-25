"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Sansita, DM_Sans } from "next/font/google";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";
import axios from "axios";
import { AxiosError } from "axios";
const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

function VerifyOTPContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(60);
  const [resendLoading,setResendLoading] = useState(false)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Cooldown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => setResendCooldown((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Auto-focus first input
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    inputsRef.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      toast.error("Please enter the complete 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        otp: otpString,
        isVerification: "true",
        redirect: false,
      });

      if (res?.error) {
        if (res.error === "INVALID_OTP") toast.error("Invalid OTP. Please try again.");
        else if (res.error === "OTP_EXPIRED") toast.error("OTP has expired. Please request a new one.");
        else if (res.error === "NO_OTP_FOUND") toast.error("No OTP found. Please request a new one.");
        else toast.error(res.error);
      } else {
        toast.success("Email verified! Signing you in...");
        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    if (resendCooldown > 0) return;

    try {
      await axios.post("/api/auth/resend-otp", { email })
      toast.success("New OTP sent to your email!");
      setResendCooldown(60);
      setOtp(["", "", "", "", "", ""]);
      inputsRef.current[0]?.focus();
    } catch (error) {
      const axiosError = error as AxiosError;
      const message = (axiosError as any).response?.data?.message || "Failed to resend OTP";
      toast.error(message);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#34d399]/10 rounded-full blur-[120px] -top-20 -left-20" />
          <div className="absolute w-64 h-64 bg-[#c25b5e]/8 rounded-full blur-[100px] bottom-0 right-10" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(52,211,153,0.4)]`}>
            <ShieldCheck size={14} />
            Verify
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
            CHECK EMAIL
          </h1>
          <p className={`${textFont.className} text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase max-w-md mx-auto mt-3`}>
            Enter the 6-digit code sent to your inbox
          </p>
        </div>
      </div>

      {/* White Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-[460px] mx-auto">
          <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-3`}>
              Verification Code
            </h3>
            <p className={`${textFont.className} text-gray-400 text-sm mb-8`}>
              We sent a code to <span className="text-[#15161b] font-semibold">{email}</span>
            </p>

            {/* OTP Inputs */}
            <div className="flex gap-3 justify-center mb-8" onPaste={handlePaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { inputsRef.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`${textFont.className} w-14 h-16 text-center text-2xl font-bold border-2 rounded-xl transition-all duration-200 focus:outline-none ${digit
                    ? "border-emerald-400 bg-emerald-50 text-[#15161b]"
                    : "border-gray-200 bg-gray-50 text-gray-400 focus:border-[#dbba53] focus:bg-white"
                    }`}
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={loading || resendLoading || otp.join("").length !== 6}
              className={`${textFont.className} w-full bg-[#15161b] hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(52,211,153,0.3)] active:scale-[0.98] flex items-center justify-center gap-3`}
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </button>

            {/* Resend */}
            <div className="text-center mt-6">
              <p className={`${textFont.className} text-gray-400 text-sm`}>
                Didn&apos;t receive the code?{" "}
                {resendCooldown > 0 ? (
                  <span className="text-gray-500 font-semibold">
                    Resend in {resendCooldown}s
                  </span>
                ) : (
                  <button
                    onClick={handleResend}
                    disabled={resendLoading||loading}
                    className="text-[#c25b5e] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors"
                  >
                    Resend OTP
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyOTPPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-gray-400" />
      </div>
    }>
      <VerifyOTPContent />
    </Suspense>
  );
}
