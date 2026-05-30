import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthRedirectHandler from "@/components/Auth/AuthRedirectHandler";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <AuthRedirectHandler />
      </Suspense>
      <Suspense fallback={<div className="h-16 bg-[#c25b5e]" />}>
        <Navbar />
      </Suspense>
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </>
  );
}
