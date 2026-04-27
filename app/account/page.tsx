"use client";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { User, MapPin, ShoppingBag, Settings, LogOut } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import TabSkeleton from "@/components/Account/TabSkeleton";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Lazy-load each tab — only the active tab's JS is downloaded
const ProfileTab = dynamic(() => import("@/components/Account/ProfileTab"), {
  loading: () => <TabSkeleton />,
});
const AddressesTab = dynamic(() => import("@/components/Account/AddressesTab"), {
  loading: () => <TabSkeleton />,
});
const OrdersTab = dynamic(() => import("@/components/Account/OrdersTab"), {
  loading: () => <TabSkeleton />,
});
const SettingsTab = dynamic(() => import("@/components/Account/SettingsTab"), {
  loading: () => <TabSkeleton />,
});

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "orders", label: "My Orders", icon: ShoppingBag },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function AccountPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
          <div className="absolute w-72 h-72 bg-[#dbba53]/8 rounded-full blur-[100px] bottom-0 left-10" />
        </div>
        <div className="relative z-10">
          <h1 className={`${titleFont.className} text-4xl md:text-5xl text-white tracking-tight uppercase leading-none`}>
            {session?.user?.name || "Welcome"}
          </h1>
          <p className={`${textFont.className} text-gray-400 text-sm tracking-[0.2em] uppercase mt-2`}>
            {session?.user?.email || "Loading..."}
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

          {/* Dynamic Tab Content */}
          <Suspense fallback={<TabSkeleton />}>
            {activeTab === "profile" && <ProfileTab />}
            {activeTab === "addresses" && <AddressesTab />}
            {activeTab === "orders" && <OrdersTab />}
            {activeTab === "settings" && <SettingsTab />}
          </Suspense>

          {/* Logout */}
          <div className="mt-10 mb-8 max-w-xs mx-auto">
            <button onClick={() => signOut({ callbackUrl: "/" })} className={`${textFont.className} w-full flex items-center justify-center gap-2 text-sm text-[#de3e4f] bg-red-50 hover:bg-[#de3e4f] hover:text-white border border-red-100 py-3.5 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-sm`}>
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
