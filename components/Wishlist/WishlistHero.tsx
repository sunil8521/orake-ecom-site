import { titleFont, textFont } from "@/lib/fonts";

interface WishlistHeroProps {
  itemCount: number;
}

export default function WishlistHero({ itemCount }: WishlistHeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#de3e4f]/10 rounded-full blur-[120px] -top-20 -left-20" />
      </div>
      <div className="relative z-10">
        <div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(222,62,79,0.4)]`}>
          {itemCount} Saved Items
        </div>
        <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
          WISHLIST
        </h1>
      </div>
    </div>
  );
}
