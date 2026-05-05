import { TrendingUp, ShoppingBag, Users, DollarSign, Package, ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";
import { getAdminStats } from "@/lib/data/admin-stats";
import { getAdminOrders } from "@/lib/data/admin-orders";
import { getAdminProducts } from "@/lib/data/admin-products";
import { adminTitleFont as tf, adminTextFont as tx } from "@/lib/fonts";

const statusColors: Record<string, string> = {
  Pending: "bg-gray-100 text-gray-600",
  Processing: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-600",
};

export default async function AdminDashboard() {
  const [stats, ordersResult, productsResult] = await Promise.all([
    getAdminStats(),
    getAdminOrders({ limit: 5 }),
    getAdminProducts({ limit: 3 }),
  ]);

  const recentOrders = ordersResult.orders;
  const topProducts = productsResult.products;

  const statCards = [
    { label: "Total Revenue", value: `₹${stats.totalRevenue.toLocaleString("en-IN")}`, icon: DollarSign, color: "#c25b5e" },
    { label: "Orders", value: String(stats.totalOrders), icon: ShoppingBag, color: "#dbba53" },
    { label: "Customers", value: String(stats.totalUsers), icon: Users, color: "#3b82f6" },
    { label: "Products", value: String(stats.totalProducts), icon: Package, color: "#10b981" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className={`${tf.className} text-3xl md:text-4xl uppercase tracking-wide text-[#15161b]`}>
            Welcome back, <span className="text-[#c25b5e]">Admin</span>
          </h1>
          <p className={`${tx.className} text-gray-400 mt-1 text-sm uppercase tracking-wider`}>
            Here&apos;s what&apos;s happening with your store today
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/products" className={`${tx.className} bg-[#15161b] hover:bg-[#c25b5e] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2`}>
            <Package size={14} /> Add Product
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.color + "15" }}>
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
            </div>
            <p className={`${tf.className} text-2xl md:text-3xl text-[#15161b] tracking-wide`}>{stat.value}</p>
            <p className={`${tx.className} text-gray-400 text-xs uppercase tracking-widest mt-1`}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className={`${tf.className} text-xl uppercase tracking-wide text-[#15161b]`}>Recent Orders</h3>
            <Link href="/admin/orders" className={`${tx.className} text-xs text-[#c25b5e] font-bold uppercase tracking-widest hover:text-[#15161b] transition-colors flex items-center gap-1`}>
              View All <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Customer", "Amount", "Status"].map(h => (
                    <th key={h} className={`${tx.className} text-left px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={3} className={`${tx.className} px-6 py-8 text-center text-sm text-gray-400`}>No orders yet</td>
                  </tr>
                ) : recentOrders.map((order) => (
                  <tr key={order._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className={`${tx.className} px-6 py-4 text-sm text-gray-600`}>
                      {order.customerName || "Unknown"}
                      <p className="text-[10px] text-gray-400">{order.customerEmail}</p>
                    </td>
                    <td className={`${tx.className} px-6 py-4 text-sm font-bold text-[#15161b]`}>₹{order.totalPrice?.toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4">
                      <span className={`${tx.className} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${statusColors[order.status] || "bg-gray-100 text-gray-600"}`}>
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
            <h3 className={`${tf.className} text-xl uppercase tracking-wide text-[#15161b]`}>Products</h3>
            <Link href="/admin/products" className={`${tx.className} text-xs text-[#c25b5e] font-bold uppercase tracking-widest hover:text-[#15161b] transition-colors`}>
              <Eye size={14} />
            </Link>
          </div>
          <div className="p-4 space-y-3">
            {topProducts.length === 0 ? (
              <p className={`${tx.className} text-center text-sm text-gray-400 py-6`}>No products yet</p>
            ) : topProducts.map((product) => (
              <div key={product._id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-14 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                  <img src={product.image} alt={product.name} className="h-[130%] w-auto object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`${tx.className} text-sm font-bold text-[#15161b] uppercase tracking-wide truncate`}>{product.name}</p>
                  <p className={`${tx.className} text-xs text-gray-400`}>Stock: {product.stock}</p>
                </div>
                <p className={`${tx.className} text-sm font-bold text-[#15161b] shrink-0`}>₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
