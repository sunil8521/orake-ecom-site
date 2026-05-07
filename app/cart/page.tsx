import type { Metadata } from "next";
import { getCart } from "@/lib/data/cart";
import CartHero from "@/components/Cart/CartHero";
import CartList from "@/components/Cart/CartList";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Your Cart — Orake",
  description: "Review your Orake energy drink selections and checkout.",
};

async function CartContent() {
  const res = await getCart();
  const items = res?.items ?? [];
  return (
    <>
      <CartHero itemCount={items.length} />
      <CartList initialItems={items} />
    </>
  );
}

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <CartContent />
      </Suspense>
    </div>
  );
}