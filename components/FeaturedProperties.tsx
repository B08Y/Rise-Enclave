import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Glass Villa',
    price: '$4,500,000',
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 6,
    area: '6,200 sqft',
    image: 'https://picsum.photos/seed/villa1/800/600',
  },
  {
    id: 2,
    title: 'Oceanfront Penthouse',
    price: '$3,200,000',
    location: 'Miami Beach, FL',
    beds: 3,
    baths: 3.5,
    area: '3,800 sqft',
    image: 'https://picsum.photos/seed/penthouse/800/600',
  },
  {
    id: 3,
    title: 'Minimalist Estate',
    price: '$5,800,000',
    location: 'Aspen, CO',
    beds: 6,
    baths: 7,
    area: '8,500 sqft',
    image: 'https://picsum.photos/seed/estate/800/600',
  },
];

export default function FeaturedProperties() {
  return (
    <section id="featured" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Properties</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Discover our hand-picked selection of the most exclusive and luxurious properties available on the market.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-beige-300 hover:text-beige-100 border-b border-beige-500/30 hover:border-beige-300 pb-1 transition-colors self-start md:self-auto"
          >
            View All Featured
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-charcoal-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <span className="text-beige-300 font-semibold">{property.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold mb-2 group-hover:text-beige-300 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-zinc-400 mb-6">
                  <MapPin size={16} className="mr-2 text-beige-500" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="flex flex-col items-center justify-center">
                    <Bed size={20} className="text-beige-500 mb-1" />
                    <span className="text-xs text-zinc-400">{property.beds} Beds</span>
                  </div>
                  <div className="flex flex-col items-center justify-center border-x border-white/10">
                    <Bath size={20} className="text-beige-500 mb-1" />
                    <span className="text-xs text-zinc-400">{property.baths} Baths</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Square size={20} className="text-beige-500 mb-1" />
                    <span className="text-xs text-zinc-400">{property.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
