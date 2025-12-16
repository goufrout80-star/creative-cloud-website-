"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TimelineRuler() {
  const [ticks, setTicks] = useState<number[]>([]);

  useEffect(() => {
    // Generate ticks for the ruler
    const count = 50;
    setTicks(Array.from({ length: count }, (_, i) => i));
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 border-t border-white/10 bg-[#0a0a0a] flex items-end overflow-hidden select-none">
      <div className="flex w-full">
        {ticks.map((i) => (
          <div key={i} className="flex-1 flex flex-col justify-end items-center relative group">
            {/* Major tick */}
            <div className="w-[1px] h-4 bg-white/20 group-hover:bg-[#f5c900] transition-colors" />
            
            {/* Minor ticks */}
            <div className="absolute bottom-0 left-1/4 w-[1px] h-2 bg-white/5" />
            <div className="absolute bottom-0 left-2/4 w-[1px] h-2 bg-white/5" />
            <div className="absolute bottom-0 left-3/4 w-[1px] h-2 bg-white/5" />

            {/* Timecode Label */}
            {i % 5 === 0 && (
              <span className="absolute bottom-6 text-[10px] font-mono text-gray-500">
                00:00:{i.toString().padStart(2, '0')}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Playhead() {
  return (
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
      <div className="h-full w-[1px] bg-[#f5c900] shadow-[0_0_10px_#f5c900]" />
      <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 12V22H22V12L12 2Z" fill="#f5c900" />
        </svg>
      </div>
    </div>
  );
}

