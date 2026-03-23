'use client'

import { useEffect } from 'react'
import Navigation from '@/components/layout/Navigation'
import FooterLuxury from '@/components/layout/FooterLuxury'
import HeroLuxury from '@/components/sections/HeroLuxury'
import WorkedWith from '@/components/sections/WorkedWith'
import PortfolioCarousel from '@/components/sections/PortfolioCarousel'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQSection from '@/components/sections/FAQSection'

export default function Home() {
  useEffect(() => {
    // Page load animation
    document.body.style.opacity = '0'

    setTimeout(() => {
      document.body.style.transition = 'opacity 0.8s ease-in-out'
      document.body.style.opacity = '1'
    }, 100)

    return () => {
      document.body.style.opacity = '1'
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="overflow-clip">
        <HeroLuxury />
        <WorkedWith />
        <PortfolioCarousel />
        <HowItWorks />
        <FAQSection />
      </main>
      <FooterLuxury />
    </div>
  )
}
