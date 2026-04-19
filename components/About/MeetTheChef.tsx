"use client";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X icon
import { motion } from "framer-motion";

const chefs = [
  {
    name: "Leslie Alexander",
    title: "Executive Chef",
    image: "https://images.unsplash.com/photo-1674469293966-2f4595497296?q=80&w=733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Robert Fox",
    title: "Sous Chef",
    image: "https://images.unsplash.com/photo-1638891204491-eccf2e5bdca9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Esther Howard",
    title: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1652256128119-9bc6fd8bd0b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function MeetTheChef() {
  return (
    <section id="chefs" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* watermark */}
      <div className="absolute top-6 left-0 right-0 text-center font-playfair font-extrabold uppercase text-gray-900 opacity-[0.025] leading-none pointer-events-none select-none whitespace-nowrap text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
        MEET THE CHEF
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 py-4"
        >
          <span className="text-red-600 text-sm flex justify-center gap-0.5">♦♦♦</span>
          <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            MEET THE CHEF
          </p>
          <h2 className="font-playfair font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            <span className="text-red-600">The Master</span> Behind the Menu
          </h2>
        </motion.div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-10 overflow-hidden pb-14">
          {chefs.map((chef, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: idx * 0.2, type: "spring", bounce: 0.3 }}
               className="group flex flex-col items-center"
             >
                 {/* Image Container with precise morphing */}
                 <div className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden rounded-[2rem] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rounded-t-[170px] shadow-md group-hover:shadow-2xl transform group-hover:-translate-y-2 mx-auto">
                     <img src={chef.image} alt={chef.name} className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110" />
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-end justify-center pb-8 border border-white/0 group-hover:border-white/10 rounded-[inherit]">
                         <div className="flex gap-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100">
                             <a href="#" className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-300 shadow-xl">
                                 <FaFacebookF size={15} />
                             </a>
                             <a href="#" className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-300 shadow-xl">
                                 <FaXTwitter size={15} />
                             </a>
                             <a href="#" className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-300 shadow-xl">
                                 <FaPinterestP size={15} />
                             </a>
                             <a href="#" className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-300 shadow-xl">
                                 <FaInstagram size={16} />
                             </a>
                         </div>
                     </div>
                 </div>
                 
                 {/* Chef Info */}
                 <div className="text-center mt-7 transition-transform duration-500 group-hover:translate-y-1">
                     <h3 className="font-playfair text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{chef.name}</h3>
                     <p className="text-red-500 font-medium text-[14px] mt-1.5 transition-colors duration-300">{chef.title}</p>
                 </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
