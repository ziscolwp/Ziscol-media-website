'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    n: 1,
    title: 'Market research',
    desc: 'We analyze the market, audience behavior, and content trends to make data-driven decisions about what topics will resonate with your ICP.',
  },
  {
    n: 2,
    title: 'Video ideation & content strategy',
    desc: 'We develop a content calendar and topic strategy aligned with your ICP and business goals. Every video has a clear purpose.',
  },
  {
    n: 3,
    title: 'Scripting',
    desc: 'Our writers craft scripts built for retention and conversion, structured to drive real watch time and inbound leads.',
  },
  {
    n: 4,
    title: 'Video Recording',
    desc: 'Our clients record for just 2–4 hours per month. We help you nail this through our SOPs, teleprompter tools, and step-by-step guidance.',
    tag: 'You only Record the Videos',
  },
  {
    n: 5,
    title: 'Post-production',
    desc: 'Full editing, motion graphics, thumbnails, and captions. Every video polished to a professional standard before it goes live.',
  },
  {
    n: 6,
    title: 'Distribution',
    desc: 'We promote each video on your other channels, leveraging existing content to nurture your pipeline and compound reach over time.',
  },
]

const illustrationSrcs = [
  '/images/how-it-works/market-research.svg',
  '/images/how-it-works/video-ideation.svg',
  '/images/how-it-works/scripting.svg',
  '/images/how-it-works/video-recording.svg',
  '/images/how-it-works/post-production.svg',
  '/images/how-it-works/distribution.svg',
]

