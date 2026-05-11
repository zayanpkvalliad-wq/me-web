import { motion } from 'motion/react';
import { Award, Wallet, ShieldCheck, ClipboardCheck, Crown, BadgeDollarSign } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "High quality automobile",
  },
  {
    icon: Wallet,
    title: "Value for money",
  },
  {
    icon: ShieldCheck,
    title: "Flood - free policy",
  },
  {
    icon: ClipboardCheck,
    title: "Vehicles With proper service history",
  },
  {
    icon: Crown,
    title: "Sell your car in 1 hour",
  },
  {
    icon: BadgeDollarSign,
    title: "Get the best price for your car",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-deep py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative lines from screenshot */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 flex gap-1 transform">
        <div className="w-[1px] h-full bg-gold-light/20" />
        <div className="w-[1px] h-full bg-gold-light/20" />
        <div className="w-[1px] h-full bg-gold-light/20" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 pl-12 lg:pl-20">
        {/* Left Content */}
        <div className="lg:w-1/3 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-white/90 mb-8 leading-tight tracking-tight">
              Why <br /> choose us?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              LuxeDrive provides the best service to all our customers. Our commitment to excellence defines every interaction.
            </p>
          </motion.div>
        </div>

        {/* Right Grid */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-10 h-10 text-gold-light opacity-80" strokeWidth={1} />
              </div>
              <h3 className="text-sm font-serif text-white/80 leading-snug max-w-[140px]">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
