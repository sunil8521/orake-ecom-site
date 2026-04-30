import { Sansita } from "next/font/google";

const headingFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });

export default function TaglineBanner() {
  return (
    <section className="relative w-full max-w-[100vw] overflow-hidden bg-white py-6 md:py-10">
      <div className="w-full relative flex justify-center items-center">
        {/* Wavy Banner */}
        {/* Using pure aspect-ratio scaling (w-[300%] on mobile, w-full on desktop) instead of forced dimensions so the text doesn't maliciously distort! */}
        <svg
          className="w-[300%] lg:w-[150%] xl:w-full h-auto flex-shrink-0"
          viewBox="0 0 1000 140"
          style={{ filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.1))' }}
        >
          {/* Golden wavy background */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#c25b5e', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#c25b5e', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#c25b5e', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Main wave path */}
          <path
            d="M 0 40 Q 125 12, 250 40 T 500 40 T 750 40 T 1000 40 L 1000 110 Q 875 130, 750 110 T 500 110 T 250 110 T 0 110 Z"
            fill="url(#waveGradient)"
          />

          {/* Secondary wave accent */}
          <path
            id="taglineFlowPath"
            d="M 0 74 Q 125 56, 250 74 T 500 74 T 750 74 T 1000 74"
            stroke="#c25b5e"
            strokeWidth="2"
            fill="none"
            opacity="0.45"
          />

          {/* Infinite moving text that follows the yellow curve */}
          <text
            dominantBaseline="central"
            alignmentBaseline="middle"
            className={`${headingFont.className} fill-[#ffffff] text-[30px] uppercase tracking-normal`}
          >
            <textPath href="#taglineFlowPath" startOffset="100%">
              WHEREVER YOU ARE  •  ENJOY SOLO  •  SHARE WITH FRIENDS  •  WHEREVER YOU ARE  •  ENJOY SOLO  •  SHARE WITH FRIENDS  •
              <animate
                attributeName="startOffset"
                from="100%"
                to="-100%"
                dur="20s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}
