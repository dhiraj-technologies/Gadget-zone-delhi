import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { GEAR_CATEGORIES, PRODUCTS_SERVICES_DATA, STORE_INFO } from '../data/storeData';

export const ProductsServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_SERVICES_DATA
    : PRODUCTS_SERVICES_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#0d1017] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80"
        >
          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Curated Equipment
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
              In-Store Cameras, Optics &amp; Cinema Gear
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Every body and lens is inspected on our counter. Bring your own memory card to test autofocus, optical sharpness, and sensor cleanliness before purchase.
          </p>
        </motion.div>

        {/* Category Filter Tabs with Horizontal Scroll for Mobile */}
        <div className="flex items-center gap-2 py-6 border-b border-slate-800/60 overflow-x-auto no-scrollbar scroll-smooth">
          {GEAR_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-md shadow-white/10 scale-102'
                    : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gear Catalog Grid with Stagger Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
        >
          <AnimatePresence>
            {filteredProducts.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#111622] border border-slate-800 hover:border-slate-700/90 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/40 transition-colors"
              >
                <div className="space-y-4">
                  
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Technical Highlights */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Verified Specifications
                    </span>
                    <div className="space-y-1 text-xs text-slate-300">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal Use Case */}
                  <div className="bg-[#0b0f17] p-3 rounded-lg border border-slate-800/80 text-xs text-slate-300">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                      Ideal For
                    </span>
                    <span className="mt-0.5 block">{item.idealFor}</span>
                  </div>

                </div>

                {/* Inquiry Action */}
                <div className="pt-4 mt-6 border-t border-slate-800/80">
                  <a
                    href={`${STORE_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi Gadget Zone Delhi, I am inquiring about the current rate and availability for: ${item.title} (${item.subtitle}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-200 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-slate-700 hover:border-emerald-500 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Check Current Rate &amp; Stock</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* In-Store Custom Request Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111622] to-[#151c2d] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Looking for a specific body, cinema prime, or wireless mic kit?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Tell Ayush or Vaibhav what you need. We source directly for Delhi creators with counter verification.
            </p>
          </div>
          <a
            href={`${STORE_INFO.whatsappUrl}?text=${encodeURIComponent("Hi Gadget Zone Delhi, I am looking for a specific camera/lens model. Please let me know if it's available.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md shrink-0 w-full md:w-auto"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Direct WhatsApp Query</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
