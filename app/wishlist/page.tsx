import type { Metadata } from "next";
import WishlistHero from "@/components/Wishlist/WishlistHero";
import WishlistList from "@/components/Wishlist/WishlistList";
import { getWishlist } from "@/lib/data/wishlist";

export const metadata: Metadata = {
  title: "Wishlist — Orake",
  description: "Your saved Orake energy drink favorites. Save products and add them to cart when ready.",
};

export default async function WishlistPage() {
  const data = await getWishlist();
  
  return (
    <div className="min-h-screen bg-white">
      <WishlistHero itemCount={data.items.length} />
      <WishlistList initialItems={data.items} />
    </div>
  );
}
