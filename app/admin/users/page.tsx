"use client";
import { useState } from "react";
import { Search, Eye, ShoppingBag, X, Mail, MapPin, Calendar } from "lucide-react";
import Pagination from "@/components/admin/Pagination";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const usersData = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", phone: "+91 98765 43210", joined: "2026-03-15", orders: 5, spent: 4820, city: "Bhubaneswar", status: "Active" },
  { id: 2, name: "Priya Patel", email: "priya@gmail.com", phone: "+91 87654 32109", joined: "2026-03-20", orders: 3, spent: 2250, city: "Bangalore", status: "Active" },
  { id: 3, name: "Aditya Nair", email: "aditya@gmail.com", phone: "+91 76543 21098", joined: "2026-04-01", orders: 2, spent: 1194, city: "Mumbai", status: "Active" },
  { id: 4, name: "Sneha Das", email: "sneha@gmail.com", phone: "+91 65432 10987", joined: "2026-04-05", orders: 1, spent: 999, city: "Kolkata", status: "Active" },
  { id: 5, name: "Vikram Singh", email: "vikram@gmail.com", phone: "+91 54321 09876", joined: "2026-04-10", orders: 4, spent: 3196, city: "Delhi", status: "Active" },
  { id: 6, name: "Ananya Roy", email: "ananya@gmail.com", phone: "+91 43210 98765", joined: "2026-04-12", orders: 1, spent: 0, city: "Bangalore", status: "Inactive" },
  { id: 7, name: "Karan Mehta", email: "karan@gmail.com", phone: "+91 32109 87654", joined: "2026-04-14", orders: 2, spent: 1025, city: "Hyderabad", status: "Active" },
  { id: 8, name: "Meera Joshi", email: "meera@gmail.com", phone: "+91 21098 76543", joined: "2026-04-18", orders: 0, spent: 0, city: "Pune", status: "Active" },
  { id: 9, name: "Rohan Gupta", email: "rohan@gmail.com", phone: "+91 10987 65432", joined: "2026-04-19", orders: 3, spent: 1881, city: "Jaipur", status: "Active" },
  { id: 10, name: "Tanvi Kapoor", email: "tanvi@gmail.com", phone: "+91 09876 54321", joined: "2026-04-20", orders: 1, spent: 627, city: "Chandigarh", status: "Active" },
  { id: 11, name: "Siddharth Rao", email: "sid@gmail.com", phone: "+91 98712 34567", joined: "2026-04-21", orders: 0, spent: 0, city: "Chennai", status: "Inactive" },
];

const ITEMS_PER_PAGE = 5;

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [viewUser, setViewUser] = useState<typeof usersData[0] | null>(null);

  const filtered = usersData.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col h-full">
      {/* STATIC HEADER */}
      <div className="shrink-0 space-y-4 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className={`${titleFont.className} text-2xl md:text-3xl uppercase tracking-wide text-[#15161b]`}>Users</h1>
            <p className={`${textFont.className} text-gray-400 text-xs uppercase tracking-wider`}>{filtered.length} registered users</p>
          </div>
          <div className="flex gap-2">
            <div className={`${textFont.className} bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest`}>
              {usersData.filter(u => u.status === "Active").length} Active
            </div>
            <div className={`${textFont.className} bg-gray-100 text-gray-500 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest`}>
              {usersData.filter(u => u.status === "Inactive").length} Inactive
            </div>
          </div>
        </div>
        <div className="relative max-w-sm">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search by name or email..." value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
            className={`${textFont.className} w-full bg-white border border-gray-200 pl-10 pr-4 py-2.5 rounded-xl text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:outline-none transition-colors`}
          />
        </div>
      </div>

      {/* SCROLLABLE TABLE */}
      <div className="flex-1 min-h-0 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="sticky top-0 z-10">
              <tr className="bg-gray-50 border-b border-gray-100">
                {["User", "City", "Orders", "Total Spent", "Joined", "Status", ""].map(h => (
                  <th key={h} className={`${textFont.className} text-left px-4 md:px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.map(user => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 md:px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="min-w-0">
                        <p className={`${textFont.className} text-[15px] font-bold text-[#15161b] truncate`}>{user.name}</p>
                        <p className={`${textFont.className} text-[15px] text-gray-400 truncate`}>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className={`${textFont.className} px-4 md:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap`}>{user.city}</td>
                  <td className={`${textFont.className} px-4 md:px-6 py-3 text-sm font-semibold text-[#15161b]`}>{user.orders}</td>
                  <td className={`${textFont.className} px-4 md:px-6 py-3 text-sm font-bold ${user.spent > 0 ? "text-[#15161b]" : "text-gray-300"}`}>
                    {user.spent > 0 ? `₹${user.spent.toLocaleString()}` : "—"}
                  </td>
                  <td className={`${textFont.className} px-4 md:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap`}>{user.joined}</td>
                  <td className="px-4 md:px-6 py-3">
                    <span className={`${textFont.className} text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>{user.status}</span>
                  </td>
                  <td className="px-4 md:px-6 py-3">
                    <button onClick={() => setViewUser(user)} className="w-7 h-7 rounded-lg bg-gray-100 text-gray-400 hover:bg-[#c25b5e] hover:text-white flex items-center justify-center transition-colors">
                      <Eye size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination currentPage={page} totalPages={totalPages} totalItems={filtered.length} itemsPerPage={ITEMS_PER_PAGE} onPageChange={setPage} />
      </div>

      {/* USER DETAIL MODAL */}
      {viewUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setViewUser(null)}>
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
              <h3 className={`${titleFont.className} text-xl uppercase tracking-wide text-[#15161b]`}>User Profile</h3>
              <button onClick={() => setViewUser(null)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#15161b]"><X size={16} /></button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c25b5e] to-[#de3e4f] flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {viewUser.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className={`${titleFont.className} text-xl text-[#15161b] uppercase tracking-wide truncate`}>{viewUser.name}</p>
                  <span className={`${textFont.className} text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${viewUser.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{viewUser.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3"><Mail size={13} className="text-gray-400 shrink-0" /><span className={`${textFont.className} text-sm text-gray-600`}>{viewUser.email}</span></div>
                <div className="flex items-center gap-3"><MapPin size={13} className="text-gray-400 shrink-0" /><span className={`${textFont.className} text-sm text-gray-600`}>{viewUser.city}</span></div>
                <div className="flex items-center gap-3"><Calendar size={13} className="text-gray-400 shrink-0" /><span className={`${textFont.className} text-sm text-gray-600`}>Joined {viewUser.joined}</span></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <ShoppingBag size={16} className="mx-auto text-gray-400 mb-1" />
                  <p className={`${titleFont.className} text-2xl text-[#15161b]`}>{viewUser.orders}</p>
                  <p className={`${textFont.className} text-[9px] text-gray-400 uppercase tracking-widest`}>Orders</p>
                </div>
                <div className="text-center">
                  <p className={`${titleFont.className} text-2xl text-[#c25b5e]`}>₹{viewUser.spent.toLocaleString()}</p>
                  <p className={`${textFont.className} text-[9px] text-gray-400 uppercase tracking-widest`}>Total Spent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
