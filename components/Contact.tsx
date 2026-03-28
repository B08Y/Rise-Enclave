import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-zinc-400 mb-12 text-lg">
              Ready to find your dream property or list your current home? Contact our team of experts today for a confidential consultation.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center border border-white/5 shrink-0">
                  <MapPin className="text-beige-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Office Location</h4>
                  <p className="text-zinc-400 text-sm">90210 Beverly Hills Blvd<br />Los Angeles, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center border border-white/5 shrink-0">
                  <Phone className="text-beige-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone Number</h4>
                  <p className="text-zinc-400 text-sm">+1 (310) 555-0198<br />Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center border border-white/5 shrink-0">
                  <Mail className="text-beige-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Address</h4>
                  <p className="text-zinc-400 text-sm">inquiries@riseenclave.com<br />support@riseenclave.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <h3 className="font-heading text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm text-zinc-400">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-beige-500/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm text-zinc-400">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-beige-500/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-zinc-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-charcoal-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-beige-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-charcoal-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-beige-500/50 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="button"
                className="w-full py-4 rounded-xl bg-gradient-beige text-charcoal-950 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
