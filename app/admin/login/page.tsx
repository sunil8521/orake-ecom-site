"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Demo auth — replace with real backend call
    setTimeout(() => {
      if (form.email === "admin@orake.in" && form.password === "OrakeAdmin2026") {
        localStorage.setItem("orake_admin", "true");
        router.push("/admin");
      } else {
        setError("Invalid credentials. Try admin@orake.in");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#15161b] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute w-[500px] h-[500px] bg-[#c25b5e]/10 rounded-full blur-[150px] -top-40 -right-40" />
      <div className="absolute w-[400px] h-[400px] bg-[#dbba53]/5 rounded-full blur-[120px] bottom-20 -left-40" />

      <div className="relative z-10 w-full max-w-[420px]">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-[#c25b5e] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_rgba(194,91,94,0.3)]">
            <span className={`${titleFont.className} text-white text-3xl`}>O</span>
          </div>
          <h1 className={`${titleFont.className} text-3xl md:text-4xl uppercase text-white tracking-wide`}>
            Admin <span className="text-[#c25b5e]">Panel</span>
          </h1>
          <p className={`${textFont.className} text-gray-500 mt-2 text-sm tracking-wider uppercase`}>
            Restricted access — authorized personnel only
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          {error && (
            <div className={`${textFont.className} bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm mb-6 text-center uppercase tracking-wider`}>
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2`}>Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type="email" name="email" value={form.email} onChange={handle} placeholder="admin@orake.in" required
                  className={`${textFont.className} w-full bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:border-[#c25b5e] focus:outline-none transition-colors rounded-xl text-sm`}
                />
              </div>
            </div>
            <div>
              <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2`}>Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type={showPass ? "text" : "password"} name="password" value={form.password} onChange={handle} placeholder="••••••••" required
                  className={`${textFont.className} w-full bg-white/5 border border-white/10 pl-11 pr-11 py-3 text-white placeholder-gray-600 focus:border-[#c25b5e] focus:outline-none transition-colors rounded-xl text-sm`}
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className={`${textFont.className} w-full bg-[#c25b5e] hover:bg-[#de3e4f] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.4)] active:scale-[0.98] flex items-center justify-center gap-2`}
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : "Access Panel"}
            </button>
          </div>
        </form>

        <p className={`${textFont.className} text-center mt-8 text-gray-600 text-xs uppercase tracking-wider`}>
          © 2026 Orake Beverages — Internal Use Only
        </p>
      </div>
    </div>
  );
}
