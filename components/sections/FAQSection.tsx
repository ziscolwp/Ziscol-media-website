'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from '@phosphor-icons/react/dist/ssr'
import { InlineWidget } from 'react-calendly'
import React from 'react'

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What types of YouTube content do you specialize in?',
    answer:
      'We specialize in done-for-you YouTube content for coaches, consultants, and service businesses — specifically the kind that converts viewers into high-ticket clients. Think authority videos, proof-led case studies, offer explainers, and evergreen content that works as a sales asset, not just a vanity metric.',
  },
  {
    question: 'How long does the content creation process take?',
    answer:
      'From raw footage or brief to final delivery is typically 5–7 business days per video. Once we\'ve worked together for a couple of weeks, we build a rhythm and can batch ahead so your channel stays consistent without you chasing deadlines.',
  },
  {
    question: 'Do you offer packages or custom pricing?',
    answer:
      'We work on monthly retainer packages built around your output goals not one-off projects. This keeps your channel consistent, which is what actually builds trust and drives conversions. Pricing depends on volume and deliverables. Book a call and we\'ll scope it for your channel.',
  },
  {
    question: 'Can you help with content strategy and optimization?',
    answer:
      'Yes and this is actually where the leverage is. Most channels fail not because of bad editing, but because of bad packaging and wrong topics. We help you pick ideas based on buyer pain points, write hooks that stop the scroll, and structure a simple funnel so your content actually moves people toward your offer.',
  },
  {
    question: 'What if I\'m not satisfied with the final result?',
    answer:
      'We do a revision round on every video. If something\'s off pacing, style, feel we fix it. Our goal is to build a long-term working relationship, not ship one video and disappear. If we\'re consistently not a fit, we\'ll be upfront about it.',
  },
  {
    question: 'Do you work with channels of all sizes?',
    answer:
      'We focus on business owners and personal brands, not hobbyist channels. Whether you have 100 subscribers or 10,000 doesn\'t matter what matters is that you have an offer and you want YouTube to work as a lead gen asset. Small channels with the right strategy outperform big channels with no direction all the time.',
  },
  {
    question: 'What results have your clients seen?',
    answer:
      'One client went from posting inconsistently with no clear offer to having a content system that books discovery calls on autopilot within 60 days. Another used a single proof-led video to close a $3k/month retainer from a cold viewer. The common thread: when your content speaks to the right buyer and points to a clear next step, even a small audience converts.',
  },
  {
    question: 'How do you handle the whole process if I\'m a busy founder?',
    answer:
      'That\'s the point of DFY. You record a talking-head video or send us a loom/raw footage we handle everything else. Editing, captions, thumbnails, titles, optimization. Some clients spend less than 2 hours a week on their YouTube and still post consistently. You focus on your zone of genius, we handle the rest.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer: (
      <div>
        <ol className="list-decimal list-inside space-y-1 mb-3">
          <li>Your raw footage or recordings</li>
          <li>A clear offer you're selling</li>
          <li>The audience you're trying to reach</li>
        </ol>
        <p>That's it. We handle the strategy, packaging, and production from there. If you don't have clarity on your offer yet, we can help you figure that out in the onboarding call before we touch a single video.</p>
      </div>
    ),
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 30, filter: 'blur(10px)' }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-light text-muted max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 30, filter: 'blur(10px)' }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-light pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={24} weight="light" style={{ color: '#E6EB2F' }} />
                  ) : (
                    <Plus size={24} weight="light" className="text-white/60" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-muted font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Inline Calendly booking */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 30, filter: 'blur(10px)' }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass rounded-2xl overflow-hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="pt-6 px-6 text-center">
            <h3 className="text-2xl font-light mb-1">Book a Call</h3>
            <p className="text-muted font-light text-sm">Pick a time that works for you — no back-and-forth.</p>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <InlineWidget
              url="https://calendly.com/ziscolmedia/30min"
              styles={{ height: '660px', minWidth: '320px' }}
              pageSettings={{
                backgroundColor: '0a0a0a',
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
                primaryColor: 'E6EB2F',
                textColor: 'ffffff',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
