"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Sun,
  Car,
  Trophy,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Bright Floodlights",
    description:
      "Play day or night under our powerful floodlights that illuminate every corner of the ground for smooth night sessions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Premium Turf",
    description:
      "High-quality artificial turf with good bounce and feel. Clean, well-organized, and professionally maintained ground.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sun,
    title: "Open 24 Hours",
    description:
      "We never close! Play anytime you want — morning, afternoon, evening, or late night. GB Cric Zone is always ready.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Car,
    title: "Ample Parking",
    description:
      "Lots of parking space so you and your team can arrive hassle-free. No stress about finding a spot!",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Full Equipment",
    description:
      "Bats, balls, pads, gloves, stumps — we provide all the gear you need. Just show up and play! Water bottles available too.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Spacious",
    description:
      "Big play area with strong boundary nets, pleasant environment, no disturbance from residents. A safe and fun experience.",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Why Choose GB Cric Zone
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">
            Everything You Need to{" "}
            <span className="gradient-text">Play Cricket</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The biggest and best box cricket ground around Uppal & Boduppal.
            A safe, fun, and high-quality playing experience with friendly management!
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <feature.icon size={26} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover border accent */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/20 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
