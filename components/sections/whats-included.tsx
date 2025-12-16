"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AppData } from "@/lib/types";

export function WhatsIncluded({ initialApps = [] }: { initialApps?: AppData[] }) {
  const [showAll, setShowAll] = useState(false);

  // Filter only visible apps (safeguard against undefined)
  const activeApps = Array.isArray(initialApps) ? initialApps.filter(app => app?.visible) : [];
  const visibleApps = showAll ? activeApps : activeApps.slice(0, 12);

  return (
    <section id="whats-included" className="py-16 md:py-20 relative bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">What's Included</h2>
          <p className="text-lg md:text-xl text-gray-500 px-4">The entire collection of 20+ creative desktop and mobile apps.</p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 mb-8 md:mb-12"
        >
          <AnimatePresence>
            {visibleApps.map((app, index) => (
              <motion.div
                layout
                key={app.id || app.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`
                  p-3 md:p-4 rounded-2xl flex flex-col items-center gap-2 md:gap-3 transition-all group border
                  ${app.isSpecial 
                    ? "bg-gradient-to-br from-gray-900 to-black text-white shadow-xl border-transparent transform hover:scale-105" 
                    : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1"
                  }
                `}
              >
                <div 
                  className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-lg md:text-2xl font-bold shadow-sm
                    ${app.isSpecial ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : ""}
                  `}
                  style={!app.isSpecial ? { backgroundColor: app.color, color: '#000' } : {}}
                >
                  {!app.isSpecial && <span className="text-black/80">{app.short}</span>}
                  {app.isSpecial && <span className="text-white">AI</span>}
                </div>
                <span className={`text-xs md:text-sm font-bold text-center leading-tight ${app.isSpecial ? "text-gray-200" : "text-gray-700"}`}>
                  {app.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && activeApps.length > 12 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white border border-gray-200 rounded-full text-gray-900 font-semibold shadow-sm hover:bg-gray-50 hover:shadow-md transition-all active:scale-95 text-sm md:text-base"
            >
              Load More Apps <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}


        {/* Firefly Highlight Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 bg-gradient-to-br from-gray-900 to-black p-6 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-left max-w-2xl">
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] md:text-xs font-bold mb-3 md:mb-4">
                INCLUDED FREE
              </div>
              <h3 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">Firefly Generative AI</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Create extraordinary images, text effects, and color palettes with simple text prompts.
                Now integrated directly into Photoshop, Illustrator, and Express.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["Text to Image", "Generative Fill", "Text Effects", "Vector Recolor"].map((feat) => (
                  <span key={feat} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs md:text-sm backdrop-blur-sm">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
