"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const messages = [
  "🔥 BLACK FRIDAY 95% OFF",
  "⚡ CREATIVE CLOUD ONLY $0.50 TODAY",
  "🤖 FIREFLY AI INCLUDED",
  "💳 ONE YEAR SUBSCRIPTION",
  "✨ FULL ACCESS ALL APPS"
];

export function PinnedSlider() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 45, seconds: 30 }; // Loop back
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-black text-white shadow-md h-14 flex items-center overflow-hidden">
      <div className="container mx-auto flex h-full max-w-full px-0 relative">
        
        {/* Left Side: Sliding Marquee (65-75% width) */}
        <div className="flex-1 relative overflow-hidden flex items-center bg-black">
          {/* Gradient Fades for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
          
          <motion.div 
            className="flex flex-nowrap whitespace-nowrap font-bold tracking-wide text-sm md:text-base items-center"
            animate={{ x: ["0%", "-100%"] }} 
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate messages for seamless loop */}
            {[...messages, ...messages, ...messages, ...messages, ...messages, ...messages].map((msg, i) => (
              <div key={i} className="flex items-center px-8">
                <span className={msg.includes("$0.50") ? "text-yellow-400 font-black" : "text-white"}>
                  {msg}
                </span>
                {/* Separator Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 ml-8 opacity-50" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Attention-Grabbing Timer (Fixed Width) */}
        <motion.div 
          className="w-[140px] md:w-[180px] bg-red-600 flex flex-col items-center justify-center relative shrink-0 h-full shadow-[-10px_0_30px_rgba(0,0,0,0.4)] z-30"
          animate={{ 
            backgroundColor: ["#dc2626", "#b91c1c", "#dc2626"] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          {/* Diagonal shiny effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="flex items-center gap-1 mb-0.5">
            <Clock className="w-3 h-3 text-white/80" />
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">
              EXPIRES IN
            </span>
          </div>
          
          <div className="flex items-baseline gap-1 tabular-nums leading-none">
            <div className="bg-black/20 rounded px-1.5 py-0.5">
              <span className="font-mono text-lg md:text-xl font-black text-white tracking-tight drop-shadow-sm">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="text-white/60 font-bold animate-pulse">:</span>
            <div className="bg-black/20 rounded px-1.5 py-0.5">
              <span className="font-mono text-lg md:text-xl font-black text-white tracking-tight drop-shadow-sm">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="text-white/60 font-bold animate-pulse">:</span>
            <div className="bg-black/20 rounded px-1.5 py-0.5">
              <span className="font-mono text-lg md:text-xl font-black text-yellow-300 tracking-tight drop-shadow-sm">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}


