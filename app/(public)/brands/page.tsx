"use client";

import { motion } from "framer-motion";
import { CreativeHeader } from "@/components/sections/creative-header";
import { CinematicFooter } from "@/components/sections/cinematic-footer";
import { StatsTicker } from "@/components/sections/stats-ticker";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { PackagesGrid } from "@/components/sections/packages-grid";
import { ArrowDown, CheckCircle, TrendingUp } from "lucide-react";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f5c900] selection:text-black">
      <CreativeHeader />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f5c900]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm text-[#f5c900] text-sm font-bold uppercase tracking-wider">
              For Brands & Agencies
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]">
              Speak Directly to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c900] to-[#b7791f]">
                Serious Filmmakers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Don't just run ads. Integrate your product into the workflow of 250,000+ creators who invest in lenses, lighting, and software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:partnerships@todayfilmmakers.com"
                className="px-8 py-5 bg-[#f5c900] text-black font-bold text-lg uppercase tracking-wider rounded-sm hover:bg-[#b7791f] transition-all"
              >
                Start a Campaign
              </a>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-xs">
                      Brand
                    </div>
                  ))}
                </div>
                <span className="text-sm">Trusted by 50+ Industry Brands</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-[10px] uppercase tracking-widest">See Metrics</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats Reuse */}
      <StatsTicker />

      {/* Why Partner Section */}
      <section className="py-24 bg-[#0f0f0f] border-y border-white/5">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
               <p className="text-gray-400 text-lg mb-8">
                 Unlike general creative pages, TodayFilmmakers is a curated hub. Every post is built around cinematic edits, camera movement, and technical workflows.
               </p>
               <ul className="space-y-4">
                 {[
                   "Niche Authority: 100% Filmmaking Focus",
                   "High Engagement: 180K+ Avg Engagements",
                   "Professional Audience: Gear-obsessed buyers"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-xl">
                     <CheckCircle className="w-6 h-6 text-[#f5c900]" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
             <div className="md:w-1/2 relative h-[400px] w-full bg-[#1a1a1a] border border-white/10 p-8 flex items-center justify-center">
                {/* Abstract Graphic representing Growth */}
                <TrendingUp className="w-32 h-32 text-[#f5c900] opacity-20" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute bottom-8 right-8 text-right">
                  <div className="text-5xl font-bold text-white">12.5%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">90-Day Growth</div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Partners */}
      <BrandMarquee />

      {/* Packages Reuse */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#131313] pointer-events-none" />
        <PackagesGrid />
      </div>

      <CinematicFooter />
    </main>
  );
}
