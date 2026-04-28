"use client";
import { TrendingUp, ShoppingBag, Users, DollarSign, Package, ArrowUpRight, ArrowDownRight, Eye } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";
import Link from "next/link";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const stats = [
  { label: "Total Revenue", value: "₹1,24,500", change: "+12.5%", up: true, icon: DollarSign, color: "#c25b5e" },
  { label: "Orders", value: "156", change: "+8.2%", up: true, icon: ShoppingBag, color: "#dbba53" },
  { label: "Customers", value: "1,240", change: "+22.1%", up: true, icon: Users, color: "#3b82f6" },
  { label: "Products", value: "6", change: "—", up: true, icon: Package, color: "#10b981" },
];

const recentOrders = [
  { id: "ORK-001", customer: "Rahul Sharma", items: "Fan Favorites Box ×2", amount: "₹1,254", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
  { id: "ORK-002", customer: "Priya Patel", items: "Chaos Edition Box ×1", amount: "₹750", status: "Shipped", statusColor: "bg-blue-100 text-blue-700" },
  { id: "ORK-003", customer: "Aditya Nair", items: "Tropical Rush ×3", amount: "₹597", status: "Processing", statusColor: "bg-yellow-100 text-yellow-700" },
  { id: "ORK-004", customer: "Sneha Das", items: "Super Cola Date ×1", amount: "₹999", status: "Pending", statusColor: "bg-gray-100 text-gray-600" },
  { id: "ORK-005", customer: "Vikram Singh", items: "Midnight Berry Pack ×1", amount: "₹449", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
];

const topProducts = [
  { name: "Fan Favorites Box", sold: 48, revenue: "₹30,096", image: "/can1.png" },
  { name: "Chaos Edition Box", sold: 32, revenue: "₹24,000", image: "/can2.png" },
  { name: "Super Cola Date", sold: 28, revenue: "₹27,972", image: "/can1.png" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className={`${titleFont.className} text-3xl md:text-4xl uppercase tracking-wide text-[#15161b]`}>
            Welcome back, <span className="text-[#c25b5e]">Admin</span>
          </h1>
          <p className={`${textFont.className} text-gray-400 mt-1 text-sm uppercase tracking-wider`}>
            Here&apos;s what&apos;s happening with your store today
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/products" className={`${textFont.className} bg-[#15161b] hover:bg-[#c25b5e] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2`}>
            <Package size={14} /> Add Product
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.color + "15" }}>
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <span className={`${textFont.className} text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${stat.up ? "text-green-600" : "text-red-500"}`}>
                {stat.change !== "—" && (stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />)}
                {stat.change}
              </span>
            </div>
            <p className={`${titleFont.className} text-2xl md:text-3xl text-[#15161b] tracking-wide`}>{stat.value}</p>
            <p className={`${textFont.className} text-gray-400 text-xs uppercase tracking-widest mt-1`}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className={`${titleFont.className} text-xl uppercase tracking-wide text-[#15161b]`}>Recent Orders</h3>
            <Link href="/admin/orders" className={`${textFont.className} text-xs text-[#c25b5e] font-bold uppercase tracking-widest hover:text-[#15161b] transition-colors flex items-center gap-1`}>
              View All <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Order", "Customer", "Items", "Amount", "Status"].map(h => (
                    <th key={h} className={`${textFont.className} text-left px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className={`${textFont.className} px-6 py-4 text-sm font-bold text-[#15161b]`}>{order.id}</td>
                    <td className={`${textFont.className} px-6 py-4 text-sm text-gray-600`}>{order.customer}</td>
                    <td className={`${textFont.className} px-6 py-4 text-xs text-gray-400 uppercase tracking-wider`}>{order.items}</td>
                    <td className={`${textFont.className} px-6 py-4 text-sm font-bold text-[#15161b]`}>{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`${textFont.className} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className={`${titleFont.className} text-xl uppercase tracking-wide text-[#15161b]`}>Top Products</h3>
            <Link href="/admin/products" className={`${textFont.className} text-xs text-[#c25b5e] font-bold uppercase tracking-widest hover:text-[#15161b] transition-colors`}>
              <Eye size={14} />
            </Link>
          </div>
          <div className="p-4 space-y-3">
            {topProducts.map((product, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-14 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                  <img src={product.image} alt={product.name} className="h-[130%] w-auto object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`${textFont.className} text-sm font-bold text-[#15161b] uppercase tracking-wide truncate`}>{product.name}</p>
                  <p className={`${textFont.className} text-xs text-gray-400 uppercase tracking-wider`}>{product.sold} sold</p>
                </div>
                <p className={`${textFont.className} text-sm font-bold text-[#15161b] shrink-0`}>{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
