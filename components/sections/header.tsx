"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Youtube, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          TODAY<span className="text-[#f5c900]">FILMMAKERS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="https://www.instagram.com/todayfilmmakers" target="_blank" className="hover:text-white transition-colors">Community</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* CTA & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-white/10 pr-4">
            <a href="https://www.instagram.com/todayfilmmakers" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <Link 
            href="https://www.instagram.com/todayfilmmakers"
            target="_blank"
            className="bg-[#f5c900] text-[#131313] hover:bg-[#b7791f] px-5 py-2 rounded-full font-bold transition-all text-sm"
          >
            Join Community
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6 text-center">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">Home</Link>
              <Link href="https://www.instagram.com/todayfilmmakers" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">Community</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">Contact</Link>
              <Link 
                href="https://www.instagram.com/todayfilmmakers" 
                onClick={() => setIsOpen(false)}
                className="bg-[#f5c900] text-[#131313] hover:bg-[#b7791f] px-6 py-3 rounded-full font-bold mx-auto w-full max-w-xs"
              >
                Join Community
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
