import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsServices } from './components/ProductsServices';
import { InstagramSection } from './components/InstagramSection';
import { FoundersSection } from './components/FoundersSection';
import { InquirySection } from './components/InquirySection';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-pink-600 selection:text-white pb-14 md:pb-0">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Flow: Essential, High-Impact Sections */}
      <main className="flex-1">
        {/* 1. Hero: Editorial proposition & authentic store photo */}
        <Hero />

        {/* 2. Curated Equipment: Mirrorless, Cinema Optics & Creator Gear */}
        <ProductsServices />

        {/* 3. Instagram Reels & Live Counter Action */}
        <InstagramSection />

        {/* 4. The Store Standard & Direct Founder Desk (Ayush & Vaibhav) */}
        <FoundersSection />

        {/* 5. Instant Quote & Availability Request */}
        <InquirySection />

        {/* 6. In-Store Testimonials & Google Maps Rating */}
        <Reviews />

        {/* 7. Physical Showroom & Google Maps Directions */}
        <LocationSection />

        {/* 8. Essential Buyer FAQs & Policies */}
        <FAQSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Streamlined Mobile & Conversion Utilities */}
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
}
