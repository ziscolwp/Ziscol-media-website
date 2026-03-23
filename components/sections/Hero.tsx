'use client'
import { motion } from 'framer-motion'
import { Video, Scissors } from 'lucide-react'
import CalendlyButton from '@/components/ui/CalendlyButton'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.11, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M8 5.14v14l11-7-11-7z" fill="white" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#121212] flex flex-col items-center justify-center
      px-5 sm:px-8 lg:px-12 pt-28 pb-20 overflow-hidden">

      {/* Vertical grid lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, white 0, white 1px, transparent 0, transparent 12.5%)' }} />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]
        bg-[radial-gradient(ellipse_at_top,rgba(230,235,47,0.08)_0%,transparent_65%)]
        pointer-events-none" />

      {/* Floating icons */}
      <motion.div
        className="absolute left-8 lg:left-20 top-1/2 -translate-y-1/2
          text-white/[0.12] select-none pointer-events-none"
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      >
        <Video size={52} strokeWidth={0.75} />
      </motion.div>
      <motion.div
        className="absolute right-8 lg:right-20 top-[38%]
          text-white/[0.12] select-none pointer-events-none"
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1.2 }}
      >
        <Scissors size={52} strokeWidth={0.75} />
      </motion.div>

      {/* Social proof */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-3 mb-8">
        <div className="flex -space-x-3">
          {['#e6eb2f', '#4C3985', '#e6eb2f'].map((color, i) => (
            <div key={i}
              className="w-11 h-11 rounded-full border-2 border-[#121212] ring-1 ring-white/10 overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: color }}>
              <span className="text-xs font-bold text-black">
                {['P', 'N', 'M'][i]}
              </span>
            </div>
          ))}
        </div>
        <span className="text-white/70 text-base sm:text-lg font-medium">
          Trusted by 50+ Creators
        </span>
      </motion.div>



      {/* Subtitle */}
      <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="text-[#8a8a8a] text-center max-w-[720px] mb-12 px-2"
        style={{ fontSize: 'clamp(15px, 1.4vw, 19px)', lineHeight: 1.7 }}>
        Edits You Can Trust, Delivered Right When You Need Them.
        Full post-production handling so you can focus on what you do best: creating.
      </motion.p>

      {/* Video */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-[1080px] mb-10">
        <div className="rounded-2xl sm:rounded-[28px] overflow-hidden
          border border-[#e6eb2f]/20
          shadow-[0_0_0_1px_rgba(230,235,47,0.15),0_32px_100px_rgba(0,0,0,0.85)]">
          <div className="relative w-full aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#212121]
            flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg, white 0, white 1px, transparent 0, transparent 60px)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-14 sm:w-24 sm:h-16 bg-black/80 rounded-xl sm:rounded-2xl
                flex items-center justify-center shadow-xl
                group-hover:bg-black group-hover:scale-110 transition-all duration-200">
                <PlayIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA below video */}
      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
        <CalendlyButton size="lg">DM ME</CalendlyButton>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20
        bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
    </section>
  )
}
