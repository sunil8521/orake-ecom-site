import type { Metadata } from "next";
import WishlistHero from "@/components/Wishlist/WishlistHero";
import WishlistList from "@/components/Wishlist/WishlistList";
import { getWishlist } from "@/lib/data/wishlist";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Wishlist — Orake",
  description: "Your saved Orake energy drink favorites. Save products and add them to cart when ready.",
};


async function WishlistContent() {
  const data = await getWishlist();
  return (
    <>
      <WishlistHero itemCount={data.items.length} />
      <WishlistList initialItems={data.items} />
    </>
  );
}

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <WishlistContent />
      </Suspense>
    </div>
  );
}
