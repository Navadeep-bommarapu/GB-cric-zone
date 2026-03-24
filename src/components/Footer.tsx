"use client";

import { MessageCircle, MapPin, Phone } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Play? 🏏
          </h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8 text-lg">
            Don&apos;t wait — book your cricket session now at GB Cric Zone!
            Open 24 hours, just walk in or book via WhatsApp.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20a%20slot%20at%20GB%20Cric%20Zone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all hover:scale-105"
          >
            <MessageCircle size={22} />
            Book Now on WhatsApp
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  🏏
                </div>
                <span className="text-xl font-bold">
                  <span className="text-accent">GB</span>{" "}
                  <span className="text-white">Cric Zone</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                The best box cricket destination in Uppal & Peerzadiguda, Hyderabad.
                Spacious ground, premium turf, floodlights, and friendly management. Open 24/7!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Gallery", "Pricing", "Reviews", "Location"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-400 text-sm hover:text-accent transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Phone size={14} className="text-accent" />
                  <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPin size={14} className="text-accent mt-0.5" />
                  <span>
                    2, Bk Kumar Nagar, Gayatri Nagar,
                    <br />
                    Uppal, Peerzadiguda,
                    <br />
                    Hyderabad, Telangana 500098
                  </span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-white/10 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/ciT7yUy3uwBLBtV17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gray-400 text-sm hover:text-accent transition-colors"
              >
                📍 View on Google Maps →
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} GB Cric Zone. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Made with 🏏 for cricket lovers in Hyderabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
