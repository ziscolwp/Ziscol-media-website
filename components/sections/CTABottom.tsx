'use client'
import AnimateInView from '@/components/ui/AnimateInView'
import SectionLabel from '@/components/ui/SectionLabel'
import CalendlyButton from '@/components/ui/CalendlyButton'

const trust = [
  { value: '50+', label: 'Creators Served' },
  { value: '48hr', label: 'Turnaround' },
  { value: '5★', label: 'Client Rating' },
]

export default function CTABottom() {
  return (
    <section id="book" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8
      bg-gradient-to-b from-[#212121] to-[#121212] overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]
          bg-[radial-gradient(ellipse_at_top,rgba(230,235,47,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
          bg-[radial-gradient(ellipse_at_bottom,rgba(76,57,133,0.1)_0%,transparent_70%)]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, white 0, white 1px, transparent 0, transparent 12.5%)' }} />

      <div className="max-w-[800px] mx-auto text-center relative z-10">

        <AnimateInView className="flex justify-center mb-5">
          <SectionLabel dark>Let&apos;s Work Together</SectionLabel>
        </AnimateInView>

        <AnimateInView delay={0.1}>
          <h2 className="text-[#e6eb2f] font-bold mb-5 leading-[1.08]"
            style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}>
            Want Videos Like This?
          </h2>
        </AnimateInView>

        <AnimateInView delay={0.18}>
          <p className="text-[#8a8a8a] text-sm sm:text-base mb-4 max-w-xl mx-auto leading-relaxed">
            Reach out on X for your next project. I&apos;m selective about who I work with
            to ensure every creator gets my full attention.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.24}>
          <p className="text-white/70 font-semibold text-base sm:text-xl mb-10 max-w-2xl mx-auto leading-snug"
            style={{ fontSize: 'clamp(15px, 2vw, 22px)' }}>
            Editing, captions, color grading, thumbnails —
            all done for you. You just record.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.32}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <CalendlyButton size="lg">DM ME</CalendlyButton>
            <a href="https://x.com/ziscolmedia" target="_blank" rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-white/80 transition-colors duration-200 underline underline-offset-4">
              Find me on X @ziscolmedia
            </a>
          </div>
        </AnimateInView>

        {/* Trust strip */}
        <AnimateInView delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-4 sm:gap-6">
                {i > 0 && <div className="w-px h-8 bg-white/10 hidden sm:block" />}
                <div>
                  <p className="text-[#e6eb2f] font-bold text-xl sm:text-2xl leading-none">{t.value}</p>
                  <p className="text-[#8a8a8a] text-xs uppercase tracking-wider mt-1">{t.label}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>

      </div>
    </section>
  )
}
