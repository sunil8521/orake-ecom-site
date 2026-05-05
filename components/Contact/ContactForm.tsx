"use client";
import { Send, Loader2 } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import { submitContactForm } from "@/actions/contact";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const res = await submitContactForm(data);

    if (res.success) {
      toast.success("Message blasted off! We'll hit you back soon.");
      reset();
    } else {
      toast.error(res.error || "Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm">
      <h3 className={`${titleFont.className} text-3xl sm:text-4xl uppercase tracking-wide text-[#15161b] mb-2`}>
        Send a Message
      </h3>
      <p className={`${textFont.className} text-gray-400 text-sm mb-8`}>
        Fill in the form and our team will respond within 24 hours.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
              Name <span className="text-[#de3e4f]">*</span>
            </label>
            <input type="text" placeholder="Your name" disabled={isSubmitting} {...register("name")}
              className={`${textFont.className} w-full bg-white border ${errors.name ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`} />
            {errors.name && <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">{errors.name.message}</p>}
          </div>
          <div>
            <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
              Email <span className="text-[#de3e4f]">*</span>
            </label>
            <input type="email" placeholder="you@energy.com" disabled={isSubmitting} {...register("email")}
              className={`${textFont.className} w-full bg-white border ${errors.email ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`} />
            {errors.email && <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>Phone Number</label>
            <input type="tel" placeholder="Optional" disabled={isSubmitting} {...register("phone")}
              className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all disabled:opacity-50`} />
          </div>
          <div>
            <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>Subject</label>
            <div className="relative">
              <select disabled={isSubmitting} {...register("subject")}
                className={`${textFont.className} w-full bg-white border border-gray-200 px-4 py-3.5 text-base font-medium text-[#15161b] appearance-none rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all pr-10 disabled:opacity-50`}>
                <option value="" disabled>Select inquiry type</option>
                <option value="wholesale">Wholesale / Distribution</option>
                <option value="press">Press / Media</option>
                <option value="support">Order Support</option>
                <option value="general">Just saying hi 👋</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
            </div>
          </div>
        </div>

        <div>
          <label className={`${textFont.className} block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2`}>
            Message <span className="text-[#de3e4f]">*</span>
          </label>
          <textarea placeholder="Drop the details here..." rows={5} disabled={isSubmitting} {...register("message")}
            className={`${textFont.className} w-full bg-white border ${errors.message ? 'border-[#de3e4f]' : 'border-gray-200'} px-4 py-3.5 text-base font-medium text-[#15161b] placeholder-gray-300 rounded-xl focus:border-[#de3e4f] focus:ring-2 focus:ring-[#de3e4f]/10 focus:outline-none transition-all resize-none disabled:opacity-50`} />
          {errors.message && <p className="text-[#de3e4f] text-xs mt-1.5 font-medium uppercase tracking-wide">{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}
          className={`${textFont.className} group inline-flex items-center gap-3 bg-[#15161b] hover:bg-[#de3e4f] text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(222,62,79,0.3)] active:scale-95 disabled:bg-gray-400 disabled:shadow-none disabled:active:scale-100 disabled:cursor-not-allowed`}>
          {isSubmitting ? (
            <>
              Sending...
              <Loader2 size={16} className="animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
