"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { titleFont, textFont } from "@/lib/fonts";
import {
  LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut,
  Menu, X, ChevronDown, Bell
} from "lucide-react";


const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Users", href: "/admin/users", icon: Users },
  // { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminClientLayout({ 
  children 
}: { 
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();


  return (
    <div className="h-screen overflow-hidden bg-[#f5f5f7] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed lg:relative top-0 left-0 h-screen w-[260px] bg-[#15161b] flex flex-col z-50 shrink-0 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Logo */}
        <div className="px-6 py-6 flex items-center justify-between border-b border-white/5 shrink-0">
          <Link href="/admin" className="flex items-center gap-3">

            <div>
              <span className={`${titleFont.className} text-white text-xl tracking-wider uppercase`}>ORAKE</span>
              <span className={`${textFont.className} block text-gray-500 text-[10px] uppercase tracking-[0.3em] -mt-0.5`}>Admin Panel</span>
            </div>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Nav — scrollable if many items */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map(item => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`${textFont.className} flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#c25b5e] text-white shadow-lg shadow-[#c25b5e]/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom — fixed at bottom */}
        <div className="px-4 py-4 border-t border-white/5 shrink-0">
          <Link href="/" target="_blank" className={`${textFont.className} flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-white hover:bg-white/5 transition-all`}>
            <span className="text-xs">🌐</span> View Store
          </Link>
          <button onClick={() => window.location.reload()} className={`${textFont.className} flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all w-full`}>
            <LogOut size={18} strokeWidth={1.5} />
            Lock Panel
          </button>
        </div>
      </aside>

      {/* Right side — topbar + scrollable content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        {/* Topbar — fixed */}
        <header className="bg-white border-b border-gray-200/50 px-6 py-4 flex items-center justify-between shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-[#15161b]">
              <Menu size={22} />
            </button>
            <h2 className={`${titleFont.className} text-xl uppercase tracking-wide text-[#15161b]`}>
              {navItems.find(n => pathname === n.href || (n.href !== "/admin" && pathname.startsWith(n.href)))?.label || "Dashboard"}
            </h2>
          </div>

        
        </header>

        {/* Content — ONLY this scrolls */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
