import { Instagram, Facebook, Youtube, Apple, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 overflow-hidden">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-1">
              <div className="border-2 border-white/20 p-2 px-4 inline-block">
                <span className="font-display font-bold text-xl tracking-[0.2em] uppercase">LuxeDrive</span>
              </div>
              <span className="text-[10px] text-white/50 tracking-wider uppercase">The Cruise of Luxury Begins Here</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-gold-light">Trusted name in the auto world</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Created a benchmark in the pre-owned automotive industry, LuxeDrive is a galore of the most exotic and expensive imported cars.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-lg text-gold-light">Reach Us</h4>
              <div className="text-white/70 text-sm space-y-1 tabular-nums">
                <p>+1 (555) 000 9999</p>
                <p>sales@luxedrive.in</p>
                <p>MON - FRI 9 AM - 7 PM</p>
                <p>SUNDAY - Holiday</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:pl-12">
            <h3 className="font-serif text-xl mb-8 text-gold-light">Explore</h3>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">News</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Star Deliveries</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter and App Stores */}
          <div className="lg:col-span-2 lg:pl-12">
            <h3 className="font-serif text-xl mb-6 text-gold-light">Newsletter</h3>
            <p className="text-white/80 mb-6 font-medium">Stay up to speed on the latest at LuxeDrive.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border border-white/5 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold/50 flex-grow"
              />
              <button className="bg-gold text-black px-8 py-3 rounded-md font-display font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-colors shadow-lg shadow-gold/20">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Apple className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Download on the</p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Play className="w-7 h-7 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Get it on</p>
                  <p className="text-lg font-bold leading-none">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative lines from screenshot footer bottom */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t-2 border-double border-white/10">
        <div className="w-full h-[1px] bg-white/5 mt-1" />
        <div className="w-full h-[1px] bg-white/5 mt-1" />
      </div>
    </footer>
  );
}
