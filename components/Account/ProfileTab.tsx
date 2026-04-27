"use client";
import { useState, useEffect } from "react";
import { User, Mail, Phone, Check } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ProfileTab() {
  const { data: session } = useSession();
  const [saved, setSaved] = useState(false);
console.log(session)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    }
  });

  const watchName = watch("name");
  const watchEmail = watch("email");
  const watchPhone = watch("phone");

  useEffect(() => {
    if (session?.user) {
      reset({
        name: session.user.name || "",
        email: session.user.email || "",
        phone: (session.user as any).phone || "",
      });
    }
  }, [session, reset]);

  const onSubmit = (data: any) => {
    console.log("Saving profile data:", data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b]`}>
          Personal Info
        </h3>
        <button
          type="submit"
          className={`${textFont.className} flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
            saved
              ? "bg-green-500 text-white"
              : "bg-[#15161b] hover:bg-[#c25b5e] text-white shadow-lg shadow-[#c25b5e]/20"
          }`}
        >
          {saved ? <><Check size={14} /> Saved!</> : "Save Changes"}
        </button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Full Name</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input type="text" {...register("name", { required: "Name is required" })}
                className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl ${errors.name ? 'border-red-400' : ''}`}
              />
            </div>
          </div>
          <div>
            <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input type="email" {...register("email", { required: "Email is required" })} readOnly
                className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-100 pl-11 pr-4 py-3 text-sm font-medium text-gray-500 cursor-not-allowed rounded-xl`}
              />
            </div>
          </div>
        </div>

        <div>
          <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Phone Number</label>
          <div className="relative">
            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
            <input type="tel" {...register("phone", { required: "Phone is required" })}
              className={`${textFont.className} w-full border-2 ${!watchPhone ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'} pl-11 pr-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
