import CheckoutForm from "@/components/Checkout/CheckoutForm";
import type { Metadata } from "next";
import { getCart } from "@/lib/data/cart";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Checkout | Orake Energy",
  description: "Securely complete your purchase.",
};

export default async function CheckoutPage() {
  const reqHeaders = await headers();
  const session = await auth.api.getSession({ headers: reqHeaders });
  const cartData = await getCart();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Small top header space since header is fixed usually */}
      <div className="h-20 bg-[#15161b]"></div>
      <CheckoutForm initialCartItems={cartData?.items || []} user={session?.user || null} />
    </div>
  );
}
