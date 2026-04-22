"use client";
import { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, MapPin, Lock, Eye, EyeOff, Camera, ShoppingBag, Heart, LogOut, Check } from "lucide-react";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "orders", label: "My Orders", icon: ShoppingBag },
  { id: "security", label: "Security", icon: Lock },
];

const orderHistory = [
  { id: "ORK-001", date: "2026-04-21", items: "Fan Favorites Box ×2", total: 1254, status: "Delivered" },
  { id: "ORK-003", date: "2026-04-18", items: "Tropical Rush ×3", total: 597, status: "Shipped" },
  { id: "ORK-005", date: "2026-04-10", items: "Midnight Berry Pack ×1", total: 449, status: "Delivered" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Pending: "bg-gray-100 text-gray-600",
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 98765 43210",
    address: "MG Road, Saheed Nagar",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751007",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
          <div className="absolute w-72 h-72 bg-[#dbba53]/8 rounded-full blur-[100px] bottom-0 left-10" />
        </div>
        <div className="relative z-10">
          {/* Avatar */}
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#c25b5e] to-[#de3e4f] flex items-center justify-center mx-auto ring-4 ring-white/10">
              <span className={`${titleFont.className} text-white text-4xl md:text-5xl`}>
                {profile.name.charAt(0)}
              </span>
            </div>
            <button className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-[#c25b5e] border-3 border-[#15161b] flex items-center justify-center text-white hover:bg-[#de3e4f] transition-colors">
              <Camera size={14} />
            </button>
          </div>
          <h1 className={`${titleFont.className} text-4xl md:text-5xl text-white tracking-tight uppercase leading-none`}>
            {profile.name}
          </h1>
          <p className={`${textFont.className} text-gray-400 text-sm tracking-[0.2em] uppercase mt-2`}>
            {profile.email}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${textFont.className} flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab.id
                    ? "bg-[#15161b] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <tab.icon size={14} /> {tab.label}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b]`}>
                  Personal Info
                </h3>
                <button
                  onClick={handleSave}
                  className={`${textFont.className} flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    saved
                      ? "bg-green-500 text-white"
                      : "bg-[#c25b5e] hover:bg-[#de3e4f] text-white shadow-lg shadow-[#c25b5e]/20"
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
                      <input type="text" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })}
                        className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input type="email" value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })}
                        className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type="tel" value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })}
                      className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                </div>

                {/* Delivery address section */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className={`${titleFont.className} text-lg uppercase tracking-wide text-[#15161b] mb-4`}>
                    Delivery Address
                  </h4>
                  <div className="space-y-5">
                    <div>
                      <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Street Address</label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input type="text" value={profile.address} onChange={e => setProfile({ ...profile, address: e.target.value })}
                          className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>City</label>
                        <input type="text" value={profile.city} onChange={e => setProfile({ ...profile, city: e.target.value })}
                          className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                        />
                      </div>
                      <div>
                        <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>State</label>
                        <input type="text" value={profile.state} onChange={e => setProfile({ ...profile, state: e.target.value })}
                          className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                        />
                      </div>
                      <div>
                        <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Pincode</label>
                        <input type="text" value={profile.pincode} onChange={e => setProfile({ ...profile, pincode: e.target.value })}
                          className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-6`}>
                Order History
              </h3>
              {orderHistory.length > 0 ? (
                <div className="space-y-4">
                  {orderHistory.map(order => (
                    <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#15161b] rounded-xl flex items-center justify-center shrink-0">
                          <ShoppingBag size={18} className="text-white" />
                        </div>
                        <div>
                          <p className={`${textFont.className} text-sm font-bold text-[#15161b] uppercase tracking-wide`}>{order.id}</p>
                          <p className={`${textFont.className} text-xs text-gray-400`}>{order.date} • {order.items}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6">
                        <p className={`${titleFont.className} text-lg text-[#15161b]`}>₹{order.total}</p>
                        <span className={`${textFont.className} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${statusColors[order.status] || "bg-gray-100 text-gray-600"}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <ShoppingBag size={48} className="mx-auto text-gray-200 mb-4" />
                  <p className={`${textFont.className} text-gray-400 text-sm uppercase tracking-wider`}>No orders yet</p>
                  <Link href="/products" className={`${textFont.className} inline-block mt-4 bg-[#c25b5e] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#de3e4f] transition-colors`}>
                    Start Shopping
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b] mb-8`}>
                Change Password
              </h3>

              <div className="space-y-6 max-w-lg">
                <div>
                  <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Current Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type={showOldPass ? "text" : "password"} placeholder="••••••••"
                      className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-12 py-3 text-sm font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                    <button type="button" onClick={() => setShowOldPass(!showOldPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#15161b] transition-colors">
                      {showOldPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>New Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type={showNewPass ? "text" : "password"} placeholder="••••••••"
                      className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-12 py-3 text-sm font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                    <button type="button" onClick={() => setShowNewPass(!showNewPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#15161b] transition-colors">
                      {showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className={`${textFont.className} block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2`}>Confirm New Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type="password" placeholder="••••••••"
                      className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm font-medium text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`}
                    />
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className={`${textFont.className} w-full sm:w-auto px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    saved
                      ? "bg-green-500 text-white"
                      : "bg-[#15161b] hover:bg-[#c25b5e] text-white hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)]"
                  }`}
                >
                  {saved ? "✓ Updated!" : "Update Password"}
                </button>
              </div>

              {/* Danger Zone */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className={`${titleFont.className} text-lg uppercase tracking-wide text-red-500 mb-3`}>
                  Danger Zone
                </h4>
                <p className={`${textFont.className} text-gray-400 text-sm mb-4`}>
                  Once you delete your account, there&apos;s no going back. All your data will be permanently removed.
                </p>
                <button className={`${textFont.className} bg-red-50 border-2 border-red-200 text-red-500 hover:bg-red-100 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors`}>
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* Logout */}
          <div className="mt-8 text-center">
            <Link href="/login" className={`${textFont.className} inline-flex items-center gap-2 text-gray-400 hover:text-red-500 text-sm uppercase tracking-widest transition-colors`}>
              <LogOut size={14} /> Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
