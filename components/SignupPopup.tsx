"use client";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { textFont, titleFont } from "@/lib/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";
import { authClient } from "@/lib/auth-client";

const FIRST_DELAY = 15 * 1000;   // 15 seconds
const RESHOW_DELAY = 2 * 60 * 1000; // 2 minutes

export default function SignupPopup() {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { openAuthModal } = useAuthStore();
  const session = authClient.useSession();
  const isAuthenticated = !!session.data?.user;

  const schedulePopup = (delay: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("orake_subscribed", "true");
      setVisible(false);
      return;
    }

    // Don't show if already subscribed/dismissed permanently
    if (localStorage.getItem("orake_subscribed")) return;

    schedulePopup(FIRST_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isAuthenticated]);

  useEffect(() => {
    const handleOpen = () => {
      if (!isAuthenticated) setVisible(true);
    };
    window.addEventListener("open-signup-popup", handleOpen);
    return () => window.removeEventListener("open-signup-popup", handleOpen);
  }, [isAuthenticated]);

  const handleClose = () => {
    setVisible(false);
    schedulePopup(RESHOW_DELAY); // reschedule after 2 min
  };

  const handleSignUpClick = () => {
    setVisible(false);
    openAuthModal("signup");
  };

  const shouldShow = visible && !isAuthenticated;

  return (
    <AnimatePresence>
      {shouldShow && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Banner slides down from top */}
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0 pointer-events-none"
          >
            <div className="bg-gradient-to-br from-[#15161b] to-[#1a1b22] rounded-3xl w-full max-w-md p-8 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 pointer-events-auto">
              
              {/* Glow */}
              <div className="absolute w-52 h-52 bg-[#de3e4f]/20 rounded-full blur-[80px] -top-16 -right-10 pointer-events-none" />

              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all z-10"
              >
                <X size={14} />
              </button>

              <div className="relative z-10">
                <span className={`${textFont.className} inline-block bg-[#de3e4f] text-white text-[10px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(222,62,79,0.3)]`}>
                  Limited Offer
                </span>

                <h2 className={`${titleFont.className} text-white text-3xl sm:text-4xl uppercase leading-tight mb-3`}>
                  Save <span className="text-[#de3e4f]">20%</span><br />
                  On Your 1st Purchase
                </h2>

                <p className={`${textFont.className} text-gray-400 text-sm leading-relaxed mb-6`}>
                  Join the Orake tribe — be the first to know about new drops, secret deals & gut-first flavor hacks.
                </p>

                <div className="mb-4">
                  <button
                    onClick={handleSignUpClick}
                    className={`${textFont.className} w-full flex items-center justify-center gap-2 bg-[#de3e4f] hover:bg-[#c25b5e] text-white rounded-xl py-4 text-xs font-bold tracking-widest uppercase transition-all shadow-[0_10px_30px_rgba(222,62,79,0.2)] hover:shadow-[0_10px_30px_rgba(222,62,79,0.4)]`}
                  >
                    Sign Up
                  </button>
                </div>

                <p
                  onClick={handleClose}
                  className={`${textFont.className} text-center text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition-colors uppercase tracking-wider font-semibold`}
                >
                  No thanks, I prefer paying full price
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
