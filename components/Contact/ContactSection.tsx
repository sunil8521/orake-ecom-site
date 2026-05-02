"use client";
import { titleFont } from "@/lib/fonts";
import { motion } from "framer-motion";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactInfoSidebar from "./ContactInfoSidebar";
import ContactMap from "./ContactMap";

export default function ContactSection() {
  return (
    <>
      {/* ━━━ Dark Hero Banner ━━━ */}
      <ContactHero />

      {/* ━━━ Contact Form + Info ━━━ */}
      <section className="relative bg-white py-16 md:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 text-center ${titleFont.className} uppercase text-[#15161b] opacity-[0.02] leading-none pointer-events-none select-none whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[16rem]`}>
          ORAKE
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              <ContactForm />
            </motion.div>

            {/* ── Info Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <ContactInfoSidebar />
            </motion.div>
          </div>

          {/* ── Map View Card (Full Width) ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-10 lg:mt-16"
          >
            <ContactMap />
          </motion.div>
        </div>
      </section>
    </>
  );
}
