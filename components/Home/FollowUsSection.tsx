import Image from "next/image";

export default function FollowUsSection() {
  return (
    <section className="bg-[#f3f3f3] py-20 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-tight">
          DISCOVER OUR FEATURED DRINKS
        </h2>
        <p className="mt-6 text-center text-3xl sm:text-4xl font-bold text-[#2b0a14] underline underline-offset-8">
          @3Mydrinks - Taste the Difference
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {Array.from({ length: 12 }).map((_, idx) => {
            const images = [
              "https://images.unsplash.com/photo-1553190250-110d63ee4c7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1653777712017-c1728c343027?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1632000781988-f2894640cdd7?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1713474839506-1e75e2c21024?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1775634137310-9a3ea503c34c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1622372923862-a2d96330dd96?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1622372923877-9e87a948f7ca?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1714668105787-e439be86da08?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1622372923877-9e87a948f7ca?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1755013306890-dd8517d75eeb?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1668422539118-01a992da0edd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1663228903416-f851e20f1974?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ];
            let name, tagline, img;
            if (idx % 4 === 0) {
              name = "Energy Blast";
              tagline = "Unleash your energy with every sip.";
            } else if (idx % 4 === 1) {
              name = "Tropical Zest";
              tagline = "A refreshing burst of tropical flavors.";
            } else if (idx % 4 === 2) {
              name = "Berry Rush";
              tagline = "Sweet, tangy, and irresistibly bold.";
            } else {
              name = "Smart Fizz";
              tagline = "Boost your mind, refresh your day.";
            }
            img = images[idx % images.length];
            return (
              <article
                key={"can-image-" + idx}
                className="h-[260px] rounded-2xl overflow-hidden shadow-sm bg-white relative flex items-end"
              >
                <Image src={img} alt="Can" fill priority sizes="(max-width: 768px) 100vw, 33vw" style={{objectFit: 'cover'}} className="object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 flex flex-col">
                  <span className="font-bold text-lg">{name}</span>
                  <span className="text-xs opacity-90">{tagline}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
