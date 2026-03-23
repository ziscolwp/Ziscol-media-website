'use client'
import { motion } from 'framer-motion'
import AnimateInView from '@/components/ui/AnimateInView'
import SectionLabel from '@/components/ui/SectionLabel'

const examples = [
  { name: 'Putatoputato', role: '2.9M Subscribers', img: '/images/examples/putatoputato.jpg' },
  { name: 'Nelson Morgan', role: '163K Subscribers', img: '/images/examples/nelson.jpg' },
  { name: 'Milan Raviji', role: '2.6K Subscribers', img: '/images/examples/milan.jpg' },
  { name: 'Pranav Patel', role: 'Business Creator', img: '/images/examples/pranav.jpg' },
  { name: "Dylan O'Brien", role: 'Business Coach', img: '/images/examples/dylan.jpg' },
  { name: 'Ob_Health', role: '271K Subscribers', img: '/images/examples/obhealth.jpg' },
]

const placeholderColors = [
  'from-[#1a1a0a] to-[#212110]',
  'from-[#1a0f2e] to-[#2d1f4a]',
  'from-[#0a1a1a] to-[#102828]',
  'from-[#1a0a0a] to-[#2a1010]',
  'from-[#0f1a0a] to-[#1a2810]',
  'from-[#0a0f1a] to-[#10182a]',
]

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  )
}

export default function Examples() {
  return (
    <section id="examples" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-[1100px] mx-auto">

        <AnimateInView className="text-center mb-10 sm:mb-14">
          <SectionLabel dark>Portfolio</SectionLabel>
          <h2 className="text-white font-bold mt-4 mb-3"
            style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
            Some of My <span className="text-[#e6eb2f]">Works</span>
          </h2>
          <p className="text-[#8a8a8a] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Videos edited for creators across niches: business, health, finance, and more.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {examples.map((ex, i) => (
            <AnimateInView key={i} delay={i * 0.07}>
              <motion.div
                className="group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden
                  bg-[#1a1a1a] border border-white/[0.07]
                  hover:border-[#e6eb2f]/30 hover:-translate-y-1
                  transition-all duration-300
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Thumbnail */}
                <div className={`relative aspect-video bg-gradient-to-br ${placeholderColors[i]} overflow-hidden`}>
                  <img
                    src={ex.img}
                    alt={ex.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-70
                      group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    bg-black/30">
                    <div className="w-12 h-9 sm:w-14 sm:h-10 bg-[#e6eb2f] rounded-lg sm:rounded-xl
                      flex items-center justify-center
                      scale-90 group-hover:scale-100 transition-transform duration-200">
                      <PlayIcon />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-sm
                    rounded-md px-2 py-0.5 flex items-center gap-1.5">
                    <div className="w-3 h-2 bg-[#e6eb2f] rounded-[2px] flex items-center justify-center">
                      <svg viewBox="0 0 8 8" className="w-1.5 h-1.5" fill="black">
                        <path d="M2 1l5 3-5 3V1z" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-[10px] font-medium">YouTube</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="px-4 py-3.5">
                  <p className="text-white font-semibold text-sm leading-tight">{ex.name}</p>
                  <p className="text-[#8a8a8a] text-xs mt-1">{ex.role}</p>
                </div>
              </motion.div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
