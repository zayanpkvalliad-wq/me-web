import { motion } from 'motion/react';
import { Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-24 flex items-center px-4 lg:px-12 justify-between"
    >
      {/* Logo Area */}
      <div className="flex flex-col items-center">
        <div className="border-2 border-white/20 p-1 px-3">
          <span className="font-display font-bold text-lg tracking-[0.2em] uppercase leading-none">LuxeDrive</span>
        </div>
        <span className="text-[7px] text-white/50 tracking-widest uppercase mt-1">The Cruise of Luxury Begins Here</span>
      </div>

      {/* Main Nav Items */}
      <div className="hidden xl:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
        <a href="#inventory" className="hover:text-gold transition-colors">Models</a>
        <a href="#" className="hover:text-gold transition-colors">Star Deliveries</a>
        <a href="#" className="hover:text-gold transition-colors">Genesis</a>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4 lg:gap-8">
        <button className="gold-gradient-button px-6 py-3 rounded-md text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-gold/10 hidden sm:block hover:brightness-110 transition-all">
          Sell Your Vehicle
        </button>

        <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-white">
          <a href="#" className="hover:text-gold transition-colors hidden lg:block">Support</a>
          <button className="p-1 hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a href="#" className="hover:text-gold transition-colors hidden sm:block">Login</a>
          <button className="p-1 hover:text-gold transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
