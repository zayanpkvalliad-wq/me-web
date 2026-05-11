import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549235081-3d44bc48152c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Showroom" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 luxury-gradient" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-4 block">Excellence in Motion</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tight">
            Drive Away With <br /> 
            <span className="italic text-gold-light">Confidence</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the pinnacle of automotive engineering. From timeless classics to cutting-edge electric performance, our showroom defines luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold text-black px-8 py-4 rounded-full font-display font-semibold transition-all hover:bg-gold-light hover:scale-105 flex items-center gap-2 group">
              Explore Inventory
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-display font-semibold border border-white/20 hover:bg-white/5 transition-all">
              Schedule Service
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 bottom-0 top-0 w-[1px] bg-white/5 hidden xl:block" />
      <div className="absolute right-10 bottom-0 top-0 w-[1px] bg-white/5 hidden xl:block" />
    </section>
  );
}
