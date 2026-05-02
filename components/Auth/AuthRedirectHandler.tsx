"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function AuthRedirectHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openAuthModal } = useAuthStore();

  useEffect(() => {
    const authView = searchParams.get("auth") as "login" | "signup" | null;
    if (authView === "login" || authView === "signup") {
      openAuthModal(authView);
      // Only clean the ?auth param — keep ?redirect so LoginForm can read it after login
      const url = new URL(window.location.href);
      url.searchParams.delete("auth");
      router.replace(url.pathname + url.search, { scroll: false });
    }
  }, [searchParams, openAuthModal, router]);

  return null;
}
