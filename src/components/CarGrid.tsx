import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cars, Car } from '../data/cars';
import { Fuel, Timer, Zap, X } from 'lucide-react';

export default function CarGrid() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const categories = ['All', 'Luxury', 'Sports', 'SUV', 'Electric'];

  const filteredCars = filter === 'All' 
    ? cars 
    : cars.filter(car => car.category === filter);

  return (
    <section id="inventory" className="py-24 px-6 lg:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Current Fleet</h2>
            <p className="text-white/40 max-w-md">Discover our exclusive collection of hand-picked luxury vehicles ready for immediate delivery.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-display tracking-widest uppercase transition-all ${
                  filter === cat 
                    ? 'bg-gold text-black' 
                    : 'bg-white/5 border border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedCar(car)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-display tracking-widest uppercase text-gold">
                    {car.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{car.brand}</p>
                      <h3 className="font-display font-bold text-xl group-hover:text-gold transition-colors">{car.model}</h3>
                    </div>
                    <span className="text-gold font-display font-medium">{car.year}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-white/30 uppercase tracking-tighter">Power</span>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-gold" />
                        <span className="text-sm font-medium">{car.specs.power}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-white/30 uppercase tracking-tighter">Acceleration</span>
                      <div className="flex items-center gap-1">
                        <Timer className="w-3 h-3 text-gold" />
                        <span className="text-sm font-medium">{car.specs.acceleration.split(' ')[0]}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-white/30 uppercase tracking-tighter">Engine</span>
                      <div className="flex items-center gap-1">
                        <Fuel className="w-3 h-3 text-gold" />
                        <span className="text-sm font-medium whitespace-nowrap">{car.specs.engine.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCar && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCar(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
            />
            
            <motion.div 
              layoutId={selectedCar.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/2 h-[300px] md:h-auto relative">
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.model}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-gold font-display text-sm tracking-[0.2em] uppercase mb-2 block">{selectedCar.brand}</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-4">{selectedCar.model}</h2>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-2xl font-display font-medium text-white">{selectedCar.price}</span>
                  <span className="text-white/40">Ex-showroom</span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { label: 'Engine', value: selectedCar.specs.engine },
                    { label: 'Max Power', value: selectedCar.specs.power },
                    { label: 'Max Torque', value: selectedCar.specs.torque },
                    { label: 'Acceleration', value: selectedCar.specs.acceleration },
                    { label: 'Top Speed', value: selectedCar.specs.topSpeed },
                    { label: 'Fuel Type', value: selectedCar.specs.fuelType },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1 text-gold">{spec.label}</p>
                      <p className="text-sm font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gold text-black py-4 rounded-xl font-display font-bold uppercase tracking-widest hover:bg-gold-light transition-all flex items-center justify-center gap-2">
                  Request Information
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
