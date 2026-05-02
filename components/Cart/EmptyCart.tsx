import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";

export default function EmptyCart() {
  return (
    <div className="text-center py-24">
      <ShoppingBag size={80} className="mx-auto text-gray-200 mb-8" />
      <h2 className={`${titleFont.className} text-3xl text-[#15161b] uppercase mb-4`}>Your cart is empty</h2>
      <p className={`${textFont.className} text-gray-400 text-lg mb-8`}>Looks like you haven&apos;t added any drinks yet.</p>
      <Link href="/products" className={`${textFont.className} inline-flex items-center gap-3 bg-[#15161b] text-white px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-[#c25b5e] transition-all hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)]`}>
        Shop Now <ArrowRight size={20} />
      </Link>
    </div>
  );
}
