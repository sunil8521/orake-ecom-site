import CheckoutForm from "@/components/Checkout/CheckoutForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Orake Energy",
  description: "Securely complete your purchase.",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Small top header space since header is fixed usually */}
      <div className="h-20 bg-[#15161b]"></div>
      <CheckoutForm />
    </div>
  );
}
