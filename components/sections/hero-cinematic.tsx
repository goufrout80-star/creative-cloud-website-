"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextScramble } from "@/components/ui/text-scramble";
import { ArrowDown, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        {/* Placeholder for Cinematic Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/coverr-filming-with-a-red-camera-5334/1080p.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-[#f5c900]" />
            <span className="text-[#f5c900] uppercase tracking-[0.2em] text-sm font-medium">
              The Filmmaker's Code
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            <TextScramble 
              text="WE DON'T JUST SHOOT." 
              duration={1.5} 
              className="block"
            />
            <span className="text-[#f2f2f2]/50 block mt-2">
              <TextScramble 
                text="WE COMPOSE." 
                duration={1.5} 
                delay={1.5}
              />
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 border-l-2 border-[#f5c900]/30 pl-6"
          >
            This page is for the creators who treat every frame like a painting and every cut like a heartbeat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.5, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {/* Creator Button */}
            <Link href="/creators" className="group relative px-8 py-4 bg-[#f5c900] text-black font-bold uppercase tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <Users className="w-5 h-5 fill-current" />
                For Creators
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
            
            {/* Brand Button */}
            <Link href="/brands" className="group px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-wider hover:bg-white/5 transition-colors backdrop-blur-sm">
              <span className="flex items-center gap-3">
                 <Briefcase className="w-5 h-5" />
                 For Brands
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#f5c900] animate-bounce" />
      </motion.div>
    </section>
  );
}
