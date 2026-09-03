import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Instagram } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inventory & Gear', href: '#products' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Founders', href: '#founders' },
    { name: 'Store & Directions', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/90 shadow-lg shadow-black/20'
          : 'bg-[#0b0f17] border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 focus:outline-none group">
            <BrandLogo size="md" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white font-display uppercase group-hover:text-slate-200 transition-colors">
                  {STORE_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700/60 hidden sm:inline-block">
                  Delhi Hub
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 tracking-normal font-normal">
                DSLR Camera Hub • Ayush Jain &amp; Vaibhav
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Instagram Quick Link */}
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-gradient-to-tr hover:from-pink-600 hover:to-amber-500 text-slate-300 hover:text-white transition-all border border-slate-700/60"
              title="Follow @gadgetzone_delhi on Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <div className="flex flex-col text-right pl-2 border-l border-slate-800">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Store Inquiries
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                <a
                  href={`tel:${STORE_INFO.phoneAyushRaw}`}
                  className="hover:text-white transition-colors"
                  title="Call Ayush Jain"
                >
                  99997 52220
                </a>
                <span className="text-slate-600">/</span>
                <a
                  href={`tel:${STORE_INFO.phoneVaibhavRaw}`}
                  className="hover:text-white transition-colors"
                  title="Call Vaibhav"
                >
                  97165 29933
                </a>
              </div>
            </div>

            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-cta"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-pink-400 hover:text-white border border-slate-700/70"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1017] border-b border-slate-800 px-5 py-4 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-white py-1.5 px-2 rounded hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-pink-600/20 to-amber-500/20 border border-pink-500/30 text-pink-300 text-xs font-semibold"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram @gadgetzone_delhi</span>
            </a>

            <div className="text-xs text-slate-400 pt-1">
              Direct Contact (10:30 AM – 8:30 PM):
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${STORE_INFO.phoneAyushRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Ayush</span>
              </a>
              <a
                href={`tel:${STORE_INFO.phoneVaibhavRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Vaibhav</span>
              </a>
            </div>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
