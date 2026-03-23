'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateInView from '@/components/ui/AnimateInView'
import SectionLabel from '@/components/ui/SectionLabel'

const faqs = [
  {
    q: 'Who do you work with?',
    a: 'I work with YouTube creators, coaches, and educators who record talking head content and want professional editing that maximizes retention and channel growth.',
  },
  {
    q: 'How fast do you deliver?',
    a: 'Standard delivery is 48 hours per video. For longer videos (20+ min) allow 72 hours. Rush delivery is available on request.',
  },
  {
    q: 'What file formats do you accept?',
    a: 'I accept all major formats: MP4, MOV, MKV, AVI. iPhone footage, DSLR, mirrorless, or even screen recordings. Any quality works.',
  },
  {
    q: 'How many revisions do I get?',
    a: 'Every video includes up to 2 rounds of revisions. I want you to be 100% happy with the final cut before it goes live.',
  },
  {
    q: 'Do you do short-form content too?',
    a: 'Yes! I edit YouTube Shorts, TikToks, and Instagram Reels as well. Vertical short-form can be bundled with long-form packages.',
  },
  {
    q: 'What does the editing include?',
    a: 'Full editing package includes: color grading, audio cleanup, captions, b-roll suggestions, motion graphics, jump cuts, and a custom thumbnail design.',
  },
  {
    q: 'How do I send my footage?',
    a: 'I share a Google Drive or WeTransfer link after we start working together. Just upload your raw files there and I handle the rest.',
  },
  {
    q: 'What is your pricing?',
    a: "Pricing depends on video length and frequency. DM me on X and I'll send you a custom quote based on your needs.",
  },
  {
    q: 'Can I see samples of your work?',
    a: "Absolutely. Scroll up to the Works section to see edited videos I've produced, or DM me and I'll send you a full portfolio.",
  },
  {
    q: 'Do you offer monthly packages?',
    a: 'Yes. Monthly retainer packages are available for 4, 8, or 12 videos per month with priority turnaround and discounted rates.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-[720px] mx-auto">

        <AnimateInView className="text-center mb-10 sm:mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-white font-bold mt-4 mb-3"
            style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-[#8a8a8a] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Everything you need to know before we start working together.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.1}>
          <div className="bg-[#1a1a1a] rounded-2xl sm:rounded-3xl border border-white/[0.08]
            shadow-[0_2px_20px_rgba(0,0,0,0.3)] overflow-hidden divide-y divide-white/[0.06]">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center px-5 sm:px-7 py-5 text-left group"
                >
                  <span className="font-semibold text-sm sm:text-base text-white/80
                    group-hover:text-[#e6eb2f] transition-colors duration-200 pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center
                      shrink-0 text-white/40 text-lg leading-none font-light
                      group-hover:bg-[#e6eb2f]/15 group-hover:text-[#e6eb2f] transition-colors duration-200"
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="text-[#8a8a8a] text-sm leading-relaxed
                        px-5 sm:px-7 pb-5 pt-1">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
