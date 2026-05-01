"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginPage() {
  const router = useRouter();
  const { openAuthModal } = useAuthStore();

  useEffect(() => {
    openAuthModal("login");
    router.replace("/");
  }, [openAuthModal, router]);

  return <div className="min-h-screen bg-[#15161b]" />; // Blank dark placeholder before redirect
}
