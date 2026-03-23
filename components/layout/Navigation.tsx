'use client'

import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react/dist/ssr'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Clients', href: '#clients' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-blur' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#hero')
              }}
              className="font-display text-xl font-light tracking-tight text-white hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ziscol Media
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-sm font-light text-white/50 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => window.open('https://calendly.com/ziscolmedia/30min', '_blank')}
              className="hidden md:flex btn-primary px-6 py-2.5 text-sm"
            >
              Book a Call
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white p-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <List size={28} weight="light" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Menu Tray */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#121212] border-l border-white/10 z-[70] md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                {/* Close Button */}
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 hover:opacity-80 transition-opacity"
                    aria-label="Close menu"
                  >
                    <X size={32} weight="light" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col space-y-8 flex-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="text-2xl font-light text-white/70 hover:text-white transition-colors"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    window.open('https://calendly.com/ziscolmedia/30min', '_blank')
                  }}
                  className="btn-primary w-full justify-center py-4 text-base mt-8"
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
