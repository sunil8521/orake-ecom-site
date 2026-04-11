'use client';

const privacySections = [
  {
    title: "1. Information They Collect",
    paragraphs: [
      "SwiftRise collects personal and usage data to operate and improve the platform.",
    ],
    bullets: [
      "Personal Information: Name, email, phone number, and any details you provide",
      "Usage Data: Device info, IP address, and how you use the app",
    ],
  },
  {
    title: "2. How They Use Your Information",
    paragraphs: ["SwiftRise uses your information for the following purposes:"],
    bullets: [
      "To operate and maintain the platform",
      "To improve and personalize services",
      "To communicate (support, updates, alerts)",
      "To analyze usage and trends",
    ],
  },
  {
    title: "3. Sharing of Information",
    paragraphs: ["Your data may be shared in the following circumstances:"],
    bullets: [
      "With your consent",
      "With service providers (for operations)",
      "For legal obligations",
      "During mergers or business transfers",
    ],
  } 
];

export default function PrivacyPolicySection() {
  return (
    <>
      <section id="privacy-policy" className="relative bg-[#113f67] scroll-mt-28 py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,transparent_70%)]" />
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute -right-28 bottom-24 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />

          

          <svg className="absolute -bottom-12 right-10 h-72 w-72 opacity-30" fill="none" viewBox="0 0 200 200">
            <line x1="14" y1="22" x2="178" y2="182" stroke="currentColor" className="text-blue-200" strokeWidth="1" />
            <line x1="178" y1="22" x2="14" y2="182" stroke="currentColor" className="text-cyan-200" strokeWidth="1" />
            <line x1="30" y1="20" x2="194" y2="180" stroke="currentColor" className="text-blue-100" strokeWidth="1" />
            <line x1="194" y1="20" x2="30" y2="180" stroke="currentColor" className="text-cyan-100" strokeWidth="1" />
            <line x1="8" y1="100" x2="198" y2="100" stroke="currentColor" className="text-blue-200" strokeWidth="1" />
          </svg>

          <svg className="absolute inset-0 h-full w-full opacity-10" preserveAspectRatio="none" viewBox="0 0 1200 800">
            <path d="M0 140 L160 110 L320 150 L480 120 L640 165 L800 130 L960 170 L1120 140 L1200 155" stroke="currentColor" className="text-white" strokeWidth="1" fill="none" />
            <path d="M0 390 L180 350 L360 410 L540 365 L720 430 L900 380 L1080 445 L1200 410" stroke="currentColor" className="text-cyan-100" strokeWidth="1" fill="none" />
            <path d="M0 660 L170 620 L340 680 L510 640 L680 700 L850 660 L1020 720 L1200 685" stroke="currentColor" className="text-blue-100" strokeWidth="1" fill="none" />
          </svg>

          <div className="absolute right-24 top-32 h-3 w-3 rounded-full bg-cyan-200/40" />
          <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-blue-200/40" />
          <div className="absolute bottom-24 left-20 h-4 w-4 rounded-full bg-white/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="sticky top-4 z-30 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm backdrop-blur md:p-8">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-blue-700">
              Legal Policy
            </span>
            <h1 className="mt-3 font-(--font-playfair-display) text-3xl leading-tight text-slate-900 md:text-5xl">
              SwiftRise Privacy Policy
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              We are committed to protecting your privacy. This policy describes what information we collect,
              how we use it, and the rights you have when using SwiftRise.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Effective Date: April 5, 2026
            </p>
          </header>

          <div className="relative z-10 mt-10 overflow-x-auto">
            <div className="flex flex-row gap-6 min-w-[700px] pb-4">
              {privacySections.map((section, idx) => (
                <div
                  key={section.title}
                  className={`min-w-[320px] max-w-xs flex-shrink-0 flex flex-col items-center justify-center py-10 px-4 rounded-3xl shadow-xl overflow-hidden ${idx % 3 === 0 ? 'bg-[#ce777b]' : idx % 3 === 1 ? 'bg-[#d7b452]' : 'bg-[#113f67]'} transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lg font-extrabold text-[#113f67] shadow-lg">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-md">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-3 text-base text-white/90 md:text-lg">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed">{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-2 pt-2">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
