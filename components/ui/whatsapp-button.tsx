"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton({ phoneNumber = "1234567890" }: { phoneNumber?: string }) {
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
    >
      <Phone className="w-7 h-7" fill="currentColor" />
    </motion.a>
  );
}
