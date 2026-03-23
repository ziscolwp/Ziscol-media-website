'use client'
import AnimateInView from '@/components/ui/AnimateInView'
import SectionLabel from '@/components/ui/SectionLabel'

const testimonials = [
  {
    name: 'Milan Raviji',
    company: '2.6K Subscribers',
    initials: 'MR',
    color: '#e6eb2f',
    textColor: '#000',
    quote:
      "There's so much to work with. I didn't have issues with quality. My first edited video made results in just 12 hours. Ziscol gets the vision immediately.",
    platform: 'X',
  },
  {
    name: 'Ob_Health',
    company: '271K Subscribers',
    initials: 'OH',
    color: '#4C3985',
    textColor: '#fff',
    quote:
      "Incredible workflow. It's rare to find an editor who can edit at this level. The pacing, the cuts, the captions. Ziscol exceeds every expectation.",
    platform: 'X',
  },
  {
    name: 'Nelson Morgan',
    company: '163K Subscribers',
    initials: 'NM',
    color: '#e6eb2f',
    textColor: '#000',
    quote:
      "The most personalized editing experience I've had. They understand my brand deeply, including my style, tone, and what my audience responds to.",
    platform: 'X',
  },
  {
    name: 'Pranav Patel',
    company: 'Business Creator',
    initials: 'PP',
    color: '#4C3985',
    textColor: '#fff',
    quote:
      "Ziscol turned my raw talking head footage into something that looks truly professional. My retention rates jumped significantly after switching editors.",
    platform: 'X',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#e6eb2f">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#212121]">
      <div className="max-w-[1100px] mx-auto">

        <AnimateInView className="text-center mb-10 sm:mb-14">
          <SectionLabel dark>Testimonials</SectionLabel>
          <h2 className="text-[#e6eb2f] font-bold mt-4 mb-3"
            style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
            What Creators Say
          </h2>
          <p className="text-[#8a8a8a] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Don&apos;t take my word for it. Hear from the creators I&apos;ve worked with.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <AnimateInView key={i} delay={i * 0.08}>
              <div className="h-full bg-[#1a1a1a] border border-white/[0.08]
                rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col gap-4
                hover:border-[#e6eb2f]/25 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                transition-all duration-300">

                <div>
                  <Stars />
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4
                  border-t border-white/[0.07]">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center
                        font-bold text-sm shrink-0"
                      style={{ backgroundColor: t.color, color: t.textColor }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">{t.name}</p>
                      <p className="text-[#8a8a8a] text-xs mt-0.5">{t.company}</p>
                    </div>
                  </div>

                  {/* Platform */}
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-white/30 hover:text-white/60
                      transition-colors duration-200 text-xs shrink-0"
                  >
                    <XIcon />
                    <span>View post</span>
                  </a>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
