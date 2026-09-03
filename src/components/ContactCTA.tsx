import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, Send, CheckCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const ContactCTA: React.FC = () => {
  const [selectedGear, setSelectedGear] = useState('Camera Body / Lens');
  const [customNote, setCustomNote] = useState('');
  const [preferredDay, setPreferredDay] = useState('Today');

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Gadget Zone Delhi,\n\nI would like to inquire about:\n- Item/Category: ${selectedGear}\n- Details: ${customNote.trim() || 'Please share stock availability and current pricing.'}\n- Planned Store Visit: ${preferredDay}\n\nThank you!`;
    const encoded = encodeURIComponent(message);
    window.open(`${STORE_INFO.whatsappUrl}?text=${encoded}`, '_blank');
  };

  const gearOptions = [
    'Camera Body (Mirrorless/DSLR)',
    'Prime Lens (35mm / 50mm / 85mm)',
    'Zoom Lens (24-70mm / 70-200mm)',
    'Gimbal & Stabilizer',
    'Studio Lighting & Modifiers',
    'Wireless Mic & Audio Kit',
    'Trade-in / Upgrade Consultation',
    'General Stock & Price Inquiry',
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a0e17] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111622] border border-slate-800 text-xs font-semibold text-emerald-400">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp &amp; Call Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
            Ready to Check Gear or Visit Store?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach out directly for instant stock availability, live in-store demo scheduling, or personalized camera recommendations in Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Call & WhatsApp Touchpoints */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0f141f] border border-slate-800 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#141b27] border border-slate-800 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">Direct Phone Call</span>
                  <h3 className="text-sm font-bold text-white font-display">Speak Directly with Store</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Call our direct Delhi line during store hours (10:30 AM – 8:30 PM) for immediate assistance.
              </p>
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                id="contact-call-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#141b27] hover:bg-[#1a2333] text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call {STORE_INFO.phone}</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0f141f] border border-slate-800 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#141b27] border border-slate-800 text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">Instant WhatsApp</span>
                  <h3 className="text-sm font-bold text-white font-display">Chat on WhatsApp</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Fast responses for price verification, unit photos, and stock reservation.
              </p>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp ({STORE_INFO.phone})</span>
              </a>
            </div>

            {/* Directions Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0f141f] border border-slate-800 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#141b27] border border-slate-800 text-blue-400">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">In-Store Visit</span>
                  <h3 className="text-sm font-bold text-white font-display">Navigate via Google Maps</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Get driving or transit directions straight to Gadget Zone Delhi.
              </p>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Launch Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-[#0f141f] border border-slate-800 space-y-5">
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold">1-Click WhatsApp Inquirer</span>
                <h3 className="text-base font-bold text-white font-display">
                  Quick Stock &amp; Price Message Form
                </h3>
                <p className="text-xs text-slate-400">
                  Select what you need below to generate a clear, formatted message to send directly to our WhatsApp.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                
                {/* Select Gear Option */}
                <div className="space-y-1">
                  <label htmlFor="gear-select" className="block text-xs font-semibold text-slate-200">
                    Select Equipment or Inquiry Type
                  </label>
                  <select
                    id="gear-select"
                    value={selectedGear}
                    onChange={(e) => setSelectedGear(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141b27] border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {gearOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#141b27] text-slate-100">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Specific Model / Note */}
                <div className="space-y-1">
                  <label htmlFor="custom-note" className="block text-xs font-semibold text-slate-200">
                    Specific Model Name or Question (Optional)
                  </label>
                  <textarea
                    id="custom-note"
                    rows={3}
                    placeholder="e.g. Sony A7IV, Canon 85mm f/1.4, DJI RS3 gimbal, or general question..."
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#141b27] border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Planned Visit Timing */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-200">
                    When are you planning to visit or purchase?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Today', 'This Weekend', 'Just Inquiring'].map((day) => (
                      <button
                        type="button"
                        key={day}
                        onClick={() => setPreferredDay(day)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                          preferredDay === day
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-[#141b27] text-slate-300 border-slate-700 hover:bg-[#1a2333]'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-whatsapp-builder-btn"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send WhatsApp Inquiry (+91 97165 29933)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct conversation with store team in Delhi</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
