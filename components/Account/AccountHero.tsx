"use client";
import { titleFont, textFont } from "@/lib/fonts";
import { authClient } from "@/lib/auth-client";

export default function AccountHero() {
  const session = authClient.useSession();

  return (
    <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
        <div className="absolute w-72 h-72 bg-[#dbba53]/8 rounded-full blur-[100px] bottom-0 left-10" />
      </div>
      <div className="relative z-10">
        <h1 className={`${titleFont.className} text-4xl md:text-5xl text-white tracking-tight uppercase leading-none`}>
          {session.data?.user?.name || "Welcome"}
        </h1>
        <p className={`${textFont.className} text-gray-400 text-sm tracking-[0.2em] uppercase mt-2`}>
          {session.data?.user?.email || "Loading..."}
        </p>
      </div>
    </div>
  );
}
