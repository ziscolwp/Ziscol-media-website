'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const clients = [
  { name: 'BullRunners', initials: 'BR', subscribers: '375K subs', color: '#e6eb2f', textColor: '#000', img: 'https://unavatar.io/youtube/bullrunners' },
  { name: 'Jake Claver', initials: 'JC', subscribers: '100K+ subs', color: '#60a5fa', textColor: '#fff', img: 'https://unavatar.io/youtube/jakeclaver' },
  { name: 'OB Health', initials: 'OB', subscribers: '290K followers', color: '#2dd4bf', textColor: '#000', img: '/images/ob-health.jpg' },
  { name: 'Jesse Hoffman', initials: 'JH', subscribers: 'Founder of MindPeak', color: '#a78bfa', textColor: '#fff', img: 'https://unavatar.io/youtube/jessehhoffman' },
  { name: 'Hamilton Emails', initials: 'HE', subscribers: 'Founder, Hamilton Emails', color: '#F472B6', textColor: '#fff', img: 'https://unavatar.io/youtube/hamiltonemails' },
  { name: 'Will Cannon', initials: 'WC', subscribers: 'Founder, iamwillcannon', color: '#fb923c', textColor: '#fff', img: 'https://unavatar.io/youtube/iamwillcannon' },
  { name: 'Morgan Nelson', initials: 'MN', subscribers: 'Founder @ Dream Out Loud', color: '#34D399', textColor: '#000', img: 'https://unavatar.io/youtube/morgantnelson' },
  { name: 'Tarun Kamath', initials: 'TK', subscribers: 'CEO of Arcady Media', color: '#f87171', textColor: '#fff', img: 'https://unavatar.io/youtube/tarunkamath' },
  { name: 'CJ Weber', initials: 'CJ', subscribers: '149K TikTok followers', color: '#818cf8', textColor: '#fff', img: 'https://unavatar.io/youtube/cjweber7' },
]

function ClientAvatar({ client }: { client: typeof clients[0] }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImg = client.img && !imgFailed
  return (
    <div className="relative mb-3">
      {showImg ? (
        <img
          src={client.img}
          alt={client.name}
          onError={() => setImgFailed(true)}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover group-hover:scale-105 transition-transform duration-300 border-2 border-white/10"
        />
      ) : (
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-base font-semibold group-hover:scale-105 transition-transform duration-300 border-2 border-white/10"
          style={{ backgroundColor: client.color, color: client.textColor }}
        >
          {client.initials}
        </div>
      )}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10"
        style={{ backgroundColor: client.color }}
      />
    </div>
  )
}

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
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10">
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
              className="flex flex-col items-center group w-20 md:w-24"
            >
              <ClientAvatar client={client} />
              <div className="text-center w-full">
                <p className="text-xs font-light text-white/80 mb-0.5 leading-tight">{client.name}</p>
                <p className="text-[10px] font-light text-muted leading-tight">{client.subscribers}</p>
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
