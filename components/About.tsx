import { motion } from 'motion/react';
import Image from 'next/image';
import { Shield, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-beige-900/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Redefining <span className="text-gradient">Luxury</span> Real Estate
            </h2>
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              At Rise Enclave, we believe that finding a home is more than just a transaction&mdash;it&apos;s a life-changing experience. We take pride in offering an exclusive portfolio of the world&apos;s most luxurious properties.
            </p>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
              With over two decades of expertise, our dedicated team provides unparalleled service, ensuring discretion, integrity, and exceptional results for our discerning clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center border border-white/5">
                  <Shield className="text-beige-400" size={24} />
                </div>
                <h4 className="font-semibold text-white">Trust</h4>
                <p className="text-sm text-zinc-500">Absolute discretion</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center border border-white/5">
                  <Award className="text-beige-400" size={24} />
                </div>
                <h4 className="font-semibold text-white">Excellence</h4>
                <p className="text-sm text-zinc-500">Award-winning service</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center border border-white/5">
                  <Clock className="text-beige-400" size={24} />
                </div>
                <h4 className="font-semibold text-white">Experience</h4>
                <p className="text-sm text-zinc-500">20+ years in market</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://picsum.photos/seed/agency/800/1000"
                alt="Rise Enclave Agency"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              
              {/* Floating stats card */}
              <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6 flex justify-around items-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-beige-300 font-heading">150+</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Properties Sold</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-beige-300 font-heading">$2B+</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Sales Volume</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
