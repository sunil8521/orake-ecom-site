import Image from "next/image";
import { Sansita, DM_Sans } from "next/font/google";

const headingFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const products = [
  {
    name: "Ruby Berry Sparkle",
    note: "Fruity, crisp, and perfect for brunches.",
    image:
      "https://images.unsplash.com/photo-1700893417216-44e85c0a77d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Golden Citrus Fizz",
    note: "Bright citrus layers with a smooth finish.",
    image:
      "https://images.unsplash.com/photo-1700893417216-47933d90bde8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Velvet Grape Blend",
    note: "Rich grape notes crafted for evening moments.",
    image:
      "https://images.unsplash.com/photo-1700893417226-e48266b94b48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProductPageSection() {
  return (
    <section className="bg-linear-to-b from-[#5a1730] to-[#4a1328] pb-20 text-[#fff7ea]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-16">
        {products.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-3xl border border-[#f2d7a0]/35 bg-[#611b32]/55 shadow-[0_20px_45px_rgba(0,0,0,0.3)] backdrop-blur-sm"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-3 p-5">
              <h2 className={`${headingFont.className} text-3xl uppercase leading-none tracking-[0.02em] text-[#fff2dc]`}>
                {product.name}
              </h2>
              <p className={`${bodyFont.className} text-lg font-medium leading-tight text-[#f4d7a0]`}>{product.note}</p>
              <button
                className={`${bodyFont.className} rounded-full bg-[#f6efe2] px-5 py-2 text-base font-semibold text-[#3a0f1d] transition hover:bg-[#fff7ea]`}
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
