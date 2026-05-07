import { titleFont, textFont } from "@/lib/fonts";

export default function CartHero({ itemCount }: { itemCount: number }) {
  return (
    <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-24 pb-10 sm:pt-32 sm:pb-14 md:pt-40 md:pb-20 px-4 sm:px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
      </div>
      <div className="relative z-10">
        <div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-4 py-1 sm:px-5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6 shadow-[0_0_20px_rgba(194,91,94,0.4)]`}>
          {itemCount} {itemCount === 1 ? "Item" : "Items"}
        </div>
        <h1 className={`${titleFont.className} text-3xl sm:text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
          YOUR CART
        </h1>
      </div>
    </div>
  );
}