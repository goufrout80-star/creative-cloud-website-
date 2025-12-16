"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function TextScramble({ text, className, duration = 2, delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    let animationFrame: number;
    const startDelay = setTimeout(() => {
      setIsScrambling(true);
      startTimeRef.current = Date.now();

      const update = () => {
        const now = Date.now();
        const progress = Math.min((now - startTimeRef.current) / (duration * 1000), 1);
        
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] === " ") {
            result += " ";
            continue;
          }
          
          if (progress >= 1 || Math.random() < progress) {
            result += text[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        setDisplayText(result);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        } else {
          setIsScrambling(false);
        }
      };

      animationFrame = requestAnimationFrame(update);
    }, delay * 1000);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationFrame);
    };
  }, [text, duration, delay]);

  return (
    <motion.span className={className}>
      {displayText || text.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join("")}
    </motion.span>
  );
}

