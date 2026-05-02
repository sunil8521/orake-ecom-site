import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";

export default function EmptyWishlist() {
  return (
    <div className="text-center py-24">
      <Heart size={80} className="mx-auto text-gray-200 mb-8" />
      <h2 className={`${titleFont.className} text-3xl text-[#15161b] uppercase mb-4`}>Your wishlist is empty</h2>
      <p className={`${textFont.className} text-gray-400 text-lg mb-8`}>Save your favorite drinks for later.</p>
      <Link href="/products" className={`${textFont.className} inline-flex items-center gap-3 bg-[#15161b] text-white px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-[#c25b5e] transition-all hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)]`}>
        Browse Products <ArrowRight size={20} />
      </Link>
    </div>
  );
}
