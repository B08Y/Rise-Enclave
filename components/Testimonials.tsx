import { motion } from 'motion/react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor Vance',
    role: 'Homeowner',
    content: 'Rise Enclave made finding our dream home an absolute breeze. Their attention to detail and understanding of our needs was unparalleled.',
    image: 'https://picsum.photos/seed/user1/200/200',
  },
  {
    name: 'James Sterling',
    role: 'Property Investor',
    content: 'I have worked with many agencies, but the level of professionalism and market insight here is simply unmatched. Highly recommended.',
    image: 'https://picsum.photos/seed/user2/200/200',
  },
  {
    name: 'Sophia Laurent',
    role: 'Seller',
    content: 'They handled the sale of my estate with the utmost discretion and secured a price well above my expectations. Truly exceptional service.',
    image: 'https://picsum.photos/seed/user3/200/200',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear what our valued clients have to say about their experience with Rise Enclave.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <div className="flex text-beige-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-zinc-300 italic mb-8 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-beige-500/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-beige-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
