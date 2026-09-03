import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Check, Send } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const InquirySection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gearModel, setGearModel] = useState('');
  const [inquiryType, setInquiryType] = useState('Buy Gear');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    const message = `Hi Gadget Zone Delhi,\nName: ${name || 'Customer'}\nContact: ${phone}\nIntent: ${inquiryType}\nGear Required: ${gearModel || 'General Inquiry'}`;
    const waUrl = `${STORE_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-[#0d1017] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mb-10"
        >
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Fast Response Desk
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Request Rates &amp; Stock Availability
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Ayush and Vaibhav respond directly with current counter pricing, shutter counts, and shipping estimates.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-[#111622] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Forwarded to WhatsApp</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                If the chat window did not open automatically, you can message Ayush directly at +91 99997 52220.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-emerald-400 hover:text-emerald-300 underline pt-2 cursor-pointer font-medium"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rohit Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Camera / Lens Model Required
                  </label>
                  <input
                    type="text"
                    required
                    value={gearModel}
                    onChange={(e) => setGearModel(e.target.value)}
                    placeholder="e.g. Sony A7 IV, Canon R6 II, 24-70 GM"
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Requirement Type
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                  >
                    <option value="Buy Gear (Brand New / Open Box)">Buy Gear (Brand New / Open Box)</option>
                    <option value="Exchange / Sell My Old Camera">Exchange / Sell My Old Camera</option>
                    <option value="In-Store Counter Testing Appointment">In-Store Counter Testing Visit</option>
                    <option value="Pan-India Prepaid Delivery Query">Pan-India Prepaid Delivery Query</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Strictly No COD • 100% Insured Prepaid Courier or In-Store Handover
                </span>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md shadow-emerald-950/40 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry</span>
                </motion.button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
