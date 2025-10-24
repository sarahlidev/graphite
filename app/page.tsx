'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Youtube, 
  Instagram, 
  Music, 
  Mail,
  Share2,
  MapPin,
  CheckCircle
} from 'lucide-react'

interface LinkItem {
  id: string
  title: string
  url: string
  icon?: React.ReactNode
  description?: string
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const links: LinkItem[] = [
    {
      id: 'youtube',
      title: 'YouTube',
      url: 'https://youtube.com/@sarahliyt',
      description: 'Subscribe for amazing content!'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      url: 'https://instagram.com/sarahli.mp3',
      description: 'Follow for daily updates'
    },
    {
      id: 'tiktok',
      title: 'TikTok',
      url: 'https://tiktok.com/@sarahli.mp3',
      description: 'Check out my latest videos'
    }
  ]

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Share button */}
      <div className="absolute top-4 right-4">
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Share2 size={20} />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-black">
              <Image
                src="/images/profile.JPG"
                alt="Sarah Li"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                onLoad={() => console.log('Image loaded successfully')}
                onError={(e) => {
                  console.log('Image failed to load:', e);
                  // Fallback to initials if image not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-white border-2 border-gray-300 flex items-center justify-center"><span class="text-2xl font-bold text-gray-800">SL</span></div>';
                  }
                }}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-black">sarah li</h1>
            <CheckCircle size={16} className="text-blue-500" />
          </div>
          
          <div className="flex items-center justify-center gap-1 text-gray-600 text-sm mb-6">
            <MapPin size={14} />
            <span>Vancouver</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <button 
            onClick={() => window.open('mailto:hello@sarahli.ca', '_blank')}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <Mail size={24} />
          </button>
          <button 
            onClick={() => window.open('https://x.com/sarahli_mp3', '_blank')}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
          <button 
            onClick={() => window.open('https://tiktok.com/@sarahli.mp3', '_blank')}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <Music size={24} />
          </button>
          <button 
            onClick={() => window.open('https://instagram.com/sarahli.mp3', '_blank')}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <Instagram size={24} />
          </button>
          <button 
            onClick={() => window.open('https://youtube.com/@sarahliyt', '_blank')}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <Youtube size={24} />
          </button>
        </div>

        {/* Link Buttons */}
        <div className="space-y-3">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.url)}
              className="w-full p-4 bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="font-semibold text-black text-lg">
                {link.title}
              </div>
              {link.description && (
                <div className="text-gray-600 text-sm mt-1">
                  {link.description}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
