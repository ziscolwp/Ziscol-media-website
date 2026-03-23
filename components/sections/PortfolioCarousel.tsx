'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const videos = [
  { id: '1R9IhYDPZ00', title: 'Putatoputato', label: 'Business Creator' },
  { id: 'KHhxjd7rI0Q', title: 'Ob_Health', label: 'Health & Wellness' },
  { id: 'yzXtIMTNdZk', title: 'Nelson Morgan', label: 'Personal Finance' },
  { id: 'V2IjSkYAuvM', title: 'Milan Raviji', label: 'Mindset & Growth' },
]

export default function PortfolioCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="portfolio" ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-lg font-light text-white/50 max-w-xl mx-auto">
            Real videos we've produced for our clients
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden bg-[#121212] border border-white/[0.07]"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
