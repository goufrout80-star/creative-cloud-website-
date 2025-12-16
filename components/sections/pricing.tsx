"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, ShieldCheck, CreditCard, Lock } from "lucide-react";

export function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    // Redirect to Demo Checkout
    window.location.href = "/demo-checkout";
  };

  return (
    <section id="pricing" className="py-16 md:py-20 relative bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-black">BLACK FRIDAY PRICING</h2>
            <p className="text-gray-500 text-lg md:text-xl">Lowest price of the year. Limited availability.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row"
          >
            {/* Left Side: Features */}
            <div className="p-6 md:p-12 md:w-1/2 bg-gray-50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black text-center md:text-left">WHAT YOU GET TODAY</h3>
              <div className="flex flex-col gap-3 md:gap-4">
                {[
                  "Access to 20+ Creative Cloud apps",
                  "Adobe Firefly AI image generation included",
                  "100GB Cloud Storage",
                  "Premium Fonts & Assets",
                  "Works on Mac, Windows & Mobile",
                  "Instant Email Delivery",
                  "Full Commercial License"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Price & CTA */}
            <div className="p-6 md:p-12 md:w-1/2 flex flex-col items-center justify-center text-center relative overflow-hidden order-1 md:order-2">
               <div className="absolute top-0 right-0 bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-lg">
                 BEST SELLER
               </div>
               
               <span className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-red-100 text-primary font-bold text-xs md:text-sm mb-3 md:mb-4">
                 BLACK FRIDAY: 95% OFF
               </span>
               
               <div className="mb-6">
                 <div className="text-gray-400 line-through text-lg md:text-xl font-medium mb-1">Original Price: $659.00</div>
                 <div className="flex items-start justify-center gap-1 text-gray-900">
                   <span className="text-3xl md:text-4xl font-bold mt-2">$</span>
                   <span className="text-6xl md:text-7xl font-bold tracking-tighter">0.50</span>
                   <span className="text-lg md:text-xl font-medium mt-2 text-gray-500">/year</span>
                 </div>
               </div>

               <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-primary hover:bg-red-600 text-white font-bold text-lg md:text-xl py-3 md:py-4 rounded-xl transition-all transform hover:scale-[1.02] mb-4 flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
              >
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  "Unlock Creative Cloud Now — $0.50"
                )}
              </button>
              
              <div className="flex flex-col gap-2 text-xs text-gray-400 w-full">
                <div className="flex items-center justify-center gap-4 pb-4 border-b border-gray-100 w-full">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" /> Secure Payment
                  </div>
                  <div className="flex items-center gap-1">
                    <Lock className="w-3 h-3 md:w-4 md:h-4" /> SSL Encrypted
                  </div>
                </div>
                <p className="mt-2 leading-relaxed">
                  Price valid for first year subscription. <br className="hidden md:block"/>
                  One-time payment. No hidden fees.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8 md:mt-12 flex justify-center gap-6 opacity-60 grayscale">
             {/* Placeholder for Payment Badges */}
             <div className="flex items-center gap-2 text-gray-400 font-bold text-sm">
               <CreditCard className="w-5 h-5 md:w-6 md:h-6" />
               <span>Powered by Stripe</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
