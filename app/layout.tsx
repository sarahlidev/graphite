import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sarah Li - Personal Links',
  description: 'Connect with Sarah Li across all platforms',
  keywords: 'Sarah Li, social media, links, YouTube, Instagram, TikTok',
  authors: [{ name: 'Sarah Li' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
