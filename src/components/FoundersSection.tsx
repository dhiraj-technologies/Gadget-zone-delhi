import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight, Instagram, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const FoundersSection: React.FC = () => {
  return (
    <section id="founders" className="py-16 sm:py-24 bg-[#0b0f17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Operating Principles */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                The Store Standard
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
                How We Deal in Professional Gear
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                We believe high-end cameras and cinema lenses should never be bought on blind trust. Our Shahdara store operates on open-counter verification and honest trade rates.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-2">
              <div className="border-l-2 border-emerald-500 pl-4 space-y-1 bg-[#111622]/40 p-3 rounded-r-lg">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                  1. Bring Your Memory Card
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Mount lenses, shoot raw test frames, and evaluate optical resolution on our counter. We encourage every customer to thoroughly verify sensor clean-plates before leaving.
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4 space-y-1 bg-[#111622]/40 p-3 rounded-r-lg">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                  2. Competitive Delhi Market Rates
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Direct pricing for commercial cinematographers, wedding studios, and content creators looking to upgrade without middleman markups.
                </p>
              </div>

              <div className="border-l-2 border-amber-500 pl-4 space-y-1 bg-[#111622]/40 p-3 rounded-r-lg">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                  3. Outstation Dispatch &amp; Strict No-COD Policy
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We ship pan-India with reinforced multi-layer shockproof packing and courier tracking. Because calibrated optics cannot tolerate return-transit hazards, all dispatches are strictly 100% prepaid.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111622] border border-slate-800 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Direct Founder Desk
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                  Speak Directly With the Owners
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  No generic customer care. Ayush and Vaibhav manage every consultation personally.
                </p>
              </div>

              {/* Founder 1: Ayush */}
              <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800/90 space-y-3 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Ayush Jain</h4>
                    <span className="text-xs text-slate-400">Co-Founder • Camera Bodies &amp; Systems</span>
                  </div>
                  <span className="text-xs text-slate-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    +91 99997 52220
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${STORE_INFO.phoneAyushRaw}`}
                    className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium text-center transition-colors flex items-center justify-center gap-1.5 border border-slate-700/80"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Call Ayush</span>
                  </a>
                  <a
                    href={STORE_INFO.whatsappAyushUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Founder 2: Vaibhav */}
              <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800/90 space-y-3 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Vaibhav</h4>
                    <span className="text-xs text-slate-400">Co-Founder • Lenses, Gimbals &amp; Dispatch</span>
                  </div>
                  <span className="text-xs text-slate-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    +91 97165 29933
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${STORE_INFO.phoneVaibhavRaw}`}
                    className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium text-center transition-colors flex items-center justify-center gap-1.5 border border-slate-700/80"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Call Vaibhav</span>
                  </a>
                  <a
                    href={STORE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Social Link in Founder Desk */}
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-pink-500/10 to-amber-500/10 border border-pink-500/20 text-xs text-pink-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span className="font-semibold">Watch Ayush &amp; Vaibhav on Instagram</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="text-[11px] text-slate-400 pt-1 text-center sm:text-left">
                Store Hours: Monday – Sunday, 10:30 AM to 8:30 PM (Open All 7 Days)
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
