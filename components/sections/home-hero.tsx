"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Instagram } from "lucide-react";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,201,0,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

      <div className="container relative z-20 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Instagram className="w-4 h-4 text-[#f5c900]" />
            <span className="text-sm font-medium text-gray-300">Join 100K+ Filmmakers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
            Master the Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c900] to-[#b7791f]">
              Visual Storytelling
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            The ultimate community for modern filmmakers. Get access to industry-standard tools, exclusive tutorials, and a network of creators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://www.instagram.com/todayfilmmakers" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-[#f5c900] hover:bg-[#b7791f] text-[#131313] rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#f5c900]/20"
            >
              <Instagram className="w-5 h-5" />
              Join the Community
            </a>
            <Link 
              href="/support" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-[#f5c900]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-[#b7791f]/15 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />
    </section>
  );
}
