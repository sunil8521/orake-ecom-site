import Link from "next/link";
import { bodyFont } from "@/lib/fonts";

interface BreadcrumbProps {
  productName: string;
}

export default function Breadcrumb({ productName }: BreadcrumbProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4">
      <div className={`${bodyFont.className} flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400`}>
        <Link href="/" className="hover:text-[#15161b] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#15161b] transition-colors">Products</Link>
        <span>/</span>
        <span className="text-[#15161b]">{productName}</span>
      </div>
    </div>
  );
}
