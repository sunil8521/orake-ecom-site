"use client";
import { useState, useTransition, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Plus, Search, Edit2, Trash2, X, Star, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { adminTitleFont as tf, adminTextFont as tx } from "@/lib/fonts";
import { createProduct, updateProduct, deleteProduct } from "@/actions/admin-products";
import type { AdminProduct } from "@/lib/data/admin-products";
import { useDebounce } from "@/hooks/useDebounce";
import { useForm } from "react-hook-form";
import { useAdminProductStore } from "@/store/useAdminProductStore";

type ProductForm = { name: string; description: string; price: string; oldPrice: string; discount: string; stock: string; size: string; image: string; isFeatured: boolean; };

const emptyForm: ProductForm = { name: "", description: "", price: "", oldPrice: "", discount: "", stock: "", size: "250ML", image: "/can1.png", isFeatured: false };

function Pagination({ page, totalPages, total, onPage }: { page: number; totalPages: number; total: number; onPage: (p: number) => void }) {
  if (totalPages <= 1) return null;
  return (
    <div className={`${tx.className} flex items-center justify-between px-5 py-3 border-t border-gray-100`}>
      <span className="text-xs text-gray-400">{total} product{total !== 1 ? "s" : ""}</span>
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onPage(page - 1)} disabled={page <= 1} className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"><ChevronLeft size={14} /></button>
        <span className="text-xs font-semibold text-gray-600 px-2">{page} / {totalPages}</span>
        <button type="button" onClick={() => onPage(page + 1)} disabled={page >= totalPages} className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"><ChevronRight size={14} /></button>
      </div>
    </div>
  );
}

