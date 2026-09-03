import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Phone, ArrowUpRight, Check, Instagram } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#0d1017] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Store Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Physical Showroom
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
                Visit Our Delhi Store
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                Located in Shahdara, right next to East Azad Nagar Metro Station. Drop by to examine cameras, test cinema lenses on the counter, and speak directly with the owners.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="border-t border-slate-800 pt-4 space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Store Address
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  {STORE_INFO.address}
                </p>
                <p className="text-xs text-slate-400">
                  {STORE_INFO.landmark} (Pink Line Metro)
                </p>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Counter Hours
                </span>
                <p className="text-sm font-semibold text-white">
                  10:30 AM – 8:30 PM • Open All 7 Days (Monday to Sunday)
                </p>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Recommended for In-Store Testing
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Bring your personal SD or CFexpress card for raw test captures.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Bring your camera body if you want to test mount fit or lens sharpness.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Check reels on Instagram @gadgetzone_delhi before visiting for fresh arrivals.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Navigation className="w-3.5 h-3.5 text-slate-900" />
                <span>Open in Google Maps</span>
              </motion.a>

              <a
                href={`tel:${STORE_INFO.phoneAyushRaw}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Call Store: 99997 52220</span>
              </a>
            </div>

          </motion.div>

          {/* Right: Map Embed with Clean Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 w-full"
          >
            <div className="border border-slate-800 bg-[#111622] rounded-2xl overflow-hidden shadow-xl">
              <div className="h-[320px] sm:h-[380px] w-full bg-slate-900">
                <iframe
                  src={STORE_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gadget Zone Delhi Store Location"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Shahdara, Delhi • Near East Azad Nagar Metro</span>
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
