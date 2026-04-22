import { Anton, Oswald } from "next/font/google";
import Link from "next/link";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const policies = [
  {
    id: "refund",
    title: "Refund Policy",
    icon: "↩",
    sections: [
      {
        heading: "Damaged or Wrong Product",
        content: "If your order arrives damaged, leaking, or incorrect, contact us within 48 hours of delivery with a photo. We will send a replacement or issue a full refund — no return required."
      },
      {
        heading: "Change of Mind",
        content: "Since ORAKE is a consumable food product, we do not accept returns or issue refunds for change of mind once the order has been delivered."
      },
      {
        heading: "Refund Timeline",
        content: "Approved refunds are processed within 5–7 business days to your original payment method."
      },
      {
        heading: "Contact Us",
        content: "Email us at support@orake.in with your order number and issue details."
      }
    ]
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    icon: "✕",
    sections: [
      {
        heading: "Before Shipment",
        content: "You can cancel your order within 12 hours of placing it, provided it has not yet been shipped. Write to us at support@orake.in with your order number."
      },
      {
        heading: "After Shipment",
        content: "Once the order is dispatched, cancellation is not possible. If the product arrives damaged, please refer to our Refund Policy."
      },
      {
        heading: "Subscription / Repeat Orders",
        content: "Subscriptions can be cancelled anytime before the next billing cycle. Cancellations made after billing will apply from the following cycle."
      }
    ]
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    icon: "§",
    sections: [
      {
        heading: "Use of Website",
        content: "By accessing orake.in, you agree to use the site for lawful purposes only. You may not misuse, copy, or redistribute any content without written permission."
      },
      {
        heading: "Product Information",
        content: "All product descriptions, nutritional claims, and images are for informational purposes. ORAKE products are food/beverages and are not intended to diagnose or treat any medical condition."
      },
      {
        heading: "Orders & Pricing",
        content: "ORAKE reserves the right to update prices at any time. Orders are confirmed only after payment is received. We reserve the right to cancel orders in case of pricing errors or stock issues."
      },
      {
        heading: "Intellectual Property",
        content: "All brand assets, logos, and content on this website are the property of ORAKE. Unauthorized use is strictly prohibited."
      },
      {
        heading: "Limitation of Liability",
        content: "ORAKE is not liable for any indirect or incidental losses arising from the use of our products or website, beyond the value of the original purchase."
      },
      {
        heading: "Governing Law",
        content: "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Bhubaneswar, Odisha, India."
      }
    ]
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    icon: "🚚",
    sections: [
      {
        heading: "Processing Time",
        content: "Orders are processed within 1–2 business days after payment confirmation."
      },
      {
        heading: "Delivery Time",
        content: "Within Odisha: 2–4 business days. Rest of India: 4–7 business days."
      },
      {
        heading: "Shipping Charges",
        content: "Shipping is free on orders above Rs. 999. A flat shipping fee of Rs. 99 applies on smaller orders."
      },
      {
        heading: "Order Tracking",
        content: "A tracking link will be shared via SMS/email once your order is dispatched."
      },
      {
        heading: "Failed Delivery",
        content: "If a delivery attempt fails due to a wrong address or unavailability, the package may be returned. Re-shipping charges will apply."
      },
      {
        heading: "Currently Shipping",
        content: "We currently ship across India. International shipping is not available yet."
      }
    ]
  }
];

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
          <div className="absolute w-72 h-72 bg-[#dbba53]/8 rounded-full blur-[100px] bottom-0 left-1/4" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(194,91,94,0.4)]`}>
            Legal
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-none mb-4`}>
            POLICIES
          </h1>
          <p className={`${textFont.className} text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase max-w-lg mx-auto`}>
            Transparency is our vibe. Read our policies below.
          </p>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-4 flex flex-wrap gap-2 md:gap-3 justify-center">
          {policies.map(p => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className={`${textFont.className} px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border-2 border-gray-200 text-gray-500 hover:border-[#15161b] hover:text-[#15161b] hover:bg-gray-50 transition-all`}
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 py-16 md:py-24 space-y-20 md:space-y-28">
        {policies.map((policy, pIdx) => (
          <section key={policy.id} id={policy.id} className="scroll-mt-32">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b-2 border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl border border-gray-100 shrink-0">
                {policy.icon}
              </div>
              <div>
                <span className={`${textFont.className} text-[#c25b5e] text-xs font-bold uppercase tracking-[0.3em] block mb-1`}>
                  Section {pIdx + 1}
                </span>
                <h2 className={`${titleFont.className} text-3xl md:text-4xl uppercase tracking-wide text-[#15161b]`}>
                  {policy.title}
                </h2>
              </div>
            </div>

            {/* Subsections */}
            <div className="space-y-8">
              {policy.sections.map((section, sIdx) => (
                <div key={sIdx} className="group">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`${textFont.className} w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#c25b5e] group-hover:text-white flex items-center justify-center text-xs font-bold text-gray-400 transition-colors`}>
                        {sIdx + 1}
                      </div>
                      {sIdx < policy.sections.length - 1 && (
                        <div className="w-px flex-1 bg-gray-100 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className={`${textFont.className} text-xl font-bold text-[#15161b] uppercase tracking-wide mb-2 group-hover:text-[#c25b5e] transition-colors`}>
                        {section.heading}
                      </h3>
                      <p className={`${textFont.className} text-gray-500 text-[1.05rem] leading-relaxed font-light`}>
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div className="text-center pt-10 pb-4 border-t-2 border-gray-100">
          <p className={`${textFont.className} text-gray-400 text-lg mb-2`}>
            Still have questions?
          </p>
          <Link href="/contact" className={`${textFont.className} inline-flex items-center gap-3 bg-[#15161b] hover:bg-[#c25b5e] text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)] active:scale-[0.98]`}>
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
