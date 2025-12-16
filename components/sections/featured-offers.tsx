"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FeaturedOffers() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Essential Tools for <br />
              <span className="text-primary">Every Creator</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              Stop paying full price for your software. We've partnered with industry leaders to bring you exclusive deals on the tools you use every day.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Adobe Creative Cloud All Apps Plan",
                "20+ Desktop & Mobile Apps",
                "100GB Cloud Storage",
                "Adobe Firefly AI Features Included"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/creativecloudsub"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all group"
            >
              View Special Offer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual Card */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Limited Time
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF0000] to-[#990000] rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-2xl shadow-red-900/50">
                  CC
                </div>
                <h3 className="text-2xl font-bold mb-2">Creative Cloud</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-white">$0.50</span>
                  <span className="text-gray-500 line-through text-lg">/mo</span>
                </div>
                <p className="text-gray-400 text-sm mb-8">
                  Get full access to Photoshop, Illustrator, Premiere Pro, After Effects, and more.
                </p>
                <Link 
                  href="/creativecloudsub"
                  className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Claim Offer
                </Link>
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
