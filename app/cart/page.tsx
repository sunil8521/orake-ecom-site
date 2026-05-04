import type { Metadata } from "next";
import { getCart } from "@/lib/data/cart";
import CartHero from "@/components/Cart/CartHero";
import CartList from "@/components/Cart/CartList";

export const metadata: Metadata = {
  title: "Your Cart — Orake",
  description: "Review your Orake energy drink selections and checkout.",
};

export default async function CartPage() {
  const res = await getCart();        // ✅ fetch on server, no useEffect
  const items = res?.items ?? [];

  return (
    <div className="min-h-screen bg-white">
      <CartHero itemCount={items.length} />   {/* pure server, no JS */}
      <CartList initialItems={items} />        {/* client for interactivity */}
    </div>
  );
}