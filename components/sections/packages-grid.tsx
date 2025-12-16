"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Settings, Battery, Signal } from "lucide-react";
import { GearCase } from "@/components/ui/gear-case";

const packages = [
  {
    name: "QUICK_COLLAB",
    price: "200",
    features: ["1 Reel", "1 Story", "Product Testing"],
    highlight: false,
    specs: { iso: "800", shutter: "1/50", f: "2.8" },
    description: "Ideal for rapid deployment. Test your product with a focused audience unit."
  },
  {
    name: "BOOST_PKG",
    price: "350",
    features: ["1 Reel", "3 Stories", "Link in Bio [1W]", "Enhanced Reach"],
    highlight: true,
    tag: "MOST_POPULAR",
    specs: { iso: "1600", shutter: "1/100", f: "1.4" },
    description: "Maximum efficiency. Stronger presence across all frequency channels."
  },
  {
    name: "VISIBILITY_EXP",
    price: "650",
    features: ["3 Reels", "7 Stories", "Link in Bio [1M]", "Campaign Focus"],
    highlight: false,
    specs: { iso: "3200", shutter: "1/200", f: "1.2" },
    description: "Full spectrum dominance. Sustained visibility for major launch operations."
  },
];

export function PackagesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={sectionRef}
      id="packages" 
      className="bg-[#131313] py-64 relative overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }}
    >
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f5c900]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-40"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Production <span className="text-[#f5c900]">Inventory</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed font-mono">
            // SELECT_GEAR_PACKAGE // STATUS: READY
          </p>
        </motion.div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60, rotateX: 15, scale: 0.95 }}
              animate={gridInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                y: 60, 
                rotateX: 15, 
                scale: 0.95 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: index * 0.15 
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <GearCase highlight={pkg.highlight}>
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#f5c900] text-black text-[10px] font-bold px-4 py-1 uppercase tracking-widest z-30" style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}>
                    {pkg.tag}
                  </div>
                )}

                <div className="flex flex-col h-full pt-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/10 border-dashed">
                    <div>
                      <h3 className={`text-xl font-bold font-mono tracking-tighter ${pkg.highlight ? 'text-[#f5c900]' : 'text-white'}`}>
                        {pkg.name}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-1">ISO {pkg.specs.iso}</span>
                        <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-1">{pkg.specs.shutter}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 text-gray-600">
                      <Battery className="w-4 h-4" />
                      <Signal className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white tracking-tighter font-mono">${pkg.price}</span>
                    <span className="text-xs text-gray-500 ml-2 uppercase">/ Unit Cost</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-10 leading-relaxed font-mono min-h-[60px]">
                    {">"} {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-12 flex-grow">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-gray-300 font-mono">
                        <div className={`w-4 h-4 flex items-center justify-center border ${pkg.highlight ? 'border-[#f5c900] text-[#f5c900]' : 'border-gray-600 text-gray-600'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button 
                    className={`w-full py-5 font-bold uppercase tracking-wider transition-all relative group overflow-hidden flex items-center justify-center gap-2 ${
                      pkg.highlight
                        ? 'bg-[#f5c900] text-black hover:bg-[#b7791f]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                  >
                    <Settings className={`w-4 h-4 ${pkg.highlight ? 'animate-spin-slow' : ''}`} />
                    Initialize
                  </button>
                </div>
              </GearCase>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
