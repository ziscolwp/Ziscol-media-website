import { Zap, Clock, TrendingUp } from 'lucide-react'
import AnimateInView from '@/components/ui/AnimateInView'
import SectionLabel from '@/components/ui/SectionLabel'

const features = [
  {
    icon: Zap,
    title: 'Hooks that stop the scroll',
    desc: "The first 3 seconds decide everything. I craft opening hooks and pacing structures designed to hold attention and maximize watch time on every video.",
  },
  {
    icon: Clock,
    title: 'Fast, reliable turnaround',
    desc: "Send your raw footage and get back a polished, publish-ready edit within 48 hours. No missed deadlines, no back-and-forth delays.",
  },
  {
    icon: TrendingUp,
    title: 'Edits built for growth',
    desc: "Every cut, graphic, and caption is crafted to maximize retention and push the algorithm. Your content gets more views and more subscribers.",
  },
]

export default function WhyYouTube() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#1e1e1e] rounded-2xl sm:rounded-[32px] p-6 sm:p-10 lg:p-16 border border-white/[0.06]">

          <AnimateInView className="text-center mb-10 sm:mb-14">
            <SectionLabel>Why Professional Editing?</SectionLabel>
            <h2 className="text-white font-bold mt-4 mb-3"
              style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
              The Difference Between<br className="hidden sm:block" /> Good and <span className="text-[#e6eb2f]">Viral</span>
            </h2>
            <p className="text-[#8a8a8a] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Raw footage is just the start. The edit is what turns your ideas into content that keeps people watching and coming back.
            </p>
          </AnimateInView>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((f, i) => (
              <AnimateInView key={i} delay={i * 0.1}>
                <div className="bg-[#121212] rounded-xl sm:rounded-2xl p-6 sm:p-7
                  border border-white/[0.06] h-full
                  hover:border-[#e6eb2f]/30 hover:-translate-y-0.5
                  transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                    bg-[#e6eb2f]/10 border border-[#e6eb2f]/20
                    group-hover:bg-[#e6eb2f]/15 transition-colors duration-300">
                    <f.icon size={19} className="text-[#e6eb2f]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg mb-2.5">{f.title}</h3>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
