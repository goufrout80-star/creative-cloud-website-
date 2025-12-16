"use client";

import { motion } from "framer-motion";

const brands = [
  "HOLLYLAND",
  "MESHY.AI",
  "MOTION ARRAY",
  "ENVATO ELEMENTS",
  "TOPAZ LABS",
  "FILTERGRADE",
  "DESIGNCUTS",
  "RETROSUPPLY CO.",
  "XP-PEN",
  "HUION",
];

export function BrandMarquee() {
  return (
    <section className="bg-black py-32 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-sm font-bold text-[#f5c900] uppercase tracking-[0.2em] mb-2">Trusted By Industry Leaders</h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
          className="flex gap-16 items-center whitespace-nowrap py-8"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={`${brand}-${i}`}
              className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10 hover:from-[#f5c900] hover:to-[#b7791f] transition-all duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

