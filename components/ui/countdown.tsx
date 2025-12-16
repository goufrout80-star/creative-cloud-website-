"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset for demo purposes to 24 hours
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 text-2xl font-bold text-white">
      <div className="flex flex-col items-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 text-3xl md:text-4xl tabular-nums">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Hours</span>
      </div>
      <span className="text-2xl text-white/20 pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 text-3xl md:text-4xl tabular-nums">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Mins</span>
      </div>
      <span className="text-2xl text-white/20 pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-red-500 text-3xl md:text-4xl tabular-nums">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-primary/60 uppercase tracking-wider">Secs</span>
      </div>
    </div>
  );
}
