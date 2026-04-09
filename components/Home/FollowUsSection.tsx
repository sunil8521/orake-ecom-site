const socialTiles = [
  { title: "REGARDING A DELETED POST", subtitle: "Let us explain.", bg: "bg-[#13234f] text-white" },
  { title: "LOVE IPL?", subtitle: "Be ready with match day essentials!", bg: "bg-[#1f4bb8] text-white" },
  { title: "Party Mood", subtitle: "Bold flavors for every vibe.", bg: "bg-[#f4e9d4] text-[#1f1f1f]" },
  { title: "Out of Office", subtitle: "Refresh mode on.", bg: "bg-[#4c331f] text-white" },
  { title: "Mood vs Chill", subtitle: "Find your perfect sip.", bg: "bg-[#172d5a] text-white" },
  { title: "Summer Essentials", subtitle: "Limited seasonal picks.", bg: "bg-[#ffe2cd] text-[#4b1d17]" },
  { title: "Cheers Together", subtitle: "Pass the bottle.", bg: "bg-[#111827] text-white" },
  { title: "Indie Soda Duo", subtitle: "Kala Khatta & Jeera Masala.", bg: "bg-[#f7c785] text-[#2b1f1f]" },
  { title: "Fan Favorites", subtitle: "Top picks this week.", bg: "bg-[#f0e5db] text-[#202020]" },
  { title: "Working + 3Sisters", subtitle: "Sip smart, stay active.", bg: "bg-[#2c0f14] text-[#ffd168]" },
  { title: "Street Buzz", subtitle: "People are talking flavor.", bg: "bg-[#dbe9df] text-[#1e1e1e]" },
  { title: "Campus Tasting", subtitle: "Real reactions, real fun.", bg: "bg-[#e9d5be] text-[#2a2017]" },
];

export default function FollowUsSection() {
  return (
    <section className="bg-[#f3f3f3] py-20 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-tight">
          DO NOT MISS THE FUN - FOLLOW US ON
        </h2>
        <p className="mt-6 text-center text-4xl sm:text-5xl font-black text-black underline underline-offset-8">
          @3sistersdrinks
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {socialTiles.map((tile) => (
            <article
              key={tile.title}
              className={`h-[230px] rounded-2xl p-5 flex flex-col justify-between shadow-sm ${tile.bg}`}
            >
              <h3 className="text-2xl font-black leading-tight">{tile.title}</h3>
              <p className="text-sm font-semibold opacity-90">{tile.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
