interface Props {
  children: React.ReactNode
  dark?: boolean
}

export default function SectionLabel({ children, dark = false }: Props) {
  return (
    <span
      className={`inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]
        px-4 py-1.5 rounded-full border ${
        dark
          ? 'text-white/50 border-white/12 bg-white/[0.06]'
          : 'text-[#e6eb2f] border-[#e6eb2f]/30 bg-[#e6eb2f]/[0.08]'
      }`}
    >
      {children}
    </span>
  )
}
