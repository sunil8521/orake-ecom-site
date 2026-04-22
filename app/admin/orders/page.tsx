"use client";
import { useState } from "react";
import { Search, Eye, Package, Truck, CheckCircle, Clock, X } from "lucide-react";
import Pagination from "@/components/admin/Pagination";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const statusOptions = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const ordersData = [
  { id: "ORK-001", customer: "Rahul Sharma", email: "rahul@gmail.com", items: [{ name: "Fan Favorites Box", qty: 2, price: 627 }], total: 1254, date: "2026-04-21", status: "Delivered", payment: "Paid", address: "MG Road, Bhubaneswar" },
  { id: "ORK-002", customer: "Priya Patel", email: "priya@gmail.com", items: [{ name: "Chaos Edition Box", qty: 1, price: 750 }], total: 750, date: "2026-04-20", status: "Shipped", payment: "Paid", address: "Koramangala, Bangalore" },
  { id: "ORK-003", customer: "Aditya Nair", email: "aditya@gmail.com", items: [{ name: "Tropical Rush Single", qty: 3, price: 199 }], total: 597, date: "2026-04-20", status: "Processing", payment: "Paid", address: "Andheri West, Mumbai" },
  { id: "ORK-004", customer: "Sneha Das", email: "sneha@gmail.com", items: [{ name: "Super Cola Date", qty: 1, price: 999 }], total: 999, date: "2026-04-19", status: "Pending", payment: "COD", address: "Salt Lake, Kolkata" },
  { id: "ORK-005", customer: "Vikram Singh", email: "vikram@gmail.com", items: [{ name: "Midnight Berry Pack", qty: 1, price: 449 }], total: 449, date: "2026-04-18", status: "Delivered", payment: "Paid", address: "Connaught Place, Delhi" },
  { id: "ORK-006", customer: "Ananya Roy", email: "ananya@gmail.com", items: [{ name: "Citrus Blast Combo", qty: 2, price: 399 }], total: 798, date: "2026-04-18", status: "Cancelled", payment: "Refunded", address: "Jayanagar, Bangalore" },
  { id: "ORK-007", customer: "Karan Mehta", email: "karan@gmail.com", items: [{ name: "Fan Favorites Box", qty: 1, price: 627 }, { name: "Tropical Rush", qty: 2, price: 199 }], total: 1025, date: "2026-04-17", status: "Delivered", payment: "Paid", address: "Jubilee Hills, Hyderabad" },
  { id: "ORK-008", customer: "Meera Joshi", email: "meera@gmail.com", items: [{ name: "Energy Starter Kit", qty: 1, price: 349 }], total: 349, date: "2026-04-16", status: "Shipped", payment: "Paid", address: "Kothrud, Pune" },
  { id: "ORK-009", customer: "Arjun Desai", email: "arjun@gmail.com", items: [{ name: "Mega Party Pack", qty: 1, price: 1499 }], total: 1499, date: "2026-04-15", status: "Delivered", payment: "Paid", address: "Vastrapur, Ahmedabad" },
  { id: "ORK-010", customer: "Diya Reddy", email: "diya@gmail.com", items: [{ name: "Midnight Berry Pack", qty: 2, price: 449 }], total: 898, date: "2026-04-14", status: "Processing", payment: "COD", address: "Banjara Hills, Hyderabad" },
];

const statusIcons: Record<string, typeof Package> = { Pending: Clock, Processing: Package, Shipped: Truck, Delivered: CheckCircle, Cancelled: X };
const statusColors: Record<string, string> = { Pending: "bg-gray-100 text-gray-600", Processing: "bg-yellow-100 text-yellow-700", Shipped: "bg-blue-100 text-blue-700", Delivered: "bg-green-100 text-green-700", Cancelled: "bg-red-100 text-red-600" };

const ITEMS_PER_PAGE = 5;

