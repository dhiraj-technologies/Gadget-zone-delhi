import React from 'react';
import { ShieldCheck, Eye, Navigation, Coins, PhoneCall, Users, CheckCircle, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US, STORE_INFO } from '../data/storeData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-emerald-400" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-sky-400" />;
      case 'Coins': return <Coins className="w-5 h-5 text-amber-400" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-indigo-400" />;
      default: return <Users className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-[#080b11] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111622] border border-slate-800 text-xs font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Store Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
            Why Delhi Creators Trust Gadget Zone
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Buying camera optics and electronics requires trust, physical verification, and clear guidance. Here is our commitment to every photographer and creator who visits us.
          </p>
        </div>

        {/* 6 Core Pillars Grid: Crisp solid cards, natural spacing, no generic gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0f141f] border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#141b27] border border-slate-800 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                
                <h3 className="text-base font-bold text-white font-display">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Verified in-store policy</span>
              </div>
            </div>
          ))}
        </div>

        {/* In-Store Testing Highlight Banner: Solid clean container */}
        <div className="mt-10 rounded-xl bg-[#0f141f] p-6 sm:p-8 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono uppercase text-blue-400 tracking-wider font-semibold">
                Customer-First Policy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Bring Your SD Card &amp; Camera Body to Test In-Store
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe you should never purchase camera gear without verifying the auto-focus tracking, sensor cleanliness, and optical sharpness with your own eyes.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate to Store</span>
              </a>
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#141b27] hover:bg-[#1a2333] text-slate-200 border border-slate-700 font-semibold text-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Call Before Visiting</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
