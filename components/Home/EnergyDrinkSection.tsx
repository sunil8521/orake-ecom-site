import Image from "next/image";

const EnergyDrinkSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#d7b452] rounded-3xl p-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center">
        {/* Left: Main Image & Heading */}
        <div className="flex-1 flex flex-col items-start gap-8 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f3f3e7] leading-tight">
            The Best Energy Drink<br />For Your Health.
          </h1>
          <div className="relative">
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#ffe89d] rounded-md -z-10" />
            <span className="absolute -right-6 bottom-4 w-10 h-10 bg-[#f7b6e7] rounded-md -z-10" />
            <Image
              src="/can2.png"
              alt="Energy Drink Can"
              width={1300}
              height={600}
           
            />
          </div>
        </div>
        {/* Right: Description & Thumbnails */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-start">
          <p className="text-[#f3f3e7] text-xl md:text-2xl max-w-xl font-semibold">
            Experience the Benefits of the Top Energy Drink for Health: Combining Superior Energy Boost with Wellness-Enhancing Ingredients for Optimal Performance
          </p>
          <div className="flex gap-8">
            <Image
              src="/can1.png"
              alt="Energy Drink Thumb 1"
              width={340}
              height={260}
               
            />
            <Image
              src="/can2.png"
              alt="Energy Drink Thumb 2"
              width={340}
              height={260}
               
            />
          </div>
          <p className="text-[#f3f3e7] text-lg md:text-xl max-w-xl font-semibold">
            Discover How The Best Energy Drink Can Effectively Support Your Health Goals By Providing A Steady And Reliable Energy Boost Throughout The Entire Day, Enhancing Your Overall Well-Being And Vitality With Carefully Selected Ingredients That Promote Long-Term Health Benefits
          </p>
          <button className="mt-2 px-8 py-2 border border-[#f3f3e7] rounded-full text-[#f3f3e7] hover:bg-[#f3f3e7] hover:text-[#7b8c7a] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnergyDrinkSection;
