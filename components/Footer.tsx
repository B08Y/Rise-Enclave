import Link from 'next/link';
import { Home, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-8 h-8 rounded-full bg-gradient-beige flex items-center justify-center text-charcoal-950">
                <Home size={16} strokeWidth={2.5} />
              </div>
              <span className="font-heading text-xl font-semibold tracking-tight text-white">
                Rise <span className="text-beige-400">Enclave</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Curating the world&apos;s most exceptional properties for discerning clients. Experience luxury real estate redefined.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-beige-400 hover:border-beige-500/30 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-beige-400 hover:border-beige-500/30 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-beige-400 hover:border-beige-500/30 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-beige-400 hover:border-beige-500/30 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">Home</Link></li>
              <li><Link href="#featured" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">Featured Properties</Link></li>
              <li><Link href="#listings" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">All Listings</Link></li>
              <li><Link href="#about" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">Property Buying</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">Property Selling</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">Property Renting</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-beige-300 text-sm transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">Subscribe to receive updates on exclusive new listings.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-charcoal-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-beige-500/50 w-full"
              />
              <button 
                type="button"
                className="bg-beige-500 hover:bg-beige-400 text-charcoal-950 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Rise Enclave. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
