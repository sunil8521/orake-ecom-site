"use client";
import { useState } from "react";
import { MessageSquareText, PhoneCall } from "lucide-react";

const faqs = [
  {
    q: "Where is your restaurant located?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    q: "What type of cuisine do you serve?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore..."
  },
  {
    q: "What are your restaurant's opening and closing hours?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    q: "What is your cancellation policy for reservations?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    q: "Do you have any ongoing promotions or discounts?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    q: "What payment methods do you accept?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function Faqs() {
  const [openIdx, setOpenIdx] = useState(1);

  return (
    <section id="faqs" className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#fdf8f4" }}>
      {/* watermark */}
      <div className="absolute top-6 left-0 right-0 text-center font-playfair font-extrabold uppercase text-gray-900 opacity-[0.035] leading-none pointer-events-none select-none whitespace-nowrap text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem]">
        FAQS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 py-4">
          <span className="text-red-600 text-sm flex justify-center gap-0.5">♦♦♦</span>
          <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            FAQS
          </p>
          <h2 className="font-playfair font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Question? <span className="text-red-600">Look here.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Accordion List */}
            <div className="flex-1 space-y-4">
                {faqs.map((faq, idx) => {
                    const isOpen = openIdx === idx;
                    return (
                        <div 
                            key={idx} 
                            onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                            className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 border ${
                                isOpen ? "bg-red-600 text-white border-red-600 shadow-xl shadow-red-600/20" : "bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-md"
                            }`}
                        >
                            <div className="px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
                                <h4 className={`font-medium text-[15px] sm:text-[17px] ${isOpen ? "text-white" : "text-gray-800"}`}>
                                    {faq.q}
                                </h4>
                                <span className={`text-2xl transition-transform duration-300 leading-none ${isOpen ? "rotate-180" : ""}`}>
                                    {isOpen ? "−" : "+"}
                                </span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 px-6 sm:px-8 ${isOpen ? "max-h-[300px] pb-6 sm:pb-8 opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className={isOpen ? "text-white/90 text-sm sm:text-[15px] leading-relaxed font-light" : "text-gray-500 text-sm sm:text-[15px] leading-relaxed font-light"}>
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Contact Blocks */}
            <div className="w-full lg:w-[380px] shrink-0 space-y-6">
                
                {/* Dark Contact Card */}
                <div className="bg-[#1c1c1c] rounded-3xl p-10 py-14 text-center relative overflow-hidden text-white flex flex-col items-center shadow-xl">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 bg-[url('https://placehold.co/400x400/1c1c1c/222222.png?text=Pattern')] opacity-50 mix-blend-overlay"></div>
                    
                    <div className="relative z-10 w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-black/50">
                        <MessageSquareText className="text-red-600 w-8 h-8" />
                        <div className="absolute top-0 right-1 w-4 h-4 bg-red-600 rounded-full border-[3px] border-white"></div>
                    </div>
                    
                    <h3 className="relative z-10 font-playfair text-2xl mb-4 text-white font-bold">You have different questions?</h3>
                    <p className="relative z-10 text-gray-400 text-sm mb-10 leading-relaxed font-light">
                        Our team will answer all your questions.<br/>We ensure a quick response.
                    </p>
                    <a href="#contact" className="relative z-10 bg-red-600 text-white px-9 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                        Contact Us
                    </a>
                </div>

                {/* Light Phone Card */}
                <div className="bg-white rounded-[2rem] p-8 flex items-center gap-6 shadow-xl border border-gray-100">
                    <div className="w-16 h-16 bg-[#fdf8f4] rounded-full flex items-center justify-center shrink-0">
                        <PhoneCall className="text-red-600 w-7 h-7" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-[11px] font-bold mb-1.5 uppercase tracking-widest">Your Comfort, Our Priority</p>
                        <p className="font-playfair text-2xl font-bold text-gray-900 mb-1">24/7 Service</p>
                        <p className="text-gray-500 text-sm">(000) 000-0000</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
