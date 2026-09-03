import React from 'react';
import { Phone } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0b0f17]/95 backdrop-blur-md border-t border-slate-800/90 px-4 py-2.5 shadow-2xl safe-area-pb">
      <a
        href={`tel:${STORE_INFO.phoneAyushRaw}`}
        id="mobile-primary-cta"
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 active:bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-98"
        aria-label="Call Store"
      >
        <Phone className="w-4 h-4 text-slate-900" />
        <span>Call Store: +91 99997 52220</span>
      </a>
    </div>
  );
};
