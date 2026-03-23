'use client'

import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useRef } from 'react'
import FloatingElementsEditor from '@/components/ui/FloatingElementsEditor'

function CountUp({
  from = 0, to, prefix = '', suffix = '', decimals = 0, duration = 2,
}: {
  from?: number; to: number; prefix?: string; suffix?: string; decimals?: number; duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(wrapRef, { once: true })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(from, to, {
      duration, ease: 'easeOut',
      onUpdate(value) {
        if (ref.current) ref.current.textContent = prefix + value.toFixed(decimals) + suffix
      },
    })
    return controls.stop
  }, [isInView])

  return <span ref={wrapRef}><span ref={ref}>{prefix}{from.toFixed(decimals)}{suffix}</span></span>
}

function MoneyCountUp() {
  const ref = useRef<HTMLSpanElement>(null)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(wrapRef, { once: true })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(10, 400, {
      duration: 2.8, ease: 'easeOut',
      onUpdate(value) {
        if (!ref.current) return
        ref.current.textContent = value >= 400 ? '$400K+' : `$${Math.round(value)}K`
      },
    })
    return controls.stop
  }, [isInView])

  return <span ref={wrapRef}><span ref={ref}>$10K</span></span>
}


export default function HeroLuxury() {
  const sectionRef = useRef(null)

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2.5 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, #E6EB2F 0%, transparent 70%)' }}
        />
      </div>

      <FloatingElementsEditor />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Trusted badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
            {/* Stacked avatars */}
            <div className="flex -space-x-2">
              {['#7c6f5a', '#5a6f7c', '#5a7c6f'].map((bg, i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[9px] font-medium text-white"
                  style={{ background: bg, zIndex: 3 - i }}>
                  {['B', 'F', 'M'][i]}
                </div>
              ))}
            </div>
            <span className="text-xs font-light text-white/60 tracking-wide">
              Trusted by <span style={{ color: '#E6EB2F' }} className="font-medium">15+ B2B Founders</span>
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-5xl md:text-6xl lg:text-[80px] font-light tracking-tight mb-8 leading-[1.1]"
        >
          Stop Producing Content
          <br />
          <span style={{ color: '#E6EB2F' }}>Start Closing From It</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-sm font-light text-white/50 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          We handle every part of YouTube scripts, thumbnails, editing, packaging so you can focus on closing clients. You just show up and record. We do the rest.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => window.open('https://calendly.com/ziscolmedia/30min', '_blank')} className="btn-primary px-8 py-4 text-base">
            Book a Strategy Call
            <ArrowRight size={18} weight="regular" />
          </button>
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary px-8 py-4 text-base"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <MoneyCountUp />
            </div>
            <div className="text-xs font-light text-white/40 tracking-wide uppercase">Revenue Made for Clients</div>
          </div>

          <div className="w-px h-10 bg-white/10" />

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <CountUp from={0} to={15} suffix="+" duration={2} />
            </div>
            <div className="text-xs font-light text-white/40 tracking-wide uppercase">Business Creators Helped</div>
          </div>

          <div className="w-px h-10 bg-white/10" />

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <CountUp from={0} to={4.9} suffix="/5" decimals={1} duration={2} />
            </div>
            <div className="text-xs font-light text-white/40 tracking-wide uppercase">Client Rating</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            style={{ borderColor: '#E6EB2F' }}
            className="w-2.5 h-2.5 border-r-2 border-b-2 rotate-45"
          />
        ))}
      </motion.div>
    </section>
  )
}
