"use client";

import { Twitter, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export function HomeFooter() {
  return (
    <footer className="py-12 bg-black text-white border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter mb-2">
              TODAY<span className="text-[#f5c900]">FILMMAKERS</span>
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Empowering the next generation of visual storytellers.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/todayfilmmakers" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <Link href="/support" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Today Filmmakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
