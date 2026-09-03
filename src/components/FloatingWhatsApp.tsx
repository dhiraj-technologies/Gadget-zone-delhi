import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      href={STORE_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp-btn"
      className="fixed bottom-16 md:bottom-6 right-4 md:right-6 z-40 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl transition-all"
      aria-label="Inquire on WhatsApp"
      title="Inquire on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </motion.a>
  );
};
