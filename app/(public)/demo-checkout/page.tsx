"use client";

import { useState } from "react";
import { Check, Shield, Lock, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DemoCheckout() {
  const [loading, setLoading] = useState(false);

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/success";
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-muted/30 py-8 md:py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            todayfilmmakers
          </Link>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span>Secure Checkout (Demo Mode)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Product Summary (Left/Top) */}
          <div className="md:col-span-2 bg-background rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="p-4 md:p-6 border-b border-border">
              <h2 className="text-lg md:text-xl font-bold text-foreground">Order Summary</h2>
            </div>
            <div className="p-4 md:p-6 flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-24 h-32 sm:h-24 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm shrink-0">
                <span className="text-4xl sm:text-3xl">Cc</span>
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-foreground">Adobe Creative Cloud All Apps</h3>
                <p className="text-muted-foreground text-sm mb-3">1-Year Subscription • Commercial License</p>
                <div className="flex items-center gap-2 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full w-fit border border-green-100">
                  <Check className="w-3 h-3" /> In Stock & Ready
                </div>
              </div>
            </div>
            <div className="px-4 md:px-6 py-4 bg-accent/30 border-t border-border space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>$659.00</span>
              </div>
              <div className="flex justify-between text-sm text-green-600 font-medium">
                <span>Black Friday Discount</span>
                <span>-$658.50</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-foreground pt-3 border-t border-border mt-2">
                <span>Total</span>
                <span>$0.50</span>
              </div>
            </div>
          </div>

          {/* Checkout Form (Right) */}
          <div className="bg-background rounded-2xl shadow-lg border border-border p-6 h-fit">
            <h3 className="font-bold text-lg mb-4 text-foreground">Payment Details</h3>
            
            <div className="space-y-4 mb-6 opacity-60 pointer-events-none grayscale">
               {/* Fake Fields for Visuals */}
               <div className="space-y-1">
                 <label className="text-xs font-medium text-muted-foreground">Email Address</label>
                 <div className="h-10 bg-accent rounded-lg border border-input w-full"></div>
               </div>
               <div className="space-y-1">
                 <label className="text-xs font-medium text-muted-foreground">Card Information</label>
                 <div className="h-10 bg-accent rounded-lg border border-input w-full flex items-center px-3">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                 </div>
               </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-6 text-xs text-blue-700">
              <strong>Demo Mode:</strong> No real payment will be processed. This is a demonstration.
            </div>

            <button
              onClick={handleComplete}
              disabled={loading}
              className="w-full bg-primary hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 disabled:opacity-70 active:scale-95"
            >
              {loading ? (
                "Processing..."
              ) : (
                "Complete Demo Checkout"
              )}
            </button>

            <div className="mt-4 flex justify-center gap-4 text-muted-foreground/50">
              <Shield className="w-5 h-5" />
              <Lock className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
