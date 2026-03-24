"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jashwanth Gorige",
    badge: "Local Guide",
    rating: 5,
    time: "a month ago",
    text: "Best box cricket around Uppal, spacious ground and friendly management. Lot of parking space.",
    avatar: "JG",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Uday Kumar",
    badge: "Local Guide",
    rating: 5,
    time: "2 months ago",
    text: "The box cricket ground is clean, well-organized, and professionally maintained. The turf quality is good, the boundary nets are strong, and the lighting allows smooth play even during night sessions. Overall, it offers a safe, fun, and high-quality playing experience.",
    avatar: "UK",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Devendhar Kuruma",
    badge: "Reviewer",
    rating: 5,
    time: "8 months ago",
    text: "Big play area in and around Uppal, Boduppal.. with pleasant environment, no disturbance (no residents beside), good parking space, Water bottles available... good management and staff... overall 5 star.",
    avatar: "DK",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-20 sm:py-28 relative">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">
            What Players{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.9</span>
            <span className="text-gray-400">/ 5 on Google</span>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass rounded-2xl p-6 sm:p-8 relative group hover:bg-white/5 transition-all hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="absolute top-4 right-4 text-accent/10 group-hover:text-accent/20 transition-colors"
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {review.badge} · {review.time}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://maps.app.goo.gl/ciT7yUy3uwBLBtV17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass text-accent rounded-full font-medium text-sm hover:bg-white/10 transition-all hover:scale-105"
          >
            <Star size={16} className="fill-accent" />
            See all reviews on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
