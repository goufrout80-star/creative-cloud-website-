"use client";

import { motion } from "framer-motion";
import { CreativeHeader } from "@/components/sections/creative-header";
import { CinematicFooter } from "@/components/sections/cinematic-footer";
import { ArrowUpRight, Instagram, PlayCircle, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f5c900] selection:text-black">
      <CreativeHeader />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
         
         <div className="container relative z-10 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 mb-6 border border-[#f5c900] rounded-full text-[#f5c900] text-sm font-bold uppercase tracking-wider">
                For Filmmakers
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c900] to-[#b7791f]">Craft</span> & <br />
                Amplify Your <span className="text-white">Visibility</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join 250K+ creators who are redefining visual storytelling. Get featured, learn advanced techniques, and connect with top brands.
              </p>
              
              <a 
                href="https://instagram.com/todayfilmmakers" 
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f5c900] text-black font-bold uppercase tracking-wider rounded-full hover:bg-[#b7791f] transition-all shadow-lg hover:shadow-[#f5c900]/40 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
                Join the Community
              </a>
            </motion.div>
         </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Exposure",
                desc: "Get your work seen by millions. Our platform highlights the best edits, rigs, and color grades from the community."
              },
              {
                icon: Zap,
                title: "Skill Acceleration",
                desc: "Access breakdowns that decode the magic behind cinematic shots. Learn lighting, blocking, and sound design."
              },
              {
                icon: PlayCircle,
                title: "Brand Deals",
                desc: "Stand out to industry-leading brands looking for authentic creators to showcase their gear."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-[#f5c900] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Showcase Placeholder */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Community Spotlight</h2>
            <p className="text-gray-400">Recent features from our Instagram feed.</p>
          </div>
          <a href="https://instagram.com/todayfilmmakers" className="hidden md:flex items-center gap-2 text-[#f5c900] hover:text-white transition-colors">
            View All <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        {/* Horizontal Scrolling Reel Strip */}
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="min-w-[300px] h-[500px] bg-[#1a1a1a] border border-white/10 rounded-xl flex items-center justify-center relative group overflow-hidden snap-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-[#f5c900] transition-colors relative z-20" />
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-bold text-white">Cinematic Reel #{i}</p>
                <p className="text-xs text-gray-300">@featured_creator</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
