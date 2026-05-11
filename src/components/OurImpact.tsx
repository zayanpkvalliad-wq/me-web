import { motion } from 'motion/react';
import { Handshake, MapPin, CalendarDays, Car } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Handshake,
    number: "9,500+",
    label: "Customers",
  },
  {
    id: 2,
    icon: MapPin,
    number: "3",
    label: "Branches",
  },
  {
    id: 3,
    icon: CalendarDays,
    number: "10+",
    label: "Year Of Experience",
  },
  {
    id: 4,
    icon: Car,
    number: "4,200+",
    label: "Vehicles Sold", // Fix grammar from "Vehicle Sold" to "Vehicles Sold"
  }
];

export default function OurImpact() {
  // Animation variants for staggered text reveal
  const text = "Our Impact In Used Car Service";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-black py-24 px-6 lg:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-3xl font-serif tracking-widest text-gold uppercase flex justify-center flex-wrap gap-[0.3em]">
            {words.map((word, index) => (
              <motion.span variants={child} key={index} className="inline-block">
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="mb-6 p-5 rounded-full bg-white/5 border border-white/10 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/50 shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:bg-white/10">
                <stat.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
              </div>
              <div className="text-4xl md:text-5xl font-display font-light text-white mb-3 tracking-tight">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
