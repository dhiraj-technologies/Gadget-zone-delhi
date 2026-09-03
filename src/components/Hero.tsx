import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, ArrowRight, Check, MapPin, Clock, Instagram, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#0b0f17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
                  East Azad Nagar Metro, Shahdara
                </span>
                <a
                  href="#instagram"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-medium hover:bg-pink-500/20 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>@gadgetzone_delhi</span>
                </a>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display">
                Professional Cameras, Cinema Optics &amp; Creator Gear.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Gadget Zone (DSLR Camera Hub) is Delhi’s dedicated source for mirrorless systems, cinema optics, and content creation equipment. Founded by <strong className="text-white font-medium">Ayush Jain</strong> and <strong className="text-white font-medium">Vaibhav</strong> at Shahdara, Delhi.
              </p>
            </div>

            {/* Operating Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 py-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111622] border border-slate-800">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Counter Testing Welcome</strong>
                  <span className="text-slate-400 text-xs">Bring your SD card to test autofocus, sensors &amp; optics in person.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111622] border border-slate-800">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Best Rate Guaranteed</strong>
                  <span className="text-slate-400 text-xs">Direct wholesale-competitive rates for bodies &amp; lenses.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111622] border border-slate-800">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Prepaid Shipping Across India</strong>
                  <span className="text-slate-400 text-xs">Insured multi-layer shockproof packing with tracking.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111622] border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Strictly No COD</strong>
                  <span className="text-slate-400 text-xs">Precision optics require prepaid or in-store settlement.</span>
                </div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-inquire"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Availability on WhatsApp</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${STORE_INFO.phoneAyushRaw}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-colors border border-slate-700/80"
                  title="Call Ayush Jain"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>Ayush: 99997 52220</span>
                </a>

                <a
                  href={`tel:${STORE_INFO.phoneVaibhavRaw}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-colors border border-slate-700/80"
                  title="Call Vaibhav"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>Vaibhav: 97165 29933</span>
                </a>
              </div>
            </div>

            {/* Store details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Open 7 Days (10:30 AM – 8:30 PM)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Subhash Park, Shahdara, Delhi - 110051</span>
              </span>
            </div>

          </motion.div>

          {/* Right: Counter Photo with Instagram Tag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-slate-800 bg-[#121622] rounded-2xl overflow-hidden shadow-xl">
              
              {/* Photo of store counter */}
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden bg-slate-900">
                <img
                  src="/assets/Screenshot_20260903_000848_Instagram.jpg"
                  alt="Ayush Jain at Gadget Zone Delhi counter with camera bodies and optics"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Direct Instagram Tag */}
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium hover:bg-pink-600 transition-colors shadow-md"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>@gadgetzone_delhi</span>
                </a>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-[#0e121a]">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-white text-sm">Gadget Zone Counter Desk</span>
                  <span className="text-slate-400 text-xs">Ayush Jain &amp; Vaibhav</span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Genuine equipment on counter. Mount lenses, check optical elements, and test sensors on the spot.
                </p>
                
                <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <a
                    href={STORE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors font-medium"
                  >
                    <span>Google Maps Directions</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  
                  <a
                    href="#instagram"
                    className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Instagram Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
