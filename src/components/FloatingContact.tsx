import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-[#1e293b]/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 pr-12 shadow-2xl relative overflow-hidden"
          >
            {/* The circular contact widget design from screenshot */}
            <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-white/5 pointer-events-none" />
            
            <div className="flex flex-col gap-6 relative z-10">
              <a href="tel:+15550009999" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-gold transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest hidden sm:block">Call Us</span>
              </a>

              <a href="mailto:sales@luxedrive.in" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-gold transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest hidden sm:block">Mail Us</span>
              </a>

              <a href="https://wa.me/15550009999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-gold transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest hidden sm:block">WhatsApp</span>
              </a>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gold text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
