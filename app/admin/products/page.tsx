"use client";
import { useState } from "react";
import { Plus, Search, Edit2, Trash2, X, Upload, Star } from "lucide-react";
import Pagination from "@/components/admin/Pagination";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface Product {
  id: number; name: string; price: number; oldPrice: number | null; badge: string;
  image: string; rating: number; reviews: number; stock: number; category: string; description: string;
}

const initialProducts: Product[] = [
  { id: 1, name: "FAN FAVORITES BOX", price: 627, oldPrice: 660, badge: "HYPE DROP", image: "/can1.png", rating: 5, reviews: 48, stock: 120, category: "Curated Box", description: "Our best-selling curated box with 12 cans of Strawberry Vanilla." },
  { id: 2, name: "CHAOS EDITION BOX", price: 750, oldPrice: 783, badge: "RESTOCKED", image: "/can2.png", rating: 4, reviews: 12, stock: 85, category: "Curated Box", description: "12-pack of our wild Ginger Lemon flavor." },
  { id: 3, name: "SUPER COLA DATE EDITION", price: 999, oldPrice: 1000, badge: "-15%", image: "/can1.png", rating: 5, reviews: 32, stock: 45, category: "Singles", description: "Limited edition cola flavor." },
  { id: 4, name: "TROPICAL RUSH SINGLE", price: 199, oldPrice: null, badge: "", image: "/can2.png", rating: 4, reviews: 21, stock: 200, category: "Singles", description: "Single can of tropical paradise." },
  { id: 5, name: "MIDNIGHT BERRY PACK", price: 449, oldPrice: 520, badge: "HYPE DROP", image: "/can1.png", rating: 5, reviews: 67, stock: 60, category: "New Drops", description: "6-pack of our newest berry flavor." },
  { id: 6, name: "CITRUS BLAST COMBO", price: 399, oldPrice: null, badge: "NEW", image: "/can2.png", rating: 4, reviews: 8, stock: 150, category: "New Drops", description: "Fresh citrus combo pack." },
  { id: 7, name: "ENERGY STARTER KIT", price: 349, oldPrice: 399, badge: "SALE", image: "/can1.png", rating: 5, reviews: 15, stock: 90, category: "Curated Box", description: "Perfect starter kit with 4 cans." },
  { id: 8, name: "MEGA PARTY PACK", price: 1499, oldPrice: 1800, badge: "-17%", image: "/can2.png", rating: 5, reviews: 22, stock: 30, category: "Curated Box", description: "24-can party pack for events." },
];

