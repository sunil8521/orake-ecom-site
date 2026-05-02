import type { Metadata } from "next";
import CartContent from "@/components/Cart/CartContent";

export const metadata: Metadata = {
  title: "Your Cart — Orake",
  description: "Review your Orake energy drink selections and checkout. Free shipping on orders over Rs. 999.",
};

export default function CartPage() {
  return <CartContent />;
}
