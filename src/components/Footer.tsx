import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp, Instagram } from 'lucide-react';
import { STORE_INFO, GEAR_CATEGORIES } from '../data/storeData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0d14] border-t border-slate-800 text-slate-400 text-xs pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white uppercase tracking-tight font-display">
                  {STORE_INFO.name}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  DSLR Camera Hub • Delhi NCR
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Delhi’s dedicated source for mirrorless systems, cinema optics, and content creation gear. Managed directly by founders Ayush Jain and Vaibhav at Subhash Park, Shahdara.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>
                <strong className="text-slate-300">In-Store Testing:</strong> Bring your SD card to test camera autofocus, sensors, and optics at our counter.
              </div>
              <div>
                <strong className="text-slate-300">Outstation Dispatch:</strong> Insured pan-India prepaid delivery. Strictly no COD.
              </div>
            </div>
          </div>

          {/* Direct Founders Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
              Direct Contact &amp; Location
            </h4>
            
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`tel:${STORE_INFO.phoneAyushRaw}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ayush Jain: +91 99997 52220</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${STORE_INFO.phoneVaibhavRaw}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Vaibhav: +91 97165 29933</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-slate-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-slate-400" />
                  <span>Instagram: @gadgetzone_delhi</span>
                </a>
              </li>
              <li className="pt-1 flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address} (Near East Azad Nagar Metro)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>10:30 AM – 8:30 PM (Open All 7 Days)</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
              Equipment Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {GEAR_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <a href="#products" className="hover:text-white transition-colors">
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Gadget Zone (DSLR Camera Hub Delhi). All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
