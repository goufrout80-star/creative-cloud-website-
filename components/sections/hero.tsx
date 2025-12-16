"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToCheckout = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.getElementById("whats-included")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 md:pt-20 md:pb-10 bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow opacity-40 pointer-events-none" />
      
      <div className="container relative z-10 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-red-50 border border-red-100"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs md:text-sm font-bold text-primary tracking-wide uppercase">🔥 BLACK FRIDAY DEAL: 95% OFF</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-gray-900 leading-[1.1]"
        >
          Adobe Creative Cloud <br className="hidden sm:block" />
          <span className="text-primary block sm:inline mt-2 sm:mt-0">for Only $0.50!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto font-medium px-4"
        >
          95% OFF • 20+ Pro Apps • Firefly AI Image Generation Included
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col w-full sm:w-auto gap-4 mb-12 md:mb-16 sm:flex-row"
        >
          <button
            onClick={scrollToCheckout}
            className="w-full sm:w-auto px-8 py-4 md:py-5 bg-primary hover:bg-red-600 text-white rounded-full font-bold text-lg md:text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-red-500/20 active:scale-95"
          >
            Get the Offer — $0.50
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={scrollToFeatures}
            className="w-full sm:w-auto px-8 py-4 md:py-5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-bold text-lg md:text-xl transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            See What's Included
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-sm font-medium text-gray-600 w-full max-w-3xl"
        >
          {[
             "Official Adobe Subscription",
             "Instant Delivery",
             "Works on Mac & Windows",
             "Commercial Use Allowed"
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 bg-gray-50 px-4 py-3 md:py-2 rounded-xl border border-gray-100/50">
              <Check className="w-4 h-4 text-green-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Floating Icons Animation - simplified CSS based */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-[#31A8FF]/10 rounded-2xl rotate-12 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-[#FF9A00]/10 rounded-full -rotate-6 animate-pulse delay-700 hidden lg:block"></div>
    </section>
  );
}
