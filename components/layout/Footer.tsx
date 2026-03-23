const links = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#examples' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/[0.05]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start
          justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="border border-dashed border-[#e6eb2f]/40 rounded-md px-2.5 py-1">
                <span className="text-[#e6eb2f] font-bold tracking-[0.2em] text-sm">ZM</span>
              </div>
              <span className="text-white/50 text-xs font-medium">Ziscol Media</span>
            </div>
            <p className="text-[#8a8a8a] text-xs max-w-[200px] text-center sm:text-left leading-relaxed">
              Premium talking head video editing for YouTube creators who want to build authority.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center sm:justify-end gap-x-7 gap-y-3">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/45 text-sm hover:text-white/75 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row
          items-center justify-between gap-4">
          <p className="text-white/20 text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} Ziscol Media. All Rights Reserved.
          </p>
          <a
            href="https://x.com/ziscolmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-xs hover:text-[#e6eb2f]/70 transition-colors duration-200 order-1 sm:order-2"
          >
            @ziscolmedia on X
          </a>
        </div>

      </div>
    </footer>
  )
}