const SCROLL_HEIGHT = `${steps.length * 60}vh`

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const prevStepRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const sizes = { heading: 62, stepTitle: 23, stepDesc: 14, subheading: 16, circleSize: 46, circleNum: 21 }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length))
    const next = Math.max(0, idx)
    if (next !== prevStepRef.current) {
      setActiveStep(next)
      prevStepRef.current = next
    }
  })

  return (
    <section id="how-it-works">
      {/* ─── DESKTOP: sticky tall-container scroll ─── */}
      <div ref={containerRef} style={{ height: SCROLL_HEIGHT }} className="hidden lg:block">
        <div className="sticky top-0 h-screen bg-[#121212] flex flex-col justify-center
          px-6 xl:px-8 py-10 overflow-hidden">

          {/* ── Cross flash on last step ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: activeStep === steps.length - 1 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[2px] rotate-45 bg-gradient-to-r from-transparent via-[#E6EB2F]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[2px] -rotate-45 bg-gradient-to-r from-transparent via-[#E6EB2F]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#E6EB2F]/30 rounded-full blur-md" />
          </motion.div>

          <div className="max-w-[1100px] mx-auto w-full relative z-10">

            <div className="text-center mb-7">
              <SectionLabel dark>Our Process</SectionLabel>
              <h2 className="text-white font-light mt-4 mb-2 tracking-tight"
                style={{ fontSize: `${sizes.heading}px` }}>
                How We Work
              </h2>
              <p className="text-[#8a8a8a] font-light max-w-md mx-auto"
                style={{ fontSize: `${sizes.subheading}px` }}>
                Every step is designed to move creators from idea to consistent inbound growth.
              </p>
            </div>

            <div className="bg-[#1e1e1e] rounded-[28px] overflow-hidden border border-white/[0.06]">
              <div className="grid grid-cols-2">

                {/* Left: steps */}
                <div className="py-9 px-10 xl:px-12 flex flex-col gap-6">
                  {steps.map((step, i) => {
                    const active = activeStep === i
                    return (
                      <div key={i} className="relative flex gap-4">
                        {i < steps.length - 1 && (
                          <div className="absolute w-[2px] bg-white/10" style={{ left: sizes.circleSize / 2, top: sizes.circleSize + 4, height: 'calc(100% + 24px)' }} />
                        )}

                        {/* Circle — CSS transition, no JS animation */}
                        <div
                          className="rounded-full border-2 flex items-center justify-center font-medium shrink-0 z-10"
                          style={{
                            width: sizes.circleSize,
                            height: sizes.circleSize,
                            fontSize: sizes.circleNum,
                            backgroundColor: active ? '#e6eb2f' : '#1e1e1e',
                            borderColor: active ? '#e6eb2f' : 'rgba(255,255,255,0.15)',
                            color: active ? '#000' : 'rgba(255,255,255,0.3)',
                            transition: 'background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease',
                          }}
                        >
                          {step.n}
                        </div>

                        <div className="flex-1 pb-1 min-w-0">
                          {/* Title — CSS transition */}
                          <h3
                            className="font-light leading-snug"
                            style={{
                              fontSize: `${sizes.stepTitle}px`,
                              color: active ? '#fafaf8' : 'rgba(255,255,255,0.35)',
                              transition: 'color 0.35s ease',
                            }}
                          >
                            {step.title}
                          </h3>

                          {/* Tag — CSS grid trick for smooth height */}
                          {step.tag && (
                            <div
                              className="overflow-hidden"
                              style={{
                                display: 'grid',
                                gridTemplateRows: active ? '1fr' : '0fr',
                                opacity: active ? 1 : 0,
                                transition: 'grid-template-rows 0.4s ease, opacity 0.35s ease',
                              }}
                            >
                              <div className="overflow-hidden">
                                <span className="text-[#e6eb2f] text-xl font-semibold block mt-2">
                                  {step.tag}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Description — CSS grid trick for smooth height */}
                          <div
                            className="overflow-hidden"
                            style={{
                              display: 'grid',
                              gridTemplateRows: active ? '1fr' : '0fr',
                              opacity: active ? 1 : 0,
                              transition: 'grid-template-rows 0.45s ease, opacity 0.35s ease',
                            }}
                          >
                            <div className="overflow-hidden">
                              <p className="text-[#8a8a8a] font-light leading-relaxed mt-1.5"
                                style={{ fontSize: `${sizes.stepDesc}px` }}>
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Right: SVG illustrations */}
                <div className="flex items-center py-9 pr-9">
                  <div className="w-full rounded-2xl overflow-hidden aspect-[4/3] relative bg-black border border-white/[0.06]">
                    {illustrationSrcs.map((src, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 flex items-center justify-center p-6"
                        animate={{
                          opacity: activeStep === i ? 1 : 0,
                          y: activeStep === i ? 0 : activeStep > i ? -40 : 40,
                        }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <img src={src} alt={steps[i].title} className="w-full h-full object-contain scale-[1.33]" />
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
            <h2 className="text-white font-light mt-4 mb-2 text-2xl sm:text-3xl tracking-tight">How We Work</h2>
            <p className="text-[#8a8a8a] text-sm font-light">
              Every step is designed to move viewers from discovery to trust to inbound leads.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-white/10" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => {
                return (
                  <div key={i} className="relative flex flex-col gap-4 pb-8 last:pb-0">
                    <div className="flex gap-5">
                      <div className="w-9 h-9 rounded-full bg-[#e6eb2f] border-2 border-[#e6eb2f]
                        flex items-center justify-center text-black text-sm font-medium shrink-0 z-10
                        shadow-[0_0_0_4px_rgba(230,235,47,0.15)]">
                        {step.n}
                      </div>

                      <div className="flex-1 pt-1.5 min-w-0">
                        <h3 className="font-light text-white text-base leading-snug mb-1.5">{step.title}</h3>
                        {step.tag && (
                          <span className="text-[#e6eb2f] text-xl font-semibold block mb-2">
                            {step.tag}
                          </span>
                        )}
                        <p className="text-[#8a8a8a] text-sm font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    {/* Mobile illustration */}
                    <div className="ml-14 w-full max-w-[280px] aspect-[4/3] rounded-xl bg-black border border-white/[0.06] p-3">
                      <img src={illustrationSrcs[i]} alt={step.title} className="w-full h-full object-contain scale-[1.33]" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