export default function AdminOrdersPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [viewOrder, setViewOrder] = useState<typeof ordersData[0] | null>(null);

  const filtered = ordersData.filter(o =>
    (filterStatus === "All" || o.status === filterStatus) &&
    (o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col h-full">
      {/* STATIC HEADER */}
      <div className="shrink-0 space-y-4 pb-4">
        <div>
          <h1 className={`${titleFont.className} text-2xl md:text-3xl uppercase tracking-wide text-[#15161b]`}>Orders</h1>
          <p className={`${textFont.className} text-gray-400 text-xs uppercase tracking-wider`}>{filtered.length} orders</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search by ID or customer..." value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
              className={`${textFont.className} w-full bg-white border border-gray-200 pl-10 pr-4 py-2.5 rounded-xl text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:outline-none transition-colors`}
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {statusOptions.map(s => (
              <button key={s} onClick={() => { setFilterStatus(s); setPage(1); }}
                className={`${textFont.className} px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${
                  filterStatus === s ? "bg-[#15161b] text-white border-[#15161b]" : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLLABLE TABLE */}
      <div className="flex-1 min-h-0 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="sticky top-0 z-10">
              <tr className="bg-gray-50 border-b border-gray-100">
                {["Order ID", "Customer", "Date", "Total", "Payment", "Status", ""].map(h => (
                  <th key={h} className={`${textFont.className} text-left px-4 md:px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.map(order => {
                const StatusIcon = statusIcons[order.status] || Package;
                return (
                  <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className={`${textFont.className} px-4 md:px-6 py-3 text-sm font-bold text-[#15161b]`}>{order.id}</td>
                    <td className="px-4 md:px-6 py-3">
                      <p className={`${textFont.className} text-sm font-semibold text-[#15161b]`}>{order.customer}</p>
                      <p className={`${textFont.className} text-[10px] text-gray-400`}>{order.email}</p>
                    </td>
                    <td className={`${textFont.className} px-4 md:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap`}>{order.date}</td>
                    <td className={`${textFont.className} px-4 md:px-6 py-3 text-sm font-bold text-[#15161b]`}>₹{order.total}</td>
                    <td className="px-4 md:px-6 py-3">
                      <span className={`${textFont.className} text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        order.payment === "Paid" ? "bg-green-100 text-green-700" : order.payment === "COD" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-600"
                      }`}>{order.payment}</span>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <span className={`${textFont.className} text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 w-fit ${statusColors[order.status]}`}>
                        <StatusIcon size={9} /> {order.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <button onClick={() => setViewOrder(order)} className="w-7 h-7 rounded-lg bg-gray-100 text-gray-400 hover:bg-[#c25b5e] hover:text-white flex items-center justify-center transition-colors"><Eye size={12} /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Pagination currentPage={page} totalPages={totalPages} totalItems={filtered.length} itemsPerPage={ITEMS_PER_PAGE} onPageChange={setPage} />
      </div>

      {/* ORDER DETAIL MODAL */}
      {viewOrder && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setViewOrder(null)}>
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
              <h3 className={`${titleFont.className} text-xl uppercase tracking-wide text-[#15161b]`}>Order {viewOrder.id}</h3>
              <button onClick={() => setViewOrder(null)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#15161b]"><X size={16} /></button>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div><p className={`${textFont.className} text-[10px] text-gray-400 uppercase tracking-widest mb-1`}>Customer</p><p className={`${textFont.className} text-sm font-bold text-[#15161b]`}>{viewOrder.customer}</p><p className={`${textFont.className} text-xs text-gray-400`}>{viewOrder.email}</p></div>
                <div><p className={`${textFont.className} text-[10px] text-gray-400 uppercase tracking-widest mb-1`}>Address</p><p className={`${textFont.className} text-sm text-gray-600`}>{viewOrder.address}</p></div>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className={`${textFont.className} text-[10px] text-gray-400 uppercase tracking-widest mb-3`}>Items</p>
                {viewOrder.items.map((item, i) => (<div key={i} className="flex justify-between py-2"><span className={`${textFont.className} text-sm text-[#15161b]`}>{item.name} ×{item.qty}</span><span className={`${textFont.className} text-sm font-bold`}>₹{item.price * item.qty}</span></div>))}
                <div className="flex justify-between pt-3 mt-3 border-t border-gray-100"><span className={`${titleFont.className} text-lg uppercase text-[#15161b]`}>Total</span><span className={`${titleFont.className} text-lg text-[#c25b5e]`}>₹{viewOrder.total}</span></div>
              </div>
              <div>
                <p className={`${textFont.className} text-[10px] text-gray-400 uppercase tracking-widest mb-2`}>Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {["Pending", "Processing", "Shipped", "Delivered"].map(s => (<button key={s} className={`${textFont.className} px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors ${viewOrder.status === s ? "bg-[#c25b5e] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{s}</button>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
