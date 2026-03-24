"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/hero.png",
    alt: "GB Cric Zone ground with floodlights at night",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-1.png",
    alt: "Close-up of the pitch and stumps at GB Cric Zone",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Cricket match in action at GB Cric Zone",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Aerial view of GB Cric Zone grounds",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-4.png",
    alt: "GB Cric Zone turf and floodlights - real ground photo",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-5.png",
    alt: "GB Cric Zone entrance and facility",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Our Ground
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">
            Take a Look at{" "}
            <span className="gradient-text">GB Cric Zone</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our spacious box cricket ground in Uppal, Peerzadiguda — clean,
            well-organized, and professionally maintained for the best experience.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${img.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelected(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors text-white"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
