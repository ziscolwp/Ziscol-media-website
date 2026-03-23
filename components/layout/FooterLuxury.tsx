'use client'

import { motion } from 'framer-motion'
import {
  EnvelopeSimple,
  CalendarBlank,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'

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
                  href="https://x.com/ziscolwp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted font-light text-sm hover:text-white transition-colors group"
                >
                  <TwitterLogo size={18} weight="light" className="group-hover:text-white transition-colors shrink-0" />
                  @ziscolwp
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

        </motion.div>
      </div>
    </footer>
  )
}
