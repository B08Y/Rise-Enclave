import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Contemporary Loft',
    price: '$1,850,000',
    location: 'Downtown LA, CA',
    beds: 2,
    baths: 2,
    area: '2,100 sqft',
    image: 'https://picsum.photos/seed/loft/600/400',
  },
  {
    id: 2,
    title: 'Hillside Retreat',
    price: '$2,950,000',
    location: 'Hollywood Hills, CA',
    beds: 4,
    baths: 3,
    area: '3,400 sqft',
    image: 'https://picsum.photos/seed/hillside/600/400',
  },
  {
    id: 3,
    title: 'Luxury Condo',
    price: '$1,200,000',
    location: 'Brickell, FL',
    beds: 2,
    baths: 2.5,
    area: '1,800 sqft',
    image: 'https://picsum.photos/seed/condo/600/400',
  },
  {
    id: 4,
    title: 'Historic Townhouse',
    price: '$3,100,000',
    location: 'Brooklyn, NY',
    beds: 4,
    baths: 3.5,
    area: '3,200 sqft',
    image: 'https://picsum.photos/seed/townhouse/600/400',
  },
  {
    id: 5,
    title: 'Desert Oasis',
    price: '$2,450,000',
    location: 'Scottsdale, AZ',
    beds: 3,
    baths: 3,
    area: '4,100 sqft',
    image: 'https://picsum.photos/seed/desert/600/400',
  },
  {
    id: 6,
    title: 'Lakefront Cabin',
    price: '$1,650,000',
    location: 'Lake Tahoe, NV',
    beds: 3,
    baths: 2,
    area: '2,400 sqft',
    image: 'https://picsum.photos/seed/cabin/600/400',
  },
];

export default function Listings() {
  return (
    <section id="listings" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Listings</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our newest properties added to the market. Find the perfect home that suits your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-charcoal-950 rounded-2xl overflow-hidden border border-white/5 hover:border-beige-500/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xl font-bold text-white drop-shadow-md">{property.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-beige-300 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-zinc-400 mb-4">
                  <MapPin size={14} className="mr-2 text-beige-500" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <Bed size={16} className="text-beige-500" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="flex items-center gap-1.5">
                    <Bath size={16} className="text-beige-500" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="flex items-center gap-1.5">
                    <Square size={16} className="text-beige-500" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-beige-500/50 text-beige-200 hover:bg-beige-500/10 transition-colors font-medium">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
}
