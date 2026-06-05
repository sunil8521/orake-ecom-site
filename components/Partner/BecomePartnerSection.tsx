"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2, Award, Landmark, TrendingUp } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import { submitPartnerForm } from "@/actions/partner";
import { toast } from "sonner";

const partnerSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  companyName: z.string().min(2, "Company/Store Name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  partnershipType: z.string().min(1, "Please select partnership type"),
  city: z.string().min(2, "City/Region is required"),
  volume: z.string().min(1, "Please select estimated volume"),
  details: z.string().optional(),
});

type PartnerFormValues = z.infer<typeof partnerSchema>;

export default function BecomePartnerSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      partnershipType: "",
      city: "",
      volume: "",
      details: "",
    },
  });

  const onSubmit = async (data: PartnerFormValues) => {
    const res = await submitPartnerForm(data);

    if (res.success) {
      toast.success("Partnership request received! Let's build something epic.");
      reset();
    } else {
      toast.error(res.error || "Failed to submit request.");
    }
  };

  return (
    <>
      {/* ━━━ Content Grid Section ━━━ */}
      <section className="relative bg-white py-16 md:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Giant Watermark Background */}
        <div className={`absolute top-0 left-0 right-0 text-center ${titleFont.className} uppercase text-[#15161b] opacity-[0.02] leading-none pointer-events-none select-none whitespace-nowrap text-[8rem] sm:text-[12rem] md:text-[16rem]`}>
          PARTNERS
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* ── Left Side: Typography & Value Props ── */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col lg:sticky lg:top-28"
            >
              <h2 className={`${titleFont.className} text-4xl sm:text-5xl lg:text-6xl uppercase leading-none tracking-wide text-[#15161b] mb-6`}>
                Premium Quality.<br />
                <span className="text-[#de3e4f]">Scalable Solutions.</span>
              </h2>

              <p className={`${textFont.className} text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-[48ch]`}>
                Looking to establish or expand your beverage wholesale and retail presence? Partner with Orake. We deliver zero-sugar, prebiotic-rich sodas that modern consumers actively demand.
              </p>

              {/* Value Propositions */}
              <div className="space-y-6">
                
                {/* Prop 1 */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#de3e4f]/10 text-[#de3e4f] shrink-0 shadow-sm">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className={`${titleFont.className} text-lg sm:text-xl uppercase tracking-wider text-[#15161b] mb-1`}>
                      01 / Exclusive Distribution
                    </h3>
                    <p className={`${textFont.className} text-sm text-gray-500 max-w-[42ch]`}>
                      Gain regional rights to distribute India's trending prebiotic fiber sodas with dedicated support and margins.
                    </p>
                  </div>
                </div>

                {/* Prop 2 */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#de3e4f]/10 text-[#de3e4f] shrink-0 shadow-sm">
                    <Landmark size={24} />
                  </div>
                  <div>
                    <h3 className={`${titleFont.className} text-lg sm:text-xl uppercase tracking-wider text-[#15161b] mb-1`}>
                      02 / B2B & HORECA
                    </h3>
                    <p className={`${textFont.className} text-sm text-gray-500 max-w-[42ch]`}>
                      Perfect for premium stores, health clubs, gyms, high-end restaurants, cafes, and custom events.
                    </p>
                  </div>
                </div>

                {/* Prop 3 */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#de3e4f]/10 text-[#de3e4f] shrink-0 shadow-sm">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className={`${titleFont.className} text-lg sm:text-xl uppercase tracking-wider text-[#15161b] mb-1`}>
                      03 / Rapid Scaling
                    </h3>
                    <p className={`${textFont.className} text-sm text-gray-500 max-w-[42ch]`}>
                      Enjoy high repeat-purchase rates, active brand marketing, and streamlined supply chain operations.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ── Right Side: Inquiry Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden"
              >
                <h3 className={`${titleFont.className} text-3xl sm:text-4xl uppercase tracking-wide text-[#15161b] mb-2 relative z-10`}>
                  Become A Partner
                </h3>
                <p className={`${textFont.className} text-gray-400 text-sm mb-8 relative z-10`}>
                  Submit your details and get a custom wholesale quote in 24 hours.
                </p>

                <div className="space-y-6 relative z-10">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        Full Name <span className="text-[#de3e4f]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Sunil Maharana"
                        disabled={isSubmitting}
                        {...register("name")}
                        className={`${textFont.className} w-full bg-white border ${errors.name ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`}
                      />
                      {errors.name && (
                        <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        Company Name <span className="text-[#de3e4f]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Orake Distribution LLC"
                        disabled={isSubmitting}
                        {...register("companyName")}
                        className={`${textFont.className} w-full bg-white border ${errors.companyName ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`}
                      />
                      {errors.companyName && (
                        <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Work Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        Work Email <span className="text-[#de3e4f]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        disabled={isSubmitting}
                        {...register("email")}
                        className={`${textFont.className} w-full bg-white border ${errors.email ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`}
                      />
                      {errors.email && (
                        <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        Phone Number <span className="text-[#de3e4f]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="9876543210"
                        disabled={isSubmitting}
                        {...register("phone")}
                        className={`${textFont.className} w-full bg-white border ${errors.phone ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`}
                      />
                      {errors.phone && (
                        <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Partnership Type & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        Partnership Type <span className="text-[#de3e4f]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          disabled={isSubmitting}
                          {...register("partnershipType")}
                          className={`${textFont.className} w-full bg-white border ${errors.partnershipType ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] appearance-none rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all pr-10 disabled:opacity-50`}
                        >
                          <option value="">Select type</option>
                          <option value="wholesale">Wholesale / Distributorship</option>
                          <option value="retail">Retail / Supermarket</option>
                          <option value="horeca">Cafe / Restaurant / Horeca</option>
                          <option value="gym_health">Gym / Wellness Center</option>
                          <option value="export">International Export</option>
                          <option value="corporate">Corporate / Events</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                      </div>
                      {errors.partnershipType && (
                        <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">
                          {errors.partnershipType.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                        City / Region <span className="text-[#de3e4f]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Mumbai, MH"
                        disabled={isSubmitting}
                        {...register("city")}
                        className={`${textFont.className} w-full bg-white border ${errors.city ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`}
                      />
                      {errors.city && (
                        <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Estimated Monthly Volume */}
                  <div>
                    <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                      Estimated Monthly Volume <span className="text-[#de3e4f]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        disabled={isSubmitting}
                        {...register("volume")}
                        className={`${textFont.className} w-full bg-white border ${errors.volume ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] appearance-none rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all pr-10 disabled:opacity-50`}
                      >
                        <option value="">Select range</option>
                        <option value="small">&lt; 500 cases / month</option>
                        <option value="medium">500 - 1000 cases / month</option>
                        <option value="large">1000 - 2,000 cases / month</option>
                        <option value="enterprise">2,000+ cases / month</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                    </div>
                    {errors.volume && (
                      <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">
                        {errors.volume.message}
                      </p>
                    )}
                  </div>

                  {/* Row 5: Additional Details */}
                  <div>
                    <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
                      Additional Details
                    </label>
                    <textarea
                      placeholder="Tell us about your storefront, target clientele, or distribution network..."
                      rows={4}
                      disabled={isSubmitting}
                      {...register("details")}
                      className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all resize-none disabled:opacity-50`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${textFont.className} group w-full inline-flex items-center justify-center gap-3 bg-[#15161b] hover:bg-[#de3e4f] text-white py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(222,62,79,0.3)] active:scale-98 disabled:bg-gray-400 disabled:shadow-none disabled:active:scale-100 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        Submitting Inquiry...
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Get Custom Quote
                        <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
