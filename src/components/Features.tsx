import { ShieldCheck, Award, Zap, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Excellence",
    description: "Every vehicle undergoes a rigorous 200-point inspection by our master technicians."
  },
  {
    icon: Award,
    title: "Heritage Collection",
    description: "Access to exclusive auctions and rare classic vehicles not found anywhere else."
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    description: "Bespose customization and performance enhancement for your unique driving style."
  },
  {
    icon: Clock,
    title: "Bespoke Concierge",
    description: "A dedicated specialist to handle acquisition, maintenance, and door-to-door delivery."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-gold/30 transition-colors">
              <feature.icon className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-display font-semibold tracking-widest uppercase text-sm mb-4">{feature.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
