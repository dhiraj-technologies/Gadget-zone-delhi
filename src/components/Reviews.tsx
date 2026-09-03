import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, Instagram } from 'lucide-react';
import { REVIEWS_DATA, STORE_INFO } from '../data/storeData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0b0f17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80"
        >
          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Counter Experience
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
              Photographer &amp; Creator Feedback
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
              <span className="ml-1.5 font-bold text-white">4.9 / 5.0</span>
            </div>
            <span>•</span>
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Google Maps Reviews</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {REVIEWS_DATA.slice(0, 4).map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-[#111622] border border-slate-800 rounded-xl p-6 space-y-4 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white text-sm">{rev.author}</span>
                  <span className="text-slate-400 text-xs">{rev.role}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Verified Counter Buyer
                </span>
                <span>{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
