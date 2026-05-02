"use client";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { User, MapPin, ShoppingBag, Settings, LogOut } from "lucide-react";
import { textFont } from "@/lib/fonts";
import { authClient } from "@/lib/auth-client";
import TabSkeleton from "./TabSkeleton";

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

export default function AccountTabs() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
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
          <button onClick={async () => { await authClient.signOut(); window.location.href = "/"; }} className={`${textFont.className} w-full flex items-center justify-center gap-2 text-sm text-[#de3e4f] bg-red-50 hover:bg-[#de3e4f] hover:text-white border border-red-100 py-3.5 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-sm`}>
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
