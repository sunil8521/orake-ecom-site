"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";
import { toast } from "sonner";
import { useForm } from "react-hook-form"
import type { loginFormType } from "@/types/loginFormType"
import { loginFormSchema } from "@/types/loginFormType"
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import SlideToGoogle from "@/components/SlideToGoogle";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function LoginPage() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { register, handleSubmit, formState: { isSubmitting, errors, isDirty } } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = async (data: loginFormType) => {
    try {
      const { data: signInData, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        // 403 = email not verified
        if (error.status === 403) {
          toast.error("Please verify your email first.");

          await authClient.emailOtp.sendVerificationOtp({
            email: data.email,
            type: "email-verification",
          });
          router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`);
          return;
        }

        toast.error(error.message || "Invalid email or password");
        return;
      }

      if ((signInData?.user as any)?.isDelete) {
        await authClient.signOut();
        toast.error("Your account has been deleted. Please contact support.");
        return;
      }

      toast.success("Welcome back!");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      toast.error("Google sign-in failed");
      setGoogleLoading(false);
    }
  };

  return (
      <div className="min-h-screen bg-white">
        {/* Dark Hero Banner */}
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
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white relative overflow-hidden border border-gray-200 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <Image src="/svgs/flower-sb.png" alt="strawberry" width={100} height={100} className="absolute -top-2 -left-3 rotate-12 drop-shadow-md" />
                <Image src="/svgs/leaf-svg.png" alt="leaf" width={80} height={80} className="absolute top-1/3 -left-8 -rotate-12 drop-shadow-md" />
                <Image src="/svgs/starwbery-svg.png" alt="strawberry" width={70} height={70} className="absolute -bottom-6 right-10 rotate-45 drop-shadow-md" />
                
                {/* Middle / Inner scattered elements */}
                <Image src="/svgs/starwbery-svg.png" alt="strawberry" width={50} height={50} className="absolute top-1/4 right-1/4 -rotate-12 drop-shadow-sm opacity-50" />
                <Image src="/svgs/starwbery-svg.png" alt="strawberry" width={60} height={60} className="absolute bottom-1/3 left-8 rotate-90 drop-shadow-sm opacity-40 blur-[1px]" />
              </div>

              <div className="relative z-10">
                <h3 className={`${titleFont.className} text-xl md:text-2xl uppercase tracking-wide text-[#15161b] mb-6 md:mb-8`}>
                  Your Details
                </h3>

                <div className="space-y-5 md:space-y-6">
                {/* Email */}
                <div>
                  <label className={`${textFont.className} block text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                    Email Address <span className="text-[#de3e4f]">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@energy.com"
                      className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-4 py-3 md:py-3.5 text-base md:text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                  {errors.email && <p className={`${textFont.className} text-red-500 text-xs mt-1.5 pl-1`}>{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className={`${textFont.className} block text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2`}>
                    Password <span className="text-[#de3e4f]">*</span>
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      {...register("password")}
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••"
                      className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-12 pr-12 py-3 md:py-3.5 text-base md:text-lg font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#15161b] transition-colors">
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className={`${textFont.className} text-red-500 text-xs mt-1.5 pl-1`}>{errors.password.message}</p>}
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-end">
                  <Link href="/forgot-password" className={`${textFont.className} text-xs md:text-sm text-[#c25b5e] hover:text-[#15161b] uppercase tracking-wider transition-colors font-semibold`}>
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || googleLoading}
                  className={`${textFont.className} w-full bg-[#c25b5e] hover:bg-[#a84c4f] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 md:py-4 rounded-full text-lg md:text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] active:scale-[0.98] flex items-center justify-center gap-3`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
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
                  onSlideComplete={handleGoogleSignIn}
                  disabled={isSubmitting}
                  loading={googleLoading}
                  label="Slide to Sign in with Google"
                />
              </div>
            </form>

            {/* Sign up link */}
            <p className={`${textFont.className} text-center mt-6 md:mt-8 text-gray-500 text-base md:text-lg`}>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#dbba53] hover:text-[#15161b] font-bold uppercase tracking-wider transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}
