import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Background with Darker Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
          alt="Trusted customers" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gold mt-6" />
            <h2 className="font-serif text-7xl md:text-9xl text-white/90 leading-[0.85] tracking-tighter">
              They <br />
              <span className="italic text-gold-light ml-8">trusted us</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 relative"
        >
          {/* Avatar circle */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-black border-4 border-white flex items-center justify-center overflow-hidden">
             <div className="w-12 h-12 bg-white rounded-full opacity-20" />
             <div className="absolute top-1/2 w-16 h-16 bg-white rounded-full translate-y-2 opacity-20" />
          </div>

          <div className="mt-8 text-center lg:text-left">
            <span className="text-4xl text-gray-200 font-serif leading-none h-4 inline-block">“</span>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              I am having an association with LuxeDrive for the past 3 years, both as a buyer and for selling my car. I bought a Mercedes Benz from them and the team made my purchase hassle free and easy. Delivery experience was fantastic and the follow-up was very good. The car was in excellent condition and did not have any trouble.
            </p>
            <span className="text-4xl text-gray-200 font-serif leading-none h-4 inline-block float-right -translate-y-4">”</span>
            
            <div className="mt-8 clear-both">
              <h4 className="font-display font-bold text-black uppercase tracking-widest text-sm">Dr. Kartik Kulshrestha</h4>
              <p className="text-gray-400 text-xs mt-1">Valued Customer</p>
            </div>
          </div>
          
          {/* Heart indicator from screenshot */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="w-6 h-6 text-red-500">❤️</div>
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