export default function AdminProductsClient({
  initialProducts,
  total,
  totalPages,
  currentPage,
  currentSearch
}: {
  initialProducts: AdminProduct[];
  total: number;
  totalPages: number;
  currentPage: number;
  currentSearch: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [optimisticProducts, setOptimisticProducts] = useState<AdminProduct[]>(initialProducts);
  
  const [searchValue, setSearchValue] = useState(currentSearch);
  const debouncedSearch = useDebounce(searchValue, 350);

  const { isModalOpen, editProduct, openModal, closeModal } = useAdminProductStore();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductForm>({
    defaultValues: emptyForm
  });

  useEffect(() => {
    if (isModalOpen) {
      if (editProduct) {
        reset({
          name: editProduct.name,
          description: editProduct.description,
          price: String(editProduct.price),
          oldPrice: editProduct.oldPrice ? String(editProduct.oldPrice) : "",
          discount: editProduct.discount ? String(editProduct.discount) : "",
          stock: String(editProduct.stock),
          size: editProduct.size || "250ML",
          image: editProduct.image,
          isFeatured: editProduct.isFeatured || false,
        });
      } else {
        reset(emptyForm);
      }
    }
  }, [isModalOpen, editProduct, reset]);

  useEffect(() => {
    setOptimisticProducts(initialProducts);
  }, [initialProducts]);

  useEffect(() => {
    if (debouncedSearch !== currentSearch) {
      updateURL({ search: debouncedSearch, page: 1 });
    }
  }, [debouncedSearch]);

  const updateURL = (updates: Record<string, string | number | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    let hasChanges = false;
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        if (params.has(key)) { params.delete(key); hasChanges = true; }
      } else {
        if (params.get(key) !== String(value)) { params.set(key, String(value)); hasChanges = true; }
      }
    });

    if (hasChanges) {
      startTransition(() => {
        router.push(`?${params.toString()}`);
      });
    }
  };

  const onSubmit = (form: ProductForm) => {
    startTransition(async () => {
      const data = { 
        name: form.name, 
        description: form.description, 
        price: Number(form.price), 
        oldPrice: form.oldPrice ? Number(form.oldPrice) : undefined, 
        discount: form.discount ? Number(form.discount) : undefined, 
        stock: Number(form.stock), 
        size: form.size, 
        image: form.image, 
        isFeatured: form.isFeatured 
      };
      
      if (editProduct) {
        await updateProduct(editProduct._id, data);
      } else {
        await createProduct(data);
      }
      
      closeModal();
      router.refresh(); 
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this product?")) return;
    
    setOptimisticProducts(prev => prev.filter(p => p._id !== id));

    startTransition(async () => { 
      await deleteProduct(id); 
      router.refresh(); 
    });
  };

  return (
    <div className="flex flex-col h-full gap-4">
      {/* HEADER */}
      <div className="shrink-0 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className={`${tf.className} text-2xl md:text-3xl uppercase tracking-wide text-[#15161b]`}>Products</h1>
            <p className={`${tx.className} text-gray-400 text-xs uppercase tracking-wider mt-0.5`}>
              {isPending ? "Updating…" : `${total} product${total !== 1 ? "s" : ""}`}
            </p>
          </div>
          <button onClick={() => openModal()} className={`${tx.className} bg-[#c25b5e] hover:bg-[#de3e4f] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#c25b5e]/20 w-fit transition-colors`}>
            <Plus size={14} /> Add Product
          </button>
        </div>
        <div className="relative max-w-sm">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search products…" value={searchValue} onChange={e => setSearchValue(e.target.value)}
            className={`${tx.className} w-full bg-white border border-gray-200 pl-9 pr-8 py-2 rounded-xl text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:outline-none`} />
          {searchValue && <button onClick={() => setSearchValue("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"><X size={12} /></button>}
        </div>
      </div>

      {/* TABLE */}
      <div className={`flex-1 min-h-0 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden transition-opacity ${isPending ? 'opacity-60' : 'opacity-100'}`}>
        <div className="flex-1 overflow-y-auto overflow-x-auto">
          {optimisticProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-2">
              <p className={`${tx.className} text-sm text-gray-400`}>{currentSearch ? "No products match your search" : "No products yet"}</p>
              {!currentSearch && <button onClick={() => openModal()} className={`${tx.className} text-xs text-[#c25b5e] underline`}>Add first product</button>}
            </div>
          ) : (
            <table className="w-full min-w-[580px]">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gray-50/90 backdrop-blur-sm border-b border-gray-100">
                  {["Product", "Price", "Stock", "Size", "Reviews", "Actions"].map(h => (
                    <th key={h} className={`${tx.className} text-left px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {optimisticProducts.map(p => (
                  <tr key={p._id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                          <img src={p.image} alt={p.name} className="h-[130%] w-auto object-contain" />
                        </div>
                        <div className="min-w-0">
                          <p className={`${tx.className} text-xs md:text-sm font-bold text-[#15161b] uppercase tracking-wide truncate max-w-[140px]`}>{p.name}</p>
                          {p.isFeatured && <span className={`${tx.className} inline-block mt-0.5 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#dbba53] text-[#15161b]`}>Featured</span>}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <p className={`${tx.className} text-sm font-bold text-[#15161b]`}>₹{p.price}</p>
                      {p.oldPrice && <p className={`${tx.className} text-xs text-gray-400 line-through`}>₹{p.oldPrice}</p>}
                    </td>
                    <td className="px-5 py-3">
                      <span className={`${tx.className} text-sm font-semibold ${p.stock < 20 ? "text-red-500" : p.stock < 50 ? "text-yellow-600" : "text-green-600"}`}>{p.stock}</span>
                    </td>
                    <td className={`${tx.className} px-5 py-3 text-xs text-gray-500 uppercase tracking-wider`}>{p.size}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1">
                        <Star size={11} className="text-yellow-400 fill-yellow-400" />
                        <span className={`${tx.className} text-[10px] text-gray-400`}>({p.numReviews})</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => openModal(p)} className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors"><Edit2 size={12} /></button>
                        <button onClick={() => handleDelete(p._id)} disabled={isPending} className="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 flex items-center justify-center transition-colors disabled:opacity-50"><Trash2 size={12} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <Pagination page={currentPage} totalPages={totalPages} total={total} onPage={(p) => updateURL({ page: p })} />
      </div>

      {/* ADD/EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
              <h3 className={`${tf.className} text-xl uppercase tracking-wide text-[#15161b]`}>{editProduct ? "Edit Product" : "Add Product"}</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#15161b]"><X size={16} /></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              
              {/* Basic Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Product Name *</label>
                  <input type="text" {...register("name", { required: true })} placeholder="e.g. Fan Favorites Box"
                    className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
                <div className="col-span-2">
                  <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Image URL *</label>
                  <input type="text" {...register("image", { required: true })} placeholder="/can1.png"
                    className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
              </div>

              <div>
                <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Description *</label>
                <textarea {...register("description", { required: true })} rows={2} placeholder="Short description…"
                  className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl resize-none`} />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Size *</label>
                  <input type="text" {...register("size", { required: true })} placeholder="e.g. 250ML"
                    className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
                <div>
                  <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Price (₹) *</label>
                  <input type="number" {...register("price", { required: true })} placeholder="627"
                    className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
                <div>
                  <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Old Price (₹)</label>
                  <input type="number" {...register("oldPrice")} placeholder="660"
                    className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
                <div>
                  <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Discount (%)</label>
                  <input type="number" {...register("discount")} placeholder="10"
                    className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
                <div>
                  <label className={`${tx.className} block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5`}>Stock *</label>
                  <input type="number" {...register("stock", { required: true })} placeholder="120"
                    className={`${tx.className} w-full border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm placeholder-gray-400 focus:border-[#c25b5e] focus:bg-white focus:outline-none rounded-xl`} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="isFeatured" {...register("isFeatured")} className="w-4 h-4 accent-[#c25b5e]" />
                <label htmlFor="isFeatured" className={`${tx.className} text-sm text-gray-600 font-medium cursor-pointer`}>Mark as Featured Product</label>
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={closeModal} className={`${tx.className} flex-1 bg-gray-100 hover:bg-gray-200 text-[#15161b] py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest`}>Cancel</button>
                <button type="submit" disabled={isPending}
                  className={`${tx.className} flex-1 flex items-center justify-center gap-2 bg-[#c25b5e] hover:bg-[#de3e4f] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#c25b5e]/20 disabled:opacity-50 disabled:cursor-not-allowed`}>
                  {isPending ? <><Loader2 size={13} className="animate-spin" /> Saving…</> : editProduct ? "Save Changes" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
