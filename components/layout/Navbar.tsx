'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import CalendlyButton from '@/components/ui/CalendlyButton'

const links = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#121212]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="Ziscol Media home">
            <div className="border border-dashed border-[#e6eb2f]/40 rounded-md px-2.5 py-1 group-hover:border-[#e6eb2f]/70 transition-colors duration-300">
              <span className="text-[#e6eb2f] font-bold tracking-[0.2em] text-sm">ZM</span>
            </div>
            <span className="text-white/50 text-xs font-medium tracking-wide group-hover:text-white/75 transition-colors duration-300">
              Ziscol Media
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 text-sm hover:text-white transition-colors duration-200 relative
                  after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-[#e6eb2f]
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <CalendlyButton size="sm">DM ME</CalendlyButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-white/70 hover:text-white
              rounded-lg hover:bg-white/5 transition-all duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] sm:w-80
                bg-[#212121] border-l border-white/[0.08]
                flex flex-col px-6 py-8 shadow-[-20px_0_60px_rgba(0,0,0,0.6)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <div className="border border-dashed border-[#e6eb2f]/40 rounded-md px-2.5 py-1">
                    <span className="text-[#e6eb2f] font-bold tracking-[0.2em] text-sm">ZM</span>
                  </div>
                  <span className="text-white/50 text-xs font-medium">Ziscol Media</span>
                </div>
                <button
                  className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white
                    rounded-lg hover:bg-white/5 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 mb-8">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className="text-white/70 text-base font-medium hover:text-white
                      px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <CalendlyButton size="md" className="w-full justify-center">DM ME</CalendlyButton>
              </motion.div>

              <p className="text-white/20 text-xs mt-auto text-center">@ziscolmedia</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
