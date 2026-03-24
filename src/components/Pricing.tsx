"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Morning Slot",
    time: "6:00 AM – 12:00 PM",
    price: "₹800",
    per: "per hour",
    features: [
      "Fresh morning turf",
      "Natural + LED lighting",
      "Full equipment provided",
      "Drinking water included",
    ],
    popular: false,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "Afternoon Slot",
    time: "12:00 PM – 4:00 PM",
    price: "₹700",
    per: "per hour",
    features: [
      "Budget-friendly rate",
      "Full LED lighting",
      "Full equipment provided",
      "Drinking water included",
    ],
    popular: false,
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    name: "Evening Slot",
    time: "4:00 PM – 10:00 PM",
    price: "₹1,200",
    per: "per hour",
    features: [
      "Prime time cricket",
      "Full floodlight experience",
      "Full equipment provided",
      "Drinking water included",
      "Background music",
    ],
    popular: true,
    gradient: "from-primary to-accent",
  },
  {
    name: "Late Night Slot",
    time: "10:00 PM – 6:00 AM",
    price: "₹1,000",
    per: "per hour",
    features: [
      "Open 24 hours!",
      "Full floodlight experience",
      "Full equipment provided",
      "Drinking water included",
      "Quiet environment",
    ],
    popular: false,
    gradient: "from-purple-600 to-pink-500",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">
            Simple,{" "}
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No hidden fees, no surprises. Pick a slot, book via WhatsApp, and
            show up to play. Open 24/7 — it&apos;s that simple!
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-accent shadow-xl shadow-accent/10"
                  : "hover:shadow-xl hover:shadow-black/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-accent-light text-black text-xs font-bold text-center py-1.5 tracking-wider uppercase flex items-center justify-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className={`p-6 sm:p-8 ${plan.popular ? "pt-10" : ""}`}>
                {/* Plan header */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400 mb-5">{plan.time}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">
                    {plan.per}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <Check
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20the%20${encodeURIComponent(plan.name)}%20at%20GB%20Cric%20Zone`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-accent to-accent-light text-black hover:shadow-lg hover:shadow-accent/30"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <MessageCircle size={18} />
                  Book This Slot
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          * Prices may vary on special events. Contact us for group bookings and
          tournament rates.
        </motion.p>
      </div>
    </section>
  );
}
