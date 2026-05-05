"use client";
import { useState, useEffect, useRef } from "react";
import { X, Loader2 } from "lucide-react";
import { textFont, titleFont } from "@/lib/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { subscribeEmail } from "@/actions/newsletter";

const FIRST_DELAY = 15 * 1000;   // 15 seconds
const RESHOW_DELAY = 2 * 60 * 1000; // 2 minutes

export default function SignupPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const schedulePopup = (delay: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  useEffect(() => {
    // Don't show if already subscribed
    if (localStorage.getItem("orake_subscribed")) return;

    schedulePopup(FIRST_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const handleClose = () => {
    setVisible(false);
    schedulePopup(RESHOW_DELAY); // reschedule after 2 min
  };

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    
    const res = await subscribeEmail(email);
    
    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      localStorage.setItem("orake_subscribed", "true"); // never show again
      setTimeout(() => setVisible(false), 2000); // hide automatically after success
    }
  };

  return (
    <AnimatePresence>
      {visible && (
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

              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-4 animate-bounce">🎉</div>
                  <h2 className={`${titleFont.className} text-white text-3xl uppercase tracking-wide`}>
                    You're In!
                  </h2>
                  <p className={`${textFont.className} text-gray-400 text-sm mt-3`}>
                    Check your inbox. Your 10% off code is on the way.
                  </p>
                </div>
              ) : (
                <div className="relative z-10">
                  <span className={`${textFont.className} inline-block bg-[#de3e4f] text-white text-[10px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(222,62,79,0.3)]`}>
                    Limited Offer
                  </span>

                  <h2 className={`${titleFont.className} text-white text-3xl sm:text-4xl uppercase leading-tight mb-3`}>
                    Get <span className="text-[#de3e4f]">10% Off</span><br />
                    Your First Order
                  </h2>

                  <p className={`${textFont.className} text-gray-400 text-sm leading-relaxed mb-6`}>
                    Join the Orake tribe — be the first to know about new drops, secret deals & maximum energy hacks.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && handleSubmit()}
                      placeholder="you@energy.com"
                      disabled={isSubmitting}
                      className={`${textFont.className} flex-1 bg-white/5 border border-white/10 focus:border-[#de3e4f] rounded-xl px-4 py-3.5 text-white text-sm outline-none placeholder:text-gray-500 transition-colors focus:ring-2 focus:ring-[#de3e4f]/20 disabled:opacity-50`}
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !email.includes("@")}
                      className={`${textFont.className} flex items-center justify-center gap-2 bg-[#de3e4f] hover:bg-[#c25b5e] text-white rounded-xl px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all shadow-[0_10px_30px_rgba(222,62,79,0.2)] hover:shadow-[0_10px_30px_rgba(222,62,79,0.4)] disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed`}
                    >
                      {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : "Claim"}
                    </button>
                  </div>

                  <p
                    onClick={handleClose}
                    className={`${textFont.className} text-center text-xs text-gray-500 hover:text-gray-300 cursor-pointer transition-colors uppercase tracking-wider font-semibold`}
                  >
                    No thanks, I prefer paying full price
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
