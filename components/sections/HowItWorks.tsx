'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    n: 1,
    title: 'Market research',
    desc: 'We analyze the market, audience behavior, and content trends to make data-driven decisions about what topics will resonate with your ICP.',
  },
  {
    n: 2,
    title: 'Video ideation & content strategy',
    desc: 'We develop a content calendar and topic strategy aligned with your ICP and business goals. Every video has a clear purpose.',
  },
  {
    n: 3,
    title: 'Scripting',
    desc: 'Our writers craft scripts built for retention and conversion, structured to drive real watch time and inbound leads.',
  },
  {
    n: 4,
    title: 'Video Recording',
    desc: 'Our clients record for just 2–4 hours per month. We help you nail this through our SOPs, teleprompter tools, and step-by-step guidance.',
    tag: 'You only Record the Videos',
  },
  {
    n: 5,
    title: 'Post-production',
    desc: 'Full editing, motion graphics, thumbnails, and captions. Every video polished to a professional standard before it goes live.',
  },
  {
    n: 6,
    title: 'Distribution',
    desc: 'We promote each video on your other channels, leveraging existing content to nurture your pipeline and compound reach over time.',
  },
]

/* ── SVG Illustrations for each step ── */

function ResearchIllustration({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background glow */}
      <motion.circle cx="200" cy="150" r="100" fill="#E6EB2F" fillOpacity={active ? 0.06 : 0.02}
        animate={{ r: active ? 110 : 90 }} transition={{ duration: 0.8 }} />
      {/* Browser window */}
      <motion.rect x="100" y="60" width="200" height="150" rx="12" fill="white" fillOpacity="0.05"
        stroke="white" strokeOpacity="0.1" strokeWidth="1.5"
        animate={{ y: active ? 55 : 65 }} transition={{ duration: 0.6 }} />
      <rect x="100" y="60" width="200" height="24" rx="12" fill="white" fillOpacity="0.08" />
      <circle cx="116" cy="72" r="3.5" fill="#E6EB2F" fillOpacity="0.5" />
      <circle cx="128" cy="72" r="3.5" fill="white" fillOpacity="0.2" />
      <circle cx="140" cy="72" r="3.5" fill="white" fillOpacity="0.2" />
      {/* Data lines */}
      <motion.rect x="120" y="96" width="120" height="6" rx="3" fill="#E6EB2F" fillOpacity={active ? 0.3 : 0.1}
        animate={{ width: active ? 140 : 100 }} transition={{ duration: 0.5 }} />
      <rect x="120" y="112" width="80" height="6" rx="3" fill="white" fillOpacity="0.08" />
      <rect x="120" y="128" width="100" height="6" rx="3" fill="white" fillOpacity="0.06" />
      <motion.rect x="120" y="144" width="60" height="6" rx="3" fill="#E6EB2F" fillOpacity={active ? 0.25 : 0.08}
        animate={{ width: active ? 90 : 60 }} transition={{ duration: 0.6, delay: 0.1 }} />
      <rect x="120" y="160" width="110" height="6" rx="3" fill="white" fillOpacity="0.05" />
      {/* Magnifying glass */}
      <motion.g animate={{ x: active ? 0 : 10, y: active ? 0 : 8, scale: active ? 1 : 0.9 }}
        transition={{ duration: 0.6 }}>
        <circle cx="270" cy="155" r="35" stroke="#E6EB2F" strokeOpacity="0.6" strokeWidth="3" fill="white" fillOpacity="0.03" />
        <line x1="295" y1="180" x2="320" y2="210" stroke="#E6EB2F" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" />
        {/* Lens glare */}
        <path d="M255 140 Q260 135 265 140" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" fill="none" />
      </motion.g>
      {/* Floating data cards */}
      <motion.g animate={{ y: active ? 0 : 10, opacity: active ? 1 : 0.4 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <rect x="60" y="140" width="50" height="60" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" />
        <rect x="70" y="155" width="30" height="3" rx="1.5" fill="#E6EB2F" fillOpacity="0.3" />
        <rect x="70" y="163" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.1" />
        <rect x="70" y="171" width="25" height="3" rx="1.5" fill="white" fillOpacity="0.07" />
      </motion.g>
    </svg>
  )
}

function IdeationIllustration({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <motion.circle cx="200" cy="150" r="90" fill="#E6EB2F" fillOpacity={active ? 0.05 : 0.02}
        animate={{ r: active ? 100 : 80 }} transition={{ duration: 0.8 }} />
      {/* Central card */}
      <motion.rect x="120" y="50" width="180" height="180" rx="16" fill="white" fillOpacity="0.05"
        stroke="white" strokeOpacity="0.1" strokeWidth="1.5"
        animate={{ y: active ? 45 : 55 }} transition={{ duration: 0.6 }} />
      {/* Video camera icon */}
      <motion.g animate={{ scale: active ? 1 : 0.85 }} transition={{ duration: 0.5 }}
        style={{ transformOrigin: '210px 130px' }}>
        <rect x="170" y="105" width="65" height="50" rx="10" fill="#E6EB2F" fillOpacity="0.15"
          stroke="#E6EB2F" strokeOpacity="0.3" strokeWidth="1.5" />
        <polygon points="235,115 260,105 260,155 235,145" fill="#E6EB2F" fillOpacity="0.2"
          stroke="#E6EB2F" strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="200" cy="130" r="10" fill="#E6EB2F" fillOpacity="0.3" />
        <polygon points="197,125 207,130 197,135" fill="#121212" fillOpacity="0.6" />
      </motion.g>
      {/* Waveform */}
      <motion.g animate={{ opacity: active ? 1 : 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}>
        {[0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152].map((x, i) => (
          <motion.rect key={i} x={140 + x} y={195} rx="1.5"
            width="4" fill="#E6EB2F" fillOpacity={0.15 + (i % 3) * 0.08}
            animate={{ height: active ? 8 + Math.sin(i * 0.8) * 15 : 4, y: active ? 195 - Math.sin(i * 0.8) * 7 : 195 }}
            transition={{ duration: 0.4, delay: i * 0.02 }} />
        ))}
      </motion.g>
      {/* Floating mic icon */}
      <motion.g animate={{ y: active ? 0 : 12, opacity: active ? 1 : 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}>
        <circle cx="320" cy="80" r="22" fill="#E6EB2F" fillOpacity="0.1" stroke="#E6EB2F" strokeOpacity="0.2" />
        <rect x="314" y="70" width="12" height="16" rx="6" fill="#E6EB2F" fillOpacity="0.3" />
        <path d="M312 82 Q320 92 328 82" stroke="#E6EB2F" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
        <line x1="320" y1="90" x2="320" y2="95" stroke="#E6EB2F" strokeOpacity="0.3" strokeWidth="1.5" />
      </motion.g>
      {/* Play button floating */}
      <motion.g animate={{ y: active ? 0 : 8, opacity: active ? 1 : 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}>
        <circle cx="90" cy="120" r="18" fill="#E6EB2F" fillOpacity="0.12" stroke="#E6EB2F" strokeOpacity="0.2" />
        <polygon points="85,112 100,120 85,128" fill="#E6EB2F" fillOpacity="0.4" />
      </motion.g>
    </svg>
  )
}

function ScriptingIllustration({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Radial glow rings */}
      <motion.circle cx="210" cy="150" r="80" stroke="#E6EB2F" strokeOpacity={active ? 0.08 : 0.03} fill="none" strokeWidth="1"
        animate={{ r: active ? 90 : 75 }} transition={{ duration: 1 }} />
      <motion.circle cx="210" cy="150" r="110" stroke="#E6EB2F" strokeOpacity={active ? 0.04 : 0.01} fill="none" strokeWidth="1"
        animate={{ r: active ? 120 : 105 }} transition={{ duration: 1.2 }} />
      {/* Main document */}
      <motion.g animate={{ y: active ? 0 : 8, scale: active ? 1 : 0.92 }}
        transition={{ duration: 0.6 }} style={{ transformOrigin: '210px 145px' }}>
        <rect x="150" y="55" width="120" height="160" rx="10" fill="white" fillOpacity="0.06"
          stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
        {/* Document lines */}
        <rect x="168" y="80" width="85" height="5" rx="2.5" fill="#E6EB2F" fillOpacity={active ? 0.3 : 0.1} />
        <rect x="168" y="94" width="65" height="4" rx="2" fill="white" fillOpacity="0.1" />
        <rect x="168" y="106" width="75" height="4" rx="2" fill="white" fillOpacity="0.07" />
        <rect x="168" y="118" width="50" height="4" rx="2" fill="white" fillOpacity="0.06" />
        <rect x="168" y="134" width="85" height="5" rx="2.5" fill="#E6EB2F" fillOpacity={active ? 0.2 : 0.08} />
        <rect x="168" y="148" width="60" height="4" rx="2" fill="white" fillOpacity="0.08" />
        <rect x="168" y="160" width="70" height="4" rx="2" fill="white" fillOpacity="0.06" />
        <rect x="168" y="172" width="45" height="4" rx="2" fill="white" fillOpacity="0.05" />
        <rect x="168" y="188" width="55" height="4" rx="2" fill="white" fillOpacity="0.05" />
        {/* Fold corner */}
        <path d="M250 55 L270 55 L270 75 Z" fill="white" fillOpacity="0.03" />
      </motion.g>
      {/* Left floating doc */}
      <motion.g animate={{ x: active ? 0 : 10, y: active ? 0 : 15, opacity: active ? 0.8 : 0.2 }}
        transition={{ duration: 0.5, delay: 0.15 }}>
        <rect x="70" y="100" width="60" height="80" rx="8" fill="white" fillOpacity="0.04"
          stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <rect x="82" y="118" width="36" height="3" rx="1.5" fill="white" fillOpacity="0.1" />
        <rect x="82" y="127" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.06" />
        <rect x="82" y="136" width="32" height="3" rx="1.5" fill="#E6EB2F" fillOpacity="0.15" />
        <rect x="82" y="145" width="24" height="3" rx="1.5" fill="white" fillOpacity="0.05" />
        {/* Pink corner fold */}
        <path d="M70 100 L70 116 L86 100 Z" fill="#E6EB2F" fillOpacity="0.1" />
      </motion.g>
      {/* Right floating doc */}
      <motion.g animate={{ x: active ? 0 : -10, y: active ? 0 : 12, opacity: active ? 0.8 : 0.2 }}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <rect x="295" y="110" width="55" height="70" rx="8" fill="white" fillOpacity="0.04"
          stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <rect x="307" y="126" width="32" height="3" rx="1.5" fill="white" fillOpacity="0.08" />
        <rect x="307" y="135" width="24" height="3" rx="1.5" fill="#E6EB2F" fillOpacity="0.15" />
        <rect x="307" y="144" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.06" />
      </motion.g>
    </svg>
  )
}

function RecordingIllustration({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central glow */}
      <motion.circle cx="210" cy="145" r="70" fill="white" fillOpacity={active ? 0.04 : 0.01}
        animate={{ r: active ? 80 : 60 }} transition={{ duration: 0.8 }} />
      {/* Tech frame bg */}
      <motion.rect x="110" y="45" width="200" height="195" rx="14" fill="white" fillOpacity="0.04"
        stroke="white" strokeOpacity="0.08" strokeWidth="1.5"
        animate={{ y: active ? 40 : 50 }} transition={{ duration: 0.6 }} />
      {/* Inner circular lens */}
      <motion.circle cx="210" cy="130" r="55" stroke="white" strokeOpacity="0.08" fill="white" fillOpacity="0.02"
        animate={{ r: active ? 58 : 50 }} transition={{ duration: 0.7 }} />
      <motion.circle cx="210" cy="130" r="40" stroke="#E6EB2F" strokeOpacity={active ? 0.2 : 0.06} fill="white" fillOpacity="0.02"
        animate={{ r: active ? 42 : 36 }} transition={{ duration: 0.6 }} />
      {/* Camera body */}
      <motion.g animate={{ scale: active ? 1 : 0.85 }} transition={{ duration: 0.5 }}
        style={{ transformOrigin: '210px 130px' }}>
        <rect x="180" y="115" width="60" height="35" rx="6" fill="#E6EB2F" fillOpacity="0.2"
          stroke="#E6EB2F" strokeOpacity="0.3" strokeWidth="1.5" />
        <rect x="198" y="110" width="24" height="8" rx="4" fill="#E6EB2F" fillOpacity="0.15" />
        <circle cx="210" cy="132" r="10" fill="#E6EB2F" fillOpacity="0.25"
          stroke="#E6EB2F" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="210" cy="132" r="4" fill="#121212" fillOpacity="0.5" />
      </motion.g>
      {/* Dots on frame */}
      <motion.circle cx="140" cy="130" r="3" fill="white" fillOpacity={active ? 0.2 : 0.05}
        animate={{ fillOpacity: active ? 0.2 : 0.05 }} />
      <motion.circle cx="280" cy="130" r="3" fill="white" fillOpacity={active ? 0.2 : 0.05} />
      {/* Megaphone / direction */}
      <motion.g animate={{ y: active ? 0 : 15, opacity: active ? 1 : 0.2, rotate: active ? 0 : 10 }}
        transition={{ duration: 0.6, delay: 0.2 }} style={{ transformOrigin: '130px 230px' }}>
        <rect x="100" y="210" width="8" height="35" rx="2" fill="#E6EB2F" fillOpacity="0.2"
          transform="rotate(-20 104 228)" />
        <path d="M110 210 L145 195 L145 225 Z" fill="#E6EB2F" fillOpacity="0.15"
          stroke="#E6EB2F" strokeOpacity="0.25" strokeWidth="1" />
      </motion.g>
      {/* Boom mic */}
      <motion.g animate={{ x: active ? 0 : -10, opacity: active ? 1 : 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <line x1="290" y1="40" x2="320" y2="180" stroke="white" strokeOpacity="0.1" strokeWidth="2" />
        <rect x="312" y="175" width="16" height="30" rx="8" fill="white" fillOpacity="0.06"
          stroke="white" strokeOpacity="0.1" />
      </motion.g>
      {/* Guide lines */}
      <motion.line x1="110" y1="75" x2="310" y2="75" stroke="white" strokeOpacity="0.04"
        animate={{ strokeOpacity: active ? 0.06 : 0.02 }} />
      <motion.line x1="110" y1="205" x2="310" y2="205" stroke="white" strokeOpacity="0.04"
        animate={{ strokeOpacity: active ? 0.06 : 0.02 }} />
    </svg>
  )
}

function PostProductionIllustration({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Editor window */}
      <motion.rect x="90" y="45" width="230" height="165" rx="12" fill="white" fillOpacity="0.05"
        stroke="white" strokeOpacity="0.1" strokeWidth="1.5"
        animate={{ y: active ? 40 : 50 }} transition={{ duration: 0.6 }} />
      {/* Title bar */}
      <rect x="90" y="45" width="230" height="22" rx="12" fill="white" fillOpacity="0.06" />
      <circle cx="106" cy="56" r="3" fill="#E6EB2F" fillOpacity="0.4" />
      <circle cx="117" cy="56" r="3" fill="white" fillOpacity="0.15" />
      <circle cx="128" cy="56" r="3" fill="white" fillOpacity="0.15" />
      {/* Preview area */}
      <rect x="102" y="76" width="145" height="85" rx="6" fill="white" fillOpacity="0.03" />
      {/* Play icon in preview */}
      <motion.g animate={{ scale: active ? 1 : 0.8, opacity: active ? 1 : 0.3 }}
        transition={{ duration: 0.5 }} style={{ transformOrigin: '175px 118px' }}>
        <circle cx="175" cy="118" r="18" fill="#E6EB2F" fillOpacity="0.15" stroke="#E6EB2F" strokeOpacity="0.3" />
        <polygon points="170,110 185,118 170,126" fill="#E6EB2F" fillOpacity="0.5" />
      </motion.g>
      {/* Timeline bar */}
      <motion.g animate={{ opacity: active ? 1 : 0.3 }} transition={{ duration: 0.5, delay: 0.15 }}>
        <rect x="102" y="170" width="206" height="8" rx="4" fill="white" fillOpacity="0.05" />
        <motion.rect x="102" y="170" rx="4" height="8" fill="#E6EB2F" fillOpacity="0.2"
          animate={{ width: active ? 130 : 40 }} transition={{ duration: 1.2, delay: 0.2 }} />
        <motion.circle r="5" fill="#E6EB2F" fillOpacity="0.5" cy="174"
          animate={{ cx: active ? 232 : 142 }} transition={{ duration: 1.2, delay: 0.2 }} />
      </motion.g>
      {/* Side panel */}
      <rect x="256" y="76" width="52" height="85" rx="4" fill="white" fillOpacity="0.03" />
      <rect x="264" y="86" width="36" height="20" rx="3" fill="white" fillOpacity="0.04" />
      <rect x="264" y="112" width="36" height="20" rx="3" fill="#E6EB2F" fillOpacity="0.06" />
      <rect x="264" y="138" width="36" height="15" rx="3" fill="white" fillOpacity="0.03" />
      {/* Playback controls */}
      <motion.g animate={{ opacity: active ? 1 : 0.2 }} transition={{ duration: 0.4, delay: 0.3 }}>
        <polygon points="180,192 195,200 180,208" fill="white" fillOpacity="0.15" />
        <rect x="155" y="196" width="6" height="8" rx="1" fill="white" fillOpacity="0.1" />
        <rect x="162" y="196" width="6" height="8" rx="1" fill="white" fillOpacity="0.1" />
        <polygon points="210,192 225,200 210,208" fill="white" fillOpacity="0.1" />
        <polygon points="215,192 230,200 215,208" fill="white" fillOpacity="0.1" />
      </motion.g>
      {/* Scissors */}
      <motion.g animate={{ y: active ? 0 : 20, opacity: active ? 1 : 0, rotate: active ? -15 : 0 }}
        transition={{ duration: 0.6, delay: 0.25 }} style={{ transformOrigin: '100px 240px' }}>
        <line x1="80" y1="225" x2="110" y2="250" stroke="#E6EB2F" strokeOpacity="0.3" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="80" y1="250" x2="110" y2="225" stroke="#E6EB2F" strokeOpacity="0.3" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="80" cy="225" r="6" stroke="#E6EB2F" strokeOpacity="0.3" fill="none" strokeWidth="1.5" />
        <circle cx="80" cy="250" r="6" stroke="#E6EB2F" strokeOpacity="0.3" fill="none" strokeWidth="1.5" />
      </motion.g>
      {/* Film reel */}
      <motion.g animate={{ x: active ? 0 : -15, opacity: active ? 1 : 0.1, rotate: active ? 0 : -30 }}
        transition={{ duration: 0.7, delay: 0.3 }} style={{ transformOrigin: '330px 240px' }}>
        <circle cx="330" cy="240" r="28" stroke="#E6EB2F" strokeOpacity="0.2" fill="white" fillOpacity="0.03" strokeWidth="2" />
        <circle cx="330" cy="240" r="8" fill="#E6EB2F" fillOpacity="0.15" />
        <circle cx="330" cy="218" r="4" fill="white" fillOpacity="0.06" />
        <circle cx="330" cy="262" r="4" fill="white" fillOpacity="0.06" />
        <circle cx="308" cy="240" r="4" fill="white" fillOpacity="0.06" />
        <circle cx="352" cy="240" r="4" fill="white" fillOpacity="0.06" />
      </motion.g>
    </svg>
  )
}

function DistributionIllustration({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <motion.circle cx="200" cy="150" r="90" fill="#E6EB2F" fillOpacity={active ? 0.04 : 0.01}
        animate={{ r: active ? 100 : 80 }} transition={{ duration: 0.8 }} />
      {/* Central camera/video icon */}
      <motion.g animate={{ scale: active ? 1 : 0.85, y: active ? 0 : 10 }}
        transition={{ duration: 0.6 }} style={{ transformOrigin: '180px 160px' }}>
        <rect x="140" y="125" width="80" height="65" rx="14" fill="#E6EB2F" fillOpacity="0.12"
          stroke="#E6EB2F" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="180" cy="155" r="14" fill="#E6EB2F" fillOpacity="0.2" />
        <rect x="170" y="130" width="20" height="8" rx="4" fill="#E6EB2F" fillOpacity="0.15" />
      </motion.g>
      {/* Top-right play card */}
      <motion.g animate={{ x: active ? 0 : -15, y: active ? 0 : 15, opacity: active ? 1 : 0.15 }}
        transition={{ duration: 0.5, delay: 0.1 }}>
        <rect x="260" y="50" width="80" height="55" rx="10" fill="white" fillOpacity="0.05"
          stroke="white" strokeOpacity="0.1" strokeWidth="1" />
        <polygon points="290,70 308,78 290,86" fill="#E6EB2F" fillOpacity="0.35" />
      </motion.g>
      {/* Mid-right content card */}
      <motion.g animate={{ x: active ? 0 : -12, y: active ? 0 : 10, opacity: active ? 1 : 0.15 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <rect x="270" y="130" width="90" height="65" rx="10" fill="white" fillOpacity="0.04"
          stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <rect x="282" y="145" width="50" height="4" rx="2" fill="white" fillOpacity="0.1" />
        <rect x="282" y="155" width="35" height="4" rx="2" fill="white" fillOpacity="0.06" />
        <rect x="282" y="165" width="42" height="4" rx="2" fill="#E6EB2F" fillOpacity="0.12" />
        <polygon points="340,148 348,152 340,156" fill="#E6EB2F" fillOpacity="0.3" />
      </motion.g>
      {/* Bottom-right small card */}
      <motion.g animate={{ x: active ? 0 : -10, y: active ? 0 : 8, opacity: active ? 1 : 0.15 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <rect x="240" y="210" width="65" height="45" rx="8" fill="white" fillOpacity="0.04"
          stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <polygon points="265,225 278,232 265,239" fill="#E6EB2F" fillOpacity="0.3" />
      </motion.g>
      {/* Connection lines from center */}
      <motion.g animate={{ opacity: active ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
        <line x1="220" y1="140" x2="260" y2="78" stroke="#E6EB2F" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="220" y1="155" x2="270" y2="155" stroke="#E6EB2F" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="215" y1="185" x2="245" y2="225" stroke="#E6EB2F" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
        {/* Dots at ends */}
        <circle cx="260" cy="78" r="3" fill="#E6EB2F" fillOpacity="0.3" />
        <circle cx="270" cy="155" r="3" fill="#E6EB2F" fillOpacity="0.3" />
        <circle cx="245" cy="225" r="3" fill="#E6EB2F" fillOpacity="0.3" />
      </motion.g>
    </svg>
  )
}

const illustrations = [
  ResearchIllustration,
  IdeationIllustration,
  ScriptingIllustration,
  RecordingIllustration,
  PostProductionIllustration,
  DistributionIllustration,
]

const SCROLL_HEIGHT = `${steps.length * 60}vh`

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const prevStepRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // ── Text size controls ──
  const [showControls, setShowControls] = useState(false)
  const [sizes, setSizes] = useState({ heading: 62, stepTitle: 23, stepDesc: 14, subheading: 16, circleSize: 46, circleNum: 21 })
  const updateSize = (key: keyof typeof sizes, val: number) => setSizes(s => ({ ...s, [key]: val }))

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length))
    const next = Math.max(0, idx)
    if (next !== prevStepRef.current) {
      setDirection(next > prevStepRef.current ? 1 : -1)
      setActiveStep(next)
      prevStepRef.current = next
    }
  })

  return (
    <section id="how-it-works">
      {/* ─── DESKTOP: sticky tall-container scroll ─── */}
      <div ref={containerRef} style={{ height: SCROLL_HEIGHT }} className="hidden lg:block">
        <div className="sticky top-0 h-screen bg-[#121212] flex flex-col justify-center
          px-6 xl:px-8 py-10 overflow-hidden">

          {/* ── Cross flash on last step ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: activeStep === steps.length - 1 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[2px] rotate-45 bg-gradient-to-r from-transparent via-[#E6EB2F]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[2px] -rotate-45 bg-gradient-to-r from-transparent via-[#E6EB2F]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#E6EB2F]/30 rounded-full blur-md" />
          </motion.div>

          <div className="max-w-[1100px] mx-auto w-full relative z-10">

            <div className="text-center mb-7">
              <SectionLabel dark>Our Process</SectionLabel>
              <h2 className="text-white font-light mt-4 mb-2 tracking-tight"
                style={{ fontSize: `${sizes.heading}px` }}>
                How We Work
              </h2>
              <p className="text-[#8a8a8a] font-light max-w-md mx-auto"
                style={{ fontSize: `${sizes.subheading}px` }}>
                Every step is designed to move creators from idea to consistent inbound growth.
              </p>
            </div>

            <div className="bg-[#1e1e1e] rounded-[28px] overflow-hidden border border-white/[0.06]">
              <div className="grid grid-cols-2">

                {/* Left: steps */}
                <div className="py-9 px-10 xl:px-12 flex flex-col gap-6">
                  {steps.map((step, i) => {
                    const active = activeStep === i
                    return (
                      <div key={i} className="relative flex gap-4">
                        {i < steps.length - 1 && (
                          <div className="absolute w-[2px] bg-white/10" style={{ left: sizes.circleSize / 2, top: sizes.circleSize + 4, height: 'calc(100% + 24px)' }} />
                        )}

                        {/* Circle — CSS transition, no JS animation */}
                        <div
                          className="rounded-full border-2 flex items-center justify-center font-medium shrink-0 z-10"
                          style={{
                            width: sizes.circleSize,
                            height: sizes.circleSize,
                            fontSize: sizes.circleNum,
                            backgroundColor: active ? '#e6eb2f' : '#1e1e1e',
                            borderColor: active ? '#e6eb2f' : 'rgba(255,255,255,0.15)',
                            color: active ? '#000' : 'rgba(255,255,255,0.3)',
                            transition: 'background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease',
                          }}
                        >
                          {step.n}
                        </div>

                        <div className="flex-1 pb-1 min-w-0">
                          {/* Title — CSS transition */}
                          <h3
                            className="font-light leading-snug"
                            style={{
                              fontSize: `${sizes.stepTitle}px`,
                              color: active ? '#fafaf8' : 'rgba(255,255,255,0.35)',
                              transition: 'color 0.35s ease',
                            }}
                          >
                            {step.title}
                          </h3>

                          {/* Tag — CSS grid trick for smooth height */}
                          {step.tag && (
                            <div
                              className="overflow-hidden"
                              style={{
                                display: 'grid',
                                gridTemplateRows: active ? '1fr' : '0fr',
                                opacity: active ? 1 : 0,
                                transition: 'grid-template-rows 0.4s ease, opacity 0.35s ease',
                              }}
                            >
                              <div className="overflow-hidden">
                                <span className="text-[#e6eb2f] text-xs italic font-light block mt-1">
                                  ↙ {step.tag}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Description — CSS grid trick for smooth height */}
                          <div
                            className="overflow-hidden"
                            style={{
                              display: 'grid',
                              gridTemplateRows: active ? '1fr' : '0fr',
                              opacity: active ? 1 : 0,
                              transition: 'grid-template-rows 0.45s ease, opacity 0.35s ease',
                            }}
                          >
                            <div className="overflow-hidden">
                              <p className="text-[#8a8a8a] font-light leading-relaxed mt-1.5"
                                style={{ fontSize: `${sizes.stepDesc}px` }}>
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Right: SVG illustrations */}
                <div className="flex items-center py-9 pr-9">
                  <div className="w-full rounded-2xl overflow-hidden aspect-[4/3] relative bg-white/[0.02] border border-white/[0.06]">
                    {illustrations.map((Illustration, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 flex items-center justify-center p-6"
                        animate={{
                          opacity: activeStep === i ? 1 : 0,
                          y: activeStep === i ? 0 : activeStep > i ? direction * -40 : direction * 40,
                        }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <Illustration active={activeStep === i} />
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-5">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: activeStep === i ? 22 : 6,
                    backgroundColor: activeStep === i ? '#e6eb2f' : 'rgba(255,255,255,0.18)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full"
                />
              ))}
            </div>

          </div>

          {/* ── Text Size Controls (dev tool) ── */}
          <div className="absolute bottom-4 right-4 z-50">
            <button
              onClick={() => setShowControls(v => !v)}
              className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-colors"
              style={{ background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(8px)' }}
            >
              ✏ Text Sizes
            </button>

            {showControls && (
              <div
                className="absolute bottom-10 right-0 w-64 rounded-2xl border border-white/10 p-4 flex flex-col gap-3"
                style={{ background: 'rgba(18,18,18,0.95)', backdropFilter: 'blur(16px)' }}
              >
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Text Sizes</p>

                {([
                  { label: 'Heading', key: 'heading', min: 24, max: 72 },
                  { label: 'Subheading', key: 'subheading', min: 10, max: 20 },
                  { label: 'Step Title', key: 'stepTitle', min: 10, max: 24 },
                  { label: 'Step Desc', key: 'stepDesc', min: 10, max: 20 },
                  { label: 'Circle Size', key: 'circleSize', min: 24, max: 60 },
                  { label: 'Circle Number', key: 'circleNum', min: 8, max: 24 },
                ] as const).map(({ label, key, min, max }) => (
                  <div key={key}>
                    <div className="flex justify-between text-xs text-white/50 mb-1">
                      <span>{label}</span>
                      <span className="text-[#E6EB2F]">{sizes[key]}px</span>
                    </div>
                    <input
                      type="range" min={min} max={max} value={sizes[key]}
                      onChange={e => updateSize(key, Number(e.target.value))}
                      className="w-full accent-[#E6EB2F]"
                    />
                  </div>
                ))}

                <button
                  onClick={() => navigator.clipboard.writeText(
                    `heading: ${sizes.heading}, subheading: ${sizes.subheading}, stepTitle: ${sizes.stepTitle}, stepDesc: ${sizes.stepDesc}, circleSize: ${sizes.circleSize}, circleNum: ${sizes.circleNum}`
                  )}
                  className="mt-1 text-xs text-center py-1.5 rounded-lg border border-white/10 text-white/40 hover:text-white transition-colors"
                >
                  Copy Config
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ─── MOBILE: static accordion-style list ─── */}
      <div className="lg:hidden bg-[#121212] py-16 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <SectionLabel dark>Our Process</SectionLabel>
            <h2 className="text-white font-light mt-4 mb-2 text-2xl sm:text-3xl tracking-tight">How We Work</h2>
            <p className="text-[#8a8a8a] text-sm font-light">
              Every step is designed to move viewers from discovery to trust to inbound leads.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-white/10" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => {
                const Illustration = illustrations[i]
                return (
                  <div key={i} className="relative flex flex-col gap-4 pb-8 last:pb-0">
                    <div className="flex gap-5">
                      <div className="w-9 h-9 rounded-full bg-[#e6eb2f] border-2 border-[#e6eb2f]
                        flex items-center justify-center text-black text-sm font-medium shrink-0 z-10
                        shadow-[0_0_0_4px_rgba(230,235,47,0.15)]">
                        {step.n}
                      </div>

                      <div className="flex-1 pt-1.5 min-w-0">
                        <h3 className="font-light text-white text-base leading-snug mb-1.5">{step.title}</h3>
                        {step.tag && (
                          <span className="text-[#e6eb2f] text-xs italic font-light block mb-1">
                            ↙ {step.tag}
                          </span>
                        )}
                        <p className="text-[#8a8a8a] text-sm font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    {/* Mobile illustration */}
                    <div className="ml-14 w-full max-w-[280px] aspect-[4/3] rounded-xl bg-white/[0.02] border border-white/[0.06] p-3">
                      <Illustration active={true} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
