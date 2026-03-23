'use client'

import { motion } from 'framer-motion'
import {
  InstagramLogo,
  YoutubeLogo,
  TwitterLogo,
  EnvelopeSimple,
  CalendarBlank,
} from '@phosphor-icons/react/dist/ssr'

const socialLinks = [
  { icon: InstagramLogo, href: 'https://instagram.com', label: 'Instagram' },
  { icon: YoutubeLogo, href: 'https://youtube.com', label: 'YouTube' },
  { icon: TwitterLogo, href: 'https://twitter.com/zicolwp', label: 'Twitter' },
]

export default function FooterLuxury() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light tracking-tight mb-4">
                Ziscol Media
              </h3>
              <p className="text-muted font-light leading-relaxed mb-6 max-w-sm">
                Turning raw footage into content that builds audiences and drives real business growth.
              </p>

              {/* Email Signup */}
              <div className="flex gap-2 max-w-sm">
                <div className="flex-1 glass rounded-xl px-4 py-3 flex items-center">
                  <EnvelopeSimple size={20} weight="light" className="text-white/40 mr-2" />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-transparent border-none outline-none text-sm font-light w-full placeholder:text-white/30"
                  />
                </div>
                <button className="neuro-button px-6 py-3 rounded-xl text-sm font-light whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-light tracking-tight mb-6 uppercase opacity-50">
              Get in Touch
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:contact@ziscolmedia.com" // TODO: replace with real email
                  className="flex items-center gap-3 text-muted font-light text-sm hover:text-white transition-colors group"
                >
                  <EnvelopeSimple size={18} weight="light" className="group-hover:text-white transition-colors shrink-0" />
                  contact@ziscolmedia.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/zicolwp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted font-light text-sm hover:text-white transition-colors group"
                >
                  <TwitterLogo size={18} weight="light" className="group-hover:text-white transition-colors shrink-0" />
                  @zicolwp
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/ziscolmedia/30min" // TODO: replace with real Calendly link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted font-light text-sm hover:text-white transition-colors group"
                >
                  <CalendarBlank size={18} weight="light" className="group-hover:text-white transition-colors shrink-0" />
                  Book a call
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-sm font-light text-muted">
            © {currentYear} Ziscol Media. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    size={20}
                    weight="light"
                    className="text-white/60 group-hover:text-white transition-colors"
                  />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