const ITEMS_PER_PAGE = 5;

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: "", price: "", oldPrice: "", badge: "", stock: "", category: "Curated Box", description: "" });

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const openAdd = () => { setEditProduct(null); setForm({ name: "", price: "", oldPrice: "", badge: "", stock: "", category: "Curated Box", description: "" }); setShowModal(true); };
  const openEdit = (p: Product) => { setEditProduct(p); setForm({ name: p.name, price: String(p.price), oldPrice: p.oldPrice ? String(p.oldPrice) : "", badge: p.badge, stock: String(p.stock), category: p.category, description: p.description }); setShowModal(true); };
  const handleSave = () => {
    if (editProduct) { setProducts(prev => prev.map(p => p.id === editProduct.id ? { ...p, name: form.name, price: Number(form.price), oldPrice: form.oldPrice ? Number(form.oldPrice) : null, badge: form.badge, stock: Number(form.stock), category: form.category, description: form.description } : p)); }
    else { setProducts(prev => [...prev, { id: Date.now(), name: form.name, price: Number(form.price), oldPrice: form.oldPrice ? Number(form.oldPrice) : null, badge: form.badge, image: "/can1.png", rating: 0, reviews: 0, stock: Number(form.stock), category: form.category, description: form.description }]); }
    setShowModal(false);
  };
  const handleDelete = (id: number) => { if (confirm("Delete this product?")) setProducts(prev => prev.filter(p => p.id !== id)); };

  return (
    <div className="flex flex-col h-full">
      {/* STATIC HEADER */}
      <div className="shrink-0 space-y-4 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className={`${titleFont.className} text-2xl md:text-3xl uppercase tracking-wide text-[#15161b]`}>Products</h1>
            <p className={`${textFont.className} text-gray-400 text-xs uppercase tracking-wider`}>{filtered.length} total products</p>
          </div>
          <button onClick={openAdd} className={`${textFont.className} bg-[#c25b5e] hover:bg-[#de3e4f] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-lg shadow-[#c25b5e]/20 w-fit`}>
            <Plus size={14} /> Add Product
          </button>
        </div>
        <div className="relative max-w-sm">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search products..." value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
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
                {["Product", "Price", "Stock", "Category", "Rating", "Actions"].map(h => (
                  <th key={h} className={`${textFont.className} text-left px-4 md:px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.map(p => (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                  <td className="px-4 md:px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                        <img src={p.image} alt={p.name} className="h-[130%] w-auto object-contain" />
                      </div>
                      <div className="min-w-0">
                        <p className={`${textFont.className} text-xs md:text-sm font-bold text-[#15161b] uppercase tracking-wide truncate`}>{p.name}</p>
                        {p.badge && <span className={`${textFont.className} inline-block mt-0.5 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${p.badge === "NEW" || p.badge === "RESTOCKED" ? "bg-[#15161b] text-white" : "bg-[#c25b5e] text-white"}`}>{p.badge}</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3">
                    <p className={`${textFont.className} text-sm font-bold text-[#15161b]`}>₹{p.price}</p>
                    {p.oldPrice && <p className={`${textFont.className} text-xs text-gray-400 line-through`}>₹{p.oldPrice}</p>}
                  </td>
                  <td className="px-4 md:px-6 py-3">
                    <span className={`${textFont.className} text-sm font-semibold ${p.stock < 50 ? "text-red-500" : p.stock < 100 ? "text-yellow-600" : "text-green-600"}`}>{p.stock}</span>
                  </td>
                  <td className={`${textFont.className} px-4 md:px-6 py-3 text-xs text-gray-500 uppercase tracking-wider whitespace-nowrap`}>{p.category}</td>
                  <td className="px-4 md:px-6 py-3">
                    <div className="flex items-center gap-1">
                      <Star size={11} className="text-yellow-400 fill-yellow-400" />
                      <span className={`${textFont.className} text-xs font-bold text-[#15161b]`}>{p.rating}</span>
                      <span className={`${textFont.className} text-[10px] text-gray-400`}>({p.reviews})</span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3">
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => openEdit(p)} className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors"><Edit2 size={12} /></button>
                      <button onClick={() => handleDelete(p.id)} className="w-7 h-7 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 flex items-center justify-center transition-colors"><Trash2 size={12} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination currentPage={page} totalPages={totalPages} totalItems={filtered.length} itemsPerPage={ITEMS_PER_PAGE} onPageChange={setPage} />
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
              <h3 className={`${titleFont.className} text-xl uppercase tracking-wide text-[#15161b]`}>{editProduct ? "Edit Product" : "Add Product"}</h3>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#15161b]"><X size={16} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#c25b5e] transition-colors cursor-pointer">
                <Upload size={24} className="mx-auto text-gray-300 mb-1" />
                <p className={`${textFont.className} text-xs text-gray-400 uppercase tracking-wider`}>Drop image or click</p>
              </div>
              <div>
                <label className={`${textFont.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Product Name *</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Fan Favorites Box"
                  className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`${textFont.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Price (₹) *</label>
                  <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="627"
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
                <div>
                  <label className={`${textFont.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Old Price</label>
                  <input type="number" value={form.oldPrice} onChange={e => setForm({ ...form, oldPrice: e.target.value })} placeholder="660"
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`${textFont.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Stock *</label>
                  <input type="number" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} placeholder="120"
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
                <div>
                  <label className={`${textFont.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Category</label>
                  <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                    className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`}>
                    <option>Curated Box</option><option>Singles</option><option>New Drops</option><option>Sale</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={`${textFont.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Badge</label>
                <input type="text" value={form.badge} onChange={e => setForm({ ...form, badge: e.target.value })} placeholder="HYPE DROP, NEW, -15%"
                  className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
              </div>
              <div>
                <label className={`${textFont.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Description</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={2} placeholder="Short description..."
                  className={`${textFont.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-[#15161b] placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl resize-none`} />
              </div>
              <div className="flex gap-3 pt-1">
                <button onClick={() => setShowModal(false)} className={`${textFont.className} flex-1 bg-gray-100 hover:bg-gray-200 text-[#15161b] py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest`}>Cancel</button>
                <button onClick={handleSave} className={`${textFont.className} flex-1 bg-[#c25b5e] hover:bg-[#de3e4f] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#c25b5e]/20`}>{editProduct ? "Save" : "Add"}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
