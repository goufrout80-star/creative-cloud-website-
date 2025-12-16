"use client";

import { motion } from "framer-motion";
import { Instagram, Camera, Clapperboard, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Community Members", value: "100K+", icon: Users },
  { label: "Daily Impressions", value: "500K+", icon: Instagram },
  { label: "Filmmakers", value: "50K+", icon: Camera },
];

export function CommunityShowcase() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f5c900]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      <div className="container px-6 mx-auto relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Join the <span className="text-[#f5c900]">Movement</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xl leading-relaxed"
          >
            We are building the largest community of filmmakers, colorists, and visual storytellers. 
            Share your work, get inspired, and level up your craft.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex p-4 rounded-full bg-[#f5c900]/10 text-[#f5c900] mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Content Preview / Instagram Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl bg-gray-900 overflow-hidden relative group border border-white/5"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              {/* Placeholder Gradient representing image */}
              <div className={`w-full h-full bg-gradient-to-br ${
                i === 1 ? 'from-purple-900 to-blue-900' :
                i === 2 ? 'from-red-900 to-orange-900' :
                i === 3 ? 'from-green-900 to-teal-900' :
                'from-gray-800 to-black'
              }`} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.instagram.com/todayfilmmakers" 
            target="_blank"
            className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-[#f5c900] transition-colors group"
          >
            See more on Instagram <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
