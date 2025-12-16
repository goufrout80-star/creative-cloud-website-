"use client";

import { Twitter, Instagram, Facebook, Youtube, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Settings } from "@/lib/types";

export function Footer({ settings }: { settings?: Settings | null }) {
  const defaults = {
    storeName: "todayfilmmakers",
    supportEmail: "support@todayfilmmakers.com",
    whatsappNumber: "1234567890",
    maintenanceMode: false,
    socials: { instagram: "#", facebook: "#", youtube: "#", twitter: "#" },
    showSocials: { instagram: true, facebook: true, youtube: true, twitter: true }
  };

  const s = {
    ...defaults,
    ...settings,
    socials: { ...defaults.socials, ...settings?.socials },
    showSocials: { ...defaults.showSocials, ...settings?.showSocials }
  };

  return (
    <footer className="pt-12 pb-8 md:pt-20 md:pb-10 bg-gray-950 text-white border-t border-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white text-xl">{s.storeName.charAt(0).toUpperCase()}</div>
              <span className="text-2xl font-bold tracking-tight">{s.storeName}</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering creators with the best tools at unbeatable prices. 
              Official Adobe Creative Cloud partner for affordable access.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {s.showSocials.twitter && (
                <a href={s.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {s.showSocials.instagram && (
                <a href={s.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {s.showSocials.facebook && (
                <a href={s.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {s.showSocials.youtube && (
                <a href={s.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors py-1 block">Home</Link></li>
              <li><Link href="/creativecloudsub#whats-included" className="hover:text-white transition-colors py-1 block">Included Apps</Link></li>
              <li><Link href="/creativecloudsub#pricing" className="hover:text-white transition-colors py-1 block">Pricing</Link></li>
              <li><Link href="/demo-checkout" className="hover:text-white transition-colors py-1 block">Demo Checkout</Link></li>
              <li><Link href="/creativecloudsub#reviews" className="hover:text-white transition-colors py-1 block">Reviews</Link></li>
              <li><Link href="/creativecloudsub#faq" className="hover:text-white transition-colors py-1 block">Help Center</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">Legal</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors py-1 block">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors py-1 block">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors py-1 block">Refund Policy</Link></li>
              <li><Link href="/license" className="hover:text-white transition-colors py-1 block">License Agreement</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors py-1 block">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 md:mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest deals and creative tips directly to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-primary rounded-lg text-white hover:bg-red-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <Mail className="w-3 h-3" />
              <span>No spam, unsubscribe anytime.</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {s.storeName}. All rights reserved.
          </p>
          <p className="max-w-md">
            Disclaimer: This is a promotional landing page. Adobe, Creative Cloud, and their respective logos are trademarks of Adobe Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
