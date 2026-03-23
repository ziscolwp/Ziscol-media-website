'use client'
import { motion } from 'framer-motion'
import AnimateInView from '@/components/ui/AnimateInView'
import SectionLabel from '@/components/ui/SectionLabel'

const results = [
  {
    amount: '2.9M',
    period: 'subscribers',
    title: 'Putatoputato: Consistent viral edits',
    desc: 'High-retention talking head editing that helped this creator scale to 2.9M subscribers with hooks that stop the scroll within the first 3 seconds.',
    gradient: 'from-[#1a1a0a] to-[#212110]',
    accent: '#e6eb2f',
  },
  {
    amount: '271K',
    period: 'followers',
    title: 'Ob_Health: Authority health content',
    desc: 'Clean, professional edits that build credibility in the health space. Every video optimized for watch time and audience trust.',
    gradient: 'from-[#1a0f2e] to-[#2d1f4a]',
    accent: '#a78bfa',
  },
  {
    amount: '163K',
    period: 'subscribers',
    title: 'Nelson Morgan: Business mindset channel',
    desc: 'Dynamic pacing, motion graphics, and b-roll integration that turns raw footage into high-converting business content.',
    gradient: 'from-[#0a1a1a] to-[#102828]',
    accent: '#34D399',
  },
  {
    amount: '10M+',
    period: 'impressions',
    title: 'Milan Raviji: Viral talking head',
    desc: 'A single video hitting 10M+ impressions through tight editing, perfect pacing, and scroll-stopping thumbnail alignment.',
    gradient: 'from-[#1a0a0a] to-[#2a1010]',
    accent: '#F472B6',
  },
]

function PlayTriangle() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="white">
      <path d="M4 2l10 6-10 6V2z" />
    </svg>
  )
}

export default function Results() {
  return (
    <section id="case-studies" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-[1100px] mx-auto">
        {/* Card shell */}
        <div className="bg-gradient-to-b from-[#121212] to-[#1a1a1a]
          rounded-2xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14
          border border-white/[0.06]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">

          <AnimateInView className="text-center mb-10 sm:mb-14">
            <SectionLabel dark>Some of my Works</SectionLabel>
            <h2 className="text-white font-bold mt-4 mb-3"
              style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
              Edits That Grow Channels
            </h2>
            <p className="text-[#8a8a8a] text-sm max-w-lg mx-auto leading-relaxed">
              Real creators, real growth. Results from the channels I&apos;ve worked on.
            </p>
          </AnimateInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl overflow-hidden
                  border border-white/[0.07] group cursor-pointer
                  hover:border-white/[0.16] hover:-translate-y-1
                  transition-all duration-300
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Thumbnail */}
                <div className={`relative aspect-video bg-gradient-to-br ${r.gradient} overflow-hidden`}>
                  {/* Subtle grid on thumbnail */}
                  <div className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, white 0, white 1px, transparent 0, transparent 40px)' }} />

                  {/* Amount badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="rounded-lg px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/10">
                      <p className="font-bold text-sm sm:text-base leading-none" style={{ color: r.accent }}>
                        {r.amount}
                      </p>
                      <p className="text-white/50 text-[10px] sm:text-xs mt-0.5">{r.period}</p>
                    </div>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-8 sm:w-14 sm:h-10 bg-[#e6eb2f] rounded-lg sm:rounded-xl
                      flex items-center justify-center shadow-lg
                      group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(230,235,47,0.5)]
                      transition-all duration-300">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="black">
                        <path d="M4 2l10 6-10 6V2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2 leading-snug">{r.title}</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
