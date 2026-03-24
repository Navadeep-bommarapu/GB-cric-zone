"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">
            Come Play at{" "}
            <span className="gradient-text">GB Cric Zone</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Located in Uppal, Peerzadiguda — easy to reach from anywhere in
            Hyderabad. Open 24 hours, just walk in!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden glass"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2733018795066!2d78.58579399999999!3d17.398667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f00411e8f31%3A0xdf3087b35091b2e0!2sGB%20Cric%20Zone!5e0!3m2!1sen!2sin!4v1774347995839!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GB Cric Zone - Box Cricket Ground Location in Uppal, Hyderabad"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6 group hover:bg-white/5 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Address</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    GB Cric Zone,
                    <br />
                    2, Bk Kumar Nagar, Gayatri Nagar,
                    <br />
                    Uppal, Peerzadiguda,
                    <br />
                    Hyderabad, Telangana 500098
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 group hover:bg-white/5 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Timings</h3>
                  <div className="text-gray-400 text-sm space-y-1">
                    <p className="text-accent font-semibold text-base">Open 24 Hours</p>
                    <p>Every day, including weekends &amp; holidays!</p>
                    <p className="text-accent text-xs mt-2">
                      🏏 Walk in anytime and play!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 group hover:bg-white/5 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Phone / WhatsApp</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-400 text-sm hover:text-accent transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/ciT7yUy3uwBLBtV17"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 group hover:bg-white/5 transition-colors flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                <ExternalLink size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Open in Google Maps</h3>
                <p className="text-gray-400 text-sm">
                  Get directions to GB Cric Zone →
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
