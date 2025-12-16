"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export function CinematicFooter() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24 relative flex flex-col md:flex-row items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-xl md:text-2xl text-gray-400 mb-8 uppercase tracking-widest">
              Ready to elevate your brand?
            </h2>
            <a 
              href="mailto:partnerships@todayfilmmakers.com" 
              className="group block relative"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#f5c900] group-hover:to-[#b7791f] transition-all duration-500 leading-none">
                START A <br />
                CONVERSATION
              </h1>
              <ArrowUpRight className="hidden md:block absolute top-4 right-4 md:top-8 md:right-[-4rem] w-12 h-12 md:w-24 md:h-24 text-[#f5c900] opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" />
            </a>
          </motion.div>

          {/* Secondary CTA Button */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-5 bg-[#f5c900] text-black font-bold uppercase tracking-wider rounded-full hover:bg-[#b7791f] transition-colors shadow-[0_0_20px_rgba(245,201,0,0.3)] hover:shadow-[0_0_40px_rgba(245,201,0,0.5)] transform hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us Now
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Contact</h3>
            <a href="mailto:partnerships@todayfilmmakers.com" className="flex items-center gap-2 text-xl hover:text-[#f5c900] transition-colors">
              <Mail className="w-5 h-5" />
              partnerships@todayfilmmakers.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Social</h3>
            <a href="https://instagram.com/todayfilmmakers" target="_blank" className="flex items-center gap-2 text-xl hover:text-[#f5c900] transition-colors">
              <Instagram className="w-5 h-5" />
              @todayfilmmakers
            </a>
          </div>

          <div className="md:text-right">
             <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Legal</h3>
             <ul className="space-y-2">
               <li><Link href="/privacy" className="hover:text-[#f5c900] transition-colors">Privacy Policy</Link></li>
               <li><Link href="/terms" className="hover:text-[#f5c900] transition-colors">Terms of Service</Link></li>
             </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Today Filmmakers. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono">DESIGNED FOR CREATORS</p>
        </div>
      </div>
    </footer>
  );
}
