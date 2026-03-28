import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/luxuryhome/1920/1080"
          alt="Luxury Real Estate"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-beige-500/30 bg-beige-500/10 text-beige-300 text-sm font-medium tracking-wider uppercase mb-6">
            Exclusive Properties
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Find Your <br className="hidden md:block" />
          <span className="text-gradient">Dream Property</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Premium properties curated for modern living. Experience luxury, comfort, and elegance in every detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#listings"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-beige text-charcoal-950 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
          >
            Browse Listings
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-beige-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
