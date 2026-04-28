"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Phone, Loader2 } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";
import Image from "next/image";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupformSchema } from "@/types/signupFormType";
import type { signupFormType } from "@/types/signupFormType";
import { authClient } from "@/lib/auth-client";
import SlideToGoogle from "@/components/SlideToGoogle";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function SignUpPage() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signupFormType>({
    resolver: zodResolver(signupformSchema),
  });

  const onSubmit = async (data: signupFormType) => {
    try {
      const { data: signUpData, error } = await authClient.signUp.email({
        name: data.fullname,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });

      if (error?.status === 422) {
        toast.error("Email already registered");
        return
      }
      if (error) {
        toast.error(error.message || "Signup failed. Please try again.");
        return;
      }

      // With requireEmailVerification: true, user is created but not fully active
      // 2. OTP is auto-sent by Better Auth (sendVerificationOnSignUp: true)
      toast.success("Account created! OTP sent to your email.");
      router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`);


    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      toast.error("Google sign-up failed");
      setGoogleLoading(false);
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white relative overflow-hidden border border-gray-200 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <Image src="/svgs/lemon-2-svg.png" alt="lemon" width={80} height={80} className="absolute -top-6 -left-6 rotate-12 drop-shadow-md" />
              <Image src="/svgs/lemon-svg.png" alt="lemon" width={100} height={100} className="absolute top-40 -right-10 -rotate-12 drop-shadow-md" />
              <Image src="/svgs/lemon-2-svg.png" alt="lemon 2" width={70} height={70} className="absolute bottom-32 -left-8 -rotate-45 drop-shadow-md" />
              <Image src="/svgs/lemon-2-svg.png" alt="lemon 2" width={90} height={90} className="absolute -bottom-8 -right-4 rotate-12 drop-shadow-md" />

              {/* Middle / Inner scattered elements */}
              <Image src="/svgs/lemon-svg.png" alt="lemon" width={45} height={45} className="absolute top-1/4 left-10 rotate-90 drop-shadow-sm opacity-60" />
              <Image src="/svgs/lemon-2-svg.png" alt="lemon 2" width={55} height={55} className="absolute top-1/2 right-8 -rotate-45 drop-shadow-sm opacity-50" />
              <Image src="/svgs/lemon-svg.png" alt="lemon" width={75} height={75} className="absolute bottom-1/4 left-1/3 rotate-180 drop-shadow-sm opacity-40 blur-[1px]" />
            </div>

            <div className="relative z-10">
              <h3 className={`${titleFont.className} text-xl md:text-2xl uppercase tracking-wide text-[#15161b] mb-6 md:mb-8`}>
                Your Details
              </h3>

              <div className="space-y-4 md:space-y-5">
                {/* Name */}
                <div>
                  <label className={`${textFont.className} block text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Full Name <span className="text-[#de3e4f]">*</span></label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    <input
                      {...register("fullname")}
                      type="text"
                      placeholder="Your name"
                      className={`${textFont.className} w-full border-2 ${errors.fullname ? "border-red-400" : "border-gray-200"} bg-gray-50 pl-12 pr-4 py-3 md:py-3.5 text-base md:text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                  {errors.fullname && <p className={`${textFont.className} text-red-500 text-xs mt-1.5 pl-1`}>{errors.fullname.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className={`${textFont.className} block text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Email <span className="text-[#de3e4f]">*</span></label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@energy.com"
                      className={`${textFont.className} w-full border-2 ${errors.email ? "border-red-400" : "border-gray-200"} bg-gray-50 pl-12 pr-4 py-3 md:py-3.5 text-base md:text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                  {errors.email && <p className={`${textFont.className} text-red-500 text-xs mt-1.5 pl-1`}>{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className={`${textFont.className} block text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Phone Number <span className="text-[#de3e4f]">*</span></label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="9876543210"
                      className={`${textFont.className} w-full border-2 ${errors.phone ? "border-red-400" : "border-gray-200"} bg-gray-50 pl-12 pr-4 py-3 md:py-3.5 text-base md:text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                  {errors.phone && <p className={`${textFont.className} text-red-500 text-xs mt-1.5 pl-1`}>{errors.phone.message}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className={`${textFont.className} block text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Password <span className="text-[#de3e4f]">*</span></label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    <input
                      {...register("password")}
                      type={showPass ? "text" : "password"}
                      placeholder="Min 8 characters"
                      className={`${textFont.className} w-full border-2 ${errors.password ? "border-red-400" : "border-gray-200"} bg-gray-50 pl-12 pr-12 py-3 md:py-3.5 text-base md:text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#15161b] transition-colors pointer-events-auto">
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className={`${textFont.className} text-red-500 text-xs mt-1.5 pl-1`}>{errors.password.message}</p>}
                </div>

                {/* Confirm */}
                <div>
                  <label className={`${textFont.className} block text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>Confirm Password <span className="text-[#de3e4f]">*</span></label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    <input
                      {...register("confirm")}
                      type={showPass ? "text" : "password"}
                      placeholder="Re-enter password"
                      className={`${textFont.className} w-full border-2 ${errors.confirm ? "border-red-400" : "border-gray-200"} bg-gray-50 pl-12 pr-4 py-3 md:py-3.5 text-base md:text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#dbba53] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                  {errors.confirm && <p className={`${textFont.className} text-red-500 text-xs mt-1.5 pl-1`}>{errors.confirm.message}</p>}
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
                <button
                  type="submit"
                  disabled={isSubmitting || googleLoading}
                  className={`${textFont.className} w-full bg-[#dbba53] hover:bg-[#c9a940] disabled:opacity-60 disabled:cursor-not-allowed text-[#15161b] py-3.5 md:py-4 rounded-full text-lg md:text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(219,186,83,0.3)] active:scale-[0.98] flex items-center justify-center gap-3`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-gray-200" />
                <span className={`${textFont.className} text-gray-400 text-sm uppercase tracking-widest`}>or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Google Slide */}
              <SlideToGoogle
                onSlideComplete={handleGoogleSignUp}
                disabled={isSubmitting}
                loading={googleLoading}
                label="Slide to Sign up with Google"
              />
            </div>
          </form>

          <p className={`${textFont.className} text-center mt-6 md:mt-8 text-gray-500 text-base md:text-lg`}>
            Already have an account?{" "}
            <Link href="/login" className="text-[#c25b5e] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
