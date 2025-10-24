# Graphite - Personal Link Page

A modern, mobile-friendly personal link page similar to beacons.ai, built with Next.js and optimized for Vercel deployment.

## Features

- 🎨 Beautiful gradient design with glassmorphism effects
- 📱 Fully responsive and mobile-optimized
- ⚡ Fast loading with Next.js 14
- 🎭 Smooth animations and hover effects
- 🔗 Social media integration (YouTube, Instagram, TikTok)
- 🌟 Modern UI with Tailwind CSS

## Social Links

- **YouTube**: [@sarahliyt](https://youtube.com/@sarahliyt)
- **Instagram**: [@sarahli.mp3](https://instagram.com/sarahli.mp3)
- **TikTok**: [@sarahli.mp3](https://tiktok.com/@sarahli.mp3)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/graphite)

## Customization

### Update Social Links

Edit `app/page.tsx` and modify the `links` array:

```typescript
const links: LinkItem[] = [
  {
    id: 'youtube',
    title: 'YouTube',
    url: 'https://youtube.com/@yourusername',
    icon: <Youtube size={24} />,
    color: 'from-red-500 to-red-600',
    description: 'Subscribe for amazing content!'
  },
  // Add more links...
]
```

### Update Profile Information

Modify the header section in `app/page.tsx`:

```typescript
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
  Your Name
</h1>
<p className="text-xl text-white/90 mb-2">
  Your Title
</p>
```

### Change Colors and Styling

Update the gradient backgrounds and colors in:
- `app/globals.css` - Main background gradient
- `app/page.tsx` - Component-specific colors
- `tailwind.config.js` - Custom color palette

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## License

MIT License - feel free to use this template for your own personal link page!