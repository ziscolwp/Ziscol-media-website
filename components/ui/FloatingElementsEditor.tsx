'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, VideoCamera, MagicWand, Megaphone } from '@phosphor-icons/react/dist/ssr'

export type FloatConfig = {
  label: string
  side: 'left' | 'right'
  top: number       // % from top
  edge: number      // % from left or right edge
  opacity: number   // 0–100
  size: number      // icon size px
  floatSpeed: number // seconds per float cycle
}

const defaultConfigs: FloatConfig[] = [
  { label: 'Script Writing', side: 'left',  top: 24, edge: 9,  opacity: 40, size: 18, floatSpeed: 5.5 },
  { label: 'Video Editing',  side: 'left',  top: 56, edge: 12, opacity: 43, size: 14, floatSpeed: 6   },
  { label: 'Thumbnails',     side: 'right', top: 34, edge: 7,  opacity: 45, size: 24, floatSpeed: 5.0 },
  { label: 'Distribution',   side: 'right', top: 58, edge: 15, opacity: 36, size: 14, floatSpeed: 5.5 },
]

const icons = [FileText, VideoCamera, MagicWand, Megaphone]

function Slider({
  label, min, max, step = 1, value, onChange,
}: {
  label: string; min: number; max: number; step?: number; value: number; onChange: (v: number) => void
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-white/40 w-24 shrink-0">{label}</span>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 accent-[#E6EB2F] h-1"
      />
      <span className="text-[10px] text-[#E6EB2F] w-8 text-right">{value}</span>
    </div>
  )
}

export default function FloatingElementsEditor() {
  const [open, setOpen] = useState(false)
  const [configs, setConfigs] = useState<FloatConfig[]>(defaultConfigs)
  const [selected, setSelected] = useState(0)
  const [copied, setCopied] = useState(false)

  const update = (index: number, key: keyof FloatConfig, value: number | string) => {
    setConfigs(prev => prev.map((c, i) => i === index ? { ...c, [key]: value } : c))
  }

  const copyCode = () => {
    const lines = configs.map(c =>
      `  { label: '${c.label}', side: '${c.side}', top: ${c.top}, edge: ${c.edge}, opacity: ${c.opacity}, size: ${c.size}, floatSpeed: ${c.floatSpeed} },`
    ).join('\n')
    const code = `const floatConfigs = [\n${lines}\n]`
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const cfg = configs[selected]
  const Icon = icons[selected]

  return (
    <>
      {/* Live preview of all elements */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {configs.map((c, i) => {
          const El = icons[i]
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                [c.side]: `${c.edge}%`,
                top: `${c.top}%`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: c.floatSpeed, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            >
              <div
                onClick={() => { setSelected(i); setOpen(true) }}
                style={{
                  background: 'rgba(230,235,47,0.04)',
                  borderColor: open && selected === i ? '#E6EB2F' : 'rgba(230,235,47,0.1)',
                  opacity: c.opacity / 100,
                  cursor: 'pointer',
                  pointerEvents: 'all',
                  boxShadow: '0 0 18px rgba(230,235,47,0.12), 0 0 6px rgba(230,235,47,0.06)',
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] text-white font-light whitespace-nowrap"
              >
                <El size={c.size} style={{ color: '#E6EB2F' }} weight="light" />
                {c.label}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-20 right-6 z-[100] text-[10px] font-medium px-3 py-1.5 rounded-full border border-white/20 bg-[#121212] text-white/60 hover:text-white transition-colors"
      >
        {open ? 'Close Editor' : '⚙ Edit Floats'}
      </button>

      {/* Editor panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-6 top-24 z-[100] w-72 bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 shadow-2xl"
          >
            <p className="text-xs text-white/60 font-light mb-4 tracking-wide uppercase">Floating Elements Editor</p>

            {/* Element tabs */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {configs.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className="text-[10px] px-2.5 py-1 rounded-full border transition-all"
                  style={{
                    borderColor: selected === i ? '#E6EB2F' : 'rgba(255,255,255,0.1)',
                    color: selected === i ? '#E6EB2F' : 'rgba(255,255,255,0.4)',
                    background: selected === i ? 'rgba(230,235,47,0.08)' : 'transparent',
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Preview of selected */}
            <div className="mb-5 flex justify-center">
              <div
                style={{ background: 'rgba(230,235,47,0.04)', borderColor: 'rgba(230,235,47,0.2)', opacity: cfg.opacity / 100 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] text-white font-light"
              >
                <Icon size={cfg.size} style={{ color: '#E6EB2F' }} weight="light" />
                {cfg.label}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-3">
              <Slider label="Top (%)"      min={10} max={90} value={cfg.top}        onChange={v => update(selected, 'top', v)} />
              <Slider label="Edge (%)"     min={1}  max={30} value={cfg.edge}       onChange={v => update(selected, 'edge', v)} />
              <Slider label="Opacity"      min={5}  max={100} value={cfg.opacity}   onChange={v => update(selected, 'opacity', v)} />
              <Slider label="Icon size"    min={8}  max={24} value={cfg.size}       onChange={v => update(selected, 'size', v)} />
              <Slider label="Float speed"  min={2}  max={10} step={0.5} value={cfg.floatSpeed} onChange={v => update(selected, 'floatSpeed', v)} />
            </div>

            {/* Side toggle */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[10px] text-white/40 w-24">Side</span>
              <div className="flex gap-2">
                {(['left', 'right'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => update(selected, 'side', s)}
                    className="text-[10px] px-3 py-1 rounded-full border transition-all"
                    style={{
                      borderColor: cfg.side === s ? '#E6EB2F' : 'rgba(255,255,255,0.1)',
                      color: cfg.side === s ? '#E6EB2F' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Copy code button */}
            <button
              onClick={copyCode}
              className="mt-5 w-full py-2 rounded-xl text-xs font-medium transition-all"
              style={{ background: copied ? 'rgba(230,235,47,0.15)' : 'rgba(230,235,47,0.08)', color: '#E6EB2F', border: '1px solid rgba(230,235,47,0.2)' }}
            >
              {copied ? '✓ Copied to clipboard!' : 'Copy config as code'}
            </button>

            <p className="text-[9px] text-white/20 mt-2 text-center">Paste into HeroLuxury.tsx to save</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
