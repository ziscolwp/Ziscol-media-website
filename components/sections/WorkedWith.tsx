'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const clients = [
  { name: 'Putatoputato', initials: 'PP', subscribers: '2.9M subs', color: '#e6eb2f', textColor: '#000' },
  { name: 'Ob_Health', initials: 'OH', subscribers: '271K followers', color: '#a78bfa', textColor: '#fff' },
  { name: 'Nelson Morgan', initials: 'NM', subscribers: '163K subs', color: '#34D399', textColor: '#000' },
  { name: 'Milan Raviji', initials: 'MR', subscribers: '10M+ impressions', color: '#F472B6', textColor: '#fff' },
  { name: 'The Daily Brief', initials: 'DB', subscribers: '480K subs', color: '#60a5fa', textColor: '#fff' },
  { name: 'Alex Ventures', initials: 'AV', subscribers: '1.2M subs', color: '#fb923c', textColor: '#fff' },
  { name: 'MindsetPro', initials: 'MP', subscribers: '320K subs', color: '#f87171', textColor: '#fff' },
  { name: 'Growth Labs', initials: 'GL', subscribers: '750K subs', color: '#2dd4bf', textColor: '#000' },
]

export default function WorkedWith() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="clients"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
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
            Trusted by Top Creators
          </h2>
          <p className="text-lg font-light text-muted max-w-2xl mx-auto">
            Channels we've helped grow
          </p>
        </motion.div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 30, filter: 'blur(10px)' }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-3">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-lg font-semibold group-hover:scale-105 transition-transform duration-300 border-2 border-white/10"
                  style={{ backgroundColor: client.color, color: client.textColor }}
                >
                  {client.initials}
                </div>
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10"
                  style={{ backgroundColor: client.color }}
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-light text-white/80 mb-0.5 leading-tight">{client.name}</p>
                <p className="text-xs font-light text-muted">{client.subscribers}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 30, filter: 'blur(10px)' }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-light text-muted">
            And many more creators growing with us
          </p>
        </motion.div>
      </div>
    </section>
  )
}
