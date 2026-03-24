"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="GB Cric Zone Box Cricket Ground in Uppal, Hyderabad"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 to-transparent" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <div className="w-full h-full rounded-full border-2 border-accent animate-spin-slow" />
      </div>
      <div className="absolute bottom-40 left-10 w-20 h-20 opacity-10">
        <div className="w-full h-full rounded-full border-2 border-primary-light animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent text-sm font-medium">
            🏏 Best Box Cricket in Uppal & Peerzadiguda
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Welcome to{" "}
          <span className="gradient-text">GB Cric Zone</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Spacious ground, premium turf, bright floodlights, and friendly
          management. Open 24 hours — walk in anytime, play, and make memories
          at Hyderabad&apos;s favorite box cricket destination!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20a%20slot%20at%20GB%20Cric%20Zone"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all hover:scale-105"
          >
            <MessageCircle size={22} className="group-hover:animate-bounce" />
            Book via WhatsApp
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
          >
            View Pricing
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "4.9★", label: "Google Rating" },
            { value: "24/7", label: "Open Always" },
            { value: "17+", label: "5-Star Reviews" },
            { value: "100%", label: "Turf Quality" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-accent transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
