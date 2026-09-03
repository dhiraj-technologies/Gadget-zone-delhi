import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MessageSquare, Instagram } from 'lucide-react';
import { FREQUENT_QUESTIONS, STORE_INFO } from '../data/storeData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0b0f17] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mb-12"
        >
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Store Policies &amp; Clarity
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Clear guidelines on counter testing, prepaid shipping across India, and why precision camera optics cannot be sent via COD.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-[#111622] overflow-hidden transition-colors hover:border-slate-700/80"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3.5"
                  >
                    {item.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Contact Help */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400">
          <span>Need more info before visiting or ordering?</span>
          <div className="flex items-center gap-3">
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <span>•</span>
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline font-semibold flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
