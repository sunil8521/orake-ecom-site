import { Anton } from "next/font/google";

const headingFont = Anton({ subsets: ["latin"], weight: "400" });

export default function TaglineBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-white to-gray-50 py-6">
      <div className="max-w-full mx-auto relative">
        {/* Wavy Banner */}
        <svg
          className="w-full h-auto"
          viewBox="0 0 1000 140"
          preserveAspectRatio="none"
          style={{ filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.1))' }}
        >
          {/* Golden wavy background */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#F4D35E', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#EBB839', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F4D35E', stopOpacity: 1 }} />
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
            stroke="#E8C547"
            strokeWidth="2"
            fill="none"
            opacity="0.45"
          />

          {/* Infinite moving text that follows the yellow curve */}
          <text
            dominantBaseline="central"
            alignmentBaseline="middle"
            className={`${headingFont.className} fill-[#111111] text-[30px] uppercase tracking-[0.12em]`}
          >
            <textPath href="#taglineFlowPath" startOffset="100%">
              WHEREVER YOU ARE  •  ENJOY SOLO  •  SHARE WITH FRIENDS  •  WHEREVER YOU ARE  •  ENJOY SOLO  •  SHARE WITH FRIENDS  •
              <animate
                attributeName="startOffset"
                from="100%"
                to="-100%"
                dur="16s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}
