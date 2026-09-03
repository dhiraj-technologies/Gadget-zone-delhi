import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ExternalLink, MessageCircle, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-14 sm:py-20 bg-[#0a0e17] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-[#111622] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-800">
            {/* Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0 shadow-lg">
              <img
                src="/assets/Screenshot_20260903_000848_Instagram.jpg"
                alt="Gadget Zone Delhi Instagram Profile"
                className="w-full h-full object-cover rounded-full border-2 border-[#111622]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Profile Info */}
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                  gadgetzone_delhi
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-medium">
                  <Instagram className="w-3 h-3 text-pink-400" />
                  <span>Official Instagram</span>
                </span>
              </div>
              <p className="text-sm font-medium text-slate-300">
                DSLR Camera Hub • Ayush Jain &amp; Vaibhav
              </p>
              <p className="text-xs text-slate-400">
                Subhash Park, Shahdara, Delhi • Best Rates for Camera Bodies &amp; Cinema Optics
              </p>
            </div>

            {/* Action */}
            <div className="self-stretch sm:self-auto flex flex-col gap-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="instagram-profile-button"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Details & WhatsApp Inquiry */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily stock announcements and newly arrived bodies</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct direct messaging for pricing and condition check</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Counter verification and testing updates from Shahdara</span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-xs text-slate-400 leading-relaxed">
                Saw something on our Instagram? Message us on WhatsApp with the model name or screenshot to verify immediate store availability.
              </p>
              <div className="pt-3">
                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Check Instagram Gear on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
