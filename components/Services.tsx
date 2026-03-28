import { motion } from 'motion/react';
import { Home, Key, Search, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Home size={32} />,
    title: 'Property Buying',
    description: 'We guide you through the entire process of finding and purchasing your dream home with expert negotiation.',
  },
  {
    icon: <Key size={32} />,
    title: 'Property Selling',
    description: 'Maximize your property\'s value with our strategic marketing, staging advice, and extensive network.',
  },
  {
    icon: <Search size={32} />,
    title: 'Property Renting',
    description: 'Find premium rental properties that match your lifestyle, or let us manage your rental investments.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Consulting',
    description: 'Get expert advice on real estate investments, market trends, and portfolio management.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-start group"
            >
              <div className="w-16 h-16 rounded-2xl bg-charcoal-950 flex items-center justify-center text-beige-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-white group-hover:text-beige-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
