"use client";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  tag: string;
  tagColor: string;
  image: string;
}

const startersData: MenuItem[] = [
  { name: "Spicy Potato Wedges", price: "$11", description: "Lorem ipsum dolor sit amet", tag: "NEW", tagColor: "text-white border-white", image: "/can1.png" },
  { name: "Vegetable Spring Rolls", price: "$12", description: "Lorem ipsum dolor sit amet", tag: "POPULAR", tagColor: "text-white border-white", image: "/can2.png" },
  { name: "Garlic Bread with Cheese", price: "$10", description: "Lorem ipsum dolor sit amet", tag: "NEW", tagColor: "text-white border-white", image: "/can1.png" },
  { name: "Greek Feta Salad", price: "$7", description: "Lorem ipsum dolor sit amet", tag: "TRENDING", tagColor: "text-white border-white", image: "/can2.png" },
  { name: "Mozzarella Sticks", price: "$15", description: "Lorem ipsum dolor sit amet", tag: "CHEF'S SPECIAL", tagColor: "text-white border-white", image: "/can1.png" },
];

const mainCourseData: MenuItem[] = [
  { name: "Pesto Zucchini Noodles", price: "$11", description: "Lorem ipsum dolor sit amet", tag: "CHEF'S SPECIAL", tagColor: "text-white border-white", image: "/can2.png" },
  { name: "Pepperoni Paradise Pie", price: "$13", description: "Lorem ipsum dolor sit amet", tag: "TRENDING", tagColor: "text-white border-white", image: "/can1.png" },
  { name: "Caprese Carnival Crust", price: "$15", description: "Lorem ipsum dolor sit amet", tag: "NEW", tagColor: "text-white border-white", image: "/can2.png" },
  { name: "Quinoa Tacos", price: "$10", description: "Lorem ipsum dolor sit amet", tag: "POPULAR", tagColor: "text-white border-white", image: "/can1.png" },
  { name: "Udon Noodles", price: "$6", description: "Lorem ipsum dolor sit amet", tag: "MUST TRY", tagColor: "text-white border-white", image: "/can2.png" },
];

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-4 py-4 group"
    >
      {/* Food Image */}
      <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-full overflow-hidden flex-shrink-0 shadow-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5">
        {/* Title & Price Row */}
        <div className="flex items-center w-full">
          <h4 className="font-playfair text-lg sm:text-[19px] font-bold text-white whitespace-nowrap">
            {item.name}
          </h4>
          <div className="flex-1 border-b-[2px] border-dotted border-gray-300 mx-4 opacity-70 relative top-[2px]"></div>
          <span className="font-playfair text-lg sm:text-xl font-bold text-white whitespace-nowrap">
            {item.price}
          </span>
        </div>

        {/* Description & Badge Row */}
        <div className="flex items-center justify-between mt-1 gap-4">
          <p className="text-yellow-300 text-[14px] whitespace-nowrap overflow-hidden text-ellipsis italic font-light">
            {item.description}
          </p>
          <span className={`flex-shrink-0 text-[11px] font-bold uppercase px-3 py-1 rounded-[30px] border-[1.5px] tracking-widest bg-transparent ${item.tagColor}`}>
            {item.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function FoodMenu() {
  const tearPoints = Array.from({ length: 300 }).map((_, i) => {
    const x = 100 - (i * (100 / 299));
    const wave1 = Math.sin(i * 0.1) * 8;
    const wave2 = Math.sin(i * 0.4) * 4;
    const wave3 = Math.sin(i * 1.0) * 2;
    const pseudoRandom = ((i * i * 37) % 12) - 6; 
    let y = 35 + wave1 + wave2 + wave3 + pseudoRandom;
    y = Math.max(0, Math.min(100, y)); 
    return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
  }).join(', ');
  
  const tearPath = `polygon(0 100%, 100% 100%, 100% 90%, ${tearPoints}, 0 90%)`;

  return (
    <section id="menu" className="py-24 bg-[#c25b5e] relative overflow-hidden -mb-[2px] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-white text-xl tracking-widest flex gap-1">
              <span>♦</span><span>♦</span><span>♦</span>
            </span>
          </div>
          <p className="text-white text-[13px] font-bold uppercase tracking-[4px] mb-3">
            Drink Menu
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Timeless <span className="font-bold text-white">Culinary Delights</span>
          </h2>
        </motion.div>

         

        {/* Category Ribbons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 mb-16 relative z-10 w-full">
          {/* Starters Ribbon */}
          <div
            className="bg-white text-gray-900 font-playfair sm:font-semibold text-xl px-16 py-3.5 inline-block text-center flex-shrink-0"
            style={{ clipPath: 'polygon(15px 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0% 50%)' }}
          >
            Starters & Appetizers
          </div>

          {/* Main Course Ribbon */}
          <div
            className="bg-white text-gray-900 font-playfair sm:font-semibold text-xl px-16 py-3.5 inline-block text-center flex-shrink-0"
            style={{ clipPath: 'polygon(15px 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0% 50%)' }}
          >
            Main Course
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-2 lg:gap-y-4">
          <div className="space-y-4">
            {startersData.map((item, i) => (
              <MenuItemCard key={`starter-${i}`} item={item} index={i} />
            ))}
          </div>
          <div className="space-y-4 mt-8 lg:mt-0">
            {mainCourseData.map((item, i) => (
              <MenuItemCard key={`main-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Browse Full Menu Button */}
        <div className="text-center mt-16 pt-4 border-t border-gray-200">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-white text-white text-[13px] font-semibold uppercase tracking-[2px] rounded-[30px] hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm mt-8"
          >
            BROWSE FULL MENU
          </a>
        </div>
      </div>

      {/* Decorative torn border at bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-10 sm:h-12 bg-white z-10 pointer-events-none" 
        style={{ clipPath: tearPath }} 
      />
    </section>
  );
}
