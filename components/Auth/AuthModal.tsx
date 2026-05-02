"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import VerifyOTPForm from "./VerifyOTPForm";
import { AnimatePresence, motion } from "framer-motion";

export default function AuthModal() {
  const { isAuthModalOpen, authModalView, closeAuthModal } = useAuthStore();

  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAuthModalOpen]);

  const renderView = () => {
    switch (authModalView) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignupForm />;
      case "forgot-password":
        return <ForgotPasswordForm />;
      case "verify-otp":
        return <VerifyOTPForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6 py-4 sm:py-6 bg-black/60 backdrop-blur-md">
          {/* Backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0"
            onClick={closeAuthModal}
          />

          {/* White modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-[600px] max-h-[88vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <div className="absolute top-3 right-3 z-50">
              <button
                onClick={closeAuthModal}
                className="text-gray-400 hover:text-gray-800 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Top fade overlay */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none rounded-t-2xl sm:rounded-t-3xl" />

            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none rounded-b-2xl sm:rounded-b-3xl" />

            {/* Scrollable content with inner padding */}
            <div className="overflow-y-auto flex-1 overscroll-contain modal-scroll py-4 sm:py-5">
              {renderView()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
