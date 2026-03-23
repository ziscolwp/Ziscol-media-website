'use client'
import { PopupButton } from 'react-calendly'
import { useEffect, useState } from 'react'

interface CalendlyButtonProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-4 text-lg',
}

const CALENDLY_URL = 'https://calendly.com/samu-ks-media'

export default function CalendlyButton({ children, size = 'md', className = '' }: CalendlyButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const baseClass = `
    inline-flex items-center justify-center bg-[#e6eb2f] text-black font-bold rounded-full cursor-pointer
    shadow-[0_4px_20px_rgba(230,235,47,0.35)]
    hover:shadow-[0_6px_30px_rgba(230,235,47,0.55)]
    hover:scale-[1.03] active:scale-[0.98] transition-all duration-300
    ${sizes[size]} ${className}
  `.trim()

  if (!mounted) return <span className={baseClass}>{children}</span>

  return (
    <PopupButton
      url={CALENDLY_URL}
      rootElement={document.getElementById('calendly-root') as HTMLElement}
      text={children as string}
      className={baseClass}
    />
  )
}
