import type { Metadata } from "next";
import WishlistContent from "@/components/Wishlist/WishlistContent";

export const metadata: Metadata = {
  title: "Wishlist — Orake",
  description: "Your saved Orake energy drink favorites. Save products and add them to cart when ready.",
};

export default function WishlistPage() {
  return <WishlistContent />;
}
