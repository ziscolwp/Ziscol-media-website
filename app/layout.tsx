import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Ziscol Media — YouTube Video Agency for B2B Founders',
  description:
    'We create YouTube videos that grow your MRR while positioning you as the #1 authority in your market.',
  openGraph: {
    title: 'Ziscol Media — YouTube Video Agency for B2B Founders',
    description:
      'We create YouTube videos that grow your MRR while positioning you as the #1 authority in your market.',
    url: 'https://ziscolmedia.com',
    siteName: 'Ziscol Media',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-gradient-to-br from-zinc-950 via-neutral-950 to-black font-light">
        {/* figma capture */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
        {children}
      </body>
    </html>
  )
}
