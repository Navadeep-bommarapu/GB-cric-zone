"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20a%20slot%20at%20GB%20Cric%20Zone"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center text-white hover:bg-green-400 hover:scale-110 transition-all animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </motion.a>
  );
}
