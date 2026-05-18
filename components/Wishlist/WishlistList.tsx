"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { textFont } from "@/lib/fonts";
import WishlistCard from "./WishlistCard";
import EmptyWishlist from "./EmptyWishlist";
import { toggleWishlist } from "@/actions/wishlist";
import { toast } from "sonner";
import { useCartWishlistStore } from "@/store/useCartWishlistStore";
import { ProductType } from "@/models/Product"


// Same pattern as CartList — read props directly, no useState.
// revalidatePath in the server action handles the UI update.
export default function WishlistList({ initialItems: items }: { initialItems: ProductType[] }) {
  const { decrementWishlist } = useCartWishlistStore();

  const removeItem = async (productId: string) => {
    decrementWishlist();

    const res = await toggleWishlist(productId);
    if (!res.success) {
      toast.error("Failed to remove item");
    }
    // No need for setState — toggleWishlist calls revalidatePath("/wishlist")
    // which re-runs the server component and passes fresh items as props
  };

  return (
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

        {items.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <WishlistCard key={item._id} item={item} onRemove={() => removeItem(item._id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
