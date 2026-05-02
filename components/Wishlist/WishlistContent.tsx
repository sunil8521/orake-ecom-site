"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import WishlistCard from "./WishlistCard";
import EmptyWishlist from "./EmptyWishlist";
import { getWishlist, toggleWishlist } from "@/actions/wishlist";
import { useSession } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface WishItem {
  id: string;
  name: string;
  flavor: string;
  price: number;
  oldPrice: number | null;
  image: string;
  inStock: boolean;
}

export default function WishlistContent() {
  const [items, setItems] = useState<WishItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    async function loadWishlist() {
      if (!session?.user) {
        setItems([]);
        setLoading(false);
        return;
      }
      try {
        const res = await getWishlist();
        setItems(res?.items || []);
      } catch (error) {
        console.error("Failed to load wishlist", error);
      } finally {
        setLoading(false);
      }
    }
    loadWishlist();
  }, [session?.user]);

  const removeItem = async (id: string) => {
    const previousItems = [...items];
    setItems(prev => prev.filter(item => item.id !== id));
    
    const res = await toggleWishlist(id);
    if (!res.success) {
      toast.error("Failed to remove item");
      setItems(previousItems);
    } else {
      toast.success("Item removed from wishlist");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#de3e4f]/10 rounded-full blur-[120px] -top-20 -left-20" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(222,62,79,0.4)]`}>
            {items.length} Saved Items
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
            WISHLIST
          </h1>
        </div>
      </div>

      {/* White Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Top bar */}
          {items.length > 0 && (
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
              <p className={`${textFont.className} text-gray-400 text-sm tracking-widest uppercase`}>{items.length} Products</p>
              <Link href="/products" className={`${textFont.className} inline-flex items-center gap-2 text-[#c25b5e] hover:text-[#15161b] text-sm font-bold uppercase tracking-widest transition-colors`}>
                Continue Shopping <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {loading ? (
             <div className="flex justify-center items-center py-20 min-h-[300px]">
                <Loader2 size={40} className="animate-spin text-[#c25b5e]" />
             </div>
          ) : items.length === 0 ? (
            <EmptyWishlist />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map(item => (
                <WishlistCard key={item.id} item={item} onRemove={removeItem} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
