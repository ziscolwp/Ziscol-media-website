'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    n: 1,
    title: 'Market research',
    desc: 'We analyze the market, audience behavior, and content trends to make data-driven decisions about what topics will resonate with your ICP.',
    bg: 'from-[#1a1a0a] to-[#212110]',
  },
  {
    n: 2,
    title: 'Video ideation & content strategy',
    desc: 'We develop a content calendar and topic strategy aligned with your ICP and business goals. Every video has a clear purpose.',
    bg: 'from-[#1a0f2e] to-[#2d1f4a]',
  },
  {
    n: 3,
    title: 'Scripting',
    desc: 'Our writers craft scripts built for retention and conversion, structured to drive real watch time and inbound leads.',
    bg: 'from-[#0a1a1a] to-[#102828]',
  },
  {
    n: 4,
    title: 'Video Recording',
    desc: 'Our clients record for just 2–4 hours per month. We help you nail this through our SOPs, teleprompter tools, and step-by-step guidance.',
    bg: 'from-[#1a0a0a] to-[#2a1010]',
    tag: 'You only Record the Videos',
  },
  {
    n: 5,
    title: 'Post-production',
    desc: 'Full editing, motion graphics, thumbnails, and captions. Every video polished to a professional standard before it goes live.',
    bg: 'from-[#0f1a0a] to-[#1a2810]',
  },
  {
    n: 6,
    title: 'Distribution',
    desc: 'We promote each video on your other channels, leveraging existing content to nurture your pipeline and compound reach over time.',
    bg: 'from-[#0a0f1a] to-[#10182a]',
  },
]

const SCROLL_HEIGHT = `${steps.length * 50}vh`

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length))
    setActiveStep(Math.max(0, idx))
  })

  return (
    <section id="process">
      {/* ─── DESKTOP: sticky tall-container scroll ─── */}
      <div ref={containerRef} style={{ height: SCROLL_HEIGHT }} className="hidden lg:block">
        <div className="sticky top-0 h-screen bg-[#121212] flex flex-col justify-center
          px-6 xl:px-8 py-10 overflow-hidden">
          <div className="max-w-[1100px] mx-auto w-full">

            <div className="text-center mb-7">
              <SectionLabel dark>Our Process</SectionLabel>
              <h2 className="text-white font-bold mt-4 mb-2"
                style={{ fontSize: 'clamp(24px, 3vw, 44px)' }}>
                How We Work
              </h2>
              <p className="text-[#8a8a8a] text-sm max-w-md mx-auto">
                Every step is designed to move creators from idea to consistent inbound growth.
              </p>
            </div>

            <div className="bg-[#1e1e1e] rounded-[28px] overflow-hidden border border-white/[0.06]">
              <div className="grid grid-cols-2">

                {/* Left: steps */}
                <div className="py-9 px-10 xl:px-12 flex flex-col gap-6">
                  {steps.map((step, i) => (
                    <div key={i} className="relative flex gap-4">
                      {i < steps.length - 1 && (
                        <div className="absolute left-[17px] top-10 w-px h-full bg-white/10" />
                      )}

                      <motion.div
                        animate={{
                          backgroundColor: activeStep === i ? '#e6eb2f' : 'transparent',
                          borderColor: activeStep === i ? '#e6eb2f' : 'rgba(255,255,255,0.15)',
                          color: activeStep === i ? '#000' : 'rgba(255,255,255,0.3)',
                        }}
                        transition={{ duration: 0.25 }}
                        className="w-9 h-9 rounded-full border-2 flex items-center justify-center
                          text-sm font-bold shrink-0 z-10"
                      >
                        {step.n}
                      </motion.div>

                      <div className="flex-1 pb-1 min-w-0">
                        <motion.h3
                          animate={{ color: activeStep === i ? '#fafaf8' : 'rgba(255,255,255,0.35)' }}
                          transition={{ duration: 0.25 }}
                          className="font-bold text-base leading-snug"
                        >
                          {step.title}
                        </motion.h3>

                        {step.tag && (
                          <motion.span
                            animate={{ opacity: activeStep === i ? 1 : 0, height: activeStep === i ? 'auto' : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#e6eb2f] text-xs italic font-semibold block mt-1 overflow-hidden"
                          >
                            ↙ {step.tag}
                          </motion.span>
                        )}

                        <motion.p
                          animate={{ opacity: activeStep === i ? 1 : 0, height: activeStep === i ? 'auto' : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="text-[#8a8a8a] text-sm leading-relaxed mt-1.5 overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: illustration */}
                <div className="flex items-center py-9 pr-9">
                  <div className="w-full rounded-2xl overflow-hidden aspect-[4/3] relative">
                    {steps.map((step, i) => (
                      <motion.div
                        key={i}
                        className={`absolute inset-0 bg-gradient-to-br ${step.bg}
                          flex flex-col items-center justify-center gap-4`}
                        animate={{ opacity: activeStep === i ? 1 : 0 }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                      >
                        <motion.div
                          animate={{ scale: activeStep === i ? 1 : 0.9 }}
                          transition={{ duration: 0.4 }}
                          className="w-16 h-16 bg-[#e6eb2f]/10 rounded-2xl flex items-center justify-center border border-[#e6eb2f]/20"
                        >
                          <span className="text-3xl font-black text-[#e6eb2f]/40">{step.n}</span>
                        </motion.div>
                        <p className="text-white/55 text-sm font-medium px-8 text-center leading-snug">
                          {step.title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-5">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: activeStep === i ? 22 : 6,
                    backgroundColor: activeStep === i ? '#e6eb2f' : 'rgba(255,255,255,0.18)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full"
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ─── MOBILE: static accordion-style list ─── */}
      <div className="lg:hidden bg-[#121212] py-16 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <SectionLabel dark>Our Process</SectionLabel>
            <h2 className="text-white font-bold mt-4 mb-2 text-2xl sm:text-3xl">How We Work</h2>
            <p className="text-[#8a8a8a] text-sm">
              Every step is designed to move creators from idea to consistent inbound growth.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-white/10" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* Circle */}
                  <div className="w-9 h-9 rounded-full bg-[#e6eb2f] border-2 border-[#e6eb2f]
                    flex items-center justify-center text-black text-sm font-bold shrink-0 z-10
                    shadow-[0_0_0_4px_rgba(230,235,47,0.15)]">
                    {step.n}
                  </div>

                  <div className="flex-1 pt-1.5 min-w-0">
                    <h3 className="font-bold text-white text-base leading-snug mb-1.5">{step.title}</h3>
                    {step.tag && (
                      <span className="text-[#e6eb2f] text-xs italic font-semibold block mb-1">
                        ↙ {step.tag}
                      </span>
                    )}
                    <p className="text-[#8a8a8a] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
