"use client";

import { motion } from "framer-motion";
import { CreativeHeader } from "@/components/sections/creative-header";
import { CinematicFooter } from "@/components/sections/cinematic-footer";
import { ArrowRight, Mail, Instagram, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f5c900] selection:text-black">
      <CreativeHeader />
      
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Column: Heading & Info */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
                  LET'S <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c900] to-[#b7791f]">
                    TALK
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-400 mb-12 max-w-md leading-relaxed">
                  Your next big idea starts here. Let's make it real!
                </p>

                <div className="space-y-8 mt-16">
                  <div>
                    <h3 className="text-[#f5c900] font-bold uppercase tracking-wider mb-2 text-sm">Contact</h3>
                    <a href="mailto:partnerships@todayfilmmakers.com" className="text-xl md:text-2xl hover:text-white/80 transition-colors block mb-1">
                      partnerships@todayfilmmakers.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-[#f5c900] font-bold uppercase tracking-wider mb-2 text-sm">Socials</h3>
                    <a href="https://instagram.com/todayfilmmakers" target="_blank" className="text-xl md:text-2xl hover:text-white/80 transition-colors flex items-center gap-2">
                      @todayfilmmakers <ArrowRight className="w-5 h-5 -rotate-45" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-[#f5c900] font-bold uppercase tracking-wider mb-2 text-sm">Community</h3>
                    <p className="text-xl text-gray-400">
                      Join 250K+ filmmakers worldwide.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Minimal Form */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
               <motion.form
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3, duration: 0.8 }}
                 className="space-y-12"
               >
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="relative group">
                     <input 
                       type="text" 
                       placeholder="Full Name" 
                       className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#f5c900] transition-colors placeholder:text-gray-600"
                     />
                   </div>
                   <div className="relative group">
                     <input 
                       type="email" 
                       placeholder="Email Address" 
                       className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#f5c900] transition-colors placeholder:text-gray-600"
                     />
                   </div>
                 </div>

                 <div className="relative group">
                   <input 
                     type="text" 
                     placeholder="Subject" 
                     className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#f5c900] transition-colors placeholder:text-gray-600"
                   />
                 </div>

                 <div className="relative group">
                   <textarea 
                     rows={4}
                     placeholder="Tell us about your project..." 
                     className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#f5c900] transition-colors placeholder:text-gray-600 resize-none"
                   />
                 </div>

                 <div className="pt-8">
                   <button className="group flex items-center gap-4 text-2xl font-bold uppercase tracking-widest hover:text-[#f5c900] transition-colors">
                     Send Message
                     <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#f5c900] group-hover:bg-[#f5c900] group-hover:text-black transition-all">
                       <ArrowRight className="w-5 h-5" />
                     </span>
                   </button>
                 </div>
               </motion.form>
            </div>
          </div>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}

